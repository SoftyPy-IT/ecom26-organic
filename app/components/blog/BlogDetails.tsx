import Image from "next/image";
import { TBlog } from "./Blog";

interface Props {
  blog: TBlog;
}

export default function BlogDetails({ blog }: Props) {
  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold">{blog.title}</h1>
      <p className="text-md text-gray-500">
        By <span className="font-semibold">{blog.author}</span> | {new Date(blog.date!).toLocaleDateString()}
      </p>
      <div className="w-full aspect-video relative">
        <Image
          src={blog.image || ""}
          alt={blog.title || ""}
          fill
          className="object-cover"
        />
      </div>
      <p className="text-gray-700 text-justify whitespace-pre-line">{blog.description}</p>
    </div>
  );
}
