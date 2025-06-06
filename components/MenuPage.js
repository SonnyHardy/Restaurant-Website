import Image from 'next/image';

export default function MenuPage() {
  const menuItems = [
    {
      id: 1,
      name: 'Pizza Margherita',
      description: 'Klassische Pizza mit Tomatensoße, Mozzarella und frischem Basilikum',
      price: 9.90,
      image: 'https://img.freepik.com/photos-gratuite/pizza-pepperoni-table_140725-5396.jpg',
      tag: 'Klassiker'
    },
    {
      id: 2,
      name: 'Pizza Diavola',
      description: 'Scharfe Pizza mit Tomatensoße, Mozzarella, scharfer Salami und frischen Chilis',
      price: 12.90,
      image: 'https://img.freepik.com/photos-premium/pizza-fraichement-cuite-champignons-pepperoni-olives-du-basilic_715003-13553.jpg',
      tag: 'Scharf'
    },
    {
      id: 3,
      name: 'Pasta Carbonara',
      description: 'Cremige Pasta mit Speck, Ei, Parmesan und frischem Pfeffer',
      price: 13.50,
      image: 'https://img.freepik.com/photos-gratuite/trois-amis-ensemble-manger-pizza-dans-cafe_1303-26152.jpg',
      tag: 'Pasta'
    },
    {
      id: 4,
      name: 'Insalata Mista',
      description: 'Gemischter Salat mit Kirschtomaten, Gurke, roter Zwiebel und Balsamico-Dressing',
      price: 8.50,
      image: 'https://img.freepik.com/photos-gratuite/pizza-pepperoni-table_140725-5396.jpg',
      tag: 'Vegetarisch'
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
      {menuItems.map((item) => (
        <div key={item.id} className="bg-white rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-all duration-300">
          <div className="relative h-64 overflow-hidden">
            <Image
              src={item.image}
              alt={item.name}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute top-4 right-4 bg-accent-yellow text-custom-grey py-1 px-3 rounded-full text-sm font-bold">
              {item.tag}
            </div>
          </div>

          <div className="p-6">
            <div className="flex justify-between items-center mb-3">
              <h3 className="text-2xl font-bold">{item.name}</h3>
              <span className="text-xl font-bold text-accent-red">{item.price.toFixed(2)} €</span>
            </div>

            <p className="text-gray-600 mb-4">{item.description}</p>

            <button 
              className="w-full bg-accent-red text-light-white py-2 rounded-md font-medium hover:shadow-md hover:shadow-accent-red/30 transition-all duration-300 hover:translate-y-[-2px]">
              Bestellen
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
