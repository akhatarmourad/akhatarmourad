/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Link from 'next/link';
import { ChevronRight } from "lucide-react";

export default function Hero() {
  return (
    <div className="flex flex-col items-center w-full h-[90vh]">
      {/* Main Text */}
      <div className="flex flex-col items-center justify-center mb-10 max-w-3xl mx-auto w-11/12 md:w-full">
        <h1 className="text-4xl md:text-6xl md:!leading-snug font-semibold text-center">
          Transform Your
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-sky-600 to-sky-300">
            {" "}Vision{" "}
          </span>
          into a Stunning
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-600 to-fuchsia-300">
            {" "}Reality
          </span>
        </h1>
        <p className="text-base md:text-lg text-center mt-6 text-foreground/50">
          Delivering best-in-class websites and applications, top-notch graphic
          design, and a better experience with professional solutions for
          outstanding results.
        </p>
      </div>

      {/* Button */}
      <Link href="https://www.github.com/akhatarmourad" className="group relative grid overflow-hidden rounded-full px-5 py-3 shadow-[0_1000px_0_0_hsl(0_0%_20%)_inset] transition-colors duration-200">
        <span>
          <span className="spark mask-gradient absolute inset-0 h-[100%] w-[100%] animate-flip overflow-hidden rounded-full [mask:linear-gradient(white,_transparent_50%)] before:absolute before:aspect-square before:w-[200%] before:rotate-[-90deg] before:animate-rotate before:bg-[conic-gradient(from_0deg,transparent_0_340deg,white_360deg)] before:content-[''] before:[inset:0_auto_auto_50%] before:[translate:-50%_-15%]" />
        </span>
        <span className="backdrop absolute inset-[1px] rounded-full bg-neutral-950 transition-colors duration-200 group-hover:bg-neutral-900" />
        <span className="h-full w-full blur-md absolute bottom-0 inset-x-0 bg-gradient-to-tr from-primary/40"></span>
        <span className="z-10 py-0.5 text-lg text-neutral-100 flex items-center justify-center gap-1.5">
          <img
            src="./icons/sparkles-dark.svg"
            alt="✨"
            width={24}
            height={24}
            className="w-6 h-6"
          />
          Akhatar Mourad&apos;s Self Intro
          <ChevronRight className="w-6 h-6" />
        </span>
      </Link>
    </div>
  );
}
