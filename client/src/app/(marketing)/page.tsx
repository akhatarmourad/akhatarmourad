import React from "react";
import { Container, Wrapper, Hero, Screen, Features, Plans, Customers, Footer, SocialLinks } from "@/components/index";

const HomePage = () => {
    return (
      <section className="w-full flex justify-center items-center px-4 md:px-0 py-8">
        {/* Hero Section */}
        <Wrapper>
          <Container>
            <div className="flex flex-col items-center justify-center py-20 w-full">
              <Hero />
              <Screen />
              <Features />
              <Plans />
              <Customers />
              <SocialLinks />
              <Footer />
            </div>
          </Container>
        </Wrapper>
      </section>
    );
};

export default HomePage;
