import React from "react";

function Story() {
  return (
    <>
      <section className={`
        container
        col-span-full
        flex
        flex-col
        items-center
        gap-48
        text-center
        lg:gap-0
      `}
      >
        <div className={`
          flex
          flex-col
          justify-center
          gap-16
          lg:min-h-svh
        `}>
          <h2 className={`
            mx-auto
            w-fit
            bg-neutral-400
            px-4
            py-2
            text-5xl
            font-thin
            italic
          `}
          >
            Starten på en drøm
          </h2>

          <p className={`text-2xl`}>
            Jeg havde tid i overskud og tænkte derfor på at starte på en drøm,
            jeg længe havde haft: nemlig at kode min egen hjemmeside!
          </p>
        </div>

        <div className={`
          flex
          flex-col
          justify-center
          gap-16
          lg:min-h-svh
        `}>
          <h2 className={`
            mx-auto
            w-fit
            bg-neutral-400
            px-4
            py-2
            text-5xl
            font-thin
            italic
          `}
          >
            Den første hjemmeside
          </h2>

          <p className={`text-2xl`}>
            Den blev ikke noget exceptionelt, men jeg var stolt af den, for nu
            havde jeg et sted, hvor jeg kunne vise alle mine interesser og sjove
            eksperimenter, jeg var i gang med.
          </p>
        </div>

        <div className={`
          flex
          flex-col
          justify-center
          gap-16
          lg:min-h-svh
        `}>
          <h2 className={`
            mx-auto
            w-fit
            bg-neutral-400
            px-4
            py-2
            text-5xl
            font-thin
            italic
          `}
          >
            Uddannelse og udvikling
          </h2>
          relations=

          <p className={`text-2xl`}>
            Siden da har jeg taget uddannelsen som webudvikler og fortsat med at
            forbedre mine færdigheder og lære nye teknologier.
          </p>
        </div>

        <div className={`
          flex
          flex-col
          justify-center
          gap-16
          lg:min-h-svh
        `}>
          <h2 className={`
            mx-auto
            w-fit
            bg-neutral-400
            px-4
            py-2
            text-5xl
            font-thin
            italic
          `}
          >
            Fremtidige mål
          </h2>

          <p className={`text-2xl`}>
            Jeg leder nu efter en fuldtidsstilling eller praktikplads, hvor jeg
            kan hjælpe en virksomhed med at få deres mål til nye højder!
          </p>
        </div>
      </section>
    </>
  );
}

export default Story;
