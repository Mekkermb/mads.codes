"use client";
import { ArcherElement } from "react-archer";

function ArcherElementWrapper({ children, ...delegated }) {
  return <ArcherElement {...delegated}>{children}</ArcherElement>;
}

export default ArcherElementWrapper;
