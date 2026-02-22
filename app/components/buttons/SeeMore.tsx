import Link from 'next/link'

interface Props {
  href?: string
  title?: string
}
export default function SeeMore({ href, title = "See More" }: Props) {
  return (
    <div className='flex justify-center items-center py-4'>
      <Link href={href || "#"} className='text-center'>
        <button className='text-center text-[#84972c] border border-[#84972c] px-4 py-2 hover:bg-[#84972c] hover:text-white transition-colors duration-300'>
          {title}
        </button>
      </Link>
    </div>
  )
}
