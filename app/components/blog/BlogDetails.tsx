import { TBlog } from "./Blog";

interface Props {
  blog: TBlog;
}

export default function BlogDetails({ blog }: Props) {
  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold">{blog.title}</h1>
      <p className="text-sm text-gray-500">
        By {blog.author} | {new Date(blog.date!).toLocaleDateString()}
      </p>
      <img
        src={blog.image}
        alt={blog.title}
        className="w-full h-auto rounded-md"
      />
      <p className="text-gray-700 whitespace-pre-line">{blog.description}</p>
    </div>
  );
}
