import FeaturedProducts from '../components/Featured/FeaturedProducts';
import Banner from '../components/banner/Banner';
import Blog from '../components/blog/Blog';
import Category from '../components/category/Category';
import HighlightedProducts from '../components/products/HighlightedProducts';
import Offers from '../components/promotional/Offers';
import Welcome from '../components/promotional/Welcome';
import Testimonial from '../components/testimonial/Testimonial';

export default function page() {
  return (
    <>
      <Banner />
      <Welcome />
      <Category />
      <FeaturedProducts />
      <Offers />
      <HighlightedProducts />
      <Testimonial />
      <Blog />
    </>
  );
}
