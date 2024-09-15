import { Icons } from '@/components/index';
import { buttonVariants } from '@/components/ui/button';
import Link from 'next/link';

const NavBar = () => {
    return (
        <header className="bg-background/40 w-full px-4 h-16 sticky top-0 inset-x-0 backdrop-blur-lg border-b border-border z-50">
            <div className="flex justify-between items-center h-full mx-auto md:max-w-screen-xl">
                {/* Logo & Name */}
                <div className="flex flex-start">
                    <Link href={'https://akhatarmourad.github.io/portfolio/'} className='flex items-center gap-3'>
                        <Icons.logo className='w-6 h-6' />
                        <span className='text-xl font-medium'>M. Akhatar</span>
                    </Link>
                </div>

                {/* Navigation Links */}
                <nav className='hidden md:flex absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                    <ul className='flex justify-center items-center gap-8'>
                        <li className='hover:bg-foreground/10 transition-all duration-300 rounded-full px-4 py-2'>
                            <Link href={'#'}>Home</Link>
                        </li>
                        <li className='hover:bg-foreground/10 transition-all duration-300 rounded-full px-4 py-2'>
                            <Link href={'#'}>About</Link>
                        </li>
                        <li className='hover:bg-foreground/10 transition-all duration-300 rounded-full px-4 py-2'>
                            <Link href={'#'}>Services</Link>
                        </li>
                        <li className='hover:bg-foreground/10 transition-all duration-300 rounded-full px-4 py-2'>
                            <Link href={'#'}>Contact</Link>
                        </li>
                    </ul>
                </nav>

                {/* Contact Button */}
                <div className="flex items-center">
                    <Link href={'https://www.instagram.com/devdescom'} className={buttonVariants({})}>Get In Touch</Link>
                </div>
            </div>
        </header>
    );
}

export default NavBar;