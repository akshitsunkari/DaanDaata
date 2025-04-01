"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Utensils, Phone, Mail, MapPin, Send } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card } from "@/components/ui/card"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isLoading, setIsLoading] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubjectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, subject: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
      setShowSuccess(true)
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      })
    }, 1500)
  }

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
            <Link href="/contact" className="text-sm font-medium text-green-600 hover:underline underline-offset-4">
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
                Contact Us
              </h1>
              <p className="max-w-[600px] mx-auto text-gray-600 md:text-xl dark:text-gray-400">
                Have questions or feedback? We'd love to hear from you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="w-full py-12 md:py-24 bg-gradient-to-b from-white via-green-50/30 to-orange-50/20">
        <div className="container px-4 md:px-6">
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <h2 className="text-2xl font-bold text-green-700 mb-6">Get in Touch</h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-green-100 p-3 mt-1">
                    <Mail className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-green-700">Email</h3>
                    <p className="text-gray-600">akshit.sunkari@gmail.com</p>
                    <p className="text-gray-600">support@daandata.in</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-green-100 p-3 mt-1">
                    <Phone className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-green-700">Phone</h3>
                    <p className="text-gray-600">+91 7389669982</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-green-100 p-3 mt-1">
                    <MapPin className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-green-700">Location</h3>
                    <p className="text-gray-600">VIT Chennai, Vandalur-Kelambakkam Road,</p>
                    <p className="text-gray-600">Chennai, Tamil Nadu - 600127</p>
                  </div>
                </div>
              </div>

              <div className="mt-10">
                <h3 className="text-lg font-medium text-green-700 mb-3">Follow Us</h3>
                <div className="flex gap-4">
                  <Link
                    href="#"
                    className="rounded-full bg-green-100 p-3 text-green-600 hover:bg-green-200 transition-colors"
                  >
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
                  <Link
                    href="#"
                    className="rounded-full bg-green-100 p-3 text-green-600 hover:bg-green-200 transition-colors"
                  >
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
                  <Link
                    href="#"
                    className="rounded-full bg-green-100 p-3 text-green-600 hover:bg-green-200 transition-colors"
                  >
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

            <div>
              <Card className="border-green-100 shadow-lg">
                <div className="p-6 bg-gradient-to-r from-green-50 to-white rounded-lg">
                  <h2 className="text-2xl font-bold text-green-700 mb-6">Send a Message</h2>

                  {showSuccess ? (
                    <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                      <svg
                        className="w-12 h-12 text-green-600 mx-auto mb-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <h3 className="text-lg font-medium text-green-700 mb-2">Thank You!</h3>
                      <p className="text-gray-600 mb-4">Your message has been received. We'll get back to you soon.</p>
                      <Button
                        variant="outline"
                        className="border-green-200 text-green-600 hover:bg-green-50"
                        onClick={() => setShowSuccess(false)}
                      >
                        Send Another Message
                      </Button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Your Name</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="border-green-200 focus:border-green-300 focus:ring-green-200"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="border-green-200 focus:border-green-300 focus:ring-green-200"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="subject">Subject</Label>
                        <Select value={formData.subject} onValueChange={handleSubjectChange}>
                          <SelectTrigger
                            id="subject"
                            className="border-green-200 focus:border-green-300 focus:ring-green-200"
                          >
                            <SelectValue placeholder="Select a subject" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="general">General Inquiry</SelectItem>
                            <SelectItem value="feedback">Feedback</SelectItem>
                            <SelectItem value="support">Technical Support</SelectItem>
                            <SelectItem value="partnership">Partnership Opportunity</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">Message</Label>
                        <Textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          className="min-h-[150px] border-green-200 focus:border-green-300 focus:ring-green-200"
                        />
                      </div>

                      <Button type="submit" className="w-full bg-orange-500 hover:bg-orange-600" disabled={isLoading}>
                        {isLoading ? (
                          <span className="flex items-center">
                            <svg
                              className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                            >
                              <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                              ></circle>
                              <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                              ></path>
                            </svg>
                            Sending...
                          </span>
                        ) : (
                          <span className="flex items-center">
                            <Send className="mr-2 h-4 w-4" />
                            Send Message
                          </span>
                        )}
                      </Button>
                    </form>
                  )}
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-green-50 dark:bg-green-950 mt-auto">
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

