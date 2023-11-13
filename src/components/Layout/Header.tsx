import React from "react";
import Logo from "./Logo";
import Navigation from "./Navigation";

export default function Header() {
  return (
    <div className="layout-header d-flex flex-column flex-md-row justify-content-center align-items-center px-sm-4 px-2 py-3 position-relative">
      <Logo />
      <Navigation />
    </div>
  );
}
