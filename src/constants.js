import { Nunito_Sans } from "next/font/google";
import localFont from "next/font/local";

// Fonts
export const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-nunito-sans",
});

export const monaspaceArgon = localFont({
  src: "./fonts/monaspace-argon.woff2",
  display: "swap",
  variable: "--font-monaspace-argon",
});
