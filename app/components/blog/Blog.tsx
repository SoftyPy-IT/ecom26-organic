import { getAllBlogs } from '@/actions/quires/blog.api';
import BlogCard from '../cards/BlogCard';
import Container from '../shared/Container';
import SectionHeader from '../shared/SectionHeader';
import { TBlog } from '@/app/redux/types/TBlog';
import SeeMore from '../shared/buttons/SeeMore';

export default async function Blog() {
  const { data: blogData } = await getAllBlogs('limit=2');

  return (
    <section className="py-10">
      <Container className="px-2 2xl:px-0">
        <SectionHeader title="From our blog" subtitle="Keep Updated With Us" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {blogData.map((blog: TBlog, idx: number) => (
            <BlogCard key={idx} blog={blog} />
          ))}
        </div>
      </Container>
      <SeeMore href="/blog" title="View All Blogs" />
    </section>
  );
}
