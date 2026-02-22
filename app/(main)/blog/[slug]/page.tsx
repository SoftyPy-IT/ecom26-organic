import { TBlog } from "@/app/components/blog/Blog";
import BlogDetails from "@/app/components/blog/BlogDetails";
import LatestBlog from "@/app/components/blog/LatestBlog";
import Container from "@/app/components/shared/Container";
import CommentForm from "@/app/components/shared/forms/CommentForm";

interface Props {
  params: Promise<{ slug: string }>
}
export default async function page({ params }: Props) {
  const { slug } = await params;

  const blogData: TBlog =
  {
    title: "There are many variations of passages of Lorem Ipsum available",
    image: "https://freebw.com/templates/oragnive-v1/images/blog-01.jpg",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    author: "John Doe",
    date: "2022-01-01",
  }

  return (
    <Container className="px-2 2xl:px-0 py-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="col-span-2">
          <BlogDetails blog={blogData} />
          <CommentForm />
        </div>
        <div className="col-span-1 sticky top-20 h-fit">
          <LatestBlog title="Related Blog" />
        </div>
      </div>
    </Container>
  )
}
