import Head from 'next/head';
import HeroSlider from '../components/HeroSlider';
import StorySection from '../components/StorySection';
import ReviewSection from '../components/ReviewSection';

export default function Home() {
  return (
    <>
      <Head>
        <title>Pizzaria Delizioso | Authentische italienische Küche</title>
        <meta name="description" content="Genießen Sie authentische italienische Küche in unserem gemütlichen Restaurant. Hausgemachte Pasta, traditionelle Pizzen und erlesene Weine." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <HeroSlider />
        <StorySection />
        <ReviewSection />
      </main>
    </>
  );
}
