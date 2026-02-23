import Container from '@/app/components/shared/Container'
import SectionHeader from '@/app/components/shared/SectionHeader'
import Image from 'next/image'

export default function page() {

  const team = [
    {
      name: 'John Doe',
      role: 'Farmer',
      image: 'https://freebw.com/templates/oragnive-v1/images/other-11.jpg'
    },
    {
      name: 'John Doe',
      role: 'Farmer',
      image: 'https://freebw.com/templates/oragnive-v1/images/other-11.jpg'
    },
    {
      name: 'John Doe',
      role: 'Farmer',
      image: 'https://freebw.com/templates/oragnive-v1/images/other-11.jpg'
    },
    {
      name: 'John Doe',
      role: 'Farmer',
      image: 'https://freebw.com/templates/oragnive-v1/images/other-11.jpg'
    }
  ]

  return (
    <Container className='px-2 2xl:px-0'>
      <div className='py-4'>
        <SectionHeader title='About Us' subtitle='About' />
        <div className='space-y-6'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            <div className='relative w-full h-full aspect-square'>
              <Image src="https://freebw.com/templates/oragnive-v1/images/other-13.jpg" alt="About" fill className='w-full h-full object-cover' />
            </div>
            <div className='space-y-4'>
              <h2 className='text-3xl font-bold italic'>Story from our farm</h2>
              <p className='text-gray-500'>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master.

                But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master.

                Builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to.

                Pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, be-cause it is pain, but because occasionally circumstances occur.
                Which toil and pain can procure him some great pleasure.But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master.

                Builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to.

                Pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, be-cause it is pain, but because occasionally circumstances occur.
                Which toil and pain can procure him some great pleasure.

                Pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, be-cause it is pain, but because occasionally circumstances occur.
                Which toil and pain can procure him some great pleasure.</p>
              <div className='flex items-center gap-4'>
                <div className='flex items-center gap-2'>
                  <Image src="https://freebw.com/templates/oragnive-v1/images/other-11.jpg" alt="About" width={50} height={50} className='w-12 h-12 object-cover rounded-full' />
                  <div>
                    <h3 className='font-bold'>John Doe</h3>
                    <p className='text-gray-500'>Farmer</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <SectionHeader title='Our Team' subtitle='Team' />
          <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
            {team.map((member, index) => (
              <div key={index} className='relative w-full h-full aspect-square border border-gray-200 hover:shadow-xl transition-all duration-300'>
                <Image src={member.image} alt="About" fill className='w-full h-full object-cover' />
                <div className='absolute bottom-0 left-0 right-0 bg-white p-4'>
                  <h3 className='font-bold'>{member.name}</h3>
                  <p className='text-gray-500'>{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Container>
  )
}
