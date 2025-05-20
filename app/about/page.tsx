import Image from "next/image";
import Link from "next/link";
import {
  ChevronRight,
  Award,
  Users,
  History,
  Target,
  BookOpen,
  Scale,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function AboutPage() {
  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="relative bg-navy-700 py-16 md:py-24">
        <div className="absolute inset-0 z-0 opacity-20">
          <Image
            src="/placeholder.svg?height=1080&width=1920"
            alt="Law firm team"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="custom-container relative z-10 mx-auto px-4 text-white">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="font-serif text-4xl font-bold tracking-tight md:text-5xl">
              About Justice Law
            </h1>
            <p className="mt-6 text-lg text-gray-200 md:text-xl">
              For over 25 years, we've been committed to providing exceptional
              legal representation with integrity, dedication, and personalized
              attention to every client.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 md:py-24">
        <div className="custom-container">
          <div className="grid gap-12 md:grid-cols-2">
            <div className="relative h-[400px] md:h-auto overflow-hidden rounded-lg shadow-xl">
              <Image
                src="/placeholder.svg?height=800&width=1200"
                alt="Founding partners"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex flex-col justify-center">
              <h2 className="font-serif text-3xl font-bold tracking-tight text-navy-700 md:text-4xl">
                Our Story
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                Justice Law was founded in 1998 by Sarah Johnson and Michael
                Chen, two attorneys who shared a vision of creating a law firm
                that combined legal excellence with genuine care for clients.
              </p>
              <p className="mt-4 text-lg text-gray-600">
                What began as a small practice with just three attorneys has
                grown into one of the region's most respected full-service law
                firms, with over 30 attorneys and a support staff of 50
                professionals.
              </p>
              <p className="mt-4 text-lg text-gray-600">
                Throughout our growth, we've maintained our founding principles:
                providing exceptional legal representation, maintaining the
                highest ethical standards, and treating each client with the
                respect and attention they deserve.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="custom-container">
          <div className="mx-auto max-w-3xl text-center mb-12">
            <h2 className="font-serif text-3xl font-bold tracking-tight text-navy-700 md:text-4xl">
              Our Core Values
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              These principles guide everything we do and define who we are as a
              firm.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: <Scale className="h-10 w-10 text-gold-500" />,
                title: "Integrity",
                description:
                  "We adhere to the highest ethical standards in all our dealings, providing honest advice even when it's not what clients might want to hear.",
              },
              {
                icon: <Award className="h-10 w-10 text-gold-500" />,
                title: "Excellence",
                description:
                  "We strive for excellence in every aspect of our practice, from legal strategy to client communication to the outcomes we achieve.",
              },
              {
                icon: <Users className="h-10 w-10 text-gold-500" />,
                title: "Client-Centered",
                description:
                  "Our clients' needs and goals are at the center of everything we do. We listen carefully and tailor our approach to each unique situation.",
              },
              {
                icon: <Target className="h-10 w-10 text-gold-500" />,
                title: "Results-Driven",
                description:
                  "We focus on achieving the best possible outcomes for our clients through strategic thinking, thorough preparation, and determined advocacy.",
              },
              {
                icon: <BookOpen className="h-10 w-10 text-gold-500" />,
                title: "Continuous Learning",
                description:
                  "The law evolves constantly, and so do we. Our attorneys pursue ongoing education to stay at the forefront of legal developments.",
              },
              {
                icon: <History className="h-10 w-10 text-gold-500" />,
                title: "Community Commitment",
                description:
                  "We believe in giving back to the communities we serve through pro bono work, charitable contributions, and active civic engagement.",
              },
            ].map((value, index) => (
              <Card key={index} className="border-none shadow-md">
                <CardContent className="p-6">
                  <div className="mb-4">{value.icon}</div>
                  <h3 className="font-serif text-xl font-bold text-navy-700">
                    {value.title}
                  </h3>
                  <p className="mt-2 text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-16 md:py-24">
        <div className="custom-container">
          <div className="mx-auto max-w-3xl text-center mb-12">
            <h2 className="font-serif text-3xl font-bold tracking-tight text-navy-700 md:text-4xl">
              Our Leadership
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Meet the experienced attorneys who guide our firm's strategic
              direction and maintain our commitment to excellence.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                name: "Sarah Johnson",
                title: "Managing Partner",
                bio: "Sarah co-founded Justice Law in 1998 and has led the firm's growth with her expertise in corporate law and business litigation.",
                image: "/placeholder.svg?height=400&width=300",
              },
              {
                name: "Michael Chen",
                title: "Senior Partner",
                bio: "Co-founder Michael brings over 30 years of experience in criminal defense and has successfully argued cases before the Supreme Court.",
                image: "/placeholder.svg?height=400&width=300",
              },
              {
                name: "Elena Rodriguez",
                title: "Partner, Head of Family Law",
                bio: "Elena joined Justice Law in 2005 and has built our family law practice into one of the most respected in the region.",
                image: "/placeholder.svg?height=400&width=300",
              },
              {
                name: "David Washington",
                title: "Partner, Head of Real Estate",
                bio: "David's expertise in complex real estate transactions has helped countless clients navigate property acquisitions and development projects.",
                image: "/placeholder.svg?height=400&width=300",
              },
              {
                name: "Jennifer Park",
                title: "Partner, Head of Estate Planning",
                bio: "Jennifer's thoughtful approach to estate planning has helped families protect their assets and legacies for over 15 years.",
                image: "/placeholder.svg?height=400&width=300",
              },
              {
                name: "Robert Taylor",
                title: "Chief Operating Officer",
                bio: "With a background in both law and business administration, Robert ensures our firm operates efficiently while maintaining our high standards.",
                image: "/placeholder.svg?height=400&width=300",
              },
            ].map((leader, index) => (
              <Card
                key={index}
                className="overflow-hidden border-none shadow-md"
              >
                <div className="relative h-[300px]">
                  <Image
                    src={leader.image || "/placeholder.svg"}
                    alt={leader.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="font-serif text-xl font-bold text-navy-700">
                    {leader.name}
                  </h3>
                  <p className="text-gold-600">{leader.title}</p>
                  <p className="mt-2 text-gray-600">{leader.bio}</p>
                  <Link
                    href={`/attorneys/${leader.name
                      .toLowerCase()
                      .replace(/\s+/g, "-")}`}
                    className="mt-4 inline-flex items-center text-sm font-medium text-gold-600 hover:text-gold-700"
                  >
                    View Full Profile
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
              <Link href="/attorneys">View All Attorneys</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className="py-16 md:py-24 bg-navy-700 text-white">
        <div className="custom-container">
          <div className="mx-auto max-w-3xl text-center mb-12">
            <h2 className="font-serif text-3xl font-bold tracking-tight md:text-4xl">
              Our Milestones
            </h2>
            <p className="mt-4 text-lg text-gray-200">
              Key moments in our journey to becoming a leading law firm.
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 top-0 h-full w-1 -translate-x-1/2 bg-gold-500"></div>

            <div className="space-y-12">
              {[
                {
                  year: "1998",
                  title: "Firm Founded",
                  description:
                    "Sarah Johnson and Michael Chen establish Justice Law with a focus on corporate and criminal defense.",
                },
                {
                  year: "2003",
                  title: "Expansion of Practice Areas",
                  description:
                    "Added Family Law and Real Estate practices to meet growing client needs.",
                },
                {
                  year: "2008",
                  title: "Downtown Office Opening",
                  description:
                    "Opened our flagship downtown office to better serve our expanding client base.",
                },
                {
                  year: "2012",
                  title: "Regional Recognition",
                  description:
                    "Named 'Law Firm of the Year' by the Regional Bar Association for excellence in client service.",
                },
                {
                  year: "2015",
                  title: "Pro Bono Initiative Launch",
                  description:
                    "Formalized our commitment to community service with a structured pro bono program.",
                },
                {
                  year: "2020",
                  title: "Digital Transformation",
                  description:
                    "Implemented cutting-edge legal technology to enhance client service and case management.",
                },
                {
                  year: "2023",
                  title: "25th Anniversary",
                  description:
                    "Celebrated 25 years of legal excellence and community impact with the establishment of the Justice Law Foundation.",
                },
              ].map((milestone, index) => (
                <div key={index} className="relative">
                  <div
                    className={`flex flex-col ${
                      index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                    } items-center gap-8`}
                  >
                    <div className="md:w-1/2 flex justify-center md:justify-end">
                      <div
                        className={`relative w-full max-w-md rounded-lg bg-navy-800 p-6 ${
                          index % 2 === 0 ? "md:text-right" : "md:text-left"
                        }`}
                      >
                        <div className="mb-2 inline-block rounded bg-gold-500 px-3 py-1 text-sm font-bold text-navy-900">
                          {milestone.year}
                        </div>
                        <h3 className="font-serif text-xl font-bold">
                          {milestone.title}
                        </h3>
                        <p className="mt-2 text-gray-300">
                          {milestone.description}
                        </p>
                      </div>
                    </div>
                    <div className="absolute left-1/2 top-6 h-4 w-4 -translate-x-1/2 rounded-full bg-gold-500"></div>
                    <div className="md:w-1/2"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Community Involvement */}
      <section className="py-16 md:py-24">
        <div className="custom-container">
          <div className="grid gap-12 md:grid-cols-2">
            <div className="flex flex-col justify-center">
              <h2 className="font-serif text-3xl font-bold tracking-tight text-navy-700 md:text-4xl">
                Community Involvement
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                At Justice Law, we believe in giving back to the communities we
                serve. Our attorneys and staff dedicate hundreds of hours each
                year to pro bono work, volunteer activities, and charitable
                initiatives.
              </p>
              <p className="mt-4 text-lg text-gray-600">
                Through the Justice Law Foundation, established on our 25th
                anniversary, we provide scholarships to aspiring law students
                from underrepresented backgrounds and support legal aid
                organizations that serve vulnerable populations.
              </p>
              <p className="mt-4 text-lg text-gray-600">
                Our community involvement extends beyond financial
                contributions. We regularly host legal education workshops,
                participate in community events, and serve on boards of local
                non-profit organizations.
              </p>
              <div className="mt-8">
                <Button className="bg-gold-500 hover:bg-gold-600 text-navy-900">
                  Learn About Our Foundation
                </Button>
              </div>
            </div>
            <div className="grid gap-4 grid-cols-2">
              <div className="relative h-[200px] overflow-hidden rounded-lg shadow-md">
                <Image
                  src="/placeholder.svg?height=400&width=300"
                  alt="Community service"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-[200px] overflow-hidden rounded-lg shadow-md">
                <Image
                  src="/placeholder.svg?height=400&width=300"
                  alt="Pro bono work"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-[200px] overflow-hidden rounded-lg shadow-md">
                <Image
                  src="/placeholder.svg?height=400&width=300"
                  alt="Legal workshop"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-[200px] overflow-hidden rounded-lg shadow-md">
                <Image
                  src="/placeholder.svg?height=400&width=300"
                  alt="Charity event"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="custom-container">
          <div className="rounded-lg bg-navy-700 p-8 md:p-12">
            <div className="mx-auto max-w-3xl text-center text-white">
              <h2 className="font-serif text-3xl font-bold tracking-tight md:text-4xl">
                Experience the Justice Law Difference
              </h2>
              <p className="mt-4 text-lg text-gray-200">
                Our team of experienced attorneys is ready to help you navigate
                your legal challenges with expertise, integrity, and
                personalized attention.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
                <Button className="bg-gold-500 hover:bg-gold-600 text-navy-900">
                  <Link href="/contact">Schedule a Consultation</Link>
                </Button>
                <Button
                  variant="outline"
                  className="border-white text-white hover:bg-white/10"
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
