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
  );
}

export default Home;
