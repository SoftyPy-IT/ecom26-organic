import LoginForm from '@/app/components/shared/forms/LoginForm'
import Container from '@/app/components/shared/Container'

interface Props {
  searchParams: Promise<{ redirect?: string }>;
}
export default async function page({ searchParams }: Props) {
  const { redirect } = await searchParams;
  console.log(redirect)
  return (
    <Container className='px-2 2xl:px-0'>
      <LoginForm redirect={redirect} />
    </Container>
  )
}
