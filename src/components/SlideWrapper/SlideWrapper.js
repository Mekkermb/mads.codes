"use client";
import { Slide } from "pure-react-carousel";

function SlideWrapper({ children, ...delegated }) {
  return <Slide {...delegated}>{children}</Slide>;
}

export default SlideWrapper;
