import { getProductBySlug } from '@/actions/quires/product.api';
import ViewDetails from '@/app/components/cards/ViewDetails';
import RelatedProducts from '@/app/components/products/RelatedProducts';
import Container from '@/app/components/shared/Container';

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function page({ params }: Props) {
  const { slug } = await params;
  const { data } = await getProductBySlug(slug);


  return (
    <Container className="px-2 2xl:px-0 py-10">
      <ViewDetails payload={data?.product} />
      <RelatedProducts payload={data?.relatedProducts} />
    </Container>
  );
}
