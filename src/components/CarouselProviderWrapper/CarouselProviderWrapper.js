"use client";
import { CarouselProvider } from "pure-react-carousel";

function CarouselProviderWrapper({ children, ...delegated }) {
  return <CarouselProvider {...delegated}>{children}</CarouselProvider>;
}

export default CarouselProviderWrapper;
