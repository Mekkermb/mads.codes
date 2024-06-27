import React from "react";
import Logo from "@/components/Logo";

function Header() {
  return (
    <header className={`
      container
      bg-primary-50
    `}>
      <div className={`
        flex
        items-center
        justify-between
        py-8
      `}>
        <Logo />
      </div>
    </header>
  );
}

export default Header;
