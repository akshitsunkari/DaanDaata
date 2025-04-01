"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Utensils, MapPin, Search, Filter, Gift } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from "next/image"
import { getAllDonations, getUserLocation, requestDonation, type Donation } from "@/lib/store"

export default function ReceivePage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [activeTab, setActiveTab] = useState("all")
  const [requestSuccess, setRequestSuccess] = useState<number | null>(null)
  const [donations, setDonations] = useState<Donation[]>([])
  const [userLocation, setUserLocation] = useState<{ state: string; city: string } | null>(null)
  const [loading, setLoading] = useState(true)
  const [filteredDonations, setFilteredDonations] = useState<Donation[]>([])

  useEffect(() => {
    // Optimize loading by prioritizing UI rendering first
    const timer = setTimeout(() => {
      if (loading && donations.length === 0) {
        // If still loading after 200ms (reduced from 1000ms), show some sample data
        const sampleDonations = [
          {
            id: 1,
            foodType: "cooked",
            quantity: "3 boxes",
            servings: "6 people",
            expiry: "2023-12-31",
            pickupTime: "18:00",
            description: "Freshly cooked vegetable curry and rice.",
            photos: [],
            status: "Available",
            location: {
              city: userLocation?.city || "Chennai",
              state: userLocation?.state || "Tamil Nadu",
            },
          },
        ]
        setDonations(sampleDonations)
        setFilteredDonations(sampleDonations)
        setLoading(false)
      }
    }, 200)

    return () => clearTimeout(timer)
  }, [loading, donations.length, userLocation])

  useEffect(() => {
    // Load user location and available donations
    const location = getUserLocation()
    if (location) {
      setUserLocation({
        state: location.state,
        city: location.city,
      })
    }

    // Get all donations
    const allDonations = getAllDonations()

    // Filter for available donations only
    const availableDonations = allDonations.filter((donation) => donation.status === "Available")

    // Sort by distance/location
    let sortedDonations = availableDonations

    if (location) {
      // First show donations in the same city
      sortedDonations = [
        ...availableDonations.filter(
          (donation) => donation.location?.city.toLowerCase() === location.city.toLowerCase(),
        ),
        ...availableDonations.filter(
          (donation) =>
            donation.location?.city.toLowerCase() !== location.city.toLowerCase() &&
            donation.location?.state.toLowerCase() === location.state.toLowerCase(),
        ),
        ...availableDonations.filter(
          (donation) => donation.location?.state.toLowerCase() !== location.state.toLowerCase(),
        ),
      ]
    }

    setDonations(sortedDonations)
    setFilteredDonations(sortedDonations)
    setLoading(false)
  }, [])

  const filteredDonationsList = donations.filter((donation) => {
    // Filter by search query
    if (searchQuery) {
      const searchLower = searchQuery.toLowerCase()
      const matchesFood = donation.foodType.toLowerCase().includes(searchLower)
      const matchesDesc = donation.description.toLowerCase().includes(searchLower)
      const matchesCity = donation.location?.city.toLowerCase().includes(searchLower)
      const matchesState = donation.location?.state.toLowerCase().includes(searchLower)

      if (!matchesFood && !matchesDesc && !matchesCity && !matchesState) {
        return false
      }
    }

    // Filter by type
    if (activeTab !== "all" && donation.foodType !== activeTab) {
      return false
    }

    return true
  })

  const handleRequest = (id: number) => {
    // In a real app, this would include the logged-in user's ID
    // For now, we'll use a placeholder recipient ID
    const result = requestDonation(id, "guest-user")

    if (result) {
      setRequestSuccess(id)

      // Update the local state
      setDonations((prev) =>
        prev.map((donation) => (donation.id === id ? { ...donation, status: "Requested" as const } : donation)),
      )

      // Reset after a few seconds
      setTimeout(() => {
        setRequestSuccess(null)
      }, 3000)
    }
  }

  // Calculate approximate distance (this would use proper geolocation in a real app)
  const getDistance = (donation: Donation) => {
    if (!userLocation) return "Unknown distance"

    if (donation.location.city === userLocation.city) {
      // Same city - generate a random distance between 0.5 and 5 km
      return `${(Math.random() * 4.5 + 0.5).toFixed(1)} km away`
    } else if (donation.location.state === userLocation.state) {
      // Same state - generate a random distance between 5 and 50 km
      return `${Math.floor(Math.random() * 45 + 5)} km away`
    } else {
      // Different state - show the actual location instead of distance
      return `${donation.location.city}, ${donation.location.state}`
    }
  }

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-10 border-b bg-gradient-to-r from-green-50 to-green-100 dark:bg-green-900">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <Link href="/" className="flex items-center gap-2">
            <Utensils className="h-6 w-6 text-green-600" />
            <div className="flex flex-col">
              <span className="text-xl font-bold text-green-700 leading-tight">DAAN DATA</span>
              <span className="text-sm text-green-600 -mt-1">दान दाटा</span>
            </div>
          </Link>
          <div className="flex items-center gap-4">
            <Link href="/dashboard">
              <Button variant="ghost" size="sm" className="hover:text-green-600">
                Dashboard
              </Button>
            </Link>
            <Link href="/donate">
              <Button size="sm" className="bg-orange-500 hover:bg-orange-600">
                Donate Food
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1 py-6 bg-gradient-to-b from-green-50/70 via-white to-orange-50/20">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <h1 className="text-2xl font-bold tracking-tight text-green-700">Find Food Near You</h1>
              <p className="text-gray-600">
                Browse available food donations {userLocation ? `in ${userLocation.city}` : "in your area"}
              </p>
            </div>

            <div className="flex flex-col gap-4 md:flex-row md:items-center">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
                <Input
                  placeholder="Search by food, location, or description"
                  className="pl-9 border-green-200 focus:border-green-300 focus:ring-green-200"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <Button variant="outline" className="border-green-200 text-green-600 hover:bg-green-50">
                <Filter className="mr-2 h-4 w-4" /> Filter
              </Button>
            </div>

            <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="bg-green-100 w-full justify-start overflow-auto">
                <TabsTrigger value="all" className="data-[state=active]:bg-green-600 data-[state=active]:text-white">
                  All
                </TabsTrigger>
                <TabsTrigger value="cooked" className="data-[state=active]:bg-green-600 data-[state=active]:text-white">
                  Cooked Food
                </TabsTrigger>
                <TabsTrigger
                  value="packaged"
                  className="data-[state=active]:bg-green-600 data-[state=active]:text-white"
                >
                  Packaged
                </TabsTrigger>
                <TabsTrigger value="bakery" className="data-[state=active]:bg-green-600 data-[state=active]:text-white">
                  Bakery
                </TabsTrigger>
                <TabsTrigger value="fruits" className="data-[state=active]:bg-green-600 data-[state=active]:text-white">
                  Fruits & Veg
                </TabsTrigger>
                <TabsTrigger
                  value="groceries"
                  className="data-[state=active]:bg-green-600 data-[state=active]:text-white"
                >
                  Groceries
                </TabsTrigger>
              </TabsList>

              {loading ? (
                <div className="mt-10 flex justify-center">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-green-600"></div>
                </div>
              ) : (
                <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {filteredDonationsList.length > 0 ? (
                    filteredDonationsList.map((donation) => (
                      <Card
                        key={donation.id}
                        className="overflow-hidden border-green-100 hover:border-green-200 hover:shadow-md transition-all"
                      >
                        <div className="relative h-40 w-full bg-green-100">
                          {/* Add this inside each donation card, right after the CardContent className="p-0" div */}
                          {!donation.photos || donation.photos.length === 0 ? (
                            <div className="h-40 w-full bg-gradient-to-r from-green-100 to-green-200 flex items-center justify-center">
                              <div className="text-center">
                                <Gift className="h-10 w-10 text-green-500 mx-auto mb-2" />
                                <p className="text-sm text-green-600">Food donation image placeholder</p>
                                <p className="text-xs text-green-500">(600x400px recommended)</p>
                              </div>
                            </div>
                          ) : (
                            <Image
                              src={donation.photos[0] || "/placeholder.svg"}
                              alt={donation.foodType}
                              width={300}
                              height={200}
                              className="h-40 w-full object-cover"
                            />
                          )}
                          <Badge className="absolute top-2 right-2 bg-green-600">{donation.quantity}</Badge>
                        </div>
                        <CardHeader className="pb-2 pt-4">
                          <CardTitle className="text-lg text-green-700">
                            {donation.foodType === "cooked" && "Cooked Food"}
                            {donation.foodType === "packaged" && "Packaged Food"}
                            {donation.foodType === "groceries" && "Groceries"}
                            {donation.foodType === "fruits" && "Fruits & Vegetables"}
                            {donation.foodType === "bakery" && "Bakery Items"}
                            {donation.foodType === "other" && "Food Donation"}
                          </CardTitle>
                          <CardDescription>{donation.description.substring(0, 60)}...</CardDescription>
                        </CardHeader>
                        <CardContent className="pb-2 pt-0">
                          <div className="flex items-center text-sm text-muted-foreground mb-1">
                            <MapPin className="mr-1 h-4 w-4 text-green-600" />
                            {donation.location.city}, {donation.location.state} •
                            <span className="ml-1 text-green-600 font-medium">{getDistance(donation)}</span>
                          </div>
                          <div className="flex items-center text-sm text-muted-foreground mb-1">
                            <svg
                              className="mr-1 h-4 w-4 text-orange-500"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                              />
                            </svg>
                            Pickup at {donation.pickupTime}
                          </div>
                        </CardContent>
                        <CardFooter>
                          {requestSuccess === donation.id ? (
                            <Button className="w-full bg-green-600 hover:bg-green-700" disabled>
                              <svg className="mr-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                              Request Sent
                            </Button>
                          ) : (
                            <Button
                              className="w-full bg-orange-500 hover:bg-orange-600"
                              onClick={() => handleRequest(donation.id)}
                            >
                              Request Food
                            </Button>
                          )}
                        </CardFooter>
                      </Card>
                    ))
                  ) : (
                    <div className="col-span-full flex flex-col items-center justify-center py-12 text-center">
                      <div className="rounded-full bg-green-100 p-3 mb-4">
                        <Search className="h-6 w-6 text-green-600" />
                      </div>
                      <h3 className="text-lg font-medium text-green-700 mb-1">No results found</h3>
                      <p className="text-gray-500 max-w-md">
                        We couldn't find any food donations matching your search. Try adjusting your filters or search
                        terms.
                      </p>
                    </div>
                  )}
                </div>
              )}
            </Tabs>
          </div>
        </div>
      </main>
    </div>
  )
}

