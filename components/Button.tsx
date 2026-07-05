import Image from "next/image";
import React from "react";

type ButtonProps = {
  type?: "button" | "submit";
  title: string;
  icon?: string;
  variant?: "btn_light_lime";
  /** Stretch the button to fill its container. Defaults to auto width. */
  fullWidth?: boolean;
  onClick?: () => void;
  disabled?: boolean;
};

const Button = ({
  type = "button",
  title,
  icon,
  variant = "btn_light_lime",
  fullWidth = false,
  onClick,
  disabled = false,
}: ButtonProps) => {
  return (
    <button
      className={`inline-flex items-center justify-center duration-150 rounded-md font-medium my-6 px-6 py-3 disabled:opacity-60 disabled:cursor-not-allowed ${variant} ${
        fullWidth ? "w-full" : "w-auto"
      }`}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {icon && (
        <Image
          src={icon}
          alt=""
          aria-hidden="true"
          width={22}
          height={22}
          className="inline-flex mr-3"
        />
      )}
      {title}
    </button>
  );
};

export default Button;
