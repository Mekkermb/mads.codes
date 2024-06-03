import Image from "next/image";

function Home() {
  return (
    <>
      {/* Hero */}
      <section className="flex flex-col justify-center gap-32 px-8 md:flex-row md:items-end">
        <div className="flex flex-col items-center gap-16">
          <div>
            <h1 className="mb-4 text-balance text-center text-4xl font-bold">
              Hej der! <br /> Mit navn er Mads
            </h1>
            <p className="text-balance text-center text-2xl">
              Jeg er en passioneret introvert, der godt kan lide at skabe ting
              med kode
            </p>
          </div>
          <div>
            <div className="flex aspect-video w-72 items-center justify-center bg-neutral-400">
              <p>Nyeste projekt</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center text-center">
          <Image
            src="https://8xsca0xnzcvircvx.public.blob.vercel-storage.com/img/mascot-6OGja7b0DIZyo3c85h1627IC2qnHZm.png"
            alt="Billede af min mascot"
            width={800}
            height={800}
            className="w-72"
          ></Image>
          <h2 className="mb-16 bg-neutral-400 px-4 py-2 text-5xl font-thin italic">
            Introduktion
          </h2>
          <p className="text-2xl">
            Min første oplevelse med kodning var midt i min IT-supporter
            praktikforløb.
          </p>
        </div>
      </section>

      {/* About */}
      <section className="flex flex-col items-center gap-48 px-8 text-center md:gap-0">
        <div className="flex flex-col justify-center gap-16 md:min-h-svh">
          <h2 className="mx-auto mb-4 w-fit bg-neutral-400 px-4 py-2 text-5xl font-thin italic">
            Starten på en drøm
          </h2>
          <p className="text-2xl">
            Jeg havde tid i overskud og tænkte derfor på at starte på en drøm,
            jeg længe havde haft: nemlig at kode min egen hjemmeside!
          </p>
        </div>
        <div className="flex flex-col justify-center gap-16 md:min-h-svh">
          <h2 className="mx-auto mb-4 w-fit bg-neutral-400 px-4 py-2 text-5xl font-thin italic">
            Den første hjemmeside
          </h2>
          <p className="text-2xl">
            Den blev ikke noget exceptionelt, men jeg var stolt af den, for nu
            havde jeg et sted, hvor jeg kunne vise alle mine interesser og sjove
            eksperimenter, jeg var i gang med.
          </p>
        </div>
        <div className="flex flex-col justify-center gap-16 md:min-h-svh">
          <h2 className="mx-auto mb-4 w-fit bg-neutral-400 px-4 py-2 text-5xl font-thin italic">
            Uddannelse og udvikling
          </h2>
          <p className="text-2xl">
            Siden da har jeg taget uddannelsen som webudvikler og fortsat med at
            forbedre mine færdigheder og lære nye teknologier.
          </p>
        </div>
        <div className="flex flex-col justify-center gap-16 md:min-h-svh">
          <h2 className="mx-auto mb-4 w-fit bg-neutral-400 px-4 py-2 text-5xl font-thin italic">
            Fremtidige mål
          </h2>
          <p className="text-2xl">
            Jeg leder nu efter en fuldtidsstilling eller praktikplads, hvor jeg
            kan hjælpe en virksomhed med at få deres mål til nye højder!
          </p>
        </div>
      </section>
    </>
  );
}

export default Home;
