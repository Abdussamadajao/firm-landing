"use client";
import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Phone, Mail, Award, Search } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";

interface Attorney {
  name: string;
  title: string;
  specialties: string[];
  education: string[];
  experience: string;
  awards: string[];
  bio: string;
  image: string;
  slug: string;
}

export default function AttorneysPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedPracticeArea, setSelectedPracticeArea] = useState<
    string | null
  >(null);

  // Attorney data
  const attorneys: Attorney[] = [
    {
      name: "Sarah Johnson",
      title: "Managing Partner",
      specialties: ["Corporate Law", "Business Litigation"],
      education: ["J.D., Harvard Law School", "B.A., Yale University"],
      experience: "25+ years",
      awards: [
        "Best Lawyers in America, 2018-2023",
        "Super Lawyers, 2015-2023",
      ],
      bio: "Sarah co-founded Justice Law in 1998 and has led the firm's growth with her expertise in corporate law and business litigation. She has successfully represented clients in complex commercial disputes and corporate transactions.",
      image: "/placeholder.svg?height=400&width=300",
      slug: "sarah-johnson",
    },
    {
      name: "Michael Chen",
      title: "Senior Partner",
      specialties: ["Criminal Defense", "White Collar Crime"],
      education: ["J.D., Stanford Law School", "B.A., UC Berkeley"],
      experience: "30+ years",
      awards: [
        "National Trial Lawyers Top 100",
        "Criminal Defense Lawyer of the Year, 2020",
      ],
      bio: "Michael brings over 30 years of experience in criminal defense and has successfully argued cases before the Supreme Court. His strategic approach and thorough preparation have resulted in numerous acquittals and favorable outcomes for his clients.",
      image: "/placeholder.svg?height=400&width=300",
      slug: "michael-chen",
    },
    {
      name: "Elena Rodriguez",
      title: "Partner, Head of Family Law",
      specialties: ["Family Law", "Divorce Mediation"],
      education: ["J.D., Columbia Law School", "B.A., NYU"],
      experience: "18 years",
      awards: [
        "Family Law Practitioner of the Year, 2021",
        "Top Women Attorneys, 2019-2023",
      ],
      bio: "Elena joined Justice Law in 2005 and has built our family law practice into one of the most respected in the region. She is known for her compassionate approach to family matters and her skill in negotiating favorable settlements.",
      image: "/placeholder.svg?height=400&width=300",
      slug: "elena-rodriguez",
    },
    {
      name: "David Washington",
      title: "Partner, Head of Real Estate",
      specialties: ["Real Estate Law", "Land Use & Zoning"],
      education: ["J.D., Georgetown University", "B.S., Cornell University"],
      experience: "15 years",
      awards: [
        "Real Estate Law Expert, Legal Times",
        "Rising Star, Super Lawyers 2018-2020",
      ],
      bio: "David's expertise in complex real estate transactions has helped countless clients navigate property acquisitions and development projects. He has particular expertise in commercial real estate and development regulations.",
      image: "/placeholder.svg?height=400&width=300",
      slug: "david-washington",
    },
    {
      name: "Jennifer Park",
      title: "Partner, Head of Estate Planning",
      specialties: ["Estate Planning", "Probate", "Elder Law"],
      education: [
        "J.D., University of Chicago",
        "B.A., Northwestern University",
      ],
      experience: "16 years",
      awards: [
        "Top Estate Planning Attorney, 2022",
        "Five Star Wealth Manager, 2019-2023",
      ],
      bio: "Jennifer's thoughtful approach to estate planning has helped families protect their assets and legacies for over 15 years. She specializes in complex estate planning strategies for high-net-worth individuals and business succession planning.",
      image: "/placeholder.svg?height=400&width=300",
      slug: "jennifer-park",
    },
    {
      name: "Marcus Johnson",
      title: "Partner, Personal Injury",
      specialties: ["Personal Injury", "Medical Malpractice"],
      education: [
        "J.D., University of Michigan",
        "B.S., Ohio State University",
      ],
      experience: "20 years",
      awards: [
        "Multi-Million Dollar Advocates Forum",
        "Top 100 Trial Lawyers, 2017-2023",
      ],
      bio: "Marcus has recovered millions of dollars for injured clients throughout his 20-year career. His tenacious advocacy and thorough case preparation have earned him a reputation as one of the region's premier personal injury attorneys.",
      image: "/placeholder.svg?height=400&width=300",
      slug: "marcus-johnson",
    },
    {
      name: "Sophia Lee",
      title: "Partner, Intellectual Property",
      specialties: ["Intellectual Property", "Patent Law", "Trademark Law"],
      education: ["J.D., MIT", "B.S. in Computer Science, Caltech"],
      experience: "12 years",
      awards: ["IP Stars, 2020-2023", "Top 50 Women in IP Law, 2021"],
      bio: "With a background in computer science, Sophia brings unique technical expertise to intellectual property matters. She has successfully represented clients in patent litigation, trademark disputes, and IP portfolio management.",
      image: "/placeholder.svg?height=400&width=300",
      slug: "sophia-lee",
    },
    {
      name: "Robert Taylor",
      title: "Partner, Employment Law",
      specialties: ["Employment Law", "Labor Relations"],
      education: ["J.D., University of Virginia", "B.A., Duke University"],
      experience: "14 years",
      awards: [
        "Employment Law Expert, Legal 500",
        "Client Choice Award, Employment, 2022",
      ],
      bio: "Robert represents both employers and employees in workplace matters, providing strategic counsel on compliance issues and vigorous advocacy in employment disputes. He has particular expertise in discrimination claims and executive compensation.",
      image: "/placeholder.svg?height=400&width=300",
      slug: "robert-taylor",
    },
    {
      name: "Maria Gonzalez",
      title: "Senior Associate, Immigration",
      specialties: ["Immigration Law", "Naturalization"],
      education: ["J.D., University of Texas", "B.A., Rice University"],
      experience: "8 years",
      awards: ["Rising Star, Immigration Law, 2021-2023"],
      bio: "Maria helps individuals and businesses navigate the complex U.S. immigration system. She is fluent in Spanish and has successfully represented clients in visa applications, deportation defense, and naturalization proceedings.",
      image: "/placeholder.svg?height=400&width=300",
      slug: "maria-gonzalez",
    },
  ];

  // Practice areas with counts
  const practiceAreas = useMemo(() => {
    const areas = new Map<string, number>();
    attorneys.forEach((attorney) => {
      attorney.specialties.forEach((specialty) => {
        areas.set(specialty, (areas.get(specialty) || 0) + 1);
      });
    });
    return Array.from(areas.entries());
  }, [attorneys]);

  // Filtered attorneys
  const filteredAttorneys = useMemo(() => {
    return attorneys.filter((attorney) => {
      const matchesSearch =
        attorney.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        attorney.bio.toLowerCase().includes(searchQuery.toLowerCase()) ||
        attorney.specialties.some((s) =>
          s.toLowerCase().includes(searchQuery.toLowerCase())
        );

      const matchesPracticeArea =
        !selectedPracticeArea ||
        attorney.specialties.includes(selectedPracticeArea);

      return matchesSearch && matchesPracticeArea;
    });
  }, [attorneys, searchQuery, selectedPracticeArea]);

  // Featured attorney (Managing Partner)
  const featuredAttorney = useMemo(
    () => attorneys.find((a) => a.title.includes("Managing Partner")),
    [attorneys]
  );

  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="relative bg-navy-700 py-16 md:py-24">
        <div className="absolute inset-0 bg-gradient-to-r from-navy-800 to-navy-600" />
        <div className="custom-container relative z-10 mx-auto px-4 text-white">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="font-serif text-4xl font-bold tracking-tight md:text-5xl">
              Our Attorneys
            </h1>
            <p className="mt-6 text-lg text-gray-200 md:text-xl">
              Meet our team of experienced legal professionals dedicated to
              providing exceptional representation and personalized service.
            </p>
          </div>
        </div>
      </section>

      {/* Search & Filter Section */}
      <section className="border-b py-6">
        <div className="custom-container space-y-4">
          <div className="relative max-w-xl mx-auto">
            <label htmlFor="attorney-search" className="sr-only">
              Search attorneys
            </label>
            <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-500" />
            <Input
              id="attorney-search"
              placeholder="Search by name, specialty, or expertise..."
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
              <Badge
                onClick={() => setSelectedPracticeArea(null)}
                className={`cursor-pointer transition-colors ${
                  !selectedPracticeArea
                    ? "bg-navy-700 text-white hover:bg-navy-800"
                    : "hover:bg-navy-100"
                }`}
              >
                All ({attorneys.length})
              </Badge>
              {practiceAreas.map(([area, count]) => (
                <Badge
                  key={area}
                  onClick={() => setSelectedPracticeArea(area)}
                  className={`cursor-pointer transition-colors ${
                    selectedPracticeArea === area
                      ? "bg-navy-700 text-white hover:bg-navy-800"
                      : "hover:bg-navy-100"
                  }`}
                >
                  {area} ({count})
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Attorneys Grid */}
      <section className="py-16 md:py-24">
        <div className="custom-container">
          {filteredAttorneys.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">
                No attorneys found matching your criteria.
              </p>
            </div>
          ) : (
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {filteredAttorneys.map((attorney) => (
                <Card
                  key={attorney.slug}
                  className="overflow-hidden border-none shadow-md transition-all hover:shadow-lg"
                >
                  <div className="relative h-[300px]">
                    <Image
                      src={attorney.image || "/placeholder.svg"}
                      alt={`Portrait of ${attorney.name}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="font-serif text-xl font-bold text-navy-700">
                      {attorney.name}
                    </h3>
                    <p className="text-gold-600">{attorney.title}</p>
                    <div className="mt-2 flex flex-wrap gap-1">
                      {attorney.specialties.map((specialty) => (
                        <Badge
                          key={specialty}
                          variant="outline"
                          className="text-xs"
                        >
                          {specialty}
                        </Badge>
                      ))}
                    </div>
                    <p className="mt-3 text-gray-600 line-clamp-3">
                      {attorney.bio}
                    </p>
                    <Link
                      href={`/attorneys/${attorney.slug}`}
                      className="mt-4 inline-flex items-center text-sm font-medium text-gold-600 hover:text-gold-700"
                    >
                      View Profile
                      <ChevronRight className="ml-1 h-4 w-4" />
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Featured Attorney */}
      {featuredAttorney && (
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="custom-container">
            <div className="grid gap-12 md:grid-cols-2">
              <div className="relative h-[400px] md:h-auto overflow-hidden rounded-lg shadow-xl">
                <Image
                  src={featuredAttorney.image}
                  alt={`Portrait of ${featuredAttorney.name}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="flex flex-col justify-center">
                <h2 className="font-serif text-3xl font-bold tracking-tight text-navy-700 md:text-4xl">
                  Meet Our Managing Partner
                </h2>
                <p className="mt-2 text-xl text-gold-600">
                  {featuredAttorney.name}
                </p>
                <p className="mt-4 text-lg text-gray-600">
                  {featuredAttorney.bio}
                </p>
                <div className="mt-6 space-y-3">
                  {featuredAttorney.awards.slice(0, 2).map((award) => (
                    <div key={award} className="flex items-center gap-2">
                      <Award className="h-5 w-5 text-gold-500" />
                      <span className="text-gray-700">{award}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 space-y-2">
                  <div className="flex items-center gap-2">
                    <Mail className="h-5 w-5 text-navy-700" />
                    <a
                      href={`mailto:${featuredAttorney.slug}@justicelaw.com`}
                      className="text-navy-700 hover:text-gold-600"
                    >
                      {featuredAttorney.slug}@justicelaw.com
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="h-5 w-5 text-navy-700" />
                    <a
                      href="tel:+15551234567"
                      className="text-navy-700 hover:text-gold-600"
                    >
                      (555) 123-4567
                    </a>
                  </div>
                </div>
                <div className="mt-8">
                  <Button asChild className="bg-navy-700 hover:bg-navy-800">
                    <Link href={`/attorneys/${featuredAttorney.slug}`}>
                      View Full Profile
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
      <section className="py-16 md:py-24">
        <div className="custom-container">
          <div className="mx-auto max-w-3xl text-center mb-12">
            <h2 className="font-serif text-3xl font-bold tracking-tight text-navy-700 md:text-4xl">
              Why Choose Our Legal Team
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Our attorneys bring a unique combination of expertise, experience,
              and dedication to every case.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <Card className="border-none shadow-md">
              <CardContent className="p-6">
                <div className="mb-4 rounded-full bg-navy-50 p-3 w-fit">
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
                    className="h-6 w-6 text-navy-700"
                  >
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                  </svg>
                </div>
                <h3 className="font-serif text-xl font-bold text-navy-700">
                  Proven Track Record
                </h3>
                <p className="mt-2 text-gray-600">
                  Our attorneys have successfully handled thousands of cases
                  across all practice areas, achieving favorable outcomes for
                  our clients through skilled negotiation and litigation.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md">
              <CardContent className="p-6">
                <div className="mb-4 rounded-full bg-navy-50 p-3 w-fit">
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
                    className="h-6 w-6 text-navy-700"
                  >
                    <path d="M12 20h9" />
                    <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
                  </svg>
                </div>
                <h3 className="font-serif text-xl font-bold text-navy-700">
                  Specialized Expertise
                </h3>
                <p className="mt-2 text-gray-600">
                  Each attorney focuses on specific practice areas, allowing
                  them to develop deep expertise and stay current with the
                  latest legal developments in their field.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md">
              <CardContent className="p-6">
                <div className="mb-4 rounded-full bg-navy-50 p-3 w-fit">
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
                    className="h-6 w-6 text-navy-700"
                  >
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                </div>
                <h3 className="font-serif text-xl font-bold text-navy-700">
                  Client-Centered Approach
                </h3>
                <p className="mt-2 text-gray-600">
                  We prioritize understanding your unique needs and goals,
                  maintaining clear communication throughout your case, and
                  developing strategies tailored to your specific situation.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24 bg-navy-700 text-white">
        <div className="custom-container">
          <div className="mx-auto max-w-3xl text-center mb-12">
            <h2 className="font-serif text-3xl font-bold tracking-tight md:text-4xl">
              What Clients Say
            </h2>
            <p className="mt-4 text-lg text-gray-200">
              Our clients' experiences reflect our commitment to exceptional
              legal representation.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <Card className="bg-navy-800 border-none shadow-md">
              <CardContent className="p-6">
                <div className="text-gold-500 text-4xl font-serif">"</div>
                <p className="mt-2 text-gray-200">
                  Michael Chen's expertise in criminal defense was evident from
                  our first meeting. His strategic approach and thorough
                  preparation resulted in all charges being dismissed. I can't
                  recommend him highly enough.
                </p>
                <div className="mt-6">
                  <p className="font-medium">Thomas Wilson</p>
                  <p className="text-sm text-gray-300">
                    Criminal Defense Client
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-navy-800 border-none shadow-md">
              <CardContent className="p-6">
                <div className="text-gold-500 text-4xl font-serif">"</div>
                <p className="mt-2 text-gray-200">
                  Jennifer Park guided our family through the estate planning
                  process with patience and expertise. She took the time to
                  understand our unique situation and created a comprehensive
                  plan that gave us peace of mind.
                </p>
                <div className="mt-6">
                  <p className="font-medium">Rebecca and James Thompson</p>
                  <p className="text-sm text-gray-300">
                    Estate Planning Clients
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24">
        <div className="custom-container">
          <div className="rounded-lg bg-gray-50 p-8 md:p-12">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="font-serif text-3xl font-bold tracking-tight text-navy-700 md:text-4xl">
                Ready to Work With Our Team?
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                Schedule a consultation with one of our experienced attorneys to
                discuss your legal needs.
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
