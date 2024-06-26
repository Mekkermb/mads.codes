import React from "react";
import Link from "next/link";
import { Circle } from "react-feather";

function Logo() {
  return (
    <Link className={`
      flex
      w-fit
      flex-col
      font-bold
      uppercase
      leading-none
    `}
      href="/"
    >
      <p>
        <span className={`
          inline-flex
          w-full
          items-baseline
          justify-between
        `}>
          mads
          <span className="inline-flex">
            <Circle className={`
              inline-block
              h-1
              w-1
              fill-cyan-400
              text-cyan-400
            `}
            />
          </span>
        </span>

        <br />
        codes
      </p>
    </Link>
  );
}

export default Logo;
