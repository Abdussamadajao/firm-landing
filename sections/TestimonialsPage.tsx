"use client";
import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { Star, Quote, Search } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";

interface Testimonial {
  quote: string;
  author: string;
  position: string;
  practiceArea: string;
  image: string;
  rating: number;
}

export function TestimonialsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedPracticeArea, setSelectedPracticeArea] =
    useState<string>("All");

  const testimonials: Testimonial[] = [
    {
      quote:
        "The corporate team at Justice Law guided our startup through complex funding rounds and regulatory challenges with expertise and strategic thinking that proved invaluable to our growth.",
      author: "Alex Rivera",
      position: "CEO, TechInnovate",
      practiceArea: "Corporate Law",
      image: "/placeholder.svg?height=100&width=100",
      rating: 5,
    },
    {
      quote:
        "During my divorce, Elena Rodriguez provided compassionate guidance while fiercely advocating for my parental rights. Her expertise in family law made a difficult time much more manageable.",
      author: "Michelle Johnson",
      position: "Client",
      practiceArea: "Family Law",
      image: "/placeholder.svg?height=100&width=100",
      rating: 5,
    },
    {
      quote:
        "After my accident, the personal injury team at Justice Law handled everything while I focused on recovery. They secured a settlement far exceeding my expectations and treated me like family.",
      author: "James Wilson",
      position: "Client",
      practiceArea: "Personal Injury",
      image: "/placeholder.svg?height=100&width=100",
      rating: 5,
    },
    {
      quote:
        "Michael Chen's expertise in criminal defense was evident from our first meeting. His strategic approach and thorough preparation resulted in all charges being dismissed. I can't recommend him highly enough.",
      author: "Thomas Wilson",
      position: "Client",
      practiceArea: "Criminal Defense",
      image: "/placeholder.svg?height=100&width=100",
      rating: 5,
    },
    {
      quote:
        "Jennifer Park guided our family through the estate planning process with patience and expertise. She took the time to understand our unique situation and created a comprehensive plan that gave us peace of mind.",
      author: "Rebecca Thompson",
      position: "Client",
      practiceArea: "Estate Planning",
      image: "/placeholder.svg?height=100&width=100",
      rating: 5,
    },
    {
      quote:
        "David Washington's knowledge of real estate law was instrumental in helping us navigate a complex commercial property acquisition. His attention to detail saved us from potential legal issues down the road.",
      author: "Robert Chen",
      position: "Real Estate Developer",
      practiceArea: "Real Estate Law",
      image: "/placeholder.svg?height=100&width=100",
      rating: 5,
    },
    {
      quote:
        "Sophia Lee's expertise in intellectual property law helped our tech company protect our innovations and brand. Her strategic guidance on patent and trademark matters has been invaluable to our business growth.",
      author: "Maria Garcia",
      position: "CTO, InnovateTech",
      practiceArea: "Intellectual Property",
      image: "/placeholder.svg?height=100&width=100",
      rating: 5,
    },
    {
      quote:
        "Robert Taylor helped our company navigate a complex employment dispute with professionalism and expertise. His strategic approach led to a favorable settlement that allowed us to move forward positively.",
      author: "Jonathan Lee",
      position: "HR Director, Global Enterprises",
      practiceArea: "Employment Law",
      image: "/placeholder.svg?height=100&width=100",
      rating: 5,
    },
    {
      quote:
        "Maria Gonzalez helped my family navigate the complex immigration process with expertise and compassion. Thanks to her guidance, we were able to secure permanent residency status after years of uncertainty.",
      author: "Carlos Mendez",
      position: "Client",
      practiceArea: "Immigration Law",
      image: "/placeholder.svg?height=100&width=100",
      rating: 5,
    },
  ];

  // Get unique practice areas from testimonials
  const practiceAreas = useMemo(() => {
    const areas = new Set(testimonials.map((t) => t.practiceArea));
    return ["All", ...Array.from(areas)].sort();
  }, [testimonials]);

  // Filtered testimonials
  const filteredTestimonials = useMemo(() => {
    return testimonials.filter((testimonial) => {
      const matchesSearch =
        testimonial.quote.toLowerCase().includes(searchQuery.toLowerCase()) ||
        testimonial.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
        testimonial.practiceArea
          .toLowerCase()
          .includes(searchQuery.toLowerCase());

      const matchesPracticeArea =
        selectedPracticeArea === "All" ||
        testimonial.practiceArea === selectedPracticeArea;

      return matchesSearch && matchesPracticeArea;
    });
  }, [testimonials, searchQuery, selectedPracticeArea]);

  // Featured testimonial (first in list)
  const featuredTestimonial = useMemo(() => testimonials[0], [testimonials]);

  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="relative bg-navy-700 py-16 md:py-24">
        <div className="absolute inset-0 bg-gradient-to-r from-navy-800 to-navy-600" />
        <div className="custom-container relative z-10 mx-auto px-4 text-white">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="font-serif text-4xl font-bold tracking-tight md:text-5xl">
              Client Testimonials
            </h1>
            <p className="mt-6 text-lg text-gray-200 md:text-xl">
              Hear what our clients have to say about their experience working
              with Justice Law.
            </p>
          </div>
        </div>
      </section>

      {/* Search & Filter Section */}
      <section className="border-b py-6">
        <div className="custom-container space-y-4">
          <div className="relative max-w-xl mx-auto">
            <label htmlFor="testimonial-search" className="sr-only">
              Search testimonials
            </label>
            <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-500" />
            <Input
              id="testimonial-search"
              placeholder="Search by quote, author, or practice area..."
              className="pl-10 py-6 text-lg"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <span className="text-sm font-medium">
              Filter by Practice Area:
            </span>
            <div className="flex flex-wrap gap-2">
              {practiceAreas.map((area) => (
                <Button
                  key={area}
                  variant="ghost"
                  onClick={() => setSelectedPracticeArea(area)}
                  className={`rounded-full px-4 py-2 text-sm ${
                    selectedPracticeArea === area
                      ? "bg-navy-700 text-white hover:bg-navy-800"
                      : "bg-navy-50 text-navy-700 hover:bg-navy-100"
                  }`}
                >
                  {area}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Testimonial */}
      {featuredTestimonial && (
        <section className="py-16 md:py-24">
          <div className="custom-container">
            <div className="relative rounded-lg bg-navy-50 p-8 md:p-12">
              <div className="absolute right-8 top-8 text-gold-500 opacity-20">
                <Quote className="h-24 w-24" />
              </div>
              <div className="grid gap-8 md:grid-cols-3">
                <div className="md:col-span-2">
                  <div className="text-gold-500 text-4xl font-serif">"</div>
                  <p className="mt-2 text-xl text-navy-700 italic">
                    {featuredTestimonial.quote}
                  </p>
                  <div className="mt-6">
                    <p className="font-serif text-xl font-bold text-navy-700">
                      {featuredTestimonial.author}
                    </p>
                    <p className="text-gold-600">
                      {featuredTestimonial.position}
                    </p>
                    <div className="mt-2 flex">
                      {[...Array(featuredTestimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="h-5 w-5 fill-gold-500 text-gold-500"
                        />
                      ))}
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <div className="relative h-64 w-64 overflow-hidden rounded-full border-4 border-white shadow-xl">
                    <Image
                      src={featuredTestimonial.image}
                      alt={featuredTestimonial.author}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Testimonials Grid */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="custom-container">
          <h2 className="font-serif text-3xl font-bold tracking-tight text-navy-700 md:text-4xl text-center mb-12">
            What Our Clients Say
          </h2>

          {filteredTestimonials.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">
                No testimonials found matching your criteria.
              </p>
            </div>
          ) : (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filteredTestimonials.map((testimonial) => (
                <Card
                  key={testimonial.author}
                  className="h-full border-none shadow-md hover:shadow-lg transition-shadow"
                >
                  <CardContent className="p-6 h-full flex flex-col">
                    <div className="flex justify-between items-start mb-4">
                      <Badge
                        variant="outline"
                        className="bg-navy-50 text-navy-700"
                      >
                        {testimonial.practiceArea}
                      </Badge>
                      <div className="flex">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star
                            key={i}
                            className="h-4 w-4 fill-gold-500 text-gold-500"
                          />
                        ))}
                      </div>
                    </div>
                    <div className="text-gold-500 text-3xl font-serif">"</div>
                    <p className="mt-2 text-gray-700 italic flex-grow">
                      {testimonial.quote}
                    </p>
                    <div className="mt-6 flex items-center gap-3">
                      <div className="relative h-12 w-12 overflow-hidden rounded-full">
                        <Image
                          src={testimonial.image}
                          alt={testimonial.author}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 50px, 100px"
                        />
                      </div>
                      <div>
                        <p className="font-medium text-navy-700">
                          {testimonial.author}
                        </p>
                        <p className="text-sm text-gray-500">
                          {testimonial.position}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Video Testimonials */}
      <section className="py-16 md:py-24">
        <div className="custom-container">
          <div className="mx-auto max-w-3xl text-center mb-12">
            <h2 className="font-serif text-3xl font-bold tracking-tight text-navy-700 md:text-4xl">
              Video Testimonials
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Watch our clients share their experiences working with Justice
              Law.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="overflow-hidden rounded-lg shadow-lg">
              <div className="relative aspect-video">
                <Image
                  src="/placeholder.svg?height=720&width=1280"
                  alt="Video testimonial thumbnail"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="rounded-full bg-navy-700/80 p-4">
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
                      className="h-8 w-8 text-white"
                    >
                      <polygon points="5 3 19 12 5 21 5 3" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-serif text-xl font-bold text-navy-700">
                  Michelle Johnson's Story
                </h3>
                <p className="text-gray-600">Family Law Client</p>
              </div>
            </div>

            <div className="overflow-hidden rounded-lg shadow-lg">
              <div className="relative aspect-video">
                <Image
                  src="/placeholder.svg?height=720&width=1280"
                  alt="Video testimonial thumbnail"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="rounded-full bg-navy-700/80 p-4">
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
                      className="h-8 w-8 text-white"
                    >
                      <polygon points="5 3 19 12 5 21 5 3" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-serif text-xl font-bold text-navy-700">
                  TechInnovate Success Story
                </h3>
                <p className="text-gray-600">Corporate Law Client</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Results */}
      <section className="py-16 md:py-24 bg-navy-700 text-white">
        <div className="custom-container">
          <div className="mx-auto max-w-3xl text-center mb-12">
            <h2 className="font-serif text-3xl font-bold tracking-tight md:text-4xl">
              Notable Case Results
            </h2>
            <p className="mt-4 text-lg text-gray-200">
              While past results don't guarantee future outcomes, these cases
              demonstrate our commitment to achieving the best possible results
              for our clients.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <Card className="bg-navy-800 border-none shadow-md">
              <CardContent className="p-6">
                <Badge className="mb-4 bg-gold-500 text-white hover:bg-gold-600">
                  Personal Injury
                </Badge>
                <h3 className="font-serif text-xl font-bold text-white">
                  $4.2 Million Settlement
                </h3>
                <p className="mt-2 text-gray-200">
                  Secured for a client who suffered severe injuries in a
                  commercial truck accident.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-navy-800 border-none shadow-md">
              <CardContent className="p-6">
                <Badge className="mb-4 bg-gold-500 text-white hover:bg-gold-600">
                  Corporate Law
                </Badge>
                <h3 className="font-serif text-xl font-bold text-white">
                  $50 Million Acquisition
                </h3>
                <p className="mt-2 text-gray-200">
                  Successfully negotiated and closed a complex cross-border
                  acquisition for a technology client.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-navy-800 border-none shadow-md">
              <CardContent className="p-6">
                <Badge className="mb-4 bg-gold-500 text-white hover:bg-gold-600">
                  Criminal Defense
                </Badge>
                <h3 className="font-serif text-xl font-bold text-white">
                  All Charges Dismissed
                </h3>
                <p className="mt-2 text-gray-200">
                  Successfully defended a client facing serious criminal
                  charges, resulting in complete dismissal.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-8 text-center">
            <Button className="bg-gold-500 hover:bg-gold-600 text-navy-900">
              View More Case Results
            </Button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24">
        <div className="custom-container">
          <div className="rounded-lg bg-gray-50 p-8 md:p-12">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="font-serif text-3xl font-bold tracking-tight text-navy-700 md:text-4xl">
                Experience the Justice Law Difference
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                Join our satisfied clients and discover how our experienced
                legal team can help you achieve your goals.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
                <Button className="bg-gold-500 hover:bg-gold-600 text-navy-900">
                  <Link href="/contact">Schedule a Consultation</Link>
                </Button>
                <Button
                  variant="outline"
                  className="border-navy-700 text-navy-700 hover:bg-navy-50"
                >
                  <Link href="/practice-areas">Explore Our Practice Areas</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
