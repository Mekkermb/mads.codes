import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <footer className="container">
      <div
        className="mt-20 flex min-h-[25svh]
          flex-col justify-between py-6
          md:flex-row"
      >
        <div
          className="flex flex-col justify-between
            md:items-start"
        >
          <Link
            href="/"
            className="flex flex-col pb-9
              text-center leading-none md:pb-0
              md:text-left"
          >
            <span className="font-bold uppercase">
              mads.codes
            </span>
            <span
              className="text-xs capitalize
                opacity-50"
            >
              webudvikler
            </span>
          </Link>
          <p
            className="none hidden text-xs
              opacity-50 md:block"
          >
            © 2024-present Mads Lundsby Bisgaard.
            All Rights Reserved.
          </p>
        </div>

        <div
          className="flex justify-around text-sm"
        >
          <div className="md:ml-24">
            <p className="pt-2 opacity-50">
              Projekter
            </p>
            <div
              className="grid w-36 grid-cols-1
                gap-1.5 pt-3 md:grid-cols-2"
            >
              <div className="flex gap-0.5">
                <Link href="/">
                  cmd-gen
                  {/* TODO: Implement a tooltip component when hovered over explains that it's under construction. */}
                  <span>*</span>
                </Link>{" "}
              </div>
            </div>
          </div>

          <div className="md:ml-24">
            <p className="pt-2 opacity-50">
              Links
            </p>
            <div
              className="grid w-[6rem] grid-cols-1
                pt-3"
            >
              <div className="flex">
                <Link
                  href="https://www.linkedin.com/in/mads-lundsby-bisgaard/"
                  className=""
                >
                  LinkedIn
                </Link>
              </div>
            </div>
          </div>
        </div>
        <p
          className="pt-12 text-center text-xs
            opacity-50 md:hidden"
        >
          © 2024-present Mads Lundsby Bisgaard.
          All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
