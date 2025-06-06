import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function HeroSlider() {
  const slides = [
    {
      id: 1,
      image: 'https://img.freepik.com/photos-gratuite/trois-amis-ensemble-manger-pizza-dans-cafe_1303-26152.jpg',
      title: 'Authentische italienische Küche',
      subtitle: 'Erleben Sie einen Hauch von Italien in jedem Bissen',
      ctaText: 'Menü entdecken',
      ctaLink: '/menu',
    },
    {
      id: 2,
      image: 'https://img.freepik.com/photos-gratuite/pizza-pepperoni-table_140725-5396.jpg',
      title: 'Hausgemachte Pizzen',
      subtitle: 'Mit frischen Zutaten und traditionellem Rezept',
      ctaText: 'Bestellen',
      ctaLink: '/menu',
    },
    {
      id: 3,
      image: 'https://img.freepik.com/photos-premium/pizza-fraichement-cuite-champignons-pepperoni-olives-du-basilic_715003-13553.jpg',
      title: 'Gemütliche Atmosphäre',
      subtitle: 'Perfekt für Familienfeiern und romantische Abendessen',
      ctaText: 'Tisch reservieren',
      ctaLink: '/#contact',
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="relative h-screen overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
        >
          <div className="relative h-full w-full">
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              priority={index === 0}
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-custom-grey via-transparent to-transparent opacity-90"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
              <h1 className="text-4xl md:text-6xl font-bold text-light-white mb-4 max-w-3xl">
                {slide.title}
              </h1>
              <p className="text-xl md:text-2xl text-light-white mb-8 max-w-2xl">
                {slide.subtitle}
              </p>
              <Link 
                href={slide.ctaLink}
                className="btn btn-primary">
                {slide.ctaText}
              </Link>
            </div>
          </div>
        </div>
      ))}

      {/* Slide Indicators */}
      <div className="absolute bottom-10 left-0 right-0 flex justify-center gap-3 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-3 w-3 rounded-full ${index === currentSlide ? 'bg-accent-yellow' : 'bg-light-white/50'} transition-all duration-300`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
