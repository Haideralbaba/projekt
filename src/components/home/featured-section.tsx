import { Button } from '@/components/ui/button';

const FEATURED_DESIGNS = [
  {
    id: 1,
    title: 'Modern Logo Template',
    image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&q=80&w=500',
    price: 49.99,
    category: 'Logos',
  },
  {
    id: 2,
    title: 'Social Media Kit',
    image: 'https://images.unsplash.com/photo-1611162616475-46b635cb6868?auto=format&fit=crop&q=80&w=500',
    price: 29.99,
    category: 'Social Media',
  },
  {
    id: 3,
    title: 'Business Card Design',
    image: 'https://images.unsplash.com/photo-1589041127168-bf8a4988d809?auto=format&fit=crop&q=80&w=500',
    price: 19.99,
    category: 'Print',
  },
];

export function FeaturedSection() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="mb-8 text-3xl font-bold">Featured Designs</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {FEATURED_DESIGNS.map((design) => (
            <div
              key={design.id}
              className="overflow-hidden rounded-lg border bg-white shadow-sm transition-all hover:shadow-md"
            >
              <img
                src={design.image}
                alt={design.title}
                className="h-48 w-full object-cover"
              />
              <div className="p-4">
                <div className="mb-2 text-sm text-gray-500">{design.category}</div>
                <h3 className="mb-2 text-lg font-semibold">{design.title}</h3>
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold">${design.price}</span>
                  <Button size="sm">Add to Cart</Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}