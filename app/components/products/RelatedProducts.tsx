import OfferedProducts from './OfferedProducts';

export default function RelatedProducts() {
  const products = [
    {
      id: 1,
      name: 'Product 1',
      price: 10,
      image: 'https://freebw.com/templates/oragnive-v1/images/product-11.jpg',
    },
    {
      id: 2,
      name: 'Product 2',
      price: 20,
      image: 'https://freebw.com/templates/oragnive-v1/images/product-12.jpg',
    },
    {
      id: 3,
      name: 'Product 3',
      price: 30,
      image: 'https://freebw.com/templates/oragnive-v1/images/product-13.jpg',
    },
    {
      id: 4,
      name: 'Product 4',
      price: 40,
      image: 'https://freebw.com/templates/oragnive-v1/images/product-14.jpg',
    },
    {
      id: 5,
      name: 'Product 4',
      price: 40,
      image: 'https://freebw.com/templates/oragnive-v1/images/product-14.jpg',
    },
    {
      id: 6,
      name: 'Product 4',
      price: 40,
      image: 'https://freebw.com/templates/oragnive-v1/images/product-14.jpg',
    },
    {
      id: 7,
      name: 'Product 4',
      price: 40,
      image: 'https://freebw.com/templates/oragnive-v1/images/product-14.jpg',
    },
    {
      id: 8,
      name: 'Product 4',
      price: 40,
      image: 'https://freebw.com/templates/oragnive-v1/images/product-14.jpg',
    },
  ];
  return (
    <div>
      <OfferedProducts rows={2} preview={2} title1='Related' title2='Products' subtitle='Related Products' products={products} />
    </div>
  )
}
