import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
} from "lucide-react";

const SOCIAL_LINKS = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Instagram, href: "#", label: "Instagram" },
];

const QUICK_LINKS = [
  { href: "/about", text: "About Us" },
  { href: "/practice-areas", text: "Practice Areas" },
  { href: "/attorneys", text: "Our Attorneys" },
  { href: "/testimonials", text: "Testimonials" },
  { href: "/blog", text: "Blog" },
  { href: "/contact", text: "Contact" },
];

const PRACTICE_AREAS = [
  { href: "/practice-areas/corporate-law", text: "Corporate Law" },
  { href: "/practice-areas/family-law", text: "Family Law" },
  { href: "/practice-areas/criminal-defense", text: "Criminal Defense" },
  { href: "/practice-areas/real-estate-law", text: "Real Estate Law" },
  { href: "/practice-areas/personal-injury", text: "Personal Injury" },
  { href: "/practice-areas/estate-planning", text: "Estate Planning" },
];

const CONTACT_INFO = [
  { icon: MapPin, text: "123 Legal Street, Suite 100, Cityville, ST 12345" },
  { icon: Phone, text: "(555) 123-4567" },
  {
    icon: Mail,
    text: "contact@justicelaw.com",
    href: "mailto:contact@justicelaw.com",
  },
  { icon: Clock, text: "Monday - Friday: 9:00 AM - 5:00 PM" },
];

const FOOTER_LINKS = [
  { href: "/terms", text: "Terms of Service" },
  { href: "/privacy", text: "Privacy Policy" },
  { href: "/sitemap", text: "Sitemap" },
];

const Logo = () => (
  <div className="flex items-center gap-2">
    <span className="font-serif text-2xl font-bold text-white">JUSTICE</span>
    <span className="font-serif text-2xl font-bold text-gold-500">LAW</span>
  </div>
);

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-900 py-12 text-white">
      <div className="custom-container">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div>
            <Logo />
            <p className="mt-4 text-gray-300">
              Providing exceptional legal services with integrity and dedication
              for over 25 years.
            </p>
            <div className="mt-6 flex space-x-4">
              {SOCIAL_LINKS.map(({ icon: Icon, href, label }) => (
                <Link
                  key={label}
                  href={href}
                  className="text-gray-300 hover:text-gold-500"
                >
                  <Icon className="h-5 w-5" />
                  <span className="sr-only">{label}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif text-lg font-bold">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              {QUICK_LINKS.map(({ href, text }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-gray-300 hover:text-gold-500"
                  >
                    {text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Practice Areas */}
          <div>
            <h3 className="font-serif text-lg font-bold">Practice Areas</h3>
            <ul className="mt-4 space-y-2">
              {PRACTICE_AREAS.map(({ href, text }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-gray-300 hover:text-gold-500"
                  >
                    {text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-serif text-lg font-bold">Contact Us</h3>
            <ul className="mt-4 space-y-2">
              {CONTACT_INFO.map(({ icon: Icon, text, href }, index) => (
                <li key={index} className="flex items-center gap-2">
                  <Icon className="h-5 w-5 text-gold-500" />
                  {href ? (
                    <Link
                      href={href}
                      className="text-gray-300 hover:text-gold-500"
                    >
                      {text}
                    </Link>
                  ) : (
                    <span className="text-gray-300">{text}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-12 border-t border-gray-800 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm text-gray-400">
              &copy; {currentYear} Justice Law. All rights reserved.
            </p>
            <div className="flex gap-4">
              {FOOTER_LINKS.map(({ href, text }) => (
                <Link
                  key={href}
                  href={href}
                  className="text-sm text-gray-400 hover:text-gold-500"
                >
                  {text}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
