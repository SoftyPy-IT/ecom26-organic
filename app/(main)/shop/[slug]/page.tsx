import ViewDetails from "@/app/components/cards/ViewDetails";
import RelatedProducts from "@/app/components/products/RelatedProducts";
import Container from "@/app/components/shared/Container";
import ProductReviews from "@/app/components/shared/ProductReviews";

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function page({ params }: Props) {
  const { slug } = await params;

  const viewDetails = {
    title: "Organic Fresh Apple",
    subtitle: "Apples are nutritious. They are a good source of fiber and vitamin C.",
    base_image: {
      _id: "1",
      image: "https://freebw.com/templates/oragnive-v1/images/product-03.jpg",
      thumbnailUrl: "https://freebw.com/templates/oragnive-v1/images/product-03.jpg",
      images: [
        { _id: "2", image: "https://freebw.com/templates/oragnive-v1/images/product-03.jpg", thumbnailUrl: "https://freebw.com/templates/oragnive-v1/images/product-03.jpg" },
        { _id: "3", image: "https://freebw.com/templates/oragnive-v1/images/product-03.jpg", thumbnailUrl: "https://freebw.com/templates/oragnive-v1/images/product-03.jpg" },

      ],
    },
    rating: 5,
    price: 1.99,
    description: "Apples are nutritious. They are a good source of fiber and vitamin C. They are also a good source of antioxidants. Apples are nutritious. They are a good source of fiber and vitamin C. They are also a good source of antioxidants.Apples are nutritious. They are a good source of fiber and vitamin C. They are also a good source of antioxidants.Apples are nutritious. They are a good source of fiber and vitamin C. They are also a good source of antioxidants.",
    category: "Fruits",
    serial: "SKU123",
    stock: 100,
    weight: "1kg",
  };

  return (
    <Container className="px-2 2xl:px-0 py-10">
      <ViewDetails
        title={viewDetails.title}
        subtitle={viewDetails.subtitle}
        base_image={viewDetails.base_image}
        rating={viewDetails.rating}
        price={viewDetails.price}
        description={viewDetails.description}
        category={viewDetails.category}
        serial={viewDetails.serial}
        stock={viewDetails.stock}
        weight={viewDetails.weight}
      />
      <ProductReviews />
      <RelatedProducts />
    </Container>
  );
}
