import { ButtonHTMLAttributes, ReactNode } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import cn from "../../utils/cn";

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  children: ReactNode;
}

const Button = ({
  children,
  variant,
  size,
  className,
  ...props
}: ButtonProps) => {
  return (
    <button
      type="button"
      {...props}
      className={cn(buttonVariants({ variant, size, className }))}
    >
      {children}
    </button>
  );
};

export default Button;

const buttonVariants = cva("rounded", {
  variants: {
    variant: {
      primary: "bg-blue-500 hover:bg-blue-700 text-white ",
      secondary: "bg-cyan-500 hover:bg-cyan-700 text-white ",
      destructive: "bg-red-500 hover:bg-red-600 text-white ",
      outline: "text-gray-500 hover:bg-blue-500 hover:text-white ",
    },
    size: {
      sm: "text-sm px-2 py-1",
      md: "px-2.5 py-1",
      lg: "px-5 py-1.5",
      icon: "px-2 py-1",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "md",
  },
});
