import Image from "next/image";
import Link from "next/link";
import Container from "../shared/Container";
import TopFooter from "./TopFooter";

const footerSections = [
  {
    id: "company",
    type: "company",
    logo: "🌿 OrganicFresh",
    description:
      "Premium organic products delivered fresh to your doorstep. Quality, sustainability, and health in every bite.",
    contact: [
      { label: "Email", value: "demo@gmail.com", href: "mailto:demo@gmail.com" },
      { label: "Phone", value: "+1 234 567 890", href: "tel:1234567890" },
      {
        label: "Address",
        value: "123 Street, City, State",
        href: "https://www.google.com/maps?q=123+Street,+City,+State,+Country",
      },
    ],
  },
  {
    id: "information",
    title: "Information",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Contact Us", href: "/contact" },
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
    ],
  },
  {
    id: "account",
    title: "My Account",
    links: [
      { label: "Login", href: "/login" },
      { label: "Register", href: "/register" },
      { label: "Order History", href: "/order-history" },
      { label: "Wishlist", href: "/wishlist" },
    ],
  },
  {
    id: "category",
    title: "Categories",
    categories: [
      {
        label: "Fruits",
        href: "/shop?category=fruits",
        image: "https://freebw.com/templates/oragnive-v1/images/bg-item-02.jpg",
      },
      {
        label: "Vegetables",
        href: "/shop?category=vegetables",
        image: "https://freebw.com/templates/oragnive-v1/images/bg-item-02.jpg",
      },
      {
        label: "Juice",
        href: "/shop?category=juice",
        image: "https://freebw.com/templates/oragnive-v1/images/bg-item-03.jpg",
      },
      {
        label: "Dried",
        href: "/shop?category=dried",
        image: "https://freebw.com/templates/oragnive-v1/images/bg-item-04.jpg",
      },
    ],
  },
];

export default function Footer() {
  return (
    <footer>
      {/* Top Section */}
      <div className="bg-[#F0EEE6]">
        <TopFooter />
      </div>

      {/* Main Footer */}
      <div className="bg-[#f7f6f2]">
      <Container className="py-16 px-2 2xl:px-0">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {footerSections.map((section) => (
            <div key={section.id} className="space-y-5">

              {/* Company Section */}
              {section.type === "company" && (
                <>
                  <h3 className="text-4xl font-bold tracking-tight">
                    {section.logo}
                  </h3>
                  <p className="text-sm leading-relaxed">
                    {section.description}
                  </p>

                  <ul className="space-y-2">
                    {section.contact.map((item) => (
                      <li key={item.label}>
                        <a
                          href={item.href}
                          className="hover:text-primary transition-colors duration-200"
                        >
                          <span className="font-medium">{item.label}:</span>{" "}
                          {item.value}
                        </a>
                      </li>
                    ))}
                  </ul>
                </>
              )}

              {/* Link Sections */}
              {section.links && (
                <>
                  <h4 className="text-xl font-semibold text-gray-900">
                    {section.title}
                  </h4>
                  <ul className="space-y-2">
                    {section.links.map((link) => (
                      <li key={link.label}>
                        <Link
                          href={link.href}
                          className="hover:text-[#81b03f] transition-colors duration-200"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </>
              )}

              {/* Categories Section */}
              {section.categories && (
                <>
                  <h4 className="text-xl font-semibold text-gray-900">
                    {section.title}
                  </h4>
                  <div className="grid grid-cols-2 gap-3">
                    {section.categories.map((cat) => (
                      <Link
                        key={cat.label}
                        href={cat.href}
                        className="group relative overflow-hidden"
                      >
                        <Image
                          src={cat.image}
                          alt={cat.label}
                          width={120}
                          height={90}
                          className="w-full h-20 object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <span className="absolute inset-0 bg-black/50 flex items-center justify-center text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition">
                          {cat.label}
                        </span>
                      </Link>
                    ))}
                  </div>
                </>
              )}
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-gray-300 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} OrganicFresh. All rights reserved.
        </div>
      </Container>
      </div>
    </footer>
  );
}
