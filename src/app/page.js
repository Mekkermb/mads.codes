import React from "react";

import Projects from "@/components/Projects/Projects";
import { Terminal } from "react-feather";

function Home() {
  return (
    <>
      <section className={`
        container
        flex
        flex-col
        items-center
        justify-center
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
            text-center
          `}
          >
            <h1 className={`
              relative
              mb-8
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

            <div className={`
              flex
              max-w-xl
              flex-col
              text-balance
              text-base
              leading-normal
              tracking-tight
            `}
            >
              <p>
                Jeg er nyuddannet webudvikler med en passion for at skabe
                meningsfulde web løsninger.
              </p>

              <p>
                Gennem min uddannelse som webudvikler har jeg skabt nydelige og
                mindeværdige løsninger gennem mine projekter.
              </p>

              <p>
                Gennem disse erfaringer har jeg haft mulighed for at skabe
                produkter, der ikke kun er brugervenlige, men også skrevet i
                kode, der er nem at vedligeholde og forstå.
              </p>
            </div>
          </div>
        </article>
      </section>

      <div className={`
        container
        flex
        flex-col
        gap-4
        text-balance
        text-center
      `}>
        <h2 className={`
          text-4xl
          font-extrabold
        `}>Hvad jeg har arbejdet på</h2>

        <div className="">
          <p>
            Jeg kan godt lide at være aktiv og har altid gang i nye projekter.
          </p>

          <p>Her kan du se nogle af de projekter, som jeg har arbejdet på.</p>
        </div>
      </div>

      <Projects />
    </>
  );
}

export default Home;
