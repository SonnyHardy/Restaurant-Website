import Link from 'next/link';
import Logo from './Logo';
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="bg-custom-grey text-light-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="col-span-1 md:col-span-1">
            <div className="mb-4">
              <Logo />
            </div>
            <p className="mt-4 text-gray-400">
              Genießen Sie authentische italienische Küche in einer gemütlichen Atmosphäre. Wir verwenden nur die frischesten Zutaten für ein unvergessliches Geschmackserlebnis.
            </p>
          </div>

          {/* Contact Info */}
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-xl font-bold mb-4 text-accent-yellow">Kontakt</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <MapPin className="mr-2 text-accent-red" size={18} />
                <span>Hauptstraße 123, 10115 Berlin</span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 text-accent-red" size={18} />
                <span>+49 30 123456789</span>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 text-accent-red" size={18} />
                <span>info@pizzaria-delizioso.de</span>
              </li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-xl font-bold mb-4 text-accent-yellow">Öffnungszeiten</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Clock className="mr-2 text-accent-red" size={18} />
                <div>
                  <p>Montag - Freitag</p>
                  <p>12:00 - 22:00 Uhr</p>
                </div>
              </li>
              <li className="flex items-center">
                <Clock className="mr-2 text-accent-red" size={18} />
                <div>
                  <p>Samstag & Sonntag</p>
                  <p>13:00 - 23:00 Uhr</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-xl font-bold mb-4 text-accent-yellow">Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-accent-yellow transition-colors duration-200">
                  Startseite
                </Link>
              </li>
              <li>
                <Link href="/menu" className="hover:text-accent-yellow transition-colors duration-200">
                  Speisekarte
                </Link>
              </li>
              <li>
                <Link href="/#about" className="hover:text-accent-yellow transition-colors duration-200">
                  Über uns
                </Link>
              </li>
              <li>
                <Link href="/#reviews" className="hover:text-accent-yellow transition-colors duration-200">
                  Bewertungen
                </Link>
              </li>
            </ul>

            {/* Social Media */}
            <div className="mt-6">
              <h4 className="text-lg font-medium mb-3">Folgen Sie uns</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-light-white hover:text-accent-yellow transition-colors duration-200">
                  <Facebook size={24} />
                </a>
                <a href="#" className="text-light-white hover:text-accent-yellow transition-colors duration-200">
                  <Instagram size={24} />
                </a>
                <a href="#" className="text-light-white hover:text-accent-yellow transition-colors duration-200">
                  <Twitter size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Pizzaria Delizioso. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  );
}
