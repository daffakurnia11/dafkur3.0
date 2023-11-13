import React from "react";
import Logo from "./Logo";
import Navigation from "./Navigation";

export default function Header() {
  return (
    <div className="layout-header position-fixed top-0 start-0 end-0 d-flex flex-column flex-md-row justify-content-center align-items-center px-sm-4 px-3 py-3">
      <Logo />
      <Navigation />
    </div>
  );
}
