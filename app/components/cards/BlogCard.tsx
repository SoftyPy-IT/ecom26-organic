import { TBlog } from '@/app/redux/types/TBlog';
import { formatDate } from '@/app/utils/TimeFormat';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function BlogCard({ blog }: { blog: TBlog }) {
  const { title, description, thumbnail, category, createdAt, slug } = blog;

  return (
    <div className="bg-white border border-gray-200 overflow-hidden hover:shadow-lg transition duration-300 p-4">
      {/* Blog Image */}
      <div className="relative w-full h-96">
        {thumbnail && (
          <Image src={thumbnail} alt={title || 'Blog Image'} fill className="object-cover" />
        )}
      </div>

      {/* Blog Content */}
      <div className="flex flex-col md:flex-row gap-4">
        {/* Author / Date */}
        <div className="flex flex-col items-center justify-center gap-2 bg-[#81b03f] text-white p-2">
          {createdAt && (
            <p className="text-xl font-semibold uppercase tracking-wide">{formatDate(createdAt)}</p>
          )}
          {category && <p className="text-sm">{category}</p>}
        </div>

        {/* Main Content */}
        <div className="flex-1">
          <h2 className="text-xl py-2 md:text-2xl font-bold text-gray-800">{title}</h2>
          {description && (
            <p className="text-gray-600 text-sm md:text-base line-clamp-3">{description}</p>
          )}
          <Link href={`/blog/${slug}`}>
            <button className="text-[#81b03f] border border-[#81b03f] px-4 py-2 mt-2 flex items-center gap-2">
              Read More <ArrowRight />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
