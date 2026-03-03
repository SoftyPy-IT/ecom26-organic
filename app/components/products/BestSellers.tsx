import { IProduct } from '@/app/redux/types/THighlighted';
import BestSellerCard from '../cards/BestSellerCard';

interface Props {
  title?: string;
  products: IProduct[];
}

export default function BestSellers({ title, products }: Props) {

  return (
    <section className="py-8">
      <h2 className="text-2xl font-semibold mb-2 uppercase">{title}</h2>
      <div className="grid grid-cols-1 gap-4">
        {products.map((product: IProduct) => (
          <BestSellerCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
