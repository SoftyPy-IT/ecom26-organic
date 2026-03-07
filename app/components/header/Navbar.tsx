'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { ShoppingCart, Search, Menu, X, User, LogOut, CircleUser } from 'lucide-react';
import { navItems } from './navitems';
import { usePathname } from 'next/navigation';
import SheetContainer from '../shared/modals/SheetContainer';
import Cart from '../add-to-cart/Cart';
import SearchField from '../shared/inputs/SearchField';
import { useAppDispatch, useAppSelector } from '@/app/redux/hooks/hook';
import { setCartModal, setSearchModal } from '@/app/redux/features/modal/modalSlice';
import Dropdown from '../shared/modals/Dropdown';
import { logout } from '@/app/redux/features/auth/authSlice';
import { selectCurrentUser } from '@/app/redux/features/auth/authSlice';
import { showToast } from '@/app/utils/Toast';

export default function Navbar() {
  const dispatch = useAppDispatch();
  const { itemsCount } = useAppSelector((state) => state.cart);
  const { isCartOpen, isSearchOpen } = useAppSelector((state) => state.modal);
  const user = useAppSelector(selectCurrentUser)
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  const isHome = pathname === "/"

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }
    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  // Handle scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleLogout = () => {
    dispatch(logout())
    showToast({
      message: "Logout successfully",
      type: "warning",
      position: "bottom",
      alignment: "right",
    });
    setIsOpen(false)
  }

  // Determine navbar classes
  const navbarCSS = isHome
    ? isOpen
      ? "sticky bg-white"
      : scrolled
        ? "sticky bg-white text-black shadow-md"
        : isMobile ? "sticky bg-white text-black shadow-md" : "fixed bg-transparent "
    : isMobile ? "sticky bg-white text-black shadow-md" : "sticky bg-white text-black shadow-md"

  return (
    <header className={`top-0 left-0 w-full z-50 transition-all duration-300 ${navbarCSS}`}>
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-2xl font-bold tracking-wide">
          🌿 OrganicFresh
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              target={item.target}
              className={`text-sm font-bold uppercase transition hover:text-[#81b03f] ${pathname === item.href ? 'text-[#81b03f]' : ''}`}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Right icons + mobile toggle */}
        <div className="flex items-center space-x-4">
          <button onClick={() => dispatch(setSearchModal(!isSearchOpen))} className="transition hover:text-green-400">
            <Search size={20} />
          </button>
          <button onClick={() => dispatch(setCartModal(!isCartOpen))} className="relative transition hover:text-green-400">
            <ShoppingCart size={20} />
            {itemsCount > 0 && (
              <span className="absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-green-400 text-xs ">
                {itemsCount}
              </span>
            )}
          </button>
          {user ? (
            <>
              <Dropdown trigger={<CircleUser size={20} />}>
                <div className="flex flex-col gap-2">
                  <Link href="/profile" className="hover:bg-gray-100 px-3 py-2 rounded flex items-center gap-2">
                    <User size={20} /> Profile
                  </Link>
                  <Link href="/orders" className="hover:bg-gray-100 px-3 py-2 rounded flex items-center gap-2">
                    <ShoppingCart size={20} /> My Orders
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="hover:bg-red-50 px-3 py-2 rounded text-red-600 flex items-center gap-2"
                  >
                    <LogOut size={20} /> Logout
                  </button>
                </div>
              </Dropdown>
            </>

          ) : (
            <Link href="/login" className="transition hover:text-green-400">
              <User size={20} />
            </Link>
          )}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-6 pb-6 space-y-4 shadow-md bg-white">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              target={item.target}
              className="block hover:text-green-400"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}

      {/* sheet modal */}
      <SheetContainer
        title="Search Here"
        position="top"
        open={isSearchOpen}
        onOpenChange={() => dispatch(setSearchModal(!isSearchOpen))}

      >
        <SearchField />
      </SheetContainer>

      {/* card modal */}
      <SheetContainer
        title="Your Cart"
        position="right"
        open={isCartOpen}
        onOpenChange={() => dispatch(setCartModal(!isCartOpen))}
      >
        <Cart />
      </SheetContainer>


    </header>
  );
}
