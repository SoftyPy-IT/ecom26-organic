import Orders from '@/app/components/order/Orders'
import PrivateRoute from '@/app/components/provider/PrivateRoute'
import Container from '@/app/components/shared/Container'

export default function page() {
  return (
    <Container className='px-2 2xl:px-0'>
      <PrivateRoute>
        <Orders />
      </PrivateRoute>
    </Container>
  )
}
