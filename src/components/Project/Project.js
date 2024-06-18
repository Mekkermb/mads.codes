"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const Project = ({ project }) => {
  return (
    <article className="relative h-[100svh] w-[100svw]">
      <div
        className="container flex h-full flex-col items-center justify-center gap-8"
        transition={{ type: "spring", stiffness: 100, damping: 50, delay: 0.5 }}
      >
        <div className="flex flex-col gap-4 text-center">
          <motion.h2
            className="bg-neutral-400 px-4 py-2 text-5xl font-thin italic"
            layout
            initial={{ y: "10px", scale: 0.9 }}
            whileInView={{ y: "0px", scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 20,
              restDelta: 0.001,
            }}
          >
            {project.name}
          </motion.h2>
          <p className="">{project.description}</p>
        </div>
        <Image
          src={project.illustration}
          width={2880}
          height={1620}
          alt={project.description}
        />
        <div className="flex w-full flex-col">
          <p>Teknologier</p>
          <div>
            <p>{project.tech_used}</p>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Project;
