import Image from 'next/image';
import Link from 'next/link';

export default function StorySection() {
  return (
    <section id="about" className="py-20 bg-light-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Image Column */}
          <div className="w-full md:w-1/2 relative overflow-hidden rounded-lg group">
            <div className="aspect-w-16 aspect-h-12 relative h-[400px]">
              <Image
                src="https://img.freepik.com/photos-gratuite/ancien-chef-pizzeria-portrait-realiste-du-chef-au-travail-livrant-pizzas-fraiches-i_166373-6607.jpg"
                alt="Pizzabäcker bei der Arbeit"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-custom-grey/60 to-transparent opacity-60"></div>
            </div>
            <div className="absolute top-6 left-6 border-l-4 border-t-4 border-accent-yellow h-16 w-16"></div>
            <div className="absolute bottom-6 right-6 border-r-4 border-b-4 border-accent-yellow h-16 w-16"></div>
          </div>

          {/* Content Column */}
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl font-bold mb-4 text-custom-grey">
              Unsere <span className="text-accent-red">Geschichte</span>
            </h2>

            <div className="w-20 h-1 bg-accent-yellow mb-6"></div>

            <p className="mb-6 text-lg">
              Seit über 30 Jahren verwöhnen wir unsere Gäste mit authentischer italienischer Küche. Was als kleines Familienunternehmen begann, ist heute zu einer beliebten Adresse für Liebhaber der italienischen Küche geworden.
            </p>

            <p className="mb-8 text-lg">
              Unsere Rezepte werden seit Generationen weitergegeben und mit Liebe zubereitet. Wir verwenden nur frische, saisonale Zutaten und importieren ausgewählte Spezialitäten direkt aus Italien, um den authentischen Geschmack zu garantieren.
            </p>

            <Link href="/#contact" className="relative overflow-hidden group inline-block">
              <span className="btn bg-accent-yellow text-custom-grey font-bold px-8 py-3 relative z-10 group-hover:text-light-white transition-colors duration-300 inline-flex items-center">
                Tisch reservieren
                <svg className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
              <span className="absolute left-0 top-0 h-full w-0 bg-accent-red transition-all duration-300 group-hover:w-full">
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
