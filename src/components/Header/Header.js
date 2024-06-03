import React from "react";
import Link from "next/link";

function Header() {
  return (
    <div className="mx-auto mb-8 px-8 py-4">
      <header className="flex items-center justify-between">
        <Link href="/" className="flex flex-col leading-none">
          <span className="font-bold uppercase">mads.codes</span>
          <span className="text-xs capitalize opacity-50">webudvikler</span>
        </Link>
        <nav>
          <Link href="/projects" className="font-bold">
            Projekter
          </Link>
        </nav>
      </header>
    </div>
  );
}

export default Header;
