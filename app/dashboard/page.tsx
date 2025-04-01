"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import {
  Bell,
  Calendar,
  ChevronDown,
  Clock,
  Gift,
  Home,
  LogOut,
  MapPin,
  Menu,
  MessageSquare,
  Plus,
  Settings,
  Star,
  Utensils,
  User,
} from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Image from "next/image"
import { getAllDonations, getUserLocation, type Donation } from "@/lib/store"

export default function DashboardPage() {
  useEffect(() => {
    // Preload dashboard data
    const preloadData = async () => {
      // Simulate preloading resources
      await Promise.all([
        // Preload critical resources
        new Promise((resolve) => setTimeout(resolve, 10)),
      ])
    }

    preloadData()
  }, [])
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [userLocation, setUserLocation] = useState<{ state: string; city: string } | null>(null)
  const [donations, setDonations] = useState<Donation[]>([])
  const [nearbyDonations, setNearbyDonations] = useState<Donation[]>([])
  const [myDonations, setMyDonations] = useState<Donation[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Load user location
    const location = getUserLocation()
    if (location) {
      setUserLocation({
        state: location.state,
        city: location.city,
      })
    }

    // Load all donations
    const allDonations = getAllDonations()
    setDonations(allDonations)

    // Filter for donations near the user
    if (location) {
      const nearby = allDonations.filter(
        (donation) => donation.location?.city === location.city && donation.status === "Available",
      )
      setNearbyDonations(nearby)

      // In a real app, this would filter by the logged-in user ID
      // For now, we'll just show a subset of all donations as "my donations"
      // This simulates the user having made these donations
      const myDons = allDonations.slice(0, Math.min(2, allDonations.length))
      setMyDonations(myDons)
    }

    setLoading(false)
  }, [])

  const handleRequestPickup = (id: number) => {
    // In a real app, this would call an API to update the donation
    // For now, we'll just update the state
    setNearbyDonations((prevDonations) =>
      prevDonations.map((donation) => (donation.id === id ? { ...donation, status: "Requested" as const } : donation)),
    )
  }

  return (
    <div className="flex min-h-screen flex-col md:flex-row bg-green-50/30">
      {/* Mobile Header */}
      <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b bg-green-50 px-4 md:hidden">
        <Button variant="outline" size="icon" onClick={() => setSidebarOpen(!sidebarOpen)} className="border-green-200">
          <Menu className="h-5 w-5 text-green-600" />
          <span className="sr-only">Toggle Menu</span>
        </Button>
        <div className="flex items-center gap-2">
          <Utensils className="h-6 w-6 text-green-600" />
          <div className="flex flex-col">
            <span className="text-lg font-bold text-green-700 leading-tight">DAAN DATA</span>
            <span className="text-xs text-green-600 -mt-1">दान दाटा</span>
          </div>
        </div>
        <div className="ml-auto flex items-center gap-2">
          <Button variant="ghost" size="icon" className="text-green-600 hover:bg-green-100">
            <Bell className="h-5 w-5" />
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="rounded-full">
                <Avatar className="h-8 w-8 border-2 border-green-200">
                  <AvatarImage src="/placeholder.svg?text=GU" alt="Guest User" />
                  <AvatarFallback>GU</AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Guest Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <Link href="/">Log out</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>

      {/* Sidebar */}
      <div
        className={`
        fixed inset-y-0 left-0 z-20 w-64 transform border-r bg-green-50 transition-transform duration-200 ease-in-out md:translate-x-0 md:static md:z-0
        ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
      `}
      >
        <div className="flex h-16 items-center border-b px-4">
          <Link href="/" className="flex items-center gap-2">
            <Utensils className="h-6 w-6 text-green-600" />
            <div className="flex flex-col">
              <span className="text-lg font-bold text-green-700 leading-tight">DAAN DATA</span>
              <span className="text-xs text-green-600 -mt-1">दान दाटा</span>
            </div>
          </Link>
        </div>
        <div className="flex flex-col gap-1 p-4">
          <Button
            variant="ghost"
            className="w-full justify-start text-green-700 hover:bg-green-100 hover:text-green-800"
            onClick={() => (window.location.href = "/dashboard")}
          >
            <Home className="mr-2 h-5 w-5" />
            Dashboard
          </Button>
          <Button
            variant="ghost"
            className="w-full justify-start text-green-700 hover:bg-green-100 hover:text-green-800"
            onClick={() => (window.location.href = "/donate")}
          >
            <Gift className="mr-2 h-5 w-5" />
            Donate Food
          </Button>
          <Button
            variant="ghost"
            className="w-full justify-start text-green-700 hover:bg-green-100 hover:text-green-800"
            onClick={() => (window.location.href = "/receive")}
          >
            <MapPin className="mr-2 h-5 w-5" />
            Find Food
          </Button>
          <Button
            variant="ghost"
            className="w-full justify-start text-green-700 hover:bg-green-100 hover:text-green-800"
            onClick={() => alert("Messages feature coming soon!")}
          >
            <MessageSquare className="mr-2 h-5 w-5" />
            Messages
          </Button>
          <Button
            variant="ghost"
            className="w-full justify-start text-green-700 hover:bg-green-100 hover:text-green-800"
            onClick={() => alert("Profile feature coming soon!")}
          >
            <User className="mr-2 h-5 w-5" />
            Profile
          </Button>
          <Button
            variant="ghost"
            className="w-full justify-start text-green-700 hover:bg-green-100 hover:text-green-800"
            onClick={() => alert("Settings feature coming soon!")}
          >
            <Settings className="mr-2 h-5 w-5" />
            Settings
          </Button>
          <div className="mt-auto pt-4">
            <Button
              variant="ghost"
              className="w-full justify-start text-red-500 hover:text-red-600 hover:bg-red-50"
              onClick={() => (window.location.href = "/")}
            >
              <LogOut className="mr-2 h-5 w-5" />
              Log Out
            </Button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto bg-gradient-to-b from-green-50 via-green-50/30 to-orange-50/20">
        <div className="hidden items-center justify-between border-b md:flex h-16 px-6 bg-green-50">
          <h1 className="text-lg font-semibold text-green-700">Dashboard</h1>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="text-green-600 hover:bg-green-100">
              <Bell className="h-5 w-5" />
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex items-center gap-2 text-green-700 hover:bg-green-100">
                  <Avatar className="h-8 w-8 border-2 border-green-200">
                    <AvatarImage src="/placeholder.svg?text=GU" alt="Guest User" />
                    <AvatarFallback>GU</AvatarFallback>
                  </Avatar>
                  <span>Guest User</span>
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>Guest Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Settings</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link href="/">Log out</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>

        <div className="p-4 md:p-6 bg-gradient-to-b from-green-50/50 to-white">
          <div className="mb-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-green-700">Welcome to DAAN DATA!</h2>
              <p className="text-muted-foreground">
                {userLocation
                  ? `Connect with food donations in ${userLocation.city} and help reduce food waste.`
                  : "Connect with food donations in your area and help reduce food waste."}
              </p>
            </div>
            <Button className="bg-orange-500 hover:bg-orange-600" onClick={() => (window.location.href = "/donate")}>
              <Plus className="mr-2 h-4 w-4" /> Create New Donation
            </Button>
          </div>

          <div className="grid gap-4 md:grid-cols-3 mb-8">
            <Card className="border-green-100 shadow-md bg-gradient-to-br from-green-50 to-green-100/70">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-green-600">Available Donations</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-green-700">{nearbyDonations.length}</div>
                <p className="text-xs text-muted-foreground">In your area</p>
              </CardContent>
            </Card>
            <Card className="border-orange-100 shadow-md bg-gradient-to-br from-orange-50 to-orange-100/70">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-orange-600">Active Donors</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-orange-700">{donations.length}</div>
                <p className="text-xs text-muted-foreground">
                  {userLocation ? `In ${userLocation.city}` : "In your area"}
                </p>
              </CardContent>
            </Card>
            <Card className="border-green-100 shadow-md bg-gradient-to-br from-green-50 to-green-100/70">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-green-600">Food Saved (kg)</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-green-700">{Math.floor(donations.length * 5.7)}</div>
                <p className="text-xs text-muted-foreground">This week</p>
              </CardContent>
            </Card>
          </div>

          <Tabs defaultValue="available" className="mb-8">
            <TabsList className="bg-green-100">
              <TabsTrigger
                value="available"
                className="data-[state=active]:bg-green-600 data-[state=active]:text-white"
              >
                Available Near You
              </TabsTrigger>
              <TabsTrigger
                value="my-donations"
                className="data-[state=active]:bg-green-600 data-[state=active]:text-white"
              >
                My Donations
              </TabsTrigger>
            </TabsList>
            <TabsContent value="available" className="mt-4">
              {loading ? (
                <div className="flex justify-center py-10">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-green-600"></div>
                </div>
              ) : (
                <>
                  <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {nearbyDonations.length > 0 ? (
                      nearbyDonations.map((donation) => (
                        <Card
                          key={donation.id}
                          className="border-green-100 hover:border-green-200 hover:shadow-md transition-all bg-white"
                        >
                          <CardContent className="p-0">
                            <div className="h-40 w-full bg-green-100 flex items-center justify-center">
                              {donation.photos && donation.photos.length > 0 ? (
                                <Image
                                  src={donation.photos[0] || "/placeholder.svg"}
                                  alt={donation.foodType}
                                  width={300}
                                  height={200}
                                  className="h-40 w-full object-cover"
                                />
                              ) : (
                                <Image
                                  src={`/placeholder.svg?height=200&width=300&text=${donation.foodType}`}
                                  alt={donation.foodType}
                                  width={300}
                                  height={200}
                                  className="h-40 w-full object-cover"
                                />
                              )}
                            </div>
                          </CardContent>
                          <CardHeader className="pb-2 pt-4">
                            <div className="flex justify-between items-start">
                              <CardTitle className="text-lg text-green-700">
                                {donation.foodType === "cooked" && "Cooked Food"}
                                {donation.foodType === "packaged" && "Packaged Food"}
                                {donation.foodType === "groceries" && "Groceries"}
                                {donation.foodType === "fruits" && "Fruits & Vegetables"}
                                {donation.foodType === "bakery" && "Bakery Items"}
                                {donation.foodType === "other" && "Food Donation"}
                              </CardTitle>
                              <Badge className="bg-green-600">{donation.quantity}</Badge>
                            </div>
                            <CardDescription>{donation.description.substring(0, 60)}...</CardDescription>
                          </CardHeader>
                          <CardContent className="pb-2 pt-0">
                            <div className="flex items-center text-sm text-muted-foreground mb-1">
                              <MapPin className="mr-1 h-4 w-4 text-green-600" />
                              {donation.location.city}, {donation.location.state}
                            </div>
                            <div className="flex items-center text-sm text-muted-foreground mb-1">
                              <Clock className="mr-1 h-4 w-4 text-orange-500" />
                              Pickup at {donation.pickupTime}
                            </div>
                          </CardContent>
                          <CardFooter>
                            <Button
                              className="w-full bg-orange-500 hover:bg-orange-600"
                              onClick={() => handleRequestPickup(donation.id)}
                            >
                              Request Pickup
                            </Button>
                          </CardFooter>
                        </Card>
                      ))
                    ) : (
                      <div className="col-span-full text-center py-10">
                        <div className="rounded-full bg-green-100 p-3 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                          <MapPin className="h-8 w-8 text-green-600" />
                        </div>
                        <h3 className="text-lg font-medium text-green-700 mb-2">No donations found nearby</h3>
                        <p className="text-gray-600 max-w-md mx-auto mb-4">
                          We couldn't find any available food donations in your area. Try checking back later or
                          expanding your search.
                        </p>
                      </div>
                    )}
                  </div>
                  <div className="mt-4 flex justify-center">
                    <Button
                      variant="outline"
                      className="border-green-200 text-green-600 hover:bg-green-50"
                      onClick={() => (window.location.href = "/receive")}
                    >
                      View All Available Food
                    </Button>
                  </div>
                </>
              )}
            </TabsContent>
            <TabsContent value="my-donations" className="mt-4">
              {loading ? (
                <div className="flex justify-center py-10">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-green-600"></div>
                </div>
              ) : (
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {myDonations.length > 0 ? (
                    myDonations.map((donation) => (
                      <Card
                        key={donation.id}
                        className="border-green-100 hover:border-green-200 hover:shadow-md transition-all bg-white"
                      >
                        <CardContent className="p-0 relative">
                          <div className="h-40 w-full bg-green-100 flex items-center justify-center">
                            {donation.photos && donation.photos.length > 0 ? (
                              <Image
                                src={donation.photos[0] || "/placeholder.svg"}
                                alt={donation.foodType}
                                width={300}
                                height={200}
                                className="h-40 w-full object-cover"
                              />
                            ) : (
                              <Image
                                src={`/placeholder.svg?height=200&width=300&text=${donation.foodType}`}
                                alt={donation.foodType}
                                width={300}
                                height={200}
                                className="h-40 w-full object-cover"
                              />
                            )}
                          </div>
                          <div className="absolute top-2 right-2">
                            <Badge className={donation.status === "Requested" ? "bg-blue-500" : "bg-orange-500"}>
                              {donation.status}
                            </Badge>
                          </div>
                        </CardContent>
                        <CardHeader className="pb-2 pt-4">
                          <CardTitle className="text-lg text-green-700">
                            {donation.foodType === "cooked" && "Cooked Food"}
                            {donation.foodType === "packaged" && "Packaged Food"}
                            {donation.foodType === "groceries" && "Groceries"}
                            {donation.foodType === "fruits" && "Fruits & Vegetables"}
                            {donation.foodType === "bakery" && "Bakery Items"}
                            {donation.foodType === "other" && "Food Donation"}
                          </CardTitle>
                          <CardDescription>
                            {donation.status === "Requested" ? `Requested by recipient` : "Waiting for recipient"}
                          </CardDescription>
                        </CardHeader>
                        <CardContent className="pb-2 pt-0">
                          <div className="flex items-center text-sm text-muted-foreground mb-1">
                            <Calendar className="mr-1 h-4 w-4 text-green-600" />
                            {donation.expiry ? `Best before: ${donation.expiry}` : "Expiry not set"}
                          </div>
                          <div className="flex items-center text-sm text-muted-foreground mb-1">
                            <Star className="mr-1 h-4 w-4 text-orange-500" />
                            {donation.quantity}
                          </div>
                        </CardContent>
                        <CardFooter>
                          <Button
                            variant="outline"
                            className="w-full border-green-200 text-green-600 hover:bg-green-50"
                          >
                            {donation.status === "Requested" ? "View Details" : "Edit Listing"}
                          </Button>
                        </CardFooter>
                      </Card>
                    ))
                  ) : (
                    <div className="col-span-full flex flex-col items-center justify-center py-12 text-center">
                      <div className="rounded-full bg-green-100 p-3 mb-4">
                        <Gift className="h-6 w-6 text-green-600" />
                      </div>
                      <h3 className="text-lg font-medium text-green-700 mb-1">No donations yet</h3>
                      <p className="text-gray-500 max-w-md mb-4">
                        You haven't created any food donations yet. Start sharing your surplus food with those in need.
                      </p>
                      <Button
                        className="bg-orange-500 hover:bg-orange-600"
                        onClick={() => (window.location.href = "/donate")}
                      >
                        <Plus className="mr-2 h-4 w-4" /> Create Donation
                      </Button>
                    </div>
                  )}
                </div>
              )}
            </TabsContent>
          </Tabs>

          <Card className="border-green-100 shadow-md bg-gradient-to-br from-green-50 to-white">
            <CardHeader>
              <CardTitle className="text-green-700">How It Works</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6 md:grid-cols-3">
                <div className="flex flex-col items-center text-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100 mb-4">
                    <Gift className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="text-lg font-medium text-green-700 mb-1">Donate Food</h3>
                  <p className="text-sm text-gray-500">
                    List your surplus food with details about quantity and pickup time.
                  </p>
                </div>
                <div className="flex flex-col items-center text-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-100 mb-4">
                    <MapPin className="h-6 w-6 text-orange-600" />
                  </div>
                  <h3 className="text-lg font-medium text-green-700 mb-1">Connect Locally</h3>
                  <p className="text-sm text-gray-500">
                    We match donors with nearby recipients for efficient distribution.
                  </p>
                </div>
                <div className="flex flex-col items-center text-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100 mb-4">
                    <Star className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="text-lg font-medium text-green-700 mb-1">Make an Impact</h3>
                  <p className="text-sm text-gray-500">
                    Track your contribution to reducing food waste and fighting hunger.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

