import Image from 'next/image'
import SectionHeader from '../shared/SectionHeader'
import Container from '../shared/Container'
import Link from 'next/link'

export default function Category() {
  const categories = [
    { id: 1, name: 'Fruits', image: 'https://freebw.com/templates/oragnive-v1/images/bg-item-02.jpg', items: 10 },
    { id: 2, name: 'Vegetables', image: 'https://freebw.com/templates/oragnive-v1/images/bg-item-01.jpg', items: 15 },
    { id: 3, name: 'Fruit Juice', image: 'https://freebw.com/templates/oragnive-v1/images/bg-item-03.jpg', items: 20 },
    { id: 4, name: 'Dried', image: 'https://freebw.com/templates/oragnive-v1/images/bg-item-04.jpg', items: 25 },
  ]

  return (
    <div className='px-2 2xl:px-0'>
      <SectionHeader title="Categories" subtitle="Explore our categories" />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4  mt-8">
        {categories.map((category) => (
          <Link
            key={category.id}
            href={`/shop?category=${category.name}`}
            className="relative w-full h-full aspect-square overflow-hidden group cursor-pointer"
          >
            {/* Category Image */}
            <Image
              src={category.image}
              alt={category.name}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-110"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50 group-hover:bg-black/50 transition-colors duration-300" />

            {/* Category Name and Items */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white pointer-events-none">
              <h3 className="text-4xl font-bold">{category.name}</h3>
              <p className="text-xl font-semibold mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {category.items} Items
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
