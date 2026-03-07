import Container from '@/app/components/shared/Container'
import Profile from '@/app/components/profile/Profile'
import PrivateRoute from '@/app/components/provider/PrivateRoute'

export default function page() {
  return (
    <Container className='px-2 2xl:px-0'>
      <PrivateRoute>
        <Profile />
      </PrivateRoute>
    </Container>
  )
}
