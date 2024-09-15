import React from 'react';
import { Container, Wrapper } from '@/components';
import { LampContainer } from '@/components/ui/lamp';

export default function Footer() {
  return (
    <Wrapper className="flex flex-col items-center justify-center py-2 relative mt-20">
      {/* Lamp Effect */}
      <Container>
        <LampContainer>
          <div className="flex flex-col items-center justify-center w-full relative text-center">
            <h2 className='text-4xl lg:text-5xl xl:text-6xl lg:!leading-snug'>Made With ❤️ By Akhatar Mourad</h2>
            <p className='text-xl text-muted-foreground mt-4 mx-auto'>AI & Data Science Engineer | Full Stack Developer | Graphic Designer</p>
          </div>
        </LampContainer>
      </Container>

      {/* Contact Form */}
      <Container>
        <div>Newsletter</div>
      </Container>
    </Wrapper>
  )
}
