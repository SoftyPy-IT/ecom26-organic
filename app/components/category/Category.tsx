import SectionHeader from '../shared/SectionHeader'
import CategoryCard from '../cards/CategoryCard'
import SeeMore from '../buttons/SeeMore'

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
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
        {categories.map((category) => (
          <CategoryCard key={category.id} category={category} />
        ))}
      </div>
      <SeeMore href="/categories" title='View All Categories' />
    </div>
  )
}
