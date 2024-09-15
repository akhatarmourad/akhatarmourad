import React from 'react';
import { Container, Icons, Wrapper } from '@/components';
import SectionBadge from '@/components/ui/section-badge';
import { pricingCards } from '@/constants';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { Zap } from 'lucide-react';
import Link from 'next/link';

export default function Plans() {
  return (
    <Wrapper className='flex flex-col items-center justify-center relative py-12 mt-20'>
      {/* Heading & Subtitle */}
        <Container>
            <div className="mx-auto text-center">
                <SectionBadge title="Our Plans & Services" />
                <h3 className="md:text-3xl text-2xl mt-10">Discover Our Powerful Services</h3>
                <p className="text-muted-foreground mt-3 text-lg">Mourad offers a wide range of services to help you seamlessly integrate digitalization into your business</p>
            </div>
        </Container>

        {/* Stars & Lights */}
        <Container>
          <div className="flex items-center justify-center mx-auto mt-8">
            <Icons.feature className="h-80 w-auto" />
          </div>
        </Container>

        {/* Cards */}
        <Container className='flex items-center justify-center'>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full md:gap-8 py-10 md:py-20 flex-wrap">
            {
              pricingCards.map((card, index) => {
                return (
                  <Card 
                    key={index}
                    className={cn("flex flex-col w-full border-neutral-700 hover:-translate-y-2 transition-all duration-300", card.title === "Software Development" && "border border-primary")}
                  >
                    <CardHeader className='border-b-2 border-border'>
                      <span className='text-2xl'>{card.title}</span>
                      <CardTitle className={cn("text-3xl", card.title === "Software Development" && "text-muted-foreground")}>{card.price}</CardTitle>
                      <CardDescription className='text-md'>{card.description}</CardDescription>
                    </CardHeader>

                    <CardContent className="pt-10 pb-20 space-y-3">
                      {
                        card.features.map((feature, index) => (
                          <div key={index} className="flex items-center gap-2">
                            <Zap className='h-4 w-4 fill-primary text-primary' />
                            <p>{feature}</p>
                          </div>
                        ))
                      }
                    </CardContent>
                    
                    <CardFooter className='w-full mt-auto'>
                      <Link
                        href={'https://www.instagram.com/devdescom'}
                        className={cn('w-full text-center text-primary-foreground bg-primary p-2 rounded-lg', card.title != "Software Development" && '!text-background !bg-foreground')} 
                      >
                        {card.buttonText}
                      </Link>
                    </CardFooter>
                  </Card>
                );
              })
            }
          </div>
        </Container>
    </Wrapper>
  );
}
