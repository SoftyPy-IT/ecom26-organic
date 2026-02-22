import SectionHeader from '../shared/SectionHeader'
import Container from '../shared/Container'
import ProductCards_1 from '../cards/ProductCards_1'
import SeeMore from '../buttons/SeeMore'

export const featuredProducts = [
  {
    id:1,
    title: "Red pumpkin",
    image: "https://freebw.com/templates/oragnive-v1/images/product-01.jpg",
    price: 4,
  },
  {
    id:2,
    title: "Strawberry",
    image: "https://freebw.com/templates/oragnive-v1/images/product-02.jpg",
    price: 8,
  },
  {
    id:3,
    title: "Cauliflower",
    image: "https://freebw.com/templates/oragnive-v1/images/product-03.jpg",
    price: 10,
  },
  {
    id:4,
    title: "Vegetable",
    image: "https://freebw.com/templates/oragnive-v1/images/product-04.jpg",
    price: 12,
  },
  {
    id:5,
    title: "Bell pepper",
    image: "https://freebw.com/templates/oragnive-v1/images/product-05.jpg",
    price: 12,
  },
  {
    id:6,
    title: "Beetroot",
    image: "https://freebw.com/templates/oragnive-v1/images/product-06.jpg",
    price: 12,
  },
  {
    id:7,
    title: "Cabbage",
    image: "https://freebw.com/templates/oragnive-v1/images/product-07.jpg",
    price: 12,
  },
  {
    id:8,
    title: "Tomato",
    image: "https://freebw.com/templates/oragnive-v1/images/product-08.jpg",
    price: 12,
  },
  {
    id:9,
    title: "Tomato",
    image: "https://freebw.com/templates/oragnive-v1/images/product-19.jpg",
    price: 12,
  },
  {
    id:10,
    title: "Tomato",
    image: "https://freebw.com/templates/oragnive-v1/images/product-20.jpg",
    price: 12,
  },
  {
    id:11,
    title: "Tomato",
    image: "https://freebw.com/templates/oragnive-v1/images/product-21.jpg",
    price: 12,
  },
  {
    id:12,
    title: "Tomato",
    image: "https://freebw.com/templates/oragnive-v1/images/product-22.jpg",
    price: 12,
  },

]

export default function FeaturedProducts() {

  return (
    <Container className='px-2 2xl:px-0'>
      <SectionHeader title="Featured Products" subtitle="Check out our featured products" />
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
        {featuredProducts.map((item) => (
          <ProductCards_1 key={item.id} title={item.title} image={item.image} price={item.price} />
        ))}
      </div>
      <SeeMore href="/shop" title='View All Products' />
    </Container>
  )
}
