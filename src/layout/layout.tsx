import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return <div className="max-w-[1024px] px-4 mx-auto">{children}</div>;
};

export default Layout;
