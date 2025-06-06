import Link from 'next/link';

export default function Logo() {
  return (
    <Link href="/" 
      className="bg-accent-yellow px-6 py-3 rounded-md hover:scale-105 transition-all duration-300 inline-block">
      <div className="flex font-lilita text-2xl uppercase tracking-wider gap-2 relative">
        <div className="absolute -left-1 -bottom-1 z-0 text-custom-grey">PIZZARIA</div>
        <div className="relative z-10 text-light-white">PIZZARIA</div>
      </div>
      <div className="flex font-lilita text-2xl uppercase tracking-wider gap-2 relative mt-1">
        <div className="absolute -left-1 -bottom-1 z-0 text-custom-grey">DELIZIOSO</div>
        <div className="relative z-10 text-light-white">DELIZIOSO</div>
      </div>
    </Link>
  );
}
