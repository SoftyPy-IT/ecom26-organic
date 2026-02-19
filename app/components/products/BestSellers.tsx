import BestSellerCard, { Product } from "../cards/BestSellerCard";

export const specialProducts: Product[] = [
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
];

interface Props {
  title?: string;
}

export default function BestSellers({title}: Props) {
  return (
    <section className="py-8">
      <h2 className="text-2xl font-semibold mb-2 uppercase">{title}</h2>
      <div className="grid grid-cols-1 gap-4">
        {specialProducts.map((product) => (
          <BestSellerCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
