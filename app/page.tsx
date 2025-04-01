import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Gift, MapPin, Users, Utensils } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation */}
      <header className="border-b bg-green-50 dark:bg-green-900">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <Link href="/" className="flex items-center gap-2">
            <Utensils className="h-6 w-6 text-green-600" />
            <div className="flex flex-col">
              <span className="text-xl font-bold text-green-700 leading-tight">DAAN DATA</span>
              <span className="text-sm text-green-600 -mt-1">दान दाटा</span>
            </div>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link
              href="/how-it-works"
              className="text-sm font-medium hover:text-green-600 hover:underline underline-offset-4"
            >
              How It Works
            </Link>
            <Link href="/about" className="text-sm font-medium hover:text-green-600 hover:underline underline-offset-4">
              About Us
            </Link>
            <Link
              href="/impact"
              className="text-sm font-medium hover:text-green-600 hover:underline underline-offset-4"
            >
              Our Impact
            </Link>
            <Link
              href="/contact"
              className="text-sm font-medium hover:text-green-600 hover:underline underline-offset-4"
            >
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="/dashboard">
              <Button variant="ghost" size="sm" className="hover:text-green-600">
                Guest Mode
              </Button>
            </Link>
            <Link href="/location-setup">
              <Button size="sm" className="bg-orange-500 hover:bg-orange-600">
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-green-300 via-green-200 to-green-100 dark:from-green-950 dark:to-background">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-green-800 dark:text-green-300">
                  Share Food, Spread Joy
                </h1>
                <p className="max-w-[600px] text-gray-700 md:text-xl dark:text-gray-400">
                  DAAN DATA connects those with surplus food to people in need across India. Be a part of the solution
                  to food waste and hunger.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/donate">
                  <Button size="lg" className="bg-orange-500 hover:bg-orange-600 shadow-md">
                    Donate Food
                  </Button>
                </Link>
                <Link href="/receive">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-green-600 text-green-600 hover:bg-green-50 shadow-md"
                  >
                    Request Food
                  </Button>
                </Link>
              </div>
            </div>
            {/* Hero image placeholder */}
            <div className="mx-auto lg:mx-0 relative aspect-video overflow-hidden rounded-xl bg-gradient-to-r from-orange-100 to-orange-200 shadow-lg border-2 border-orange-100">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <Gift className="h-16 w-16 text-orange-500 mx-auto mb-4" />
                  <p className="text-lg font-medium text-orange-700">Food Sharing in India</p>
                  <p className="text-sm text-orange-600">(1280x720px image recommended)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section
        id="how-it-works"
        className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-green-100 via-orange-50 to-green-50"
      >
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-green-700 dark:text-green-300">
                How DAAN DATA Works
              </h2>
              <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Our platform makes food donation simple, efficient, and impactful across India.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
            <div className="flex flex-col justify-center space-y-4 rounded-lg border border-green-200 p-6 shadow-md hover:border-green-300 hover:shadow-lg transition-all bg-gradient-to-br from-green-100 to-green-50">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-200 dark:bg-green-900">
                <Gift className="h-6 w-6 text-green-600 dark:text-green-400" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-green-700">Donate Surplus</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Restaurants, events, or individuals can list surplus food with details about quantity and pickup time.
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-center space-y-4 rounded-lg border border-orange-200 p-6 shadow-md hover:border-orange-300 hover:shadow-lg transition-all bg-gradient-to-br from-orange-100 to-orange-50">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-200 dark:bg-orange-900">
                <MapPin className="h-6 w-6 text-orange-600 dark:text-orange-400" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-orange-600">Connect Locally</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Our algorithm matches donors with nearby recipients or volunteer couriers for efficient distribution.
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-center space-y-4 rounded-lg border border-green-200 p-6 shadow-md hover:border-green-300 hover:shadow-lg transition-all bg-gradient-to-br from-green-100 to-green-50">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-200 dark:bg-green-900">
                <Users className="h-6 w-6 text-green-600 dark:text-green-400" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-green-700">Track Impact</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Monitor your contribution to reducing food waste and fighting hunger with our impact dashboard.
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-8">
            <Link href="/how-it-works">
              <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-50 shadow-md">
                Learn More About How It Works
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section
        id="impact"
        className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-green-100 to-orange-100 dark:bg-green-950"
      >
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-green-700 dark:text-green-300">
                Our Collective Impact
              </h2>
              <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Together, we're making a difference in communities across India.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3">
            <div className="flex flex-col items-center justify-center space-y-2 rounded-lg bg-gradient-to-br from-orange-50 to-white p-8 shadow-md border border-orange-100 dark:bg-gray-800">
              <div className="text-4xl font-bold text-orange-500">10,000+</div>
              <p className="text-xl font-medium text-green-700">Meals Shared</p>
            </div>
            <div className="flex flex-col items-center justify-center space-y-2 rounded-lg bg-gradient-to-br from-green-50 to-white p-8 shadow-md border border-green-100 dark:bg-gray-800">
              <div className="text-4xl font-bold text-green-600">500+</div>
              <p className="text-xl font-medium text-green-700">Active Donors</p>
            </div>
            <div className="flex flex-col items-center justify-center space-y-2 rounded-lg bg-gradient-to-br from-orange-50 to-white p-8 shadow-md border border-orange-100 dark:bg-gray-800">
              <div className="text-4xl font-bold text-orange-600">50+</div>
              <p className="text-xl font-medium text-green-700">Cities Served</p>
            </div>
          </div>
          <div className="flex justify-center mt-8">
            <Link href="/impact">
              <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-50 shadow-md">
                See Our Full Impact Report
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-orange-100 to-green-100">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-green-700 dark:text-green-300">
                What Our Users Say
              </h2>
              <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Hear from the people making a difference in their communities.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-3">
            <div className="flex flex-col justify-between rounded-lg border border-green-100 p-6 shadow-md bg-gradient-to-br from-white to-green-50">
              <div>
                <div className="flex gap-2 text-orange-500 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      stroke="none"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  ))}
                </div>
                <p className="italic text-gray-600 dark:text-gray-400">
                  "As a restaurant owner, I used to throw away so much food at the end of the day. Now with DAAN DATA, I
                  can ensure it goes to people who need it. The process is so simple!"
                </p>
              </div>
              <div className="mt-6 flex items-center gap-4">
                <div className="rounded-full bg-green-100 p-1">
                  <div className="h-10 w-10 rounded-full bg-green-600 text-white flex items-center justify-center font-bold">
                    RS
                  </div>
                </div>
                <div>
                  <p className="font-semibold">Rahul Sharma</p>
                  <p className="text-sm text-gray-500">Restaurant Owner, Mumbai</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-between rounded-lg border border-orange-100 p-6 shadow-md bg-gradient-to-br from-white to-orange-50">
              <div>
                <div className="flex gap-2 text-orange-500 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      stroke="none"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  ))}
                </div>
                <p className="italic text-gray-600 dark:text-gray-400">
                  "Our NGO has been able to feed twice as many people since we started using DAAN DATA. The platform
                  connects us directly with food sources we never had access to before."
                </p>
              </div>
              <div className="mt-6 flex items-center gap-4">
                <div className="rounded-full bg-orange-100 p-1">
                  <div className="h-10 w-10 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold">
                    PK
                  </div>
                </div>
                <div>
                  <p className="font-semibold">Priya Kumar</p>
                  <p className="text-sm text-gray-500">NGO Director, Delhi</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-between rounded-lg border border-green-100 p-6 shadow-md bg-gradient-to-br from-white to-green-50">
              <div>
                <div className="flex gap-2 text-orange-500 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      stroke="none"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  ))}
                </div>
                <p className="italic text-gray-600 dark:text-gray-400">
                  "I volunteer as a courier on weekends. It's so rewarding to pick up food that would have been wasted
                  and deliver it to those who appreciate it. DAAN DATA makes the whole process seamless."
                </p>
              </div>
              <div className="mt-6 flex items-center gap-4">
                <div className="rounded-full bg-green-100 p-1">
                  <div className="h-10 w-10 rounded-full bg-green-600 text-white flex items-center justify-center font-bold">
                    AJ
                  </div>
                </div>
                <div>
                  <p className="font-semibold">Amit Joshi</p>
                  <p className="text-sm text-gray-500">Volunteer, Bangalore</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 border-t bg-gradient-to-b from-green-100 to-orange-100 dark:from-background dark:to-green-950">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-green-700 dark:text-green-300">
                Join Our Movement
              </h2>
              <p className="max-w-[600px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Be part of the solution to food waste and hunger in your community across India.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="/location-setup">
                <Button size="lg" className="bg-orange-500 hover:bg-orange-600 shadow-lg">
                  Get Started <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-green-50 dark:bg-green-950">
        <div className="container flex flex-col gap-6 py-8 md:py-12 px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="flex flex-col gap-2">
              <Link href="/" className="flex items-center gap-2">
                <Utensils className="h-6 w-6 text-green-600" />
                <span className="text-xl font-bold text-green-700 dark:text-green-300">DAAN DATA</span>
              </Link>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                Connecting surplus food with those in need across India.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-green-700 dark:text-green-300">Quick Links</h3>
              <nav className="flex flex-col gap-2">
                <Link href="/how-it-works" className="text-sm hover:text-green-600 hover:underline underline-offset-4">
                  How It Works
                </Link>
                <Link href="/about" className="text-sm hover:text-green-600 hover:underline underline-offset-4">
                  About Us
                </Link>
                <Link href="/impact" className="text-sm hover:text-green-600 hover:underline underline-offset-4">
                  Our Impact
                </Link>
                <Link href="/faq" className="text-sm hover:text-green-600 hover:underline underline-offset-4">
                  FAQ
                </Link>
              </nav>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-green-700 dark:text-green-300">Legal</h3>
              <nav className="flex flex-col gap-2">
                <Link href="/privacy" className="text-sm hover:text-green-600 hover:underline underline-offset-4">
                  Privacy Policy
                </Link>
                <Link href="/terms" className="text-sm hover:text-green-600 hover:underline underline-offset-4">
                  Terms of Service
                </Link>
                <Link href="/cookies" className="text-sm hover:text-green-600 hover:underline underline-offset-4">
                  Cookie Policy
                </Link>
              </nav>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-green-700 dark:text-green-300">Contact</h3>
              <nav className="flex flex-col gap-2">
                <Link href="/contact" className="text-sm hover:text-green-600 hover:underline underline-offset-4">
                  Contact Us
                </Link>
                <p className="text-sm text-gray-600 dark:text-gray-400">support@daandata.in</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">+91 98765 43210</p>
              </nav>
            </div>
          </div>
          <div className="border-t border-gray-200 dark:border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-gray-600 dark:text-gray-400">
              © {new Date().getFullYear()} DAAN DATA. All rights reserved.
            </div>
            <div className="flex gap-4 mt-4 md:mt-0">
              <Link href="#" className="text-gray-600 hover:text-green-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </Link>
              <Link href="#" className="text-gray-600 hover:text-green-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </Link>
              <Link href="#" className="text-gray-600 hover:text-green-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

