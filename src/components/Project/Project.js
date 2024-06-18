"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const Project = ({ project }) => {
  const { name, description, illustration } = project; // Destructure the project object

  return (
    <article className="lg:min-h-svh">
      <div className="grid gap-16 lg:grid-cols-2 lg:grid-rows-2">
        <div className="flex flex-col">
          {illustration.map((image, index) => (
            <picture
              key={index}
              className="relative bg-gray-400 px-12 py-8 lg:row-span-full"
            >
              <Image src={image} fill alt={description} />
            </picture>
          ))}
          <motion.h2
            className="bg-neutral-400 px-4 py-2 text-4xl font-thin italic"
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
            {name}
          </motion.h2>
          <p className="">{description}</p>
        </div>
        <div className="flex w-full flex-col">
          <p>Teknologier</p>
        </div>
      </div>
    </article>
  );
};

export default Project;
