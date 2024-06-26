import React from "react";
import Image from "next/image";

import Projects from "@/components/Projects/Projects";
import { Terminal } from "react-feather";

function Home() {
  return (
    <>
      <section className={`
        container
        flex
        min-h-[calc(100svh-80px)]
        flex-col
        items-center
        justify-center
        text-center
      `}
      >
        <article className={`
          flex
          flex-col
          items-center
          gap-16
        `}>
          <div className={`
            flex
            flex-col
            items-center
            justify-center
          `}>
            <h1 className={`
              relative
              mb-4
              w-fit
              text-balance
              text-6xl
              font-bold
              leading-tight
              tracking-tight
            `}
            >
              <span className={`
                absolute
                bottom-0
                left-0
                -translate-x-full
                select-none
                text-3xl
              `}
              >
                <Terminal />
              </span>
              Hej der!
            </h1>

            <p className={`
              text-balance
              text-2xl
              leading-normal
              tracking-tight
            `}
            >
              Jeg er en passioneret introvert, der godt kan lide at skabe ting
              med kode
            </p>
          </div>
        </article>
      </section>

      <Projects />
    </>
  );
}

export default Home;
