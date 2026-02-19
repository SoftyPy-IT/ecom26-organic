import Image from 'next/image'
import SectionHeader from '../shared/SectionHeader'
import Container from '../shared/Container'

export default function Welcome() {
  const advantages = [
    {
      title: "100% Organic",
      description: "Discover farm-fresh vegetables, fruits, and organic products grown with love and delivered straight from nature.",
      image: "https://freebw.com/templates/oragnive-v1/images/icons/icon1.1.png",
    },
    {
      title: "Family Healthy",
      description: "Eat clean, live green! Our products are sourced directly from local farms.",
      image: "https://freebw.com/templates/oragnive-v1/images/icons/icon2.2.png",
    },
    {
      title: "Always Fresh",
      description: "Our products are always fresh and carefully selected for your health.",
      image: "https://freebw.com/templates/oragnive-v1/images/icons/icon3.3.png",
    },
    {
      title: "Food Safety",
      description: "We ensure the highest standards of hygiene and food safety.",
      image: "https://freebw.com/templates/oragnive-v1/images/icons/icon4.4.png",
    },
  ]

  return (
    <Container className="py-8">
      {/* Section Header */}
      <SectionHeader title="Welcome to Organive" subtitle="Green Agriculture" />

      {/* Top Advantages */}
      <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-8 my-8">
        {advantages.slice(0, 2).map((item, idx) => (
          <div key={idx} className="flex flex-col items-center text-center max-w-xs mx-auto sm:mx-0">
            {/* Hover Effect Wrapper */}
            <div className="p-4 rounded-full bg-white shadow-md hover:shadow-lg hover:shadow-[#81b03f] hover:scale-110 transition-transform duration-300">
              <Image src={item.image} alt={item.title} width={100} height={100} />
            </div>
            <h3 className="text-xl font-bold mt-4">{item.title}</h3>
            <p className="text-gray-600 mt-2">{item.description}</p>
          </div>
        ))}
      </div>

      {/* Middle Grid Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
        {/* Third advantage */}
        <div className="flex flex-col justify-center items-center text-center max-w-xs mx-auto md:mx-0">
          <div className="p-4 rounded-full bg-white shadow-md hover:shadow-lg hover:shadow-[#81b03f] hover:scale-110 transition-transform duration-300">
            <Image src={advantages[2].image} alt={advantages[2].title} width={100} height={100} />
          </div>
          <h3 className="text-xl font-bold mt-4">{advantages[2].title}</h3>
          <p className="text-gray-600 mt-2">{advantages[2].description}</p>
        </div>

        {/* Main image */}
        <div className="flex justify-center">
          <Image
            src="https://freebw.com/templates/oragnive-v1/images/other-01.jpg"
            alt="Fresh Produce"
            width={500}
            height={500}
            className="rounded-lg object-cover w-full max-w-md sm:max-w-lg md:max-w-full"
          />
        </div>

        {/* Fourth advantage */}
        <div className="flex flex-col justify-center items-center text-center max-w-xs mx-auto md:mx-0">
          <div className="p-4 rounded-full bg-white shadow-md hover:shadow-lg hover:shadow-[#81b03f] hover:scale-110 transition-transform duration-300">
            <Image src={advantages[3].image} alt={advantages[3].title} width={100} height={100} />
          </div>
          <h3 className="text-xl font-bold mt-4">{advantages[3].title}</h3>
          <p className="text-gray-600 mt-2">{advantages[3].description}</p>
        </div>
      </div>
    </Container>
  )
}
