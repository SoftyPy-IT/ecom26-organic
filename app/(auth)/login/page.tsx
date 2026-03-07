import LoginForm from '@/app/components/shared/forms/LoginForm'
import Container from '@/app/components/shared/Container'
export default function page() {
  return (
    <Container className='px-2 2xl:px-0'>
      <LoginForm />
    </Container>
  )
}
