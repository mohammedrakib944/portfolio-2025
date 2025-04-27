import React from "react";
import { navUrls } from "./nav";
import { RxCross1 } from "react-icons/rx";

const Menu = ({ set_menu_open }: { set_menu_open: () => void }) => {
  return (
    <div className="fixed w-full h-screen top-0 left-0 bg-white z-50 flex items-center justify-center">
      <button
        onClick={set_menu_open}
        className="absolute text-2xl top-32 right-20"
      >
        <RxCross1 />
      </button>
      <ul className="space-y-6">
        {navUrls.map((url) => (
          <li
            onClick={set_menu_open}
            key={url.id}
            className="gsap_link font-semibold hover:underline cursor-pointer"
          >
            {url.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;
