import { ChevronRight, Link } from "lucide-react";
import Image from "next/image";
import React from "react";

export const About = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="custom-container">
        <div className="grid gap-12 md:grid-cols-2">
          <div className="flex flex-col justify-center">
            <h2 className="font-serif text-3xl font-bold tracking-tight text-navy-700 md:text-4xl">
              About Our Firm
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Justice Law has been providing exceptional legal services for over
              25 years. Our team of experienced attorneys is committed to
              delivering personalized attention and strategic solutions to every
              client.
            </p>
            <p className="mt-4 text-lg text-gray-600">
              We pride ourselves on our integrity, professionalism, and
              dedication to achieving the best possible outcomes for those we
              represent.
            </p>
            <div className="mt-8">
              <Link
                href="/about"
                className="inline-flex items-center text-gold-600 hover:text-gold-700 font-medium"
              >
                Learn more about our history and values
                <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
          <div className="relative h-[400px] overflow-hidden rounded-lg shadow-xl">
            <Image
              src="/placeholder.svg?height=800&width=1200"
              alt="Law firm team"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
