"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Utensils, MapPin, Search, ArrowRight } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

// Indian states
const indianStates = [
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chhattisgarh",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttar Pradesh",
  "Uttarakhand",
  "West Bengal",
  "Delhi",
]

// Major cities by state (expanded to include more cities)
const citiesByState: Record<string, string[]> = {
  "Andhra Pradesh": [
    "Visakhapatnam",
    "Vijayawada",
    "Guntur",
    "Nellore",
    "Kurnool",
    "Kakinada",
    "Tirupati",
    "Rajahmundry",
  ],
  "Arunachal Pradesh": ["Itanagar", "Naharlagun", "Pasighat", "Tawang", "Ziro"],
  Assam: ["Guwahati", "Silchar", "Dibrugarh", "Jorhat", "Nagaon", "Tinsukia"],
  Bihar: ["Patna", "Gaya", "Muzaffarpur", "Bhagalpur", "Darbhanga", "Purnia"],
  Chhattisgarh: ["Raipur", "Bhilai", "Bilaspur", "Korba", "Durg", "Rajnandgaon"],
  Goa: ["Panaji", "Margao", "Vasco da Gama", "Mapusa", "Ponda"],
  Gujarat: ["Ahmedabad", "Surat", "Vadodara", "Rajkot", "Gandhinagar", "Bhavnagar", "Jamnagar", "Junagadh"],
  Haryana: ["Gurugram", "Faridabad", "Hisar", "Panipat", "Ambala", "Karnal", "Rohtak"],
  "Himachal Pradesh": ["Shimla", "Mandi", "Dharamshala", "Solan", "Kullu", "Hamirpur"],
  Jharkhand: ["Ranchi", "Jamshedpur", "Dhanbad", "Bokaro", "Hazaribagh", "Deoghar"],
  Karnataka: ["Bangalore", "Mysore", "Hubli", "Mangalore", "Belgaum", "Gulbarga", "Davanagere", "Shimoga"],
  Kerala: ["Thiruvananthapuram", "Kochi", "Kozhikode", "Thrissur", "Kollam", "Alappuzha", "Palakkad"],
  "Madhya Pradesh": ["Bhopal", "Indore", "Jabalpur", "Gwalior", "Ujjain", "Sagar", "Dewas", "Satna"],
  Maharashtra: ["Mumbai", "Pune", "Nagpur", "Thane", "Nashik", "Aurangabad", "Solapur", "Kolhapur"],
  Manipur: ["Imphal", "Thoubal", "Bishnupur", "Churachandpur", "Ukhrul"],
  Meghalaya: ["Shillong", "Tura", "Jowai", "Nongpoh", "Baghmara"],
  Mizoram: ["Aizawl", "Lunglei", "Champhai", "Saiha", "Kolasib"],
  Nagaland: ["Kohima", "Dimapur", "Mokokchung", "Tuensang", "Wokha"],
  Odisha: ["Bhubaneswar", "Cuttack", "Rourkela", "Berhampur", "Sambalpur", "Puri"],
  Punjab: ["Ludhiana", "Amritsar", "Jalandhar", "Patiala", "Bathinda", "Mohali"],
  Rajasthan: ["Jaipur", "Jodhpur", "Udaipur", "Kota", "Ajmer", "Bikaner", "Alwar", "Sikar"],
  Sikkim: ["Gangtok", "Namchi", "Mangan", "Gyalshing", "Rangpo"],
  "Tamil Nadu": ["Chennai", "Coimbatore", "Madurai", "Tiruchirappalli", "Salem", "Tirunelveli", "Vellore", "Erode"],
  Telangana: ["Hyderabad", "Warangal", "Nizamabad", "Karimnagar", "Khammam", "Ramagundam"],
  Tripura: ["Agartala", "Udaipur", "Dharmanagar", "Kailashahar", "Belonia"],
  "Uttar Pradesh": ["Lucknow", "Kanpur", "Agra", "Varanasi", "Allahabad", "Ghaziabad", "Noida", "Meerut"],
  Uttarakhand: ["Dehradun", "Haridwar", "Roorkee", "Haldwani", "Rudrapur", "Kashipur"],
  "West Bengal": ["Kolkata", "Howrah", "Durgapur", "Asansol", "Siliguri", "Burdwan", "Malda"],
  Delhi: ["New Delhi", "North Delhi", "South Delhi", "East Delhi", "West Delhi", "Central Delhi"],
}

// Default cities for states not in the list
const defaultCities = ["Select State First"]

export default function LocationSetupPage() {
  // Add at the top of the component function
  useEffect(() => {
    // Preload form data
    const preloadData = async () => {
      // Simulate preloading resources - make this faster
      await new Promise((resolve) => setTimeout(resolve, 10))
    }

    preloadData()
  }, [])

  const [state, setState] = useState("")
  const [city, setCity] = useState("")
  const [address, setAddress] = useState("")
  const [pincode, setPincode] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [mapVisible, setMapVisible] = useState(false)

  const handleStateChange = (value: string) => {
    setState(value)
    setCity("")
    setMapVisible(false)
  }

  const handleCityChange = (value: string) => {
    setCity(value)
    setMapVisible(true)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Save location to localStorage
    try {
      const locationData = {
        state,
        city,
        address,
        pincode,
        timestamp: new Date().toISOString(),
      }
      localStorage.setItem("userLocation", JSON.stringify(locationData))
    } catch (error) {
      console.error("Error saving location:", error)
    }

    // Redirect to dashboard immediately
    window.location.href = "/dashboard"
  }

  const handleUseCurrentLocation = () => {
    // In a real app, this would use the Geolocation API
    // For now, we'll simulate by selecting Tamil Nadu and Chennai
    setState("Tamil Nadu")
    setTimeout(() => {
      setCity("Chennai")
      setMapVisible(true)
    }, 100)
  }

  const availableCities = state && citiesByState[state] ? citiesByState[state] : defaultCities

  return (
    <div className="flex min-h-screen flex-col">
      <div className="flex min-h-screen flex-col items-center justify-center p-4 md:p-8 bg-gradient-to-b from-green-200 via-green-100 to-orange-50/30">
        <Link href="/" className="flex items-center gap-2 mb-8">
          <Utensils className="h-6 w-6 text-green-600" />
          <div className="flex flex-col">
            <span className="text-xl font-bold text-green-700 leading-tight">DAAN DATA</span>
            <span className="text-sm text-green-600 -mt-1">दान दाटा</span>
          </div>
        </Link>

        <Card className="w-full max-w-md border-green-100 shadow-lg bg-white">
          <CardHeader className="space-y-1 bg-gradient-to-r from-green-100 to-green-50 rounded-t-lg">
            <CardTitle className="text-2xl text-green-700">Set Your Location</CardTitle>
            <CardDescription>Help us connect you with food donations in your area</CardDescription>
          </CardHeader>
          <CardContent className="p-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="state">State</Label>
                <Select value={state} onValueChange={handleStateChange}>
                  <SelectTrigger id="state" className="border-green-200 focus:border-green-300 focus:ring-green-200">
                    <SelectValue placeholder="Select your state" />
                  </SelectTrigger>
                  <SelectContent>
                    {indianStates.map((stateName) => (
                      <SelectItem key={stateName} value={stateName}>
                        {stateName}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="city">City</Label>
                <Select value={city} onValueChange={handleCityChange} disabled={!state}>
                  <SelectTrigger id="city" className="border-green-200 focus:border-green-300 focus:ring-green-200">
                    <SelectValue placeholder="Select your city" />
                  </SelectTrigger>
                  <SelectContent>
                    {availableCities.map((cityName) => (
                      <SelectItem key={cityName} value={cityName}>
                        {cityName}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="address">Address (Optional)</Label>
                <Input
                  id="address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="Enter your street address"
                  className="border-green-200 focus:border-green-300 focus:ring-green-200"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="pincode">PIN Code (Optional)</Label>
                <Input
                  id="pincode"
                  value={pincode}
                  onChange={(e) => setPincode(e.target.value)}
                  placeholder="6-digit PIN code"
                  maxLength={6}
                  className="border-green-200 focus:border-green-300 focus:ring-green-200"
                />
              </div>

              <div className="relative border border-green-200 rounded-md p-4 mt-6 bg-green-50/50">
                <div className="absolute -top-3 left-3 bg-white px-2 text-sm font-medium text-green-600">
                  Map Location
                </div>
                <div className="h-48 bg-green-50 rounded flex items-center justify-center">
                  {mapVisible ? (
                    <div className="w-full h-full relative">
                      <div className="absolute inset-0 bg-green-100 rounded-sm">
                        <div className="w-full h-full flex items-center justify-center">
                          <div className="text-center">
                            <MapPin className="h-8 w-8 text-green-600 mx-auto animate-bounce" />
                            <p className="text-sm font-medium text-green-700 mt-2">
                              {city}, {state}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="text-center">
                      <MapPin className="h-8 w-8 text-green-600 mx-auto mb-2" />
                      <p className="text-sm text-gray-500">
                        {state && city ? `${city}, ${state}` : "Select location to view map"}
                      </p>
                      <Button
                        type="button"
                        variant="outline"
                        size="sm"
                        className="mt-2 border-green-200 text-green-600 hover:bg-green-50"
                        onClick={handleUseCurrentLocation}
                      >
                        <Search className="h-4 w-4 mr-1" /> Use Current Location
                      </Button>
                    </div>
                  )}
                </div>
              </div>

              <Button
                type="submit"
                className="w-full bg-orange-500 hover:bg-orange-600"
                disabled={isLoading || !state || !city}
              >
                {isLoading ? "Setting Location..." : "Continue"}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </CardContent>
          <CardFooter className="flex flex-col items-center gap-2 bg-green-50/50 rounded-b-lg">
            <div className="text-sm text-gray-500">
              You can update your location anytime from your profile settings.
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}

