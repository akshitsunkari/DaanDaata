import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Utensils, Heart, Globe, Shield, User } from "lucide-react"
import Image from "next/image"

export default function AboutPage() {
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
            <Link href="/about" className="text-sm font-medium text-green-600 hover:underline underline-offset-4">
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
                About DAAN DATA
              </h1>
              <p className="max-w-[600px] mx-auto text-gray-600 md:text-xl dark:text-gray-400">
                Our mission is to reduce food waste and hunger across India through technology and community.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter text-green-700">Our Story</h2>
                <p className="text-gray-600 md:text-lg">
                  DAAN DATA was founded by CSE engineering students from VIT Chennai who witnessed the stark contrast
                  between food waste and hunger in Indian cities.
                </p>
                <p className="text-gray-600 md:text-lg mt-4">
                  The name "DAAN DATA" combines the Sanskrit word "Daan" (meaning "giving" or "donation") with "Data" -
                  representing our data-driven approach to solving this critical problem.
                </p>
                <p className="text-gray-600 md:text-lg mt-4">
                  What started as a project at VIT Chennai has grown into a platform connecting donors with recipients
                  across India, saving food from going to waste and helping those in need.
                </p>
              </div>
            </div>
            <div className="mx-auto lg:mx-0 relative aspect-video overflow-hidden rounded-xl border-2 border-green-100 shadow-lg">
              <Image
                src="/placeholder.svg?height=720&width=1280&text=Our+Story"
                alt="DAAN DATA team"
                width={1280}
                height={720}
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-green-50 dark:bg-green-950">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-4 mb-12">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter text-green-700 dark:text-green-300">Our Values</h2>
              <p className="max-w-[600px] mx-auto text-gray-600 md:text-lg dark:text-gray-400">
                The principles that guide everything we do
              </p>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="flex flex-col items-center text-center space-y-4 p-6 rounded-lg bg-white shadow-sm border border-green-100">
              <div className="rounded-full bg-green-100 p-3">
                <Heart className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-green-700">Compassion</h3>
              <p className="text-gray-600">
                We believe that access to food is a basic human right. Our platform is built on empathy and respect for
                all users, regardless of their circumstances.
              </p>
            </div>

            <div className="flex flex-col items-center text-center space-y-4 p-6 rounded-lg bg-white shadow-sm border border-green-100">
              <div className="rounded-full bg-green-100 p-3">
                <Globe className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-green-700">Sustainability</h3>
              <p className="text-gray-600">
                By reducing food waste, we're also reducing greenhouse gas emissions and conserving the resources used
                to produce food, contributing to a healthier planet.
              </p>
            </div>

            <div className="flex flex-col items-center text-center space-y-4 p-6 rounded-lg bg-white shadow-sm border border-green-100">
              <div className="rounded-full bg-green-100 p-3">
                <Shield className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-green-700">Trust</h3>
              <p className="text-gray-600">
                We foster a community built on trust and transparency. Our rating system and guidelines ensure safe food
                sharing practices for everyone.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-4 mb-12">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter text-green-700">Our Team</h2>
              <p className="max-w-[600px] mx-auto text-gray-600 md:text-lg">
                Meet the passionate individuals behind DAAN DATA
              </p>
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="flex flex-col items-center text-center space-y-4">
              {/* Team member image placeholder */}
              <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-green-100 bg-gradient-to-br from-green-100 to-green-200">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <User className="h-12 w-12 text-green-500" />
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-green-700">Srinivas Akshit</h3>
                <p className="text-gray-600">Co-Founder</p>
              </div>
            </div>

            <div className="flex flex-col items-center text-center space-y-4">
              {/* Team member image placeholder */}
              <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-green-100 bg-gradient-to-br from-green-100 to-green-200">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <User className="h-12 w-12 text-green-500" />
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-green-700">Soumya Singh</h3>
                <p className="text-gray-600">Co-Founder</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-green-50 dark:bg-green-950">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-4 mb-12">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter text-green-700 dark:text-green-300">Our Partners</h2>
              <p className="max-w-[600px] mx-auto text-gray-600 md:text-lg dark:text-gray-400">
                Organizations that support our mission
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
            <div className="flex justify-center">
              <Image
                src="/placeholder.svg?height=80&width=160&text=Partner+1"
                alt="Partner logo"
                width={160}
                height={80}
                className="object-contain"
              />
            </div>
            <div className="flex justify-center">
              <Image
                src="/placeholder.svg?height=80&width=160&text=Partner+2"
                alt="Partner logo"
                width={160}
                height={80}
                className="object-contain"
              />
            </div>
            <div className="flex justify-center">
              <Image
                src="/placeholder.svg?height=80&width=160&text=Partner+3"
                alt="Partner logo"
                width={160}
                height={80}
                className="object-contain"
              />
            </div>
            <div className="flex justify-center">
              <Image
                src="/placeholder.svg?height=80&width=160&text=Partner+4"
                alt="Partner logo"
                width={160}
                height={80}
                className="object-contain"
              />
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
                Join Our Mission
              </h2>
              <p className="max-w-[600px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Be part of the movement to reduce food waste and hunger across India.
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
                <p className="text-sm text-gray-600 dark:text-gray-400">akshit.sunkari@gmail.com</p>
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

