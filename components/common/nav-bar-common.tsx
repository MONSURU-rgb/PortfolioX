import React, { useEffect, useState } from "react";
import { Logo } from ".";
import { Search } from "./search";
import { ClientDetails } from "./client-details";
import { useTheme } from "next-themes";

const ThemeChanger = () => {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <div>
      {/* {resolvedTheme}
      <button
        className={resolvedTheme === "light" ? "#A3AEDO" : "#ffffff"}
        onClick={() => setTheme("light")}>
        Light Mode
      </button>
      <button onClick={() => setTheme("dark")}>Dark Mode</button> */}
    </div>
  );
};

export function NavBarCommon() {
  const [mobileResponsive, setMobileResponsive] = useState(false);
  useEffect(() => {
    if (window.innerWidth <= 768) {
      setMobileResponsive(true);
    }
  }, []);
  return (
    <div className="flex justify-between gap-40 bg-white pl-60 pt-22 pr-34 pb-24 sticky top-0 z-50">
      {mobileResponsive ? <Logo /> : <Search />}
      <ThemeChanger />
      <ClientDetails />
    </div>
  );
}
