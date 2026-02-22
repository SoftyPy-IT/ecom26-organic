import CategoryCard from '@/app/components/cards/CategoryCard'
import Container from '@/app/components/shared/Container'
import SectionHeader from '@/app/components/shared/SectionHeader'

export default function page() {
  const categories = [
    { id: 1, name: 'Fruits', image: 'https://freebw.com/templates/oragnive-v1/images/bg-item-01.jpg', items: 10 },
    { id: 2, name: 'Vegetables', image: 'https://freebw.com/templates/oragnive-v1/images/bg-item-02.jpg', items: 15 },
    { id: 3, name: 'Fruit Juice', image: 'https://freebw.com/templates/oragnive-v1/images/bg-item-03.jpg', items: 20 },
    { id: 4, name: 'Dried', image: 'https://freebw.com/templates/oragnive-v1/images/bg-item-04.jpg', items: 25 },
    { id: 5, name: 'Fruits', image: 'https://freebw.com/templates/oragnive-v1/images/bg-item-05.jpg', items: 10 },
    { id: 6, name: 'Vegetables', image: 'https://freebw.com/templates/oragnive-v1/images/bg-item-06.jpg', items: 15 },
    { id: 7, name: 'Fruit Juice', image: 'https://freebw.com/templates/oragnive-v1/images/bg-item-07.jpg', items: 20 },
    { id: 8, name: 'Dried', image: 'https://freebw.com/templates/oragnive-v1/images/bg-item-08.jpg', items: 25 },
    { id: 9, name: 'Fruits', image: 'https://freebw.com/templates/oragnive-v1/images/bg-item-09.jpg', items: 10 },
    { id: 10, name: 'Vegetables', image: 'https://freebw.com/templates/oragnive-v1/images/bg-item-02.jpg', items: 15 },
    { id: 11, name: 'Fruit Juice', image: 'https://freebw.com/templates/oragnive-v1/images/bg-item-01.jpg', items: 20 },
    { id: 12, name: 'Dried', image: 'https://freebw.com/templates/oragnive-v1/images/bg-item-04.jpg', items: 25 },
    { id: 13, name: 'Fruits', image: 'https://freebw.com/templates/oragnive-v1/images/bg-item-01.jpg', items: 10 },
    { id: 14, name: 'Vegetables', image: 'https://freebw.com/templates/oragnive-v1/images/bg-item-02.jpg', items: 15 },
    { id: 15, name: 'Fruit Juice', image: 'https://freebw.com/templates/oragnive-v1/images/bg-item-03.jpg', items: 20 },
    { id: 16, name: 'Dried', image: 'https://freebw.com/templates/oragnive-v1/images/bg-item-04.jpg', items: 25 },
    { id: 17, name: 'Fruits', image: 'https://freebw.com/templates/oragnive-v1/images/bg-item-05.jpg', items: 10 },
    { id: 18, name: 'Vegetables', image: 'https://freebw.com/templates/oragnive-v1/images/bg-item-06.jpg', items: 15 },
    { id: 19, name: 'Fruit Juice', image: 'https://freebw.com/templates/oragnive-v1/images/bg-item-07.jpg', items: 20 },
    { id: 20, name: 'Dried', image: 'https://freebw.com/templates/oragnive-v1/images/bg-item-08.jpg', items: 25 },
  ]
  return (
    <Container className='px-2 2xl:px-0'>
      <div className='pb-10'>
        <SectionHeader title='All Categories' subtitle='Categories' />
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6'>
          {categories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </div>
    </Container>
  )
}
