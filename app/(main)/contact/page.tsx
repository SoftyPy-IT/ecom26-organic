import Container from '@/app/components/shared/Container'
import Map from '@/app/components/shared/Map'
import SectionHeader from '@/app/components/shared/SectionHeader'
import Contact from '@/app/components/shared/forms/Contact'

export default function page() {
  return (
    <Container>
      <SectionHeader title="Leave us a message!" subtitle="Get In Touch" />
      <Contact />
      <Map />
    </Container>
  )
}
