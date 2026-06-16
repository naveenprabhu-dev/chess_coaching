import Link from 'next/link';
import { Button} from "./ui/button";
// components
import Nav from "./Nav";
import MobileNav from './MobileNav';
import ThemeToggle from './ThemeToggle';

const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-foreground font-heading">
        <div className="container mx-auto flex justify-between items-center">
        {/* logo */}
        <Link href= "/" className="inline-block transition-transform duration-200 ease-out active:scale-90">
        <h1 className="text-2xl md:text-4xl font-semibold whitespace-nowrap">
        <span className="text-accent" > NM </span> Naveen Prabhu
        </h1>
        </Link>
        {/* right side: nav + theme toggle */}
            <div className="flex items-center gap-4 xl:gap-6">
                {/* desktop nav and contact button*/}
                <div className="hidden xl:flex items-center gap-8">
                    <Nav />
                    <Link href="/contact">
                        <Button>Contact</Button>
                    </Link>
                </div>
                {/* mobile nav */}
                <div className="xl:hidden">
                    <MobileNav />
                </div>
                <ThemeToggle />
            </div>
       </div>
    </header>
  );
}

export default Header;