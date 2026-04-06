import type { VercelRequest, VercelResponse } from "@vercel/node";
import dotenv from "dotenv";
dotenv.config();
import nodemailer from "nodemailer";
import { IncomingForm } from "formidable";
import type { Fields, Files } from "formidable";

// Disable body parsing to handle FormData
export const config = {
  api: {
    bodyParser: false,
  },
};

// Helper function to parse FormData
const parseFormData = (
  req: VercelRequest
): Promise<{ fields: Fields; files: Files }> => {
  return new Promise((resolve, reject) => {
    const form = new IncomingForm();
    form.parse(req, (err, fields, files) => {
      if (err) return reject(err);
      resolve({ fields, files });
    });
  });
};

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Only POST allowed" });
  }

  let name = "";
  let email = "";
  let subject = "";
  let message = "";

  // Check Content-Type to determine how to parse the request
  const contentType = req.headers["content-type"] || "";

  if (contentType.includes("application/json")) {
    // Handle JSON data
    let body;
    try {
      // For JSON requests, we need to parse the body manually
      body = await new Promise((resolve) => {
        let data = "";
        req.on("data", (chunk) => {
          data += chunk;
        });
        req.on("end", () => {
          resolve(JSON.parse(data));
        });
      });

      name = body.name;
      email = body.email;
      subject = body.subject;
      message = body.message;
    } catch (error) {
      console.error("Error parsing JSON:", error);
      return res.status(400).json({ message: "Invalid JSON data" });
    }
  } else if (contentType.includes("multipart/form-data")) {
    // Handle FormData
    try {
      const { fields } = await parseFormData(req);
      name = fields.name ? fields.name.toString() : "";
      email = fields.email ? fields.email.toString() : "";
      subject = fields.subject ? fields.subject.toString() : "";
      message = fields.message ? fields.message.toString() : "";
    } catch (error) {
      console.error("Error parsing form data:", error);
      return res.status(400).json({ message: "Invalid form data" });
    }
  } else {
    return res.status(415).json({ message: "Unsupported media type" });
  }

  // Validate required fields
  if (!name || !email || !subject || !message) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  // Create transporter with error handling
  if (
    !process.env.SMTP_USER ||
    !process.env.SMTP_PASS ||
    !process.env.RECEIVER_EMAIL
  ) {
    console.error("Missing SMTP environment variables");
    return res.status(500).json({ message: "Server configuration error" });
  }

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  try {
    // Verify SMTP connection
    await transporter.verify();

    // Send email
    await transporter.sendMail({
      from: `"${name}" <${process.env.SMTP_USER}>`, // Use authenticated email as sender
      replyTo: email, // Set reply-to as the user's email
      to: process.env.RECEIVER_EMAIL,
      subject: `[Contact] ${subject}`,
      text: `Message from: ${name} (${email})\n\n${message}`,
      html: `
        <h3>New contact form submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `,
    });

    res.status(200).json({ message: "Email sent successfully" });
  } catch (error: Error | unknown) {
    console.error("SMTP Error:", error);
    const errorMessage =
      error instanceof Error ? error.message : "Unknown error";
    res.status(500).json({
      message: "Email failed to send",
      error: errorMessage,
    });
  }
}
