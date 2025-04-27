"use client";
import { useState, useEffect } from "react";

const useView = () => {
  const [is_desktop, set_is_desktop] = useState(false);

  useEffect(() => {
    // Avoid SSR issue
    const handleResize = () => {
      set_is_desktop(window.innerWidth >= 768);
    };

    // Call once on mount
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return { is_desktop };
};

export default useView;
