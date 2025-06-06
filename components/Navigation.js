import { useState, useEffect } from 'react';
import Link from 'next/link';
import Logo from './Logo';
import { Menu, X } from 'lucide-react';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${hasScrolled ? 'bg-custom-grey/95 shadow-md' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Logo />

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <NavLink href="/" text="Startseite" hasScrolled={hasScrolled} />
            <NavLink href="/menu" text="Speisekarte" hasScrolled={hasScrolled} />
            <NavLink href="/#about" text="Über uns" hasScrolled={hasScrolled} />
            <NavLink href="/#reviews" text="Bewertungen" hasScrolled={hasScrolled} />
            <Link href="/#contact" 
              className="btn btn-primary">
              Reservieren
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-custom-grey" onClick={toggleMenu}>
            {isMenuOpen ? (
              <X size={32} className="text-light-white" />
            ) : (
              <Menu size={32} className={hasScrolled ? "text-light-white" : "text-custom-grey"} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden bg-custom-grey/95 py-6 px-4">
          <div className="flex flex-col space-y-4">
            <MobileNavLink href="/" text="Startseite" onClick={toggleMenu} />
            <MobileNavLink href="/menu" text="Speisekarte" onClick={toggleMenu} />
            <MobileNavLink href="/#about" text="Über uns" onClick={toggleMenu} />
            <MobileNavLink href="/#reviews" text="Bewertungen" onClick={toggleMenu} />
            <Link href="/#contact" 
              className="btn btn-primary text-center mt-4"
              onClick={toggleMenu}>
              Reservieren
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}

function NavLink({ href, text, hasScrolled }) {
  return (
    <Link href={href}
      className={`text-lg font-medium relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-accent-yellow hover:after:w-full after:transition-all after:duration-200 ${hasScrolled ? 'text-light-white' : 'text-custom-grey'}`}>
      {text}
    </Link>
  );
}

function MobileNavLink({ href, text, onClick }) {
  return (
    <Link href={href}
      className="text-xl font-medium text-light-white py-2 border-b border-accent-red/20"
      onClick={onClick}>
      {text}
    </Link>
  );
}
