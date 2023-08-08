import Image from "next/image";
import React from "react";

const navItems = [
  {
    text: "Home",
    icon: "",
  },

  {
    text: "Products",
    icon: "/arrow-down.png",
  },

  {
    text: "Pricing",
    icon: "",
  },

  {
    text: "User Guide",
    icon: "",
  },

  {
    text: "Benefits",
    icon: "",
  },
];

export const NavBar = () => {
  return (
    <div
      className="flex justify-between sticky top-0 z-40 items-center backdrop-blur-3xl backdrop-opacity-100 py-24 px-120"
      style={{ borderBottom: "1px solid rgba(0, 0, 0, 0.16)" }}>
      <div className="flex gap-2 items-center">
        <figure className="relative w-24 h-24">
          <Image src="/Vector.png" alt="logo" fill></Image>
        </figure>
        <h2 className="text-24 font-semibold text-[var(--violet)]">
          PortfoliX
        </h2>
      </div>
      <nav className="flex gap-40 text-[var(--icon-color)] max-[912px]:hidden">
        {navItems.map((list) => (
          <li
            key="list.text"
            className="list-none text-[var(--icon-color)] flex items-center gap-[6px]">
            {list.text}{" "}
            {list.icon && (
              <figure className="relative w-18 h-18 pl-[6px]">
                <Image src={list.icon} alt="drop-down" fill></Image>
              </figure>
            )}
          </li>
        ))}
      </nav>

      <div className="flex gap-32 items-center">
        <button className="text-[var(--violet)] text-18 font-medium">
          Login
        </button>
        <button className="py-[13px] px-[24px] rounded-[10px] bg-[var(--violet)] text-white flex justify-center items-center hover:opacity-60 max-[500px]:hidden">
          Book Trial
        </button>
      </div>
    </div>
  );
};
