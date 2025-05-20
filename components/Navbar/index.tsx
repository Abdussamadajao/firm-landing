import Link from "next/link";
import { Phone } from "lucide-react";
import { Button } from "../ui/button";

const NAV_LINKS = [
  { href: "/about", text: "About Us" },
  { href: "/practice-areas", text: "Practice Areas" },
  { href: "/attorneys", text: "Our Attorneys" },
  { href: "/testimonials", text: "Testimonials" },
  // { href: "/blog", text: "Blog" },
  { href: "/contact", text: "Contact" },
  { href: "/faq", text: "FAQ" },
  { href: "/careers", text: "Careers" },
];

const MenuIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-6 w-6"
  >
    <line x1="4" x2="20" y1="12" y2="12" />
    <line x1="4" x2="20" y1="6" y2="6" />
    <line x1="4" x2="20" y1="18" y2="18" />
  </svg>
);

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-white">
      <div className="custom-container flex h-16 items-center justify-between py-4">
        <Link href="/" className="flex items-center gap-2">
          <span className="font-serif text-2xl font-bold text-navy-700">
            JUSTICE
          </span>
          <span className="font-serif text-2xl font-bold text-gold-500">
            LAW
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-gray-700 hover:text-navy-700"
            >
              {link.text}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Button className="hidden md:flex bg-navy-700 hover:bg-navy-800 cursor-pointer">
            <Phone className="mr-2 h-4 w-4" />
            Call Us Now
          </Button>
          <Button variant="outline" className="md:hidden" size="icon">
            <span className="sr-only">Toggle menu</span>
            <MenuIcon />
          </Button>
        </div>
      </div>
    </header>
  );
}
