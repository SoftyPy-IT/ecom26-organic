'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { ShoppingCart, Search, Menu, X } from 'lucide-react';
import { navItems } from './navitems';
import { usePathname } from 'next/navigation';
import SheetContainer from '../shared/modals/SheetContainer';
import Cart from '../add-to-cart/Cart';
import SearchField from '../shared/inputs/SearchField';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
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
          <button onClick={() => setIsSheetOpen(true)} className="transition hover:text-green-400">
            <Search size={20} />
          </button>
          <button onClick={() => setIsCartOpen(true)} className="relative transition hover:text-green-400">
            <ShoppingCart size={20} />
            <span className="absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-green-400 text-xs ">
              2
            </span>
          </button>
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
        title="Search"
        position="top"
        open={isSheetOpen}
        onOpenChange={setIsSheetOpen}

      >
        <SearchField />
      </SheetContainer>

      {/* card modal */}
      <SheetContainer
        title="Cart"
        position="right"
        open={isCartOpen}
        onOpenChange={setIsCartOpen}
      >
        <div>
          <Cart />
        </div>
      </SheetContainer>
    </header>
  );
}
