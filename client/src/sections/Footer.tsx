"use client";
import React from 'react';
import { Container, Wrapper } from '@/components';
import { LampContainer } from '@/components/ui/lamp';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { TextRevealCard, TextRevealCardDescription, TextRevealCardTitle } from "@/components/ui/text-reveal-card";

export default function Footer() {
  return (
    <Wrapper className="flex flex-col items-center justify-center py-2 relative mt-20">
      {/* Lamp Effect */}
      <Container>
        <LampContainer>
          <div id="footer" className="flex flex-col items-center justify-center w-full relative text-center">
            <h2 className='text-4xl lg:text-5xl xl:text-6xl lg:!leading-snug'>Made With ❤️ By Akhatar Mourad</h2>
            <p className='text-xl text-muted-foreground mt-4 mx-auto'>AI & Data Science Engineer | Full Stack Developer | Graphic Designer</p>
          </div>
        </LampContainer>
      </Container>

      {/* Contact Form */}
      <Container className="relative z-[999]">
        <div className='flex items-center justify-center w-full -mt-32'>
          <div className="flex flex-col md:flex-row items-start justify-start md:justify-between gap-10 md:gap-0 w-full p-4 md:p-8 rounded-lg md:rounded-2xl border border-border/80">
            {/* Title & Description */}
            <div className="flex flex-col items-start w-full gap-3">
              <h4 className="text-xl md:text-2xl font-semibold">Contact Us By Email</h4>
              <p className="text-base text-muted-foreground">It&apos;s time to ge the plan that fits your business</p>
            </div>

            {/* Form Input */}
            <div className="flex flex-col items-start gap-2 w-full">
              <form className='flex flex-col md:flex-row items-center gap-2 w-full'>
                <Input className='outline-none focus-visible:ring-0 focus-visible:ring-transparent focus-visible:border-primary duration-300 w-full' placeholder='Your message here...' />
                <Button className='w-full md:w-max' variant="secondary">Send Email</Button>
              </form>
            </div>
          </div>
        </div>
      </Container>

      <Container>
        <div className="flex items-center justify-center h-[40rem] rounded-2xl w-full">
          <TextRevealCard
            text="You Have a Vision ?"
            revealText="Let&apos;s make it happen"
          >
            <TextRevealCardTitle>
              Sometimes, we should appreciate the effort behind the scenes
            </TextRevealCardTitle>
            <TextRevealCardDescription>
              Hover over this card to uncover something special !
            </TextRevealCardDescription>
          </TextRevealCard>
        </div>
      </Container>
    </Wrapper>
  )
}
