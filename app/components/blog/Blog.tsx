import BlogCard from "../cards/BlogCard";
import Container from "../shared/Container";
import SectionHeader from "../shared/SectionHeader";

export type TBlog = {
  image?: string;
  title?: string;
  description?: string;
  author?: string;
  date?: string;
}

export const blogData: TBlog[] = [
  {
    title: "There are many variations of passages of Lorem Ipsum available",
    image: "https://freebw.com/templates/oragnive-v1/images/blog-01.jpg",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    author: "John Doe",
    date: "2022-01-01",
  },
  {
    title: "There are many variations of passages of Lorem Ipsum available",
    image: "https://freebw.com/templates/oragnive-v1/images/blog-02.jpg",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    author: "John Doe",
    date: "2022-01-01",
  },
]
export default function Blog() {
  return (
    <section className="py-10">
      <Container className="px-2 2xl:px-0">
        <SectionHeader title="From our blog" subtitle="Keep Updated With Us" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {blogData.map((blog, idx) => (
            <BlogCard key={idx} blog={blog} />
          ))}
        </div>
      </Container>
    </section>
  )
}
