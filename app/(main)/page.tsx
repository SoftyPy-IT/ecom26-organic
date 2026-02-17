import FeaturedProducts from '../components/Featured/FeaturedProducts';
import Banner from '../components/banner/Banner';
import Category from '../components/category/Category';
import Offers from '../components/promotional/Offers';
import Welcome from '../components/promotional/Welcome';

export default function page() {
  return (
    <>
      <Banner />
      <Welcome />
      <Category />
      <FeaturedProducts />
      <Offers />
    </>
  );
}
