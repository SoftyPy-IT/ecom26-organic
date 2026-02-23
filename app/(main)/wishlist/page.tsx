import Container from '@/app/components/shared/Container'
import SectionHeader from '@/app/components/shared/SectionHeader'
import WishTable from '@/app/components/wishlist/WishTable'
import WishlistAction from '@/app/components/wishlist/WishlistAction'

export default function page() {
  return (
    <Container className='px-2 2xl:px-0'>
      <div className=''>
        <SectionHeader title='Your Wishlist' subtitle='Products' />
        <WishTable />
        <WishlistAction />
      </div>
    </Container>
  )
}
