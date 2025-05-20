import {
  About,
  Attorneys,
  FAQ,
  Hero,
  Practices,
  Testimonials,
} from "@/sections";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex-1">
      <Hero />
      <Practices />
      <About />
      <Attorneys />
      <Testimonials />
      <FAQ />
    </main>
  );
}
