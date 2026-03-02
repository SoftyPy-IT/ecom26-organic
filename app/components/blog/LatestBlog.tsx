import Link from 'next/link';
import Image from 'next/image';
import { getAllBlogs } from '@/actions/quires/blog.api';
import { TBlog } from '@/app/redux/types/TBlog';
import { formatDate } from '@/app/utils/TimeFormat';

interface Props {
  title: string;
}

export default async function LatestBlog({ title }: Props) {
  const { data: blogData } = await getAllBlogs('limit=6&sort=-createdAt');

  return (
    <div>
      <h2 className="text-2xl font-bold border-b border-gray-200">{title}</h2>
      <div className="flex flex-col gap-4 pt-4">
        {blogData.map((blog: TBlog, idx: number) => (
          <Link href={`/blog/${blog.slug}`} key={idx}>
            <div className="flex items-center gap-4 border border-gray-200 transition p-2 hover:shadow-md">
              <Image
                src={blog.thumbnail || ''}
                alt={blog.title || ''}
                width={100}
                height={100}
                className="object-cover"
              />
              <div>
                <h3 className="font-semibold">{blog.title || ''}</h3>
                <p className="text-sm text-gray-500">{formatDate(blog.createdAt)}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
