"use client";
import { Slider } from "pure-react-carousel";

function SliderWrapper({
  children,
  ...delegated
}) {
  return (
    <Slider {...delegated}>{children}</Slider>
  );
}

export default SliderWrapper;
