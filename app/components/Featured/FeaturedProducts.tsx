import SectionHeader from '../shared/SectionHeader';
import Container from '../shared/Container';
import ProductCards_1 from '../cards/ProductCards_1';
import SeeMore from '../buttons/SeeMore';
import { getAllProducts } from '@/actions/quires/product.api';

export default async function FeaturedProducts() {
  const { data } = await getAllProducts();
  const product = data?.data;

  return (
    <Container className="px-2 2xl:px-0">
      <SectionHeader title="Featured Products" subtitle="Check out our featured products" />
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {product?.map((item: any) => (
          <ProductCards_1 key={item._id} payload={item} />
        ))}
      </div>
      <SeeMore href="/shop" title="View All Products" />
    </Container>
  );
}
