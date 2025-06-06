export default function ReviewSection() {
  const reviews = [
    {
      id: 1,
      name: 'Marie Schmidt',
      text: 'Die beste Pizza, die ich je gegessen habe! Die Atmosphäre ist gemütlich und das Personal sehr freundlich. Ich komme definitiv wieder!',
      rating: 5
    },
    {
      id: 2,
      name: 'Thomas Weber',
      text: 'Hervorragendes Essen zu einem fairen Preis. Die Pasta mit Meeresfrüchten ist ein Traum und der Service ist immer zuvorkommend.',
      rating: 5
    },
    {
      id: 3,
      name: 'Lisa Müller',
      text: 'Ein echter Geheimtipp! Die Tiramisu ist hausgemacht und schmeckt wie in Italien. Das Restaurant hat eine wunderbare Atmosphäre.',
      rating: 4
    }
  ];

  return (
    <section id="reviews" className="py-20 bg-custom-grey">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-2 text-center text-light-white">
          Was unsere Gäste <span className="text-accent-yellow">sagen</span>
        </h2>

        <div className="w-20 h-1 bg-accent-red mx-auto mb-12"></div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <div 
              key={review.id} 
              className="bg-light-white rounded-lg p-6 shadow-lg hover:scale-105 transition-transform duration-300">
              <div className="border-l-4 border-accent-yellow pl-4 mb-6">
                <p className="text-lg italic">"{review.text}"</p>
              </div>

              <div className="border-t border-gray-200 pt-4 flex justify-between items-center">
                <h4 className="font-bold">{review.name}</h4>
                <div className="text-accent-yellow">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
