import React from "react";
import Icon from "../Icon";

export default function Navigation() {
  return (
    <div className="nav d-flex justify-content-between align-items-center mx-auto">
      <div className="nav-menu d-flex gap-3">
        <div className="menu-item d-flex gap-1 align-items-center active">
          <Icon icon="home" size={24} className="menu-icon d-block" />
          <p className="menu-label mb-0">Home</p>
        </div>
        <div className="menu-item d-flex gap-1 align-items-center">
          <Icon icon="library" size={24} className="menu-icon d-block" />
          <p className="menu-label mb-0">Projects</p>
        </div>
        <div className="menu-item d-flex gap-1 align-items-center">
          <Icon icon="rocket" size={24} className="menu-icon d-block" />
          <p className="menu-label mb-0">Experiences</p>
        </div>
        <div className="menu-item d-flex gap-1 align-items-center">
          <Icon icon="book" size={24} className="menu-icon d-block" />
          <p className="menu-label mb-0">Blogs</p>
        </div>
      </div>
      <p>Let&apos;s Talk!</p>
    </div>
  );
}
