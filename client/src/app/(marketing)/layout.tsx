import React from 'react';
import { Jost } from 'next/font/google';
import { NavBar } from "@/components/index";


const jost = Jost({
    subsets: ['latin'],
    weight: ['200', '300', '400', '500', '600', '700', '800', '900'],
});

interface Props {
    children: React.ReactNode;
}

const MarketingLayout = ({ children }: Props) => {
    return (
        <div className={`flex flex-col items-center w-full ${jost.className}`}>
            <NavBar />
            {children}
        </div>
    )
};

export default MarketingLayout
