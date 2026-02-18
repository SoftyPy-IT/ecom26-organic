import Container from '../shared/Container'
import Image from 'next/image'
import SectionHeader from '../shared/SectionHeader'
import OfferTime from './OfferTime'

export default function Offers() {

  return (
    <div className='bg-[#81b03f]/50'>
      <Container className='px-2 2xl:px-0 py-10'>
        <div className='flex flex-col-reverse lg:flex-row items-center justify-between'>
          <div className='w-full flex flex-col items-center lg:w-1/2'>
            <Image src="https://freebw.com/templates/oragnive-v1/images/other-02.png" alt='offer' width={500} height={500} />

          </div>
          <div className='w-full lg:w-1/2'>
            <SectionHeader title='Special Offer' subtitle='Get 50% off on all products' color='white' align='left' />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <OfferTime />

          </div>
        </div>
      </Container>
    </div>
  )
}
