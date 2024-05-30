import React from "react";
import Link from "next/link";

function Header() {
  return (
    <div className="mx-auto max-w-5xl px-8">
      <header className="flex h-14 items-center justify-between">
        <Link href="/" className="flex flex-col">
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
