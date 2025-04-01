import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Utensils, BarChart, Users, Gift, Sprout, Heart } from "lucide-react"

export default function ImpactPage() {
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
            <Link href="/impact" className="text-sm font-medium text-green-600 hover:underline underline-offset-4">
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
                Our Impact
              </h1>
              <p className="max-w-[600px] mx-auto text-gray-600 md:text-xl dark:text-gray-400">
                Together, we're making a measurable difference in reducing food waste and hunger across India.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-white via-green-50 to-green-100/30">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="flex flex-col items-center justify-center space-y-2 rounded-lg bg-green-50 p-8 shadow-md">
              <div className="rounded-full bg-green-100 p-3 mb-3">
                <Gift className="h-8 w-8 text-green-600" />
              </div>
              <div className="text-4xl font-bold text-green-600">10,000+</div>
              <p className="text-xl font-medium text-green-700">Meals Shared</p>
              <p className="text-center text-sm text-gray-600">
                Nutritious meals provided to people in need across India
              </p>
            </div>
            <div className="flex flex-col items-center justify-center space-y-2 rounded-lg bg-orange-50 p-8 shadow-md">
              <div className="rounded-full bg-orange-100 p-3 mb-3">
                <Users className="h-8 w-8 text-orange-600" />
              </div>
              <div className="text-4xl font-bold text-orange-600">500+</div>
              <p className="text-xl font-medium text-orange-700">Active Donors</p>
              <p className="text-center text-sm text-gray-600">
                Dedicated individuals and businesses contributing regularly
              </p>
            </div>
            <div className="flex flex-col items-center justify-center space-y-2 rounded-lg bg-green-50 p-8 shadow-md">
              <div className="rounded-full bg-green-100 p-3 mb-3">
                <BarChart className="h-8 w-8 text-green-600" />
              </div>
              <div className="text-4xl font-bold text-green-600">5,000+</div>
              <p className="text-xl font-medium text-green-700">KG Food Saved</p>
              <p className="text-center text-sm text-gray-600">Perfectly good food rescued from going to waste</p>
            </div>
            <div className="flex flex-col items-center justify-center space-y-2 rounded-lg bg-orange-50 p-8 shadow-md">
              <div className="rounded-full bg-orange-100 p-3 mb-3">
                <Sprout className="h-8 w-8 text-orange-600" />
              </div>
              <div className="text-4xl font-bold text-orange-600">50+</div>
              <p className="text-xl font-medium text-orange-700">Cities Reached</p>
              <p className="text-center text-sm text-gray-600">Expanding across India to connect communities</p>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Impact */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-green-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter text-green-700">Environmental Impact</h2>
              <p className="max-w-[900px] text-gray-600 md:text-xl">
                Every donation helps reduce our carbon footprint and protect our planet.
              </p>
            </div>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="bg-white rounded-lg p-8 shadow-md">
              <div className="text-4xl font-bold text-green-600 mb-2">3,500</div>
              <div className="text-lg font-medium text-green-700 mb-4">Kg CO₂ Emissions Avoided</div>
              <div className="h-4 w-full bg-gray-100 rounded-full overflow-hidden">
                <div className="h-full bg-green-500 rounded-full" style={{ width: "70%" }}></div>
              </div>
              <p className="mt-4 text-sm text-gray-600">
                By preventing food waste, we've reduced greenhouse gas emissions from landfills.
              </p>
            </div>
            <div className="bg-white rounded-lg p-8 shadow-md">
              <div className="text-4xl font-bold text-green-600 mb-2">650,000</div>
              <div className="text-lg font-medium text-green-700 mb-4">Liters of Water Saved</div>
              <div className="h-4 w-full bg-gray-100 rounded-full overflow-hidden">
                <div className="h-full bg-blue-500 rounded-full" style={{ width: "85%" }}></div>
              </div>
              <p className="mt-4 text-sm text-gray-600">
                Water that would have been wasted in food production that ended up discarded.
              </p>
            </div>
            <div className="bg-white rounded-lg p-8 shadow-md">
              <div className="text-4xl font-bold text-green-600 mb-2">1,200</div>
              <div className="text-lg font-medium text-green-700 mb-4">Square Meters of Land Preserved</div>
              <div className="h-4 w-full bg-gray-100 rounded-full overflow-hidden">
                <div className="h-full bg-orange-500 rounded-full" style={{ width: "60%" }}></div>
              </div>
              <p className="mt-4 text-sm text-gray-600">
                Land that would have been needed for additional food production.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter text-green-700">Impact Stories</h2>
              <p className="max-w-[900px] text-gray-600 md:text-xl">
                Real stories from our community members making a difference.
              </p>
            </div>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg border border-green-100 bg-white p-6 shadow-md">
              {/* Impact story image placeholder */}
              <div className="relative w-full h-48 mb-6 overflow-hidden rounded-md bg-gradient-to-r from-green-100 to-green-200">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <Heart className="h-12 w-12 text-green-500 mx-auto mb-2" />
                    <p className="text-base font-medium text-green-700">Impact Story Image</p>
                    <p className="text-sm text-green-600">(384x192px recommended)</p>
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-bold text-green-700 mb-2">Feeding 200 Children Weekly</h3>
              <p className="text-gray-600 mb-4">
                "A community kitchen in Chennai has been able to provide consistent meals to 200 children each week
                through our platform, connecting them with local restaurants and event venues."
              </p>
              <p className="text-sm text-green-600 font-semibold">- Sundar Community Kitchen, Chennai</p>
            </div>
            <div className="rounded-lg border border-green-100 bg-white p-6 shadow-md">
              {/* Impact story image placeholder */}
              <div className="relative w-full h-48 mb-6 overflow-hidden rounded-md bg-gradient-to-r from-green-100 to-green-200">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <Heart className="h-12 w-12 text-green-500 mx-auto mb-2" />
                    <p className="text-base font-medium text-green-700">Impact Story Image</p>
                    <p className="text-sm text-green-600">(384x192px recommended)</p>
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-bold text-green-700 mb-2">Zero Food Waste Restaurant</h3>
              <p className="text-gray-600 mb-4">
                "Our restaurant chain has reduced food waste by 90% since joining DAAN DATA. We now have a reliable
                channel to share surplus food at the end of each day."
              </p>
              <p className="text-sm text-green-600 font-semibold">- Green Leaf Restaurants, Mumbai</p>
            </div>
            <div className="rounded-lg border border-green-100 bg-white p-6 shadow-md">
              {/* Impact story image placeholder */}
              <div className="relative w-full h-48 mb-6 overflow-hidden rounded-md bg-gradient-to-r from-green-100 to-green-200">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <Heart className="h-12 w-12 text-green-500 mx-auto mb-2" />
                    <p className="text-base font-medium text-green-700">Impact Story Image</p>
                    <p className="text-sm text-green-600">(384x192px recommended)</p>
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-bold text-green-700 mb-2">Volunteer Courier Network</h3>
              <p className="text-gray-600 mb-4">
                "Our network of 50 volunteer couriers in Delhi has helped transport over 2,000 meals from donors to
                recipients who couldn't arrange pickup themselves."
              </p>
              <p className="text-sm text-green-600 font-semibold">- Delhi Food Runners</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 border-t bg-gradient-to-b from-white to-green-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-green-700">
                Be Part of Our Impact
              </h2>
              <p className="max-w-[600px] text-gray-600 md:text-xl">
                Join thousands of Indians fighting food waste and hunger in their communities.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="/signup">
                <Button size="lg" className="bg-orange-500 hover:bg-orange-600">
                  Join Today <ArrowRight className="ml-2 h-4 w-4" />
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
                <p className="text-sm text-gray-600 dark:text-gray-400">+91 7389669982</p>
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

