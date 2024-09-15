import React from 'react';
import { cn } from '@/lib/utils';

interface Props {
    children: React.ReactNode;
    className?: string;
}

export default function Wrapper({children, className}: Props) {
  return (
    <div className={cn(
        "w-full h-full mx-auto max-w-screen-xl px-4",
        className
    )}>
        {children}
    </div>
  )
}
