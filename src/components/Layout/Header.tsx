import React from "react";
import Logo from "./Logo";
import Navigation from "./Navigation";

export default function Header() {
  return (
    <div className="layout-header p-4 position-relative">
      <Logo />
      <Navigation />
    </div>
  );
}
