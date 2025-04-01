import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Gift, MapPin, Users, Utensils, Clock, Truck, Star } from "lucide-react"
import Image from "next/image"

export default function HowItWorksPage() {
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
              className="text-sm font-medium text-green-600 hover:underline underline-offset-4"
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
            <Link href="/login">
              <Button variant="ghost" size="sm" className="hover:text-green-600">
                Log In
              </Button>
            </Link>
            <Link href="/signup">
              <Button size="sm" className="bg-orange-500 hover:bg-orange-600">
                Sign Up
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-green-200 via-green-100 to-white dark:from-green-950 dark:to-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-green-800 dark:text-green-300">
                How DAAN DATA Works
              </h1>
              <p className="max-w-[600px] mx-auto text-gray-600 md:text-xl dark:text-gray-400">
                Our platform makes food donation simple, efficient, and impactful across India.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 md:gap-24">
            {/* Step 1 */}
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="flex flex-col justify-center space-y-4">
                <div className="inline-block rounded-full bg-green-100 p-2 w-12 h-12 text-center">
                  <span className="text-xl font-bold text-green-700">1</span>
                </div>
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter text-green-700">Sign Up & Set Your Location</h2>
                  <p className="text-gray-600 md:text-lg">
                    Create your account as a donor, recipient, or volunteer courier. Set your location to connect with
                    others in your area across India.
                  </p>
                  <ul className="space-y-2 mt-4">
                    <li className="flex items-start gap-2">
                      <div className="rounded-full bg-green-100 p-1 mt-0.5">
                        <Gift className="h-4 w-4 text-green-600" />
                      </div>
                      <span>Choose your role: donor, recipient, or volunteer</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="rounded-full bg-green-100 p-1 mt-0.5">
                        <MapPin className="h-4 w-4 text-green-600" />
                      </div>
                      <span>Set your location with our India-specific location selector</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="rounded-full bg-green-100 p-1 mt-0.5">
                        <Users className="h-4 w-4 text-green-600" />
                      </div>
                      <span>Complete your profile with contact information</span>
                    </li>
                  </ul>
                </div>
              </div>
              {/* Step image placeholder */}
              <div className="mx-auto lg:mx-0 relative aspect-video overflow-hidden rounded-xl border-2 border-green-100 shadow-lg bg-gradient-to-r from-green-100 to-green-200">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="h-16 w-16 text-green-500 mx-auto mb-2" />
                    <p className="text-lg font-medium text-green-700">Location Setup Screen</p>
                    <p className="text-sm text-green-600">(1280x720px recommended)</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="order-2 lg:order-1 mx-auto lg:mx-0 relative aspect-video overflow-hidden rounded-xl border-2 border-green-100 shadow-lg">
                <Image
                  src="/placeholder.svg?height=720&width=1280&text=List+Food"
                  alt="Food listing screen"
                  width={1280}
                  height={720}
                  className="object-cover"
                />
              </div>
              <div className="order-1 lg:order-2 flex flex-col justify-center space-y-4">
                <div className="inline-block rounded-full bg-green-100 p-2 w-12 h-12 text-center">
                  <span className="text-xl font-bold text-green-700">2</span>
                </div>
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter text-green-700">List Surplus Food</h2>
                  <p className="text-gray-600 md:text-lg">
                    If you're a donor, easily list your surplus food with details about quantity, type, and pickup time.
                    Add photos to help recipients identify the food.
                  </p>
                  <ul className="space-y-2 mt-4">
                    <li className="flex items-start gap-2">
                      <div className="rounded-full bg-green-100 p-1 mt-0.5">
                        <Gift className="h-4 w-4 text-green-600" />
                      </div>
                      <span>Describe the food type, quantity, and any dietary information</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="rounded-full bg-green-100 p-1 mt-0.5">
                        <Clock className="h-4 w-4 text-green-600" />
                      </div>
                      <span>Set pickup window and expiration time</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="rounded-full bg-green-100 p-1 mt-0.5">
                        <MapPin className="h-4 w-4 text-green-600" />
                      </div>
                      <span>Confirm pickup location or delivery options</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="flex flex-col justify-center space-y-4">
                <div className="inline-block rounded-full bg-green-100 p-2 w-12 h-12 text-center">
                  <span className="text-xl font-bold text-green-700">3</span>
                </div>
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter text-green-700">Connect & Coordinate</h2>
                  <p className="text-gray-600 md:text-lg">
                    Our algorithm matches donors with nearby recipients or volunteer couriers. Recipients can browse
                    available donations in their area and request pickup.
                  </p>
                  <ul className="space-y-2 mt-4">
                    <li className="flex items-start gap-2">
                      <div className="rounded-full bg-green-100 p-1 mt-0.5">
                        <MapPin className="h-4 w-4 text-green-600" />
                      </div>
                      <span>Browse donations on an interactive map of your city</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="rounded-full bg-green-100 p-1 mt-0.5">
                        <Users className="h-4 w-4 text-green-600" />
                      </div>
                      <span>Request pickup or delivery through the app</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="rounded-full bg-green-100 p-1 mt-0.5">
                        <Truck className="h-4 w-4 text-green-600" />
                      </div>
                      <span>Volunteer couriers can offer to transport food between donors and recipients</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mx-auto lg:mx-0 relative aspect-video overflow-hidden rounded-xl border-2 border-green-100 shadow-lg">
                <Image
                  src="/placeholder.svg?height=720&width=1280&text=Connect+Map"
                  alt="Connection map screen"
                  width={1280}
                  height={720}
                  className="object-cover"
                />
              </div>
            </div>

            {/* Step 4 */}
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="order-2 lg:order-1 mx-auto lg:mx-0 relative aspect-video overflow-hidden rounded-xl border-2 border-green-100 shadow-lg">
                <Image
                  src="/placeholder.svg?height=720&width=1280&text=Track+Impact"
                  alt="Impact tracking screen"
                  width={1280}
                  height={720}
                  className="object-cover"
                />
              </div>
              <div className="order-1 lg:order-2 flex flex-col justify-center space-y-4">
                <div className="inline-block rounded-full bg-green-100 p-2 w-12 h-12 text-center">
                  <span className="text-xl font-bold text-green-700">4</span>
                </div>
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter text-green-700">Track Your Impact</h2>
                  <p className="text-gray-600 md:text-lg">
                    Monitor your contribution to reducing food waste and fighting hunger with our impact dashboard. See
                    the difference you're making in your community.
                  </p>
                  <ul className="space-y-2 mt-4">
                    <li className="flex items-start gap-2">
                      <div className="rounded-full bg-green-100 p-1 mt-0.5">
                        <Star className="h-4 w-4 text-green-600" />
                      </div>
                      <span>Track meals shared, kg of food saved, and carbon impact</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="rounded-full bg-green-100 p-1 mt-0.5">
                        <Users className="h-4 w-4 text-green-600" />
                      </div>
                      <span>Receive ratings and feedback from recipients</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="rounded-full bg-green-100 p-1 mt-0.5">
                        <Gift className="h-4 w-4 text-green-600" />
                      </div>
                      <span>Earn badges and recognition for your contributions</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-green-50 dark:bg-green-950">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-4 mb-12">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter text-green-700 dark:text-green-300">
                Frequently Asked Questions
              </h2>
              <p className="max-w-[600px] mx-auto text-gray-600 md:text-lg dark:text-gray-400">
                Get answers to common questions about using DAAN DATA
              </p>
            </div>
          </div>

          <div className="mx-auto max-w-3xl grid gap-6">
            <div className="rounded-lg border border-green-100 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-green-700 mb-2">Is the food safety verified?</h3>
              <p className="text-gray-600">
                While we don't physically inspect food, donors must follow our food safety guidelines and provide
                accurate information about the food's condition. Recipients can rate donors, creating a trust system.
              </p>
            </div>

            <div className="rounded-lg border border-green-100 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-green-700 mb-2">How do I become a volunteer courier?</h3>
              <p className="text-gray-600">
                Sign up as a volunteer courier, set your availability and travel radius, and our system will notify you
                of nearby donation transport opportunities that match your schedule.
              </p>
            </div>

            <div className="rounded-lg border border-green-100 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-green-700 mb-2">
                Can restaurants and businesses use DAAN DATA?
              </h3>
              <p className="text-gray-600">
                We welcome restaurants, caterers, grocery stores, and other food businesses. We offer special business
                accounts with additional features for regular donors.
              </p>
            </div>

            <div className="rounded-lg border border-green-100 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-green-700 mb-2">Is DAAN DATA available in my city?</h3>
              <p className="text-gray-600">
                DAAN DATA is available across India, with active communities in major cities like Mumbai, Delhi,
                Bangalore, Chennai, and Kolkata. The effectiveness depends on the number of users in your area.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 border-t">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-green-700">
                Ready to Make a Difference?
              </h2>
              <p className="max-w-[600px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Join thousands of Indians fighting food waste and hunger in their communities.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="/signup">
                <Button size="lg" className="bg-orange-500 hover:bg-orange-600">
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
                <Utensils
                  className="h-6 w-6
 text-green-600"
                />
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

