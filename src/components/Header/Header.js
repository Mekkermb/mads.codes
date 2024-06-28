import React from "react";
import Logo from "@/components/Logo";
import Image from "next/image";

function Header() {
  return (
    <div className={`
      relative
      z-30
      mb-8
      h-52
      w-full
      bg-primary-50
      md:mb-16
      md:h-64
      md:pt-12
    `}
    >
      <div className={`
        container
        sticky
        top-0
        z-20
      `}>
        <header className={`
          flex
          h-16
          items-center
          justify-center
          md:justify-between
        `}
        >
          <Logo />
        </header>
      </div>

      <div className={`
        absolute
        bottom-0
        left-0
        right-0
        z-30
        h-24
        w-full
        overflow-hidden
      `}
      >
        <Image className={`select-none`}
          src="https://8xsca0xnzcvircvx.public.blob.vercel-storage.com/assets/header/svg/wave.svg"
          fill
          alt="Wave"
          objectFit="cover"
          priority
        />
      </div>
    </div>
  );
}

export default Header;
