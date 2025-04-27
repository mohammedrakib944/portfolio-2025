import { cn } from "@/utils/cn";
import React from "react";

type TitleProps = {
  className?: string;
  size?: "lg" | "md" | "sm";
  children: React.ReactNode;
};

const Title = ({ className, size, children }: TitleProps) => {
  return (
    <h3
      className={cn(
        "font-signika font-bold",
        size === "md"
          ? "text-2xl lg:text-3xl"
          : size === "sm"
          ? "text-xl"
          : "text-2xl lg:text-5xl",
        className
      )}
    >
      {children}
    </h3>
  );
};

export default Title;
