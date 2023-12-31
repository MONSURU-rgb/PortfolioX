import { LoginForm } from ".";
import { LoginReport } from "./login-report";
import { NavBar } from "./nav-bar";

import React from "react";

export function Nav() {
  return (
    <div>
      <NavBar />
      <div className="px-120 flex items-center pb-89 gap-128 z-10 justify-center !bg-white">
        <LoginReport />
        <LoginForm />
      </div>
    </div>
  );
}
