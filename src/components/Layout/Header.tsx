import React from "react";
import Logo from "./Logo";
import Navigation from "./Navigation";

export default function Header() {
  return (
    <div className="layout-header px-4 py-3 position-relative">
      <Logo />
      <Navigation />
    </div>
  );
}
