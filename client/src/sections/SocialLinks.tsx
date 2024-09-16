/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { ContainerScroll } from '@/components/ui/container-scroll-animation';
import Link from 'next/link';

export default function SocialLinks() {
  return (
    <div id="github" className="flex flex-col gap-32">
      <ContainerScroll
        titleComponent={
            <h1 className="text-4xl font-semibold text-white">
              Find Us On Instagram <br />
              <span className="text-4xl md:text-[5rem] font-bold mt-3 leading-none">
                Highlights & Showcases
              </span>
            </h1>
        }
      >
        <Link href={'https://www.instagram.com/devdescom'}>
          <img
            src={`/assets/DEVDES.png`}
            alt="hero"
            height={720}
            width={1400}
            className="mx-auto rounded-2xl object-cover h-full object-left-top"
            draggable={false}
          />
        </Link>

        {/* Spotlights */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 w-full h-full blur-[15rem] inset-0 bg-gradient-to-r from-sky-600 to-fuchsia-600"></div>
      </ContainerScroll>

      <Link href={'https://github.com/akhatarmourad'}>
        <div className='z-50 flex-col items-center bg-[#0D1117] py-12 rounded-2xl w-full'>
          <h2 className="text-2lx md:text-3xl lg:text-4xl font-medium mb-2 text-center">Discover My GitHub Account</h2>
          <p className='text-muted-foreground mb-14 text-center'>Access & Browse Repositories for a Wide Range of Projects with Source Code in Various Specializations</p>
          <img 
              src={`/assets/Github-V1.png`}
              alt="Github Screenshot"
              className="mx-auto rounded-2xl object-cover h-full object-left-top"
          />
        </div>
      </Link>
    </div>
  )
}
