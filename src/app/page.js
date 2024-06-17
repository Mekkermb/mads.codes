import React from "react";
import Image from "next/image";

import Story from "@/components/Story";
import ArcherContainerWrapper from "@/components/ArcherContainerWrapper";
import ArcherElementWrapper from "@/components/ArcherElementWrapper";
import Projects from "@/components/Projects/Projects";

function Home() {
  return (
    <>
      <ArcherContainerWrapper
        strokeColor="gray"
        noCurves
        offset={10}
        endMarker={false}
      >
        <div className="grid justify-items-center gap-48 lg:grid-cols-2 lg:gap-0">
          <section className="container col-span-full mt-20 flex min-h-[calc(100svh-80px-5rem)] flex-col gap-48 text-center lg:flex-row lg:gap-0 lg:pb-20">
            <article>
              <div className="flex flex-col items-center gap-16">
                <div>
                  <h1 className="mb-4 text-balance text-center text-5xl font-bold">
                    Hej der! <br /> Mit navn er Mads
                  </h1>
                  <p className="text-balance text-center text-2xl">
                    Jeg er en passioneret introvert, der godt kan lide at skabe
                    ting med kode
                  </p>
                </div>
                <div>
                  <div className="flex aspect-video w-72 items-center justify-center bg-neutral-400">
                    <p>Nyeste projekt</p>
                  </div>
                </div>
              </div>
            </article>

            <article className="place-self-end">
              <div className="flex flex-col items-center justify-center">
                <Image
                  src="https://8xsca0xnzcvircvx.public.blob.vercel-storage.com/img/mascot-6OGja7b0DIZyo3c85h1627IC2qnHZm.png"
                  alt="Billede af min mascot"
                  width={800}
                  height={800}
                  priority="high"
                  className="w-72"
                ></Image>
                <ArcherElementWrapper
                  id="intro"
                  relations={[
                    {
                      targetId: "intro-text",
                      targetAnchor: "top",
                      sourceAnchor: "bottom",
                      style: { endMarker: false },
                    },
                  ]}
                >
                  <h2 className="mx-auto mb-16 w-fit bg-neutral-400 px-4 py-2 text-5xl font-thin italic">
                    Introduktion
                  </h2>
                </ArcherElementWrapper>
                <ArcherElementWrapper
                  id="intro-text"
                  relations={[
                    {
                      targetId: "start-dream",
                      targetAnchor: "top",
                      sourceAnchor: "bottom",
                    },
                  ]}
                >
                  <p className="text-2xl">
                    Min første oplevelse med kodning var midt i min IT-supporter
                    praktikforløb.
                  </p>
                </ArcherElementWrapper>
              </div>
            </article>
          </section>

          <Story />
          <Projects />
        </div>
      </ArcherContainerWrapper>
    </>
  );
}

export default Home;
