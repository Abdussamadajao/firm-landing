import Image from "next/image";
import Link from "next/link";
import {
  ChevronRight,
  CheckCircle,
  Users,
  BookOpen,
  Award,
  Briefcase,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function CareersPage() {
  // Job openings data
  const jobOpenings = [
    {
      title: "Corporate Law Associate",
      location: "Main Office - Cityville",
      type: "Full-time",
      experience: "3-5 years",
      description:
        "We are seeking a Corporate Law Associate with 3-5 years of experience to join our growing corporate practice. The ideal candidate will have experience in mergers and acquisitions, corporate governance, and securities law.",
      requirements: [
        "J.D. from an accredited law school",
        "3-5 years of experience in corporate law",
        "Strong academic credentials",
        "Excellent writing and communication skills",
        "Experience with mergers and acquisitions preferred",
      ],
      slug: "corporate-law-associate",
    },
    {
      title: "Family Law Attorney",
      location: "Downtown Branch",
      type: "Full-time",
      experience: "2+ years",
      description:
        "Our family law practice is expanding, and we're looking for a compassionate and detail-oriented attorney to join our team. The successful candidate will handle divorce, custody, and support matters with sensitivity and expertise.",
      requirements: [
        "J.D. from an accredited law school",
        "2+ years of experience in family law",
        "Strong negotiation and litigation skills",
        "Excellent interpersonal skills",
        "Experience with mediation preferred",
      ],
      slug: "family-law-attorney",
    },
    {
      title: "Litigation Paralegal",
      location: "Main Office - Cityville",
      type: "Full-time",
      experience: "3+ years",
      description:
        "We are seeking an experienced Litigation Paralegal to support our busy litigation practice. The ideal candidate will be detail-oriented, organized, and able to manage multiple cases simultaneously.",
      requirements: [
        "Paralegal certificate or equivalent",
        "3+ years of litigation paralegal experience",
        "Proficiency in legal research and document management",
        "Strong organizational and time management skills",
        "Experience with case management software",
      ],
      slug: "litigation-paralegal",
    },
    {
      title: "Real Estate Attorney",
      location: "Westside Office",
      type: "Full-time",
      experience: "4+ years",
      description:
        "Our real estate practice is seeking an experienced attorney to handle commercial and residential real estate transactions, leasing, and development matters.",
      requirements: [
        "J.D. from an accredited law school",
        "4+ years of experience in real estate law",
        "Experience with commercial real estate transactions",
        "Strong drafting and negotiation skills",
        "Knowledge of zoning and land use regulations",
      ],
      slug: "real-estate-attorney",
    },
    {
      title: "Legal Administrative Assistant",
      location: "Downtown Branch",
      type: "Full-time",
      experience: "2+ years",
      description:
        "We are seeking a Legal Administrative Assistant to provide administrative support to our attorneys and paralegals. The ideal candidate will be organized, detail-oriented, and have excellent communication skills.",
      requirements: [
        "Associate's degree or equivalent",
        "2+ years of experience in a legal office",
        "Proficiency in Microsoft Office Suite",
        "Strong organizational and time management skills",
        "Experience with legal billing software preferred",
      ],
      slug: "legal-administrative-assistant",
    },
    {
      title: "Intellectual Property Associate",
      location: "Main Office - Cityville",
      type: "Full-time",
      experience: "2-4 years",
      description:
        "Our intellectual property practice is seeking an associate with experience in trademark and copyright law. The ideal candidate will have experience with IP litigation and transactions.",
      requirements: [
        "J.D. from an accredited law school",
        "2-4 years of experience in intellectual property law",
        "USPTO registration preferred",
        "Strong writing and analytical skills",
        "Technical background a plus",
      ],
      slug: "intellectual-property-associate",
    },
  ];

  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="relative bg-navy-700 py-16 md:py-24">
        <div className="absolute inset-0 z-0 opacity-20">
          <Image
            src="/placeholder.svg?height=1080&width=1920"
            alt="Careers at Justice Law"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="custom-container relative z-10 mx-auto px-4 text-white">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="font-serif text-4xl font-bold tracking-tight md:text-5xl">
              Careers at Justice Law
            </h1>
            <p className="mt-6 text-lg text-gray-200 md:text-xl">
              Join our team of dedicated legal professionals and build a
              rewarding career in an environment that values excellence,
              integrity, and growth.
            </p>
            <Button className="mt-8 bg-gold-500 hover:bg-gold-600 text-navy-900">
              View Current Openings
            </Button>
          </div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-16 md:py-24">
        <div className="custom-container">
          <div className="mx-auto max-w-3xl text-center mb-12">
            <h2 className="font-serif text-3xl font-bold tracking-tight text-navy-700 md:text-4xl">
              Why Join Justice Law
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              We offer a supportive and collaborative environment where you can
              grow professionally while making a meaningful impact.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <Card className="border-none shadow-md">
              <CardContent className="p-6">
                <div className="mb-4 rounded-full bg-navy-50 p-3 w-fit">
                  <Briefcase className="h-6 w-6 text-navy-700" />
                </div>
                <h3 className="font-serif text-xl font-bold text-navy-700">
                  Challenging Work
                </h3>
                <p className="mt-2 text-gray-600">
                  Work on complex and meaningful cases that will challenge you
                  intellectually and help you grow professionally.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md">
              <CardContent className="p-6">
                <div className="mb-4 rounded-full bg-navy-50 p-3 w-fit">
                  <Users className="h-6 w-6 text-navy-700" />
                </div>
                <h3 className="font-serif text-xl font-bold text-navy-700">
                  Collaborative Culture
                </h3>
                <p className="mt-2 text-gray-600">
                  Join a supportive team that values collaboration, mentorship,
                  and the exchange of ideas.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md">
              <CardContent className="p-6">
                <div className="mb-4 rounded-full bg-navy-50 p-3 w-fit">
                  <BookOpen className="h-6 w-6 text-navy-700" />
                </div>
                <h3 className="font-serif text-xl font-bold text-navy-700">
                  Professional Development
                </h3>
                <p className="mt-2 text-gray-600">
                  Benefit from ongoing training, mentorship programs, and
                  opportunities to expand your skills and expertise.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md">
              <CardContent className="p-6">
                <div className="mb-4 rounded-full bg-navy-50 p-3 w-fit">
                  <Award className="h-6 w-6 text-navy-700" />
                </div>
                <h3 className="font-serif text-xl font-bold text-navy-700">
                  Work-Life Balance
                </h3>
                <p className="mt-2 text-gray-600">
                  We value the well-being of our team members and strive to
                  maintain a healthy work-life balance.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="custom-container">
          <div className="grid gap-12 md:grid-cols-2">
            <div className="flex flex-col justify-center">
              <h2 className="font-serif text-3xl font-bold tracking-tight text-navy-700 md:text-4xl">
                Comprehensive Benefits
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                We offer a competitive benefits package designed to support your
                health, well-being, and financial security.
              </p>

              <div className="mt-6 space-y-4">
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-6 w-6 text-gold-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-medium text-navy-700">
                      Health & Wellness
                    </h3>
                    <p className="text-gray-600">
                      Comprehensive medical, dental, and vision insurance for
                      you and your dependents.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <CheckCircle className="h-6 w-6 text-gold-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-medium text-navy-700">
                      Retirement Planning
                    </h3>
                    <p className="text-gray-600">
                      401(k) plan with employer matching to help you save for
                      the future.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <CheckCircle className="h-6 w-6 text-gold-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-medium text-navy-700">Paid Time Off</h3>
                    <p className="text-gray-600">
                      Generous vacation, sick leave, and holidays to ensure you
                      have time to rest and recharge.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <CheckCircle className="h-6 w-6 text-gold-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-medium text-navy-700">
                      Professional Development
                    </h3>
                    <p className="text-gray-600">
                      Continuing legal education allowance and support for
                      professional memberships.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <CheckCircle className="h-6 w-6 text-gold-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-medium text-navy-700">
                      Parental Leave
                    </h3>
                    <p className="text-gray-600">
                      Paid parental leave for both primary and secondary
                      caregivers.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <CheckCircle className="h-6 w-6 text-gold-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-medium text-navy-700">
                      Wellness Programs
                    </h3>
                    <p className="text-gray-600">
                      Fitness reimbursement, mental health resources, and
                      wellness initiatives.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative h-[400px] md:h-auto overflow-hidden rounded-lg shadow-xl">
              <Image
                src="/placeholder.svg?height=800&width=1200"
                alt="Team members in office"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Current Openings */}
      <section className="py-16 md:py-24">
        <div className="custom-container">
          <div className="mx-auto max-w-3xl text-center mb-12">
            <h2 className="font-serif text-3xl font-bold tracking-tight text-navy-700 md:text-4xl">
              Current Openings
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Explore our current job opportunities and find the role that
              matches your skills and career goals.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {jobOpenings.map((job, index) => (
              <Card key={index} className="border-none shadow-md">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="font-serif text-xl font-bold text-navy-700">
                        {job.title}
                      </h3>
                      <p className="text-gold-600">{job.location}</p>
                    </div>
                    <div className="flex gap-2">
                      <Badge variant="outline" className="bg-navy-50">
                        {job.type}
                      </Badge>
                      <Badge variant="outline" className="bg-navy-50">
                        {job.experience}
                      </Badge>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">{job.description}</p>
                  <h4 className="font-medium text-navy-700 mb-2">
                    Requirements:
                  </h4>
                  <ul className="list-disc pl-5 mb-4 text-gray-600 space-y-1">
                    {job.requirements.map((req, reqIndex) => (
                      <li key={reqIndex}>{req}</li>
                    ))}
                  </ul>
                  <div className="mt-4">
                    <Link
                      href={`/careers/${job.slug}`}
                      className="inline-flex items-center text-gold-600 hover:text-gold-700 font-medium"
                    >
                      View Details & Apply
                      <ChevronRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Life at Justice Law */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="custom-container">
          <div className="mx-auto max-w-3xl text-center mb-12">
            <h2 className="font-serif text-3xl font-bold tracking-tight text-navy-700 md:text-4xl">
              Life at Justice Law
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Get a glimpse of our culture and what it's like to be part of our
              team.
            </p>
          </div>

          <div className="grid gap-4 grid-cols-2 md:grid-cols-4">
            <div className="relative aspect-square overflow-hidden rounded-lg shadow-md">
              <Image
                src="/placeholder.svg?height=400&width=400"
                alt="Team meeting"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative aspect-square overflow-hidden rounded-lg shadow-md">
              <Image
                src="/placeholder.svg?height=400&width=400"
                alt="Office environment"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative aspect-square overflow-hidden rounded-lg shadow-md">
              <Image
                src="/placeholder.svg?height=400&width=400"
                alt="Team building event"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative aspect-square overflow-hidden rounded-lg shadow-md">
              <Image
                src="/placeholder.svg?height=400&width=400"
                alt="Community service"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative aspect-square overflow-hidden rounded-lg shadow-md">
              <Image
                src="/placeholder.svg?height=400&width=400"
                alt="Office celebration"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative aspect-square overflow-hidden rounded-lg shadow-md">
              <Image
                src="/placeholder.svg?height=400&width=400"
                alt="Professional development"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative aspect-square overflow-hidden rounded-lg shadow-md">
              <Image
                src="/placeholder.svg?height=400&width=400"
                alt="Team lunch"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative aspect-square overflow-hidden rounded-lg shadow-md">
              <Image
                src="/placeholder.svg?height=400&width=400"
                alt="Award ceremony"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Employee Testimonials */}
      <section className="py-16 md:py-24">
        <div className="custom-container">
          <div className="mx-auto max-w-3xl text-center mb-12">
            <h2 className="font-serif text-3xl font-bold tracking-tight text-navy-700 md:text-4xl">
              What Our Team Says
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Hear from our team members about their experience working at
              Justice Law.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <Card className="border-none shadow-md">
              <CardContent className="p-6">
                <div className="text-gold-500 text-4xl font-serif">"</div>
                <p className="mt-2 text-gray-700 italic">
                  Working at Justice Law has provided me with incredible growth
                  opportunities. The mentorship I've received from senior
                  attorneys has been invaluable to my professional development.
                </p>
                <div className="mt-6 flex items-center gap-3">
                  <div className="relative h-12 w-12 overflow-hidden rounded-full">
                    <Image
                      src="/placeholder.svg?height=100&width=100"
                      alt="Employee portrait"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-medium text-navy-700">Rachel Kim</p>
                    <p className="text-sm text-gray-500">Associate, 3 years</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md">
              <CardContent className="p-6">
                <div className="text-gold-500 text-4xl font-serif">"</div>
                <p className="mt-2 text-gray-700 italic">
                  The collaborative culture at Justice Law sets it apart from
                  other firms. I appreciate that we work as a team to achieve
                  the best outcomes for our clients while supporting each
                  other's success.
                </p>
                <div className="mt-6 flex items-center gap-3">
                  <div className="relative h-12 w-12 overflow-hidden rounded-full">
                    <Image
                      src="/placeholder.svg?height=100&width=100"
                      alt="Employee portrait"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-medium text-navy-700">Marcus Johnson</p>
                    <p className="text-sm text-gray-500">Partner, 8 years</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md">
              <CardContent className="p-6">
                <div className="text-gold-500 text-4xl font-serif">"</div>
                <p className="mt-2 text-gray-700 italic">
                  As a paralegal, I feel valued and respected at Justice Law.
                  The firm invests in professional development for all staff
                  members, not just attorneys, which has helped me advance my
                  career.
                </p>
                <div className="mt-6 flex items-center gap-3">
                  <div className="relative h-12 w-12 overflow-hidden rounded-full">
                    <Image
                      src="/placeholder.svg?height=100&width=100"
                      alt="Employee portrait"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-medium text-navy-700">Sophia Martinez</p>
                    <p className="text-sm text-gray-500">
                      Senior Paralegal, 5 years
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-16 md:py-24 bg-navy-700 text-white">
        <div className="custom-container">
          <div className="mx-auto max-w-3xl text-center mb-12">
            <h2 className="font-serif text-3xl font-bold tracking-tight md:text-4xl">
              Our Application Process
            </h2>
            <p className="mt-4 text-lg text-gray-200">
              Here's what to expect when you apply for a position at Justice
              Law.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-4">
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gold-500 text-navy-900">
                <span className="text-2xl font-bold">1</span>
              </div>
              <h3 className="font-serif text-xl font-bold">
                Application Review
              </h3>
              <p className="mt-2 text-gray-300">
                Our HR team reviews your application materials to assess your
                qualifications and fit.
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gold-500 text-navy-900">
                <span className="text-2xl font-bold">2</span>
              </div>
              <h3 className="font-serif text-xl font-bold">
                Initial Interview
              </h3>
              <p className="mt-2 text-gray-300">
                Qualified candidates are invited for an initial interview with
                HR and the hiring manager.
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gold-500 text-navy-900">
                <span className="text-2xl font-bold">3</span>
              </div>
              <h3 className="font-serif text-xl font-bold">Team Interview</h3>
              <p className="mt-2 text-gray-300">
                Meet with potential colleagues and team members to assess
                cultural fit and collaboration.
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gold-500 text-navy-900">
                <span className="text-2xl font-bold">4</span>
              </div>
              <h3 className="font-serif text-xl font-bold">
                Offer & Onboarding
              </h3>
              <p className="mt-2 text-gray-300">
                Successful candidates receive an offer and begin our
                comprehensive onboarding process.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24">
        <div className="custom-container">
          <div className="rounded-lg bg-gray-50 p-8 md:p-12">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="font-serif text-3xl font-bold tracking-tight text-navy-700 md:text-4xl">
                Ready to Join Our Team?
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                Explore our current openings and take the first step toward a
                rewarding career at Justice Law.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
                <Button className="bg-gold-500 hover:bg-gold-600 text-navy-900">
                  View Current Openings
                </Button>
                <Button
                  variant="outline"
                  className="border-navy-700 text-navy-700 hover:bg-navy-50"
                >
                  <Link href="/contact">Contact Recruiting</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
