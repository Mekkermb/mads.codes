"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const Project = ({ project }) => {
  const { name, description, illustrations, properties } = project; // Destructure the project object

  return (
    <article className="flex flex-col gap-32">
      <div className={`relative h-40 w-full bg-${properties.color}`}>
        <div className="absolute inset-0 flex items-center justify-center px-8 py-4">
          {illustrations.map((illustration, index) => (
            <picture
              key={index}
              className={`relative ${index === 0 ? "z-10 w-32 translate-x-6" : "w-64 -translate-x-6"}`}
            >
              <Image
                src={illustration}
                width={illustration.width}
                height={illustration.height}
                alt={description}
              />
            </picture>
          ))}
        </div>
      </div>

      <div className="flex flex-col items-start">
        <motion.h2
          className="text-4xl font-bold"
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
        <Link className="font-bold" href={`./${name}`}>
          Se projekt
        </Link>
      </div>
    </article>
  );
};

export default Project;