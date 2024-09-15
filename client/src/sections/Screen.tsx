/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import React from 'react';
import { HeroParallax } from '@/components/ui/hero-parallax';

export default function Screen() {
  return (
    <div className="flex flex-col items-center justify-center w-full pb-8 rounded-2xl gap-32">
        {/* Websiltes & Web Applications */}
        <div className="relative">
            {/* Spotlights */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 w-3/4 h-3/4 blur-[10rem] inset-0 bg-gradient-to-r from-sky-600 to-fuchsia-600">
            </div>

            {/* Dashboard */}
            <div className='bg-opacity-50 -m-2 md:-m-4 rounded-xl p-5 md:rounded-2xl'>
                <h2 className="text-center text-4xl mb-9 mt-4 font-semibold">Websites & Applications</h2>
                <Image 
                    src='./assets/Figma-Dashboard.svg'
                    alt='Figma Dashboard'
                    width={1200}
                    height={1200}
                    className='rounded-md md:rounded-xl shadow-2xl bg-foreground/20 ring-1 ring-border'
                />
            </div>
        </div>

        {/* Mobile Apps */}
        <div className='bg-opacity-50 -m-2 md:-m-4 rounded-xl p-5 md:rounded-2xl'>
            <h2 className="text-center text-4xl mb-9 mt-4 font-semibold">Mobile Applications</h2>
            
            <div className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10'>
                <img 
                    src='./assets/Mobile App 1.svg'
                    alt='Figma Dashboard'
                    className='rounded-md md:rounded-xl shadow-2xl bg-foreground/20 ring-1 ring-border'
                />
                
                <img 
                    src='./assets/Mobile App 2.svg'
                    alt='Figma Dashboard'
                    className='rounded-md md:rounded-xl shadow-2xl bg-foreground/20 ring-1 ring-border'
                />

                <img 
                    src='./assets/Mobile App 3.svg'
                    alt='Figma Dashboard'
                    className='rounded-md md:rounded-xl shadow-2xl bg-foreground/20 ring-1 ring-border'
                />
            </div>
        </div>

        {/* Graphic Design */}
        <div className='mt-32 relative'>
            <HeroParallax products={products} />;
        </div>
    </div>
  )
}

export const products = [
    {
      title: "Moonbeam",
      link: "https://www.instagram.com/devdescom",
      thumbnail: "/assets/Design 1.jpg",
    },
    {
      title: "Cursor",
      link: "https://www.instagram.com/devdescom",
      thumbnail: "/assets/Design 2.jpg",
    },
    {
      title: "Rogue",
      link: "https://www.instagram.com/devdescom",
      thumbnail: "/assets/Design 3.jpg",
    },
   
    {
      title: "Editorially",
      link: "https://www.instagram.com/devdescom",
      thumbnail: "/assets/Design 4.jpg",
    },
    {
      title: "Editrix AI",
      link: "https://www.instagram.com/devdescom",
      thumbnail: "/assets/Design 5.jpg",
    },
    {
      title: "Pixel Perfect",
      link: "https://www.instagram.com/devdescom",
      thumbnail: "/assets/Design 6.jpg",
    },
   
    {
      title: "Algochurn",
      link: "https://www.instagram.com/devdescom",
      thumbnail: "/assets/Design 7.jpg"
    },
    {
      title: "Aceternity UI",
      link: "https://www.instagram.com/devdescom",
      thumbnail: "/assets/Design 8.jpg",
    },
    {
      title: "Tailwind Master Kit",
      link: "https://www.instagram.com/devdescom",
      thumbnail: "/assets/Design 9.jpg",
    },
    {
      title: "SmartBridge",
      link: "https://www.instagram.com/devdescom",
      thumbnail: "/assets/Design 10.png",
    },
    {
      title: "Renderwork Studio",
      link: "https://www.instagram.com/devdescom",
      thumbnail: "/assets/Design 11.jpg",
    },
   
    {
      title: "Creme Digital",
      link: "https://www.instagram.com/devdescom",
      thumbnail: "/assets/Design 12.jpg",
    },
    {
      title: "Golden Bells Academy",
      link: "https://www.instagram.com/devdescom",
      thumbnail: "/assets/Design 13.jpg",
    },
    {
      title: "Invoker Labs",
      link: "https://www.instagram.com/devdescom",
      thumbnail: "/assets/Design 14.jpg",
    },
    {
      title: "Invoker Labs",
      link: "https://www.instagram.com/devdescom",
      thumbnail: "/assets/Design 15.jpg",
    },
    {
      title: "Invoker Labs",
      link: "https://www.instagram.com/devdescom",
      thumbnail: "/assets/Design 16.jpg",
    },
    {
      title: "Invoker Labs",
      link: "https://www.instagram.com/devdescom",
      thumbnail: "/assets/Design 17.jpg",
    },
    {
      title: "Invoker Labs",
      link: "https://www.instagram.com/devdescom",
      thumbnail: "/assets/Design 18.jpg",
    },
    {
      title: "Invoker Labs",
      link: "https://www.instagram.com/devdescom",
      thumbnail: "/assets/Design 19.jpg",
    },
    {
      title: "Invoker Labs",
      link: "https://www.instagram.com/devdescom",
      thumbnail: "/assets/Design 20.jpg",
    },
    {
      title: "Invoker Labs",
      link: "https://www.instagram.com/devdescom",
      thumbnail: "/assets/Design 21.jpg",
    },
  ];