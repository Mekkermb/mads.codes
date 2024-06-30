"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronRight } from "react-feather";

function LinkButton({ href, children, className = "", ...delegated }) {
  const [isHovering, setIsHovering] = React.useState(false);

  const Tag = typeof href === "string" ? Link : "button";

  return (
    <motion.div className={`
      relative
      mt-auto
      flex
      w-fit
      items-center
      justify-center
    `}
      {...delegated}
    >
      <Tag className={`
        font-bold
        uppercase
      `}
        target="_blank"
        href={href}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        {children}
      </Tag>

      <motion.span className={`
        absolute
        ${isHovering ? `-right-[28px]` : `-right-[24px]`}
      `}
        layout
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 40,
          restDelta: 0.001,
        }}
      >
        <ChevronRight className="text-secondary-400" />
      </motion.span>
    </motion.div>
  );
}

export default LinkButton;
