"use client";
import { ArcherContainer } from "react-archer";

function ArcherContainerWrapper({
  children,
  ...delegated
}) {
  return (
    <ArcherContainer {...delegated}>
      {children}
    </ArcherContainer>
  );
}

export default ArcherContainerWrapper;
