"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const Project = ({ project }) => {
  const { name, description, illustration, properties } = project; // Destructure the project object

  return (
    <article className="grid gap-16 lg:min-h-svh">
      <div
        className={`flex items-center justify-center bg-${properties.color} px-24 py-12`}
      >
        {illustration.map((img, index) => (
          <picture key={index}>
            <Image
              src={img}
              width={img.width}
              height={img.height}
              alt={description}
            />
          </picture>
        ))}
      </div>
      <div className="flex flex-col">
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
        <Link href={`./${name}`}>Se projekt</Link>
      </div>
    </article>
  );
};

export default Project;
