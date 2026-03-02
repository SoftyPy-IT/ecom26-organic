import { TBlog } from '@/app/redux/types/TBlog';
import { formatDate } from '@/app/utils/TimeFormat';
import Image from 'next/image';

interface Props {
  blog: TBlog;
}

export default function BlogDetails({ blog }: Props) {
  const { title, description, content, createdAt, thumbnail } = blog;

  console.log(thumbnail)

  return (
    <div className="space-y-6">
      {/* Title */}
      <h1 className="text-3xl font-bold">{title}</h1>

      {/* Meta info */}
      <p className="text-md text-gray-500">{formatDate(createdAt)}</p>

      {/* Thumbnail */}
      {thumbnail ? (
        <div className="w-full aspect-video relative">
          <Image src={thumbnail} alt={title} fill className="object-cover rounded-lg" />
        </div>
      ) : (
        <div className="w-full aspect-video bg-gray-200 flex items-center justify-center rounded-lg">
          <span className="text-gray-500">No image available</span>
        </div>
      )}

      {/* Description */}
      {description && (
        <p className="text-gray-700 text-justify whitespace-pre-line">{description}</p>
      )}

      {/* Content */}
      {content && (
        <div className="prose max-w-none text-gray-800 whitespace-pre-line">{content}</div>
      )}
    </div>
  );
}
