import React from "react";
import Link from "next/link";

function Header() {
  return (
    <header className={`
      container
      flex
      items-center
      justify-between
      py-6
    `}>
      <Link
        href="/"
        className={`
          flex
          flex-col
          leading-none
        `}
      >
        <span className={`
          font-bold
          uppercase
        `}>mads.codes</span>

        <span className={`
          text-xs
          capitalize
          opacity-50
        `}>webudvikler</span>
      </Link>

      <nav>
        <Link
          href="/projects"
          className="font-bold"
        >
          Projekter
        </Link>
      </nav>
    </header>
  );
}

export default Header;
