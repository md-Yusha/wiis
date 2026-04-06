# Setting Up EmailJS for Contact Form

This document explains how to set up EmailJS for the contact form in the WIIS website.

## Step 1: Create an EmailJS Account

1. Go to [EmailJS](https://www.emailjs.com/) and sign up for a free account.
2. Verify your email address.

## Step 2: Create an Email Service

1. In the EmailJS dashboard, go to "Email Services" and click "Add New Service".
2. Choose your email provider (Gmail, Outlook, etc.).
3. Follow the instructions to connect your email account.
4. Give your service a name (e.g., "WIIS Contact Form").
5. Save the service and note down the Service ID. service_d28ysf8

## Step 3: Create an Email Template

1. In the EmailJS dashboard, go to "Email Templates" and click "Create New Template".
2. Design your email template. Here's a simple example:

**Subject:**

```
New Contact Form Submission from {{name}}
```

**Content:**

```html
<h2>New Contact Form Submission</h2>
<p><strong>Name:</strong> {{name}}</p>
<p><strong>Email:</strong> {{email}}</p>
<p><strong>Subject:</strong> {{subject}}</p>
<p><strong>Message:</strong></p>
<p>{{message}}</p>
```

3. Save the template and note down the Template ID. template_vtkhkxd

## Step 4: Get Your Public Key

1. In the EmailJS dashboard, go to "Account" > "API Keys".
2. Copy your Public Key. lxD6AIL9BBHgMkb1K

## Step 5: Update Environment Variables

1. Create or update the `.env.local` file in the root of your project with the following variables:

```
VITE_EMAILJS_PUBLIC_KEY=your_public_key
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
```

2. Replace the placeholder values with your actual EmailJS credentials.

## Step 6: Deploy to Vercel

1. Make sure your `.env.local` file is included in your `.gitignore` to keep your credentials secure.
2. Add the environment variables in the Vercel dashboard:
   - Go to your project settings in Vercel
   - Navigate to the "Environment Variables" section
   - Add each variable from your `.env.local` file

## Notes

- The free plan of EmailJS allows 200 emails per month.
- Make sure your form field names match the template variables (name, email, subject, message).
- For more information, visit the [EmailJS documentation](https://www.emailjs.com/docs/).
