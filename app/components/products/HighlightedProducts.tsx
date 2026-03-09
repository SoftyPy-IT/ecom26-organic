import { highlightProduct } from '@/actions/quires/highlighProduct.api';
import Container from '../shared/Container';
import OfferedProducts from './OfferedProducts';
import { ISection } from '@/app/redux/types/THighlighted';
import SeeMore from '../shared/buttons/SeeMore';

export default async function HighlightedProducts() {
  const { data } = await highlightProduct();

  return (
    <Container className="px-2 2xl:px-0">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {data.slice(1, 4).map((section: ISection) => (
          <OfferedProducts
            key={section._id}
            title1={section.title}
            title2={section.subTitle}
            subtitle={section.description}
            products={section.products}
          />
        ))}
      </div>
      <SeeMore href="/shop" title="View All Products" />
    </Container>
  );
}
