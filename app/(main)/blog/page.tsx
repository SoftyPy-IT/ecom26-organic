import { getAllBlogs } from '@/actions/quires/blog.api';
import BlogList from '@/app/components/blog/BlogList';
import Container from '@/app/components/shared/Container';
import DataNotFound from '@/app/components/shared/DataNotFound';

interface PageProps {
  searchParams: Promise<{
    searchTerm: string;
    limit: string;
    page: string;
    sort: string;
    range: string;
  }>;
}

export default async function page({ searchParams }: PageProps) {
  const { searchTerm, limit, page, sort, range } = await searchParams;

  const query = new URLSearchParams();
  if (searchTerm) query.set('searchTerm', searchTerm);
  if (limit) query.set('limit', limit);
  if (page) query.set('page', page);
  if (sort) query.set('sort', sort);
  if (range) query.set('range', range);

  const response = await getAllBlogs(query.toString());

  if (!response) {
    return <DataNotFound />;
  }

  return (
    <Container className="px-2 2xl:px-0">
      <BlogList payload={response} />
    </Container>
  );
}
