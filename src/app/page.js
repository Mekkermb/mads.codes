import Link from "next/link";
import Image from "next/image";

function Home() {
  return (
    <section className="flex flex-col items-center space-y-8 px-8">
      <h1 className="text-balance text-center text-4xl font-bold">
        Hej der! <br /> Mit navn er Mads
      </h1>
      <p className="text-balance text-center">
        Jeg er en passioneret introvert, der godt kan lide at skabe ting med
        kode
      </p>
      <div className="flex w-full items-center justify-center gap-16">
        <button className="bg-neutral-400 px-4 py-2 hover:bg-neutral-300">
          Start her
        </button>
        <Link href="/projects">Projekter</Link>
      </div>
      <Image
        src="https://8xsca0xnzcvircvx.public.blob.vercel-storage.com/img/mascot-6OGja7b0DIZyo3c85h1627IC2qnHZm.png"
        alt="Billede af min mascot"
        width={800}
        height={800}
      ></Image>
    </section>
    <>
      <section className="flex flex-col items-center space-y-8 px-8">
        <h1 className="text-balance text-center text-4xl font-bold">
          Hej der! <br /> Mit navn er Mads
        </h1>
        <p className="text-balance text-center">
          Jeg er en passioneret introvert, der godt kan lide at skabe ting med
          kode
        </p>
        <div className="flex w-full items-center justify-center gap-16">
          <button className="bg-neutral-400 px-4 py-2 hover:bg-neutral-300">
            Start her
          </button>
          <Link href="/projects">Projekter</Link>
        </div>
        <Image
          src="https://8xsca0xnzcvircvx.public.blob.vercel-storage.com/img/mascot-6OGja7b0DIZyo3c85h1627IC2qnHZm.png"
          alt="Billede af min mascot"
          width={800}
          height={800}
        ></Image>
      </section>

      <section className="flex flex-col items-center space-y-8 px-8 text-center">
        <button className="bg-neutral-400 px-4 py-2 text-5xl font-thin italic hover:bg-neutral-300">
          Introduktion
        </button>
        <p>
          Min første oplevelse med kodning var midt i min IT-supporter
          praktikforløb.
        </p>
        <button className="bg-neutral-400 px-4 py-2 text-5xl font-thin italic hover:bg-neutral-300">
          Starten på en drøm
        </button>
        <p>
          Jeg havde tid i overskud og tænkte derfor på at starte på en drøm, jeg
          længe havde haft: nemlig at kode min egen hjemmeside!
        </p>
        <button className="bg-neutral-400 px-4 py-2 text-5xl font-thin italic hover:bg-neutral-300">
          Den første hjemmeside
        </button>
        <p>
          Den blev ikke noget exceptionelt, men jeg var stolt af den, for nu
          havde jeg et sted, hvor jeg kunne vise alle mine interesser og sjove
          eksperimenter, jeg var i gang med.
        </p>
        <button className="bg-neutral-400 px-4 py-2 text-5xl font-thin italic hover:bg-neutral-300">
          Uddannelse og udvikling
        </button>
        <p>
          Siden da har jeg taget uddannelsen som webudvikler og fortsat med at
          forbedre mine færdigheder og lære nye teknologier.
        </p>
        <button className="bg-neutral-400 px-4 py-2 text-5xl font-thin italic hover:bg-neutral-300">
          Fremtidige mål
        </button>
        <p>
          Jeg leder nu efter en fuldtidsstilling eller praktikplads, hvor jeg
          kan hjælpe en virksomhed med at få deres mål til nye højder!
        </p>
      </section>
    </>
  );
}

export default Home;
