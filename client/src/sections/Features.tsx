import { Container, Wrapper } from '@/components';
import SectionBadge from '@/components/ui/section-badge';
import { perks } from '@/constants';
import React from 'react';

export default function Features() {
  return (
    <Wrapper className='flex flex-col items-center justify-center relative py-12 mt-20'>
      {/* Title & Subtitle */}
        <Container>
            <div className="mx-auto text-center">
                <SectionBadge title="Our Core Values & Principles" />
                <h3 className="md:text-3xl text-2xl mt-10">Your success is our priority, so we deliver excellence through creativity and innovation</h3>
            </div>
        </Container>

        {/* Features */}
        <Container>
            <div className="flex flex-col items-center justify-center py-10 md:py-20 w-full">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full divide-x-0 md:divide-x divide-y md:divide-y-0 divide-gray-900 first:border-gray-900 lg:first:border-none">
                {
                  perks.map((feature, index) => {
                    return (
                      <div key={index} className="flex flex-col items-start p-4 md:py-6 lg:p-8">
                        <feature.icon className='w-8 h-8' />
                        <h3 className="text-lg font-medium mt-4">{feature.title}</h3>
                        <p className="text-start mt-2 text-muted-foreground">{feature.info}</p>
                      </div>
                    );
                  })
                }
              </div>
            </div>
        </Container>
    </Wrapper>
  )
}
