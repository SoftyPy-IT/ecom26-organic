import TokenForm from '@/app/components/shared/forms/TokenForm'
import Container from '@/app/components/shared/Container'

interface Props {
  searchParams: Promise<{ t: string }>
}

export default async function page({ searchParams }: Props) {
  const { t } = await searchParams;
  return (
    <Container className='px-2 2xl:px-0'>
      <TokenForm token={t} />
    </Container>
  )
}
