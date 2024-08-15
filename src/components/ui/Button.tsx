import { ButtonHTMLAttributes } from "react";
import clsx from "clsx";

type ButtonType = "primary" | "outline";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children: React.ReactNode;
  variant?: ButtonType;
}

const Button = ({
  children,
  className,
  variant = "primary",
  ...props
}: Props) => {
  const styles = clsx(
    variant == "primary" && "bg-primary text-white",
    variant == "outline" &&
      "border border-gray-300 bg-transparent hover:bg-transparent/5",
    "rounded-full p-4",
    className,
  );

  return (
    <button {...props} className={styles}>
      {children}
    </button>
  );
};

export default Button;
