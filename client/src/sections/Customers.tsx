/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { Container, Wrapper } from '@/components';
import SectionBadge from '@/components/ui/section-badge';
import Marquee from '@/components/ui/marquee';
import { clients, reviews } from '@/constants';
import { User } from 'lucide-react';
import Image from 'next/image';


export default function Customers() {
  return (
    <Wrapper className='flex flex-col items-center justify-center relative py-12 mt-20'>
      {/* Heading & Subtitle */}
        <Container>
            <div className="mx-auto text-center">
                <SectionBadge title="Clients & Reviews" />
                <h3 className="md:text-3xl text-2xl mt-10">What Our Clients Say About Us</h3>
                <p className="text-muted-foreground mt-3 text-lg">Discover our trusted clients and how they’ve benefited from our expertise. Read their testimonials to see why they chose us</p>
            </div>
        </Container>

        {/* Clients & Reviews*/}
        <Container>
          <div className="w-full py-8 md:pb-16 md:pt-12">
            <div className="relative flex flex-col h-full w-full items-center justify-center py-10 overflow-hidden">
              <Marquee pauseOnHover={true} className="[--duration:20s] select-none">
                {
                  reviews.map((review, index) => (
                    <figure key={index} className="relative w-full md:w-1/2 cursor-pointer rounded-xl overflow-hidden p-4 border border-zinc-50/[.1] bg-background hover:bg-zinc-50/[.05] transition-all duration-300">
                      <div className="flex flex-row items-center gap-3">
                        <User className="h-6 w-6" />
                        <div className='flex flex-col'>
                          <figcaption className='font-medium'>{review.name}</figcaption>
                          <p className='text-sm font-medium text-muted-foreground'>{review.username}</p>
                        </div>
                      </div>
                      <blockquote className="text-sm mt-2 text-gray-400">{review.body}</blockquote>
                    </figure>
                  ))
                }
              </Marquee>
              <Marquee reverse pauseOnHover={true} className="[--duration:20s] select-none">
                {
                  clients.map((client, index) => (
                    <div key={index} className="mt-6 relative flex flex-col items-center justify-between gap-3 cursor-pointer rounded-xl overflow-hidden p-4 bg-background">
                      <div className="h-20">
                        <img
                          src={client.logo} 
                          alt={client.title}
                          className='grayscale h-full hover:grayscale-0 hover:scale-[1.02] transition-all duration-300'
                        />
                      </div>
                      <p>{client.title}</p>
                    </div>
                  ))
                }
              </Marquee>

              {/* Dark Gradient */}
              <div className="pointer-events-none absolute left-0 inset-y-0 w-1/3 bg-gradient-to-r from-background"></div>
              <div className="pointer-events-none absolute right-0 inset-y-0 w-1/3 bg-gradient-to-l from-background"></div>
            </div>
          </div>
        </Container>
    </Wrapper>
  )
}
