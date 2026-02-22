import BlogList from "@/app/components/blog/BlogList";
import Container from "@/app/components/shared/Container";

export default function page() {
  return (
    <Container className='px-2 2xl:px-0'>
      <BlogList />
    </Container>
  )
}
