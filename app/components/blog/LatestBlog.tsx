import Link from 'next/link';
import { blogData } from './Blog';
import Image from 'next/image';

interface Props {
  title: string;
}

export default function LatestBlog({ title }: Props) {
  return (
    <div className="py-10">
      <h2 className="text-2xl font-bold ">{title}</h2>
      <div className="flex flex-col gap-4">
        {blogData.map((blog, idx) => (
          <Link href={`/blog/${blog.title}`} key={idx}>
            <div className="flex items-center gap-4 border border-gray-200 transition">
              <Image
                src={blog.image || ""}
                alt={blog.title || ""}
                width={100}
                height={100}
                className="object-cover"
              />
              <div>
                <h3 className="font-semibold">{blog.title || ""}</h3>
                <p className="text-sm text-gray-500">
                  {blog.author || ""} | {new Date(blog.date || "").toLocaleDateString()}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
