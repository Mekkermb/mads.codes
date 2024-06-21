"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const Project = ({ project }) => {
  const { name, description, illustrations, properties } = project; // Destructure the project object

  return (
    <article className="flex flex-col gap-8 lg:min-h-svh">
      <div
        className={`flex h-auto w-full items-center bg-${properties.color} px-8 py-4`}
      >
        {illustrations.map((illustration, index) => (
          <picture key={index} className="">
            <Image
              className={`w-full ${index === 0 && "translate-x-1/3"}`}
              src={illustration}
              width={illustration.width}
              height={illustration.height}
              alt={description}
            />
          </picture>
        ))}
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