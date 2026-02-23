
export default function WishlistAction() {
  return (
    <div className='flex justify-between gap-5'>
      <button className='border border-red-500 px-5 py-2 text-xs tracking-widest uppercase hover:bg-red-500 hover:text-white transition'>Clear Wishlist</button>
      <button className='border border-[#81b03f] px-5 py-2 text-xs tracking-widest uppercase hover:bg-[#81b03f] hover:text-white transition'>Continue Shopping</button>
    </div>
  )
}
