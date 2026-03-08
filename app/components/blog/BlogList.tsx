import BlogCard from '../cards/BlogCard';
import CategoryItems from '../category/CategoryItems';
import QueryAction from '../shared/QueryAction';
import Container from '../shared/Container';
import Pagination from '../shared/Pagination';
import { TBlog, TBlogResponse } from '@/app/redux/types/TBlog';
import LatestBlog from './LatestBlog';
import { getAllCategories } from '@/actions/quires/categories.api';

interface BlogListProps {
  payload: TBlogResponse;
}
export default async function BlogList({ payload }: BlogListProps) {
  const { data: categoryData } = await getAllCategories();
  return (
    <Container className="px-2 2xl:px-0 py-4">
      <div className="flex flex-col-reverse md:flex-row gap-4">
        <div className="w-full  md:w-3/4 flex flex-wrap gap-4">
          <QueryAction isRange={false} />
          {payload?.data?.map((blog: TBlog, idx: number) => (
            <BlogCard key={idx} blog={blog} />
          ))}
          <div className="w-full flex justify-center items-center">
            <Pagination currentPageItemCount={payload?.meta?.limit} pageLimit={10} currentPage={payload?.meta?.page} totalPages={payload?.meta?.totalPage} />
          </div>
        </div>
        <div className="w-full md:w-1/4 lg:sticky top-20 h-fit space-y-6">
          <CategoryItems title="Categories" payload={categoryData} />
          <LatestBlog title="Latest Blog" />
        </div>
      </div>
    </Container>
  );
}
