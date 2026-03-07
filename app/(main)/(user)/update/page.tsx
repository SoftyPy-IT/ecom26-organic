import UpdateProfile from '@/app/components/profile/UpdateProfile'
import PrivateRoute from '@/app/components/provider/PrivateRoute'
import Container from '@/app/components/shared/Container'
import React from 'react'

export default function page() {
  return (
    <Container className='px-2 2xl:px-0'>
      <PrivateRoute>
        <UpdateProfile />
      </PrivateRoute>
    </Container>
  )
}
