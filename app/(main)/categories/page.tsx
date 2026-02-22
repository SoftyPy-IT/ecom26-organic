import Container from '@/app/components/shared/Container'
import SectionHeader from '@/app/components/shared/SectionHeader'

export default function page() {
  return (
    <Container className='px-2 2xl:px-0'>
      <div className=''>
        <SectionHeader title='All Categories' subtitle='Categories' />
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
        
        </div>
      </div>
    </Container>
  )
}
