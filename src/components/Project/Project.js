"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "react-feather";

const Project = ({ project }) => {
  const { name, description, illustrations, live_project_link } =
    project; // Destructure the project object

  const [isHovering, setIsHovering] = React.useState(false);

  return (
    <article className={`
      flex
      flex-col
      gap-12
      rounded-xl
      bg-gradient-to-b
      from-secondary-50
      to-secondary-100
      p-8
      shadow-accent
      drop-shadow-lg
      lg:flex-row
    `}
    >
      <div>
        <div className={`flex`}>
          {illustrations.map((illustration, index) => (
            <picture key={index}
              className={`
                ${
                index === 0
                  ? `
                    z-10
                    flex-[50%]
                    translate-x-3
                  `
                  : `
                    flex-[100%]
                    -translate-x-3
                  `
              }
              `}
            >
              <Image className={`
                h-full
                object-contain
              `}
                src={illustration}
                width={illustration.width}
                height={illustration.height}
                alt={description}
              />
            </picture>
          ))}
        </div>
      </div>

      <div className={`
        flex
        flex-1
        flex-col
        gap-4
      `}>
        <motion.h2 className={`
          text-4xl
          font-extrabold
        `}
          layout
          initial={{
            y: "10px",
          }}
          whileInView={{
            y: "0px",
          }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 20,
            restDelta: 0.001,
          }}
        >
          {name}
        </motion.h2>

        <div className={`
          flex
          h-full
          flex-col
          items-center
          gap-4
          text-balance
        `}>
          <p>{description}</p>

          {/* TODO: Refactor to a LinkButton Component */}
          <motion.div className={`
            relative
            mt-auto
            flex
            w-fit
            items-center
            justify-center
          `}
          >
            <Link className={`
              font-bold
              uppercase
            `}
              target="_blank"
              href={live_project_link}
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              Se projekt
            </Link>

            <motion.span className={`
              absolute
              bottom-0
              top-0
              ${isHovering ? `-right-[28px]` : `-right-[24px]`}
            `}
              layout
              transition={{
                type: "spring",
                stiffness: 500,
                damping: 40,
              }}
            >
              <ChevronRight />
            </motion.span>
          </motion.div>
        </div>
      </div>
    </article>
  );
};

export default Project;