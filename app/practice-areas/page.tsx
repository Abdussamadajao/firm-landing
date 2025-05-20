import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function PracticeAreasPage() {
  // Practice areas data
  const practiceAreas = [
    {
      title: "Corporate Law",
      description:
        "Our corporate law practice provides comprehensive legal services to businesses of all sizes, from startups to multinational corporations. We assist with entity formation, governance, compliance, mergers and acquisitions, and general business matters.",
      icon: "📊",
      image: "/placeholder.svg?height=600&width=800",
      services: [
        "Business Formation & Entity Selection",
        "Corporate Governance",
        "Mergers & Acquisitions",
        "Contract Drafting & Negotiation",
        "Regulatory Compliance",
        "Corporate Finance",
        "Joint Ventures & Strategic Alliances",
        "Intellectual Property Protection",
      ],
      slug: "corporate-law",
    },
    {
      title: "Family Law",
      description:
        "Our family law attorneys provide compassionate representation during life's most challenging personal transitions. We handle divorce, child custody, support matters, adoption, and other family-related legal issues with sensitivity and expertise.",
      icon: "👪",
      image: "/placeholder.svg?height=600&width=800",
      services: [
        "Divorce & Legal Separation",
        "Child Custody & Visitation",
        "Child & Spousal Support",
        "Property Division",
        "Prenuptial & Postnuptial Agreements",
        "Adoption",
        "Domestic Violence Protection",
        "Mediation & Collaborative Divorce",
      ],
      slug: "family-law",
    },
    {
      title: "Criminal Defense",
      description:
        "Our criminal defense team provides aggressive representation for clients facing charges ranging from misdemeanors to serious felonies. We protect your rights throughout the criminal justice process and work tirelessly to achieve the best possible outcome.",
      icon: "⚖️",
      image: "/placeholder.svg?height=600&width=800",
      services: [
        "Felony & Misdemeanor Defense",
        "DUI/DWI Defense",
        "White Collar Crime",
        "Drug Offenses",
        "Violent Crime Defense",
        "Federal Criminal Defense",
        "Juvenile Defense",
        "Expungements & Record Sealing",
      ],
      slug: "criminal-defense",
    },
    {
      title: "Real Estate Law",
      description:
        "Our real estate practice serves individuals, developers, investors, and businesses in all aspects of real property transactions and disputes. We handle residential and commercial matters with a focus on protecting our clients' interests.",
      icon: "🏢",
      image: "/placeholder.svg?height=600&width=800",
      services: [
        "Residential & Commercial Transactions",
        "Real Estate Development",
        "Leasing & Property Management",
        "Title Issues & Disputes",
        "Land Use & Zoning",
        "Construction Contracts & Disputes",
        "Foreclosure Prevention & Defense",
        "Real Estate Litigation",
      ],
      slug: "real-estate-law",
    },
    {
      title: "Personal Injury",
      description:
        "Our personal injury attorneys fight for the rights of those injured due to the negligence of others. We pursue maximum compensation for medical expenses, lost wages, pain and suffering, and other damages while you focus on recovery.",
      icon: "🩹",
      image: "/placeholder.svg?height=600&width=800",
      services: [
        "Car & Truck Accidents",
        "Slip & Fall Injuries",
        "Medical Malpractice",
        "Workplace Injuries",
        "Product Liability",
        "Wrongful Death Claims",
        "Premises Liability",
        "Catastrophic Injury Cases",
      ],
      slug: "personal-injury",
    },
    {
      title: "Estate Planning",
      description:
        "Our estate planning practice helps individuals and families protect their assets and plan for the future. We create customized plans that reflect your wishes, minimize tax implications, and provide for your loved ones.",
      icon: "📝",
      image: "/placeholder.svg?height=600&width=800",
      services: [
        "Wills & Trusts",
        "Powers of Attorney",
        "Healthcare Directives",
        "Estate & Gift Tax Planning",
        "Business Succession Planning",
        "Probate & Estate Administration",
        "Trust Administration",
        "Guardianships & Conservatorships",
      ],
      slug: "estate-planning",
    },
    {
      title: "Employment Law",
      description:
        "Our employment law team represents both employers and employees in workplace matters. We provide guidance on compliance issues and advocate vigorously in employment disputes to protect our clients' rights and interests.",
      icon: "💼",
      image: "/placeholder.svg?height=600&width=800",
      services: [
        "Employment Contracts & Policies",
        "Discrimination & Harassment Claims",
        "Wage & Hour Disputes",
        "Wrongful Termination",
        "Non-Compete & Confidentiality Agreements",
        "Employee Benefits & ERISA",
        "Labor Relations & Union Issues",
        "Workplace Investigations",
      ],
      slug: "employment-law",
    },
    {
      title: "Intellectual Property",
      description:
        "Our intellectual property practice helps clients protect their creative works, innovations, and brand identity. We provide comprehensive IP services from registration to enforcement and litigation when necessary.",
      icon: "💡",
      image: "/placeholder.svg?height=600&width=800",
      services: [
        "Trademark Registration & Protection",
        "Copyright Registration & Enforcement",
        "Patent Application & Prosecution",
        "IP Licensing & Transfers",
        "Trade Secret Protection",
        "IP Litigation & Dispute Resolution",
        "IP Portfolio Management",
        "Internet & Domain Name Issues",
      ],
      slug: "intellectual-property",
    },
  ];

  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="relative bg-navy-700 py-16 md:py-24">
        <div className="absolute inset-0 z-0 opacity-20">
          <Image
            src="/placeholder.svg?height=1080&width=1920"
            alt="Practice areas background"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="custom-container relative z-10  text-white">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="font-serif text-4xl font-bold tracking-tight md:text-5xl">
              Our Practice Areas
            </h1>
            <p className="mt-6 text-lg text-gray-200 md:text-xl">
              Justice Law offers comprehensive legal services across a wide
              range of practice areas. Our experienced attorneys provide
              exceptional representation tailored to your specific needs.
            </p>
          </div>
        </div>
      </section>

      {/* Practice Areas Overview */}
      <section className="py-16 md:py-24">
        <div className="custom-container">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {practiceAreas.map((area, index) => (
              <Card
                key={index}
                className="overflow-hidden border-none shadow-md transition-all hover:shadow-lg"
              >
                <CardContent className="p-6">
                  <div className="mb-4 text-3xl">{area.icon}</div>
                  <h3 className="font-serif text-xl font-bold text-navy-700">
                    {area.title}
                  </h3>
                  <p className="mt-2 text-gray-600">{area.description}</p>
                  <Link
                    href={`/practice-areas/${area.slug}`}
                    className="mt-4 inline-flex items-center text-sm font-medium text-gold-600 hover:text-gold-700"
                  >
                    Learn more
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Practice Area */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="custom-container">
          <div className="grid gap-12 md:grid-cols-2">
            <div className="relative h-[400px] md:h-auto overflow-hidden rounded-lg shadow-xl">
              <Image
                src="/placeholder.svg?height=800&width=1200"
                alt="Corporate law services"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex flex-col justify-center">
              <h2 className="font-serif text-3xl font-bold tracking-tight text-navy-700 md:text-4xl">
                Corporate Law Excellence
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                Our corporate law practice is the cornerstone of Justice Law,
                providing comprehensive legal services to businesses at every
                stage of their development.
              </p>
              <p className="mt-4 text-lg text-gray-600">
                From startups seeking guidance on entity formation to
                established corporations navigating complex mergers and
                acquisitions, our experienced attorneys deliver strategic
                counsel tailored to your business objectives.
              </p>
              <div className="mt-6 space-y-3">
                <div className="flex items-start gap-2">
                  <ChevronRight className="h-5 w-5 text-gold-500 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-medium text-navy-700">
                      Business Formation & Structuring
                    </h4>
                    <p className="text-gray-600">
                      Strategic entity selection and formation to protect assets
                      and optimize tax benefits.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <ChevronRight className="h-5 w-5 text-gold-500 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-medium text-navy-700">
                      Mergers & Acquisitions
                    </h4>
                    <p className="text-gray-600">
                      Comprehensive guidance through the complex process of
                      business combinations and acquisitions.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <ChevronRight className="h-5 w-5 text-gold-500 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-medium text-navy-700">
                      Contract Drafting & Negotiation
                    </h4>
                    <p className="text-gray-600">
                      Crafting and reviewing contracts that protect your
                      interests and advance your business goals.
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <Button className="bg-navy-700 hover:bg-navy-800">
                  <Link href="/practice-areas/corporate-law">
                    Explore Corporate Law Services
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="py-16 md:py-24">
        <div className="custom-container">
          <div className="mx-auto max-w-3xl text-center mb-12">
            <h2 className="font-serif text-3xl font-bold tracking-tight text-navy-700 md:text-4xl">
              Our Approach
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              What sets Justice Law apart is our client-centered approach to
              legal representation.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <Card className="border-none shadow-md">
              <CardContent className="p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-navy-100 text-navy-700">
                  <span className="text-2xl font-bold">1</span>
                </div>
                <h3 className="font-serif text-xl font-bold text-navy-700">
                  Personalized Attention
                </h3>
                <p className="mt-2 text-gray-600">
                  We take the time to understand your unique situation,
                  concerns, and goals before developing a legal strategy. You'll
                  work directly with experienced attorneys who are invested in
                  your success.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md">
              <CardContent className="p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-navy-100 text-navy-700">
                  <span className="text-2xl font-bold">2</span>
                </div>
                <h3 className="font-serif text-xl font-bold text-navy-700">
                  Strategic Thinking
                </h3>
                <p className="mt-2 text-gray-600">
                  We look beyond immediate legal issues to consider long-term
                  implications and opportunities. Our attorneys develop
                  comprehensive strategies that address current needs while
                  positioning you for future success.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md">
              <CardContent className="p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-navy-100 text-navy-700">
                  <span className="text-2xl font-bold">3</span>
                </div>
                <h3 className="font-serif text-xl font-bold text-navy-700">
                  Clear Communication
                </h3>
                <p className="mt-2 text-gray-600">
                  We explain complex legal concepts in plain language, keep you
                  informed at every stage of your case, and ensure you
                  understand your options so you can make confident decisions
                  about your legal matters.
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
              Client Success Stories
            </h2>
            <p className="mt-4 text-lg text-gray-200">
              Read what our clients have to say about their experience working
              with our practice areas.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <Card className="bg-navy-800 border-none shadow-md">
              <CardContent className="p-6">
                <div className="text-gold-500 text-4xl font-serif">"</div>
                <p className="mt-2 text-gray-200">
                  The corporate team at Justice Law guided our startup through
                  complex funding rounds and regulatory challenges with
                  expertise and strategic thinking that proved invaluable to our
                  growth.
                </p>
                <div className="mt-6">
                  <p className="font-medium">Alex Rivera</p>
                  <p className="text-sm text-gray-300">CEO, TechInnovate</p>
                  <p className="text-sm text-gold-400">Corporate Law Client</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-navy-800 border-none shadow-md">
              <CardContent className="p-6">
                <div className="text-gold-500 text-4xl font-serif">"</div>
                <p className="mt-2 text-gray-200">
                  During my divorce, Elena Rodriguez provided compassionate
                  guidance while fiercely advocating for my parental rights. Her
                  expertise in family law made a difficult time much more
                  manageable.
                </p>
                <div className="mt-6">
                  <p className="font-medium">Michelle Johnson</p>
                  <p className="text-sm text-gray-300">Client</p>
                  <p className="text-sm text-gold-400">Family Law Client</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-navy-800 border-none shadow-md">
              <CardContent className="p-6">
                <div className="text-gold-500 text-4xl font-serif">"</div>
                <p className="mt-2 text-gray-200">
                  After my accident, the personal injury team at Justice Law
                  handled everything while I focused on recovery. They secured a
                  settlement far exceeding my expectations and treated me like
                  family.
                </p>
                <div className="mt-6">
                  <p className="font-medium">James Wilson</p>
                  <p className="text-sm text-gray-300">Client</p>
                  <p className="text-sm text-gold-400">
                    Personal Injury Client
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
                Ready to Discuss Your Legal Needs?
              </h2>
              <p className="mt-4 text-lg text-gray-600">
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
                  className="border-navy-700 text-navy-700 hover:bg-navy-50"
                >
                  <Link href="/attorneys">Meet Our Attorneys</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
