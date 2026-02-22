import SeeMore from '../buttons/SeeMore';
import Container from '../shared/Container';
import OfferedProducts from './OfferedProducts'

export default function HighlightedProducts() {
  const specialProducts = [
    {
      id: 1,
      name: "Cabbage",
      price: 100,
      image: "https://freebw.com/templates/oragnive-v1/images/product-09.jpg",
    },
    {
      id: 2,
      name: "Broccoli",
      price: 200,
      image: "https://freebw.com/templates/oragnive-v1/images/product-10.jpg",
    },
    {
      id: 3,
      name: "Carrot",
      price: 300,
      image: "https://freebw.com/templates/oragnive-v1/images/product-11.jpg",
    },
    {
      id: 4,
      name: "Capsicum",
      price: 400,
      image: "https://freebw.com/templates/oragnive-v1/images/product-12.jpg",
    },
    {
      id: 5,
      name: "Capsicum",
      price: 400,
      image: "https://freebw.com/templates/oragnive-v1/images/product-12.jpg",
    },
    {
      id: 6,
      name: "Capsicum",
      price: 400,
      image: "https://freebw.com/templates/oragnive-v1/images/product-12.jpg",
    },
  ];

  const popularProducts = [
    {
      id: 1,
      name: "Cabbage",
      price: 100,
      image: "https://freebw.com/templates/oragnive-v1/images/product-09.jpg",
    },
    {
      id: 2,
      name: "Broccoli",
      price: 200,
      image: "https://freebw.com/templates/oragnive-v1/images/product-10.jpg",
    },
    {
      id: 3,
      name: "Carrot",
      price: 300,
      image: "https://freebw.com/templates/oragnive-v1/images/product-11.jpg",
    },
    {
      id: 4,
      name: "Capsicum",
      price: 400,
      image: "https://freebw.com/templates/oragnive-v1/images/product-12.jpg",
    },
    {
      id: 5,
      name: "Capsicum",
      price: 400,
      image: "https://freebw.com/templates/oragnive-v1/images/product-12.jpg",
    },
    {
      id: 6,
      name: "Capsicum",
      price: 400,
      image: "https://freebw.com/templates/oragnive-v1/images/product-12.jpg",
    },

  ];

  const randomProducts = [
    {
      id: 1,
      name: "Cabbage",
      price: 100,
      image: "https://freebw.com/templates/oragnive-v1/images/product-09.jpg",
    },
    {
      id: 2,
      name: "Broccoli",
      price: 200,
      image: "https://freebw.com/templates/oragnive-v1/images/product-10.jpg",
    },
    {
      id: 3,
      name: "Carrot",
      price: 300,
      image: "https://freebw.com/templates/oragnive-v1/images/product-11.jpg",
    },
    {
      id: 4,
      name: "Capsicum",
      price: 400,
      image: "https://freebw.com/templates/oragnive-v1/images/product-12.jpg",
    },
    {
      id: 5,
      name: "Capsicum",
      price: 400,
      image: "https://freebw.com/templates/oragnive-v1/images/product-12.jpg",
    },
    {
      id: 6,
      name: "Capsicum",
      price: 400,
      image: "https://freebw.com/templates/oragnive-v1/images/product-12.jpg",
    },
  ];

  return (
    <Container className='px-2 2xl:px-0'>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <OfferedProducts title1='Special' title2='Products' subtitle='Special Products' products={specialProducts} />
        <OfferedProducts title1='Popular' title2='Products' subtitle='Popular Products' products={popularProducts} />
        <OfferedProducts title1='Random' title2='Products' subtitle='Random Products' products={randomProducts} />
      </div>
      <SeeMore href="/shop" title='View All Products' />
    </Container>
  );
}
