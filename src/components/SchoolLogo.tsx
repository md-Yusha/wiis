import React from "react";
import logo from "@/assets/logo.svg";

interface SchoolLogoProps {
  className?: string;
  size?: "small" | "medium" | "large" | "xl";
  showName?: boolean;
  variant?: "default" | "modern";
}

const SchoolLogo: React.FC<SchoolLogoProps> = ({
  className = "",
  size = "medium",
  showName = true,
  variant = "default",
}) => {
  const sizeClasses = {
    small: "w-12 h-12",
    medium: "w-16 h-16",
    large: "w-32 h-32",
    xl: "w-48 h-48",
  };

  const textSizeClasses = {
    small: "text-sm",
    medium: "text-xl",
    large: "text-6xl",
    xl: "text-7xl",
  };

  const variantClasses = {
    default: "text-white",
    modern: "text-[#CCFF99]",
  };

  return (
    <div className={`flex items-center ${className}`}>
      <img
        src={logo}
        alt="Whitefield International Islamic School Logo"
        className={`${sizeClasses[size]} object-contain mr-3 ${
          variant === "modern" ? "brightness-[1.5] filter" : ""
        }`}
      />
      {showName && (
        <div className="flex flex-col">
          {variant === "modern" ? (
            <h1
              className={`font-black uppercase ${textSizeClasses[size]} ${variantClasses[variant]} tracking-tighter leading-none`}
            >
              Whitefield
              <br />
              International
              <br />
              Islamic&nbsp;School
            </h1>
          ) : (
            <>
              <span
                className={`font-bold ${textSizeClasses[size]} ${variantClasses[variant]} tracking-tight`}
              >
                Whitefield International
              </span>
              <span
                className={`font-medium ${variantClasses[variant]}/90 ${textSizeClasses[size]} tracking-tight`}
              >
                Islamic School
              </span>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default SchoolLogo;
