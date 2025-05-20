import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const Attorneys = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="custom-container">
        <div className="mb-12 text-center">
          <h2 className="font-serif text-3xl font-bold tracking-tight text-navy-700 md:text-4xl">
            Our Attorneys
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Meet our team of experienced legal professionals dedicated to
            serving your needs
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              name: "Sarah Johnson",
              title: "Managing Partner",
              specialty: "Corporate Law",
              image: "/placeholder.svg?height=400&width=300",
            },
            {
              name: "Michael Chen",
              title: "Senior Partner",
              specialty: "Criminal Defense",
              image: "/placeholder.svg?height=400&width=300",
            },
            {
              name: "Elena Rodriguez",
              title: "Partner",
              specialty: "Family Law",
              image: "/placeholder.svg?height=400&width=300",
            },
            {
              name: "David Washington",
              title: "Associate",
              specialty: "Real Estate Law",
              image: "/placeholder.svg?height=400&width=300",
            },
          ].map((attorney, index) => (
            <Card
              key={index}
              className="overflow-hidden border-none shadow-md transition-all hover:shadow-lg"
            >
              <div className="relative h-[300px]">
                <Image
                  src={attorney.image || "/placeholder.svg"}
                  alt={attorney.name}
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="font-serif text-xl font-bold text-navy-700">
                  {attorney.name}
                </h3>
                <p className="text-gold-600">{attorney.title}</p>
                <p className="mt-1 text-gray-600">{attorney.specialty}</p>
                <Link
                  href={`/attorneys/${attorney.name
                    .toLowerCase()
                    .replace(/\s+/g, "-")}`}
                  className="mt-4 inline-flex items-center text-sm font-medium text-gold-600 hover:text-gold-700"
                >
                  View Profile
                  <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Button
            variant="outline"
            className="border-navy-700 text-navy-700 hover:bg-navy-50"
          >
            Meet All Attorneys
          </Button>
        </div>
      </div>
    </section>
  );
};
