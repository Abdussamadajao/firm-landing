import Image from "next/image";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  MessageSquare,
  CheckCircle,
  Calendar,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function ContactPage() {
  return (
    <main className="flex-1">
      {/* Page Header */}
      <section className="bg-navy-700 py-16 md:py-24">
        <div className="custom-container">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="font-serif text-4xl font-bold tracking-tight text-white md:text-5xl">
              Contact Us
            </h1>
            <p className="mt-4 text-lg text-gray-200 md:text-xl">
              Our team of experienced attorneys is ready to help you navigate
              your legal challenges
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information with Map */}
      <section className="py-12 md:py-16">
        <div className="custom-container">
          <div className="grid gap-8 lg:grid-cols-3">
            {/* Contact Info Column */}
            <div className="space-y-6 lg:col-span-1">
              <Card>
                <CardContent className="p-6">
                  <h2 className="font-serif text-2xl font-bold text-navy-700 mb-6">
                    Office Information
                  </h2>

                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <MapPin className="h-6 w-6 text-gold-500 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-medium text-navy-700">Address</h3>
                        <address className="not-italic text-gray-600">
                          Justice Law Offices
                          <br />
                          123 Legal Street, Suite 100
                          <br />
                          Cityville, ST 12345
                          <br />
                          United States
                        </address>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <Phone className="h-6 w-6 text-gold-500 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-medium text-navy-700">Phone</h3>
                        <p className="text-gray-600">
                          <a
                            href="tel:+15551234567"
                            className="hover:text-gold-600"
                          >
                            Main: (555) 123-4567
                          </a>
                        </p>
                        <p className="text-gray-600">
                          <a
                            href="tel:+15559876543"
                            className="hover:text-gold-600"
                          >
                            Fax: (555) 987-6543
                          </a>
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <Mail className="h-6 w-6 text-gold-500 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-medium text-navy-700">Email</h3>
                        <p className="text-gray-600">
                          <a
                            href="mailto:contact@justicelaw.com"
                            className="hover:text-gold-600"
                          >
                            contact@justicelaw.com
                          </a>
                        </p>
                        <p className="text-gray-600">
                          <a
                            href="mailto:info@justicelaw.com"
                            className="hover:text-gold-600"
                          >
                            info@justicelaw.com
                          </a>
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <Clock className="h-6 w-6 text-gold-500 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-medium text-navy-700">Hours</h3>
                        <div className="space-y-1 text-gray-600">
                          <p>Monday - Friday: 9:00 AM - 5:00 PM</p>
                          <p>Saturday: By appointment only</p>
                          <p>Sunday: Closed</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8">
                    <h3 className="font-medium text-navy-700 mb-3">
                      Connect With Us
                    </h3>
                    <div className="flex space-x-4">
                      <a
                        href="#"
                        className="rounded-full bg-navy-50 p-2 text-navy-700 hover:bg-gold-50 hover:text-gold-600 transition-colors"
                      >
                        <Facebook className="h-5 w-5" />
                        <span className="sr-only">Facebook</span>
                      </a>
                      <a
                        href="#"
                        className="rounded-full bg-navy-50 p-2 text-navy-700 hover:bg-gold-50 hover:text-gold-600 transition-colors"
                      >
                        <Twitter className="h-5 w-5" />
                        <span className="sr-only">Twitter</span>
                      </a>
                      <a
                        href="#"
                        className="rounded-full bg-navy-50 p-2 text-navy-700 hover:bg-gold-50 hover:text-gold-600 transition-colors"
                      >
                        <Linkedin className="h-5 w-5" />
                        <span className="sr-only">LinkedIn</span>
                      </a>
                      <a
                        href="#"
                        className="rounded-full bg-navy-50 p-2 text-navy-700 hover:bg-gold-50 hover:text-gold-600 transition-colors"
                      >
                        <Instagram className="h-5 w-5" />
                        <span className="sr-only">Instagram</span>
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Additional Contact Information */}
              <Card>
                <CardContent className="p-6">
                  <h2 className="font-serif text-xl font-bold text-navy-700 mb-4">
                    Office Locations
                  </h2>

                  <div className="space-y-4">
                    <div>
                      <h3 className="font-medium text-navy-700">
                        Main Office - Cityville
                      </h3>
                      <p className="text-gray-600 text-sm">
                        123 Legal Street, Suite 100
                        <br />
                        Cityville, ST 12345
                      </p>
                    </div>

                    <div>
                      <h3 className="font-medium text-navy-700">
                        Downtown Branch
                      </h3>
                      <p className="text-gray-600 text-sm">
                        456 Center Avenue, 15th Floor
                        <br />
                        Cityville, ST 12345
                      </p>
                    </div>

                    <div>
                      <h3 className="font-medium text-navy-700">
                        Westside Office
                      </h3>
                      <p className="text-gray-600 text-sm">
                        789 West Boulevard, Suite 300
                        <br />
                        Westville, ST 12346
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Map and Contact Form Column */}
            <div className="lg:col-span-2">
              <Card className="mb-8">
                <CardContent className="p-0">
                  <div className="relative h-[400px] w-full overflow-hidden rounded-t-lg">
                    <Image
                      src="/placeholder.svg?height=600&width=800"
                      alt="Office location map"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <p className="text-lg font-bold text-gray-800">
                          Interactive Map
                        </p>
                        <p className="text-sm text-gray-600">
                          This would be replaced with an actual Google Map in
                          production
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <Tabs defaultValue="contact" className="w-full">
                    <TabsList className="grid w-full grid-cols-3 mb-6">
                      <TabsTrigger value="contact" className="text-sm">
                        <MessageSquare className="h-4 w-4 mr-2" />
                        Contact Us
                      </TabsTrigger>
                      <TabsTrigger value="consultation" className="text-sm">
                        <CheckCircle className="h-4 w-4 mr-2" />
                        Request Consultation
                      </TabsTrigger>
                      <TabsTrigger value="appointment" className="text-sm">
                        <Calendar className="h-4 w-4 mr-2" />
                        Schedule Appointment
                      </TabsTrigger>
                    </TabsList>

                    <TabsContent value="contact">
                      <div>
                        <h2 className="font-serif text-2xl font-bold text-navy-700 mb-4">
                          Send Us a Message
                        </h2>
                        <p className="text-gray-600 mb-6">
                          Have a question or need assistance? Fill out the form
                          below and we'll get back to you promptly.
                        </p>

                        <form className="space-y-4">
                          <div className="grid gap-4 sm:grid-cols-2">
                            <div className="space-y-2">
                              <Label htmlFor="first-name">First Name</Label>
                              <Input
                                id="first-name"
                                type="text"
                                placeholder="John"
                                required
                              />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="last-name">Last Name</Label>
                              <Input
                                id="last-name"
                                type="text"
                                placeholder="Doe"
                                required
                              />
                            </div>
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="email">Email</Label>
                            <Input
                              id="email"
                              type="email"
                              placeholder="johndoe@example.com"
                              required
                            />
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="phone">Phone</Label>
                            <Input
                              id="phone"
                              type="tel"
                              placeholder="(555) 123-4567"
                            />
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="subject">Subject</Label>
                            <Input
                              id="subject"
                              type="text"
                              placeholder="General Inquiry"
                              required
                            />
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="message">Message</Label>
                            <Textarea
                              id="message"
                              placeholder="Please describe how we can help you..."
                              rows={5}
                              required
                            />
                          </div>

                          <div>
                            <Button
                              type="submit"
                              className="w-full bg-navy-700 hover:bg-navy-800"
                            >
                              Send Message
                            </Button>
                          </div>
                        </form>
                      </div>
                    </TabsContent>

                    <TabsContent value="consultation">
                      <div>
                        <h2 className="font-serif text-2xl font-bold text-navy-700 mb-4">
                          Request a Consultation
                        </h2>
                        <p className="text-gray-600 mb-6">
                          Speak with an experienced attorney about your legal
                          matter. Complete the form below to request a
                          consultation.
                        </p>

                        <form className="space-y-4">
                          <div className="grid gap-4 sm:grid-cols-2">
                            <div className="space-y-2">
                              <Label htmlFor="cons-first-name">
                                First Name
                              </Label>
                              <Input
                                id="cons-first-name"
                                type="text"
                                placeholder="John"
                                required
                              />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="cons-last-name">Last Name</Label>
                              <Input
                                id="cons-last-name"
                                type="text"
                                placeholder="Doe"
                                required
                              />
                            </div>
                          </div>

                          <div className="grid gap-4 sm:grid-cols-2">
                            <div className="space-y-2">
                              <Label htmlFor="cons-email">Email</Label>
                              <Input
                                id="cons-email"
                                type="email"
                                placeholder="johndoe@example.com"
                                required
                              />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="cons-phone">Phone</Label>
                              <Input
                                id="cons-phone"
                                type="tel"
                                placeholder="(555) 123-4567"
                                required
                              />
                            </div>
                          </div>

                          <div className="space-y-2">
                            <Label>Practice Area</Label>
                            <select
                              className="w-full rounded-md border border-gray-300 p-2 text-sm focus:border-navy-700 focus:outline-none focus:ring-1 focus:ring-navy-700"
                              required
                            >
                              <option value="">Select a Practice Area</option>
                              <option value="corporate">Corporate Law</option>
                              <option value="family">Family Law</option>
                              <option value="criminal">Criminal Defense</option>
                              <option value="real-estate">
                                Real Estate Law
                              </option>
                              <option value="personal-injury">
                                Personal Injury
                              </option>
                              <option value="estate-planning">
                                Estate Planning
                              </option>
                            </select>
                          </div>

                          <div className="space-y-2">
                            <Label>How would you prefer to be contacted?</Label>
                            <RadioGroup defaultValue="email">
                              <div className="flex items-center space-x-6">
                                <div className="flex items-center space-x-2">
                                  <RadioGroupItem
                                    value="email"
                                    id="contact-email"
                                  />
                                  <Label htmlFor="contact-email">Email</Label>
                                </div>
                                <div className="flex items-center space-x-2">
                                  <RadioGroupItem
                                    value="phone"
                                    id="contact-phone"
                                  />
                                  <Label htmlFor="contact-phone">Phone</Label>
                                </div>
                                <div className="flex items-center space-x-2">
                                  <RadioGroupItem
                                    value="either"
                                    id="contact-either"
                                  />
                                  <Label htmlFor="contact-either">Either</Label>
                                </div>
                              </div>
                            </RadioGroup>
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="cons-message">
                              Brief Description of Your Case
                            </Label>
                            <Textarea
                              id="cons-message"
                              placeholder="Please provide a brief description of your legal matter..."
                              rows={5}
                              required
                            />
                          </div>

                          <div>
                            <Button
                              type="submit"
                              className="w-full bg-gold-500 hover:bg-gold-600 text-white"
                            >
                              Request Consultation
                            </Button>
                          </div>
                        </form>
                      </div>
                    </TabsContent>

                    <TabsContent value="appointment">
                      <div>
                        <h2 className="font-serif text-2xl font-bold text-navy-700 mb-4">
                          Schedule an Appointment
                        </h2>
                        <p className="text-gray-600 mb-6">
                          Select a date and time to meet with one of our
                          attorneys. We'll confirm your appointment via email.
                        </p>

                        <form className="space-y-4">
                          <div className="grid gap-4 sm:grid-cols-2">
                            <div className="space-y-2">
                              <Label htmlFor="appt-first-name">
                                First Name
                              </Label>
                              <Input
                                id="appt-first-name"
                                type="text"
                                placeholder="John"
                                required
                              />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="appt-last-name">Last Name</Label>
                              <Input
                                id="appt-last-name"
                                type="text"
                                placeholder="Doe"
                                required
                              />
                            </div>
                          </div>

                          <div className="grid gap-4 sm:grid-cols-2">
                            <div className="space-y-2">
                              <Label htmlFor="appt-email">Email</Label>
                              <Input
                                id="appt-email"
                                type="email"
                                placeholder="johndoe@example.com"
                                required
                              />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="appt-phone">Phone</Label>
                              <Input
                                id="appt-phone"
                                type="tel"
                                placeholder="(555) 123-4567"
                                required
                              />
                            </div>
                          </div>

                          <div className="space-y-2">
                            <Label>Select Attorney</Label>
                            <select
                              className="w-full rounded-md border border-gray-300 p-2 text-sm focus:border-navy-700 focus:outline-none focus:ring-1 focus:ring-navy-700"
                              required
                            >
                              <option value="">Choose an Attorney</option>
                              <option value="sarah-johnson">
                                Sarah Johnson - Corporate Law
                              </option>
                              <option value="michael-chen">
                                Michael Chen - Criminal Defense
                              </option>
                              <option value="elena-rodriguez">
                                Elena Rodriguez - Family Law
                              </option>
                              <option value="david-washington">
                                David Washington - Real Estate Law
                              </option>
                              <option value="no-preference">
                                No Preference
                              </option>
                            </select>
                          </div>

                          <div className="grid gap-4 sm:grid-cols-2">
                            <div className="space-y-2">
                              <Label htmlFor="appt-date">Preferred Date</Label>
                              <Input id="appt-date" type="date" required />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="appt-time">Preferred Time</Label>
                              <select
                                id="appt-time"
                                className="w-full rounded-md border border-gray-300 p-2 text-sm focus:border-navy-700 focus:outline-none focus:ring-1 focus:ring-navy-700"
                                required
                              >
                                <option value="">Select Time</option>
                                <option value="9:00">9:00 AM</option>
                                <option value="10:00">10:00 AM</option>
                                <option value="11:00">11:00 AM</option>
                                <option value="13:00">1:00 PM</option>
                                <option value="14:00">2:00 PM</option>
                                <option value="15:00">3:00 PM</option>
                                <option value="16:00">4:00 PM</option>
                              </select>
                            </div>
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="appt-reason">
                              Reason for Appointment
                            </Label>
                            <Textarea
                              id="appt-reason"
                              placeholder="Please briefly describe the purpose of your appointment..."
                              rows={4}
                              required
                            />
                          </div>

                          <div>
                            <Button
                              type="submit"
                              className="w-full bg-navy-700 hover:bg-navy-800"
                            >
                              Schedule Appointment
                            </Button>
                          </div>
                        </form>
                      </div>
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="custom-container">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl font-bold text-navy-700">
              What Our Clients Say
            </h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              Don't just take our word for it. Here's what clients have to say
              about their experience working with Justice Law.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                quote:
                  "The entire team at Justice Law was responsive, professional, and truly cared about my case. I couldn't be happier with the outcome.",
                author: "Robert Smith",
                position: "Business Owner",
              },
              {
                quote:
                  "Sarah Johnson handled my complex corporate matter with exceptional expertise. I highly recommend Justice Law for any business legal needs.",
                author: "Michelle Johnson",
                position: "CEO, Tech Innovations",
              },
              {
                quote:
                  "During a difficult time in my life, the compassionate approach from Justice Law made all the difference. They fought for my rights and won.",
                author: "James Wilson",
                position: "Client",
              },
            ].map((testimonial, index) => (
              <Card key={index} className="bg-white">
                <CardContent className="p-6">
                  <div className="text-gold-500 text-4xl font-serif mb-4">
                    "
                  </div>
                  <p className="text-gray-700 italic mb-6">
                    {testimonial.quote}
                  </p>
                  <div>
                    <p className="font-medium text-navy-700">
                      {testimonial.author}
                    </p>
                    <p className="text-sm text-gray-500">
                      {testimonial.position}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
