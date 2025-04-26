import { cn } from "@/utils/cn";
import React from "react";

const Layout = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("max-w-[1024px] px-4 mx-auto", className)}>
      {children}
    </div>
  );
};

export default Layout;
