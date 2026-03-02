import { getBlogBySlug } from '@/actions/quires/blog.api';
import BlogDetails from '@/app/components/blog/BlogDetails';
import LatestBlog from '@/app/components/blog/LatestBlog';
import Container from '@/app/components/shared/Container';
import CommentForm from '@/app/components/shared/forms/CommentForm';

interface Props {
  params: Promise<{ slug: string }>;
}
export default async function page({ params }: Props) {
  const { slug } = await params;
  const { data: blog } = await getBlogBySlug(slug);

  return (
    <Container className="px-2 2xl:px-0 py-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="col-span-2">
          <BlogDetails blog={blog} />
          <CommentForm />
        </div>
        <div className="col-span-1 sticky top-20 h-fit">
          <LatestBlog title="Related Blog" />
        </div>
      </div>
    </Container>
  );
}
