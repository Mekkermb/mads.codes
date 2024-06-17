"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const Project = ({ project }) => {
  return (
    <motion.article
      className="relative h-[100svh] w-[100svw]"
      layout={true}
      initial={{
        backgroundImage:
          "linear-gradient(to bottom, hsl(0, 0%, 90%), hsl(0, 0%, 70%))",
      }}
      whileInView={{
        backgroundImage:
          "linear-gradient(to bottom, hsl(0, 0%, 70%), hsl(0, 0%, 50%)",
      }}
      transition={{ type: "spring", stiffness: 100, damping: 50 }}
    >
      <motion.div
        className="container flex h-full flex-col items-center justify-center gap-8"
        layout
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ type: "spring", stiffness: 100, damping: 50, delay: 0.5 }}
      >
        <div className="flex flex-col gap-4 text-center">
          <h2 className="bg-white text-4xl">{project.name}</h2>
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
      </motion.div>
    </motion.article>
  );
};

export default Project;
