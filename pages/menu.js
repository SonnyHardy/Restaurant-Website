import Head from 'next/head';
import MenuPage from '../components/MenuPage';

export default function Menu() {
  return (
    <>
      <Head>
        <title>Unsere Speisekarte | Pizzaria Delizioso</title>
        <meta name="description" content="Entdecken Sie unsere vielfältige Speisekarte mit authentischen italienischen Gerichten, frischen Salaten und hausgemachten Desserts." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-12 text-center">Unsere Speisekarte</h1>
        <MenuPage />
      </div>
    </>
  );
}
