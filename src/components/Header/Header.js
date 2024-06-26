import React from "react";
import Logo from "@/components/Logo";

function Header() {
  return (
    <header className={`
      container
      flex
      items-center
      justify-between
      py-6
    `}>
      <Logo />
    </header>
  );
}

export default Header;
