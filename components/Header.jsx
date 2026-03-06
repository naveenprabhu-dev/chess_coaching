import Link from 'next/link';
import { Button} from "./ui/button";
// components
import Nav from "./Nav";
import MobileNav from './MobileNav';

const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-white">
        <div className="container mx-auto flex justify-between items-center">
        {/* logo */}
        <Link href= "/">
        <h1 className="text-2xl md:text-4xl font-semibold whitespace-nowrap"> 
        <span className="text-accent" > NM </span> Naveen Prabhu
        </h1>
        </Link>
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
       </div>
    </header>
  );
}

export default Header;