"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Utensils, Clock, Calendar, Camera, Plus, ArrowRight, X } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { InfoIcon } from "lucide-react"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import Image from "next/image"
import { saveDonation, getUserLocation, type DonationPhoto, type Donation } from "@/lib/store"

export default function DonatePage() {
  // Add at the top of the component function
  useEffect(() => {
    // Preload form data
    const preloadData = async () => {
      // Simulate preloading resources - make this faster
      await new Promise((resolve) => setTimeout(resolve, 10))
      setLoading(false)
    }

    preloadData()
  }, [])

  // Add this state
  const [loading, setLoading] = useState(true)

  const [formData, setFormData] = useState({
    foodType: "",
    quantity: "",
    servings: "",
    expiry: "",
    pickupTime: "",
    description: "",
    pickupType: "self",
    location: {
      state: "",
      city: "",
    },
  })

  const [photos, setPhotos] = useState<DonationPhoto[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [savedDonation, setSavedDonation] = useState<Donation | null>(null)

  // Load user location from localStorage on mount
  useEffect(() => {
    try {
      const location = getUserLocation()
      if (location) {
        setFormData((prev) => ({
          ...prev,
          location: {
            state: location.state || "",
            city: location.city || "",
          },
        }))
      }
    } catch (error) {
      console.error("Error loading location:", error)
    }
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleLocationChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      location: {
        ...prev.location,
        [field]: value,
      },
    }))
  }

  const handleRadioChange = (value: string) => {
    setFormData((prev) => ({ ...prev, pickupType: value }))
  }

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0]
      const reader = new FileReader()

      reader.onloadend = () => {
        setPhotos((prev) => [...prev, reader.result as string])
      }

      reader.readAsDataURL(file)
    }
  }

  const removePhoto = (index: number) => {
    setPhotos((prev) => prev.filter((_, i) => i !== index))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Create donation object with all data
    const donationData: Partial<Donation> = {
      ...formData,
      photos,
      status: "Available",
    }

    // Save to localStorage
    const result = saveDonation(donationData)

    // Show success after a short delay
    setTimeout(() => {
      setIsLoading(false)
      setSavedDonation(result)
      setSuccess(true)
    }, 1000)
  }

  // Add a conditional rendering at the beginning of the return statement
  if (loading) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-green-100 to-white">
        <div className="flex flex-col items-center gap-4">
          <Utensils className="h-12 w-12 text-green-600 animate-pulse" />
          <div className="text-xl font-bold text-green-700">Loading donation form...</div>
        </div>
      </div>
    )
  }

  if (success) {
    return (
      <div className="flex min-h-screen flex-col">
        <div className="flex min-h-screen flex-col items-center justify-center p-4 md:p-8 bg-gradient-to-b from-green-50 to-white">
          <Link href="/" className="flex items-center gap-2 mb-8">
            <Utensils className="h-6 w-6 text-green-600" />
            <div className="flex flex-col">
              <span className="text-xl font-bold text-green-700 leading-tight">DAAN DATA</span>
              <span className="text-sm text-green-600 -mt-1">दान दाटा</span>
            </div>
          </Link>

          <Card className="w-full max-w-md border-green-100">
            <CardHeader className="space-y-1">
              <CardTitle className="text-2xl text-green-700">Donation Listed Successfully!</CardTitle>
              <CardDescription>
                Your food donation has been listed and is now visible to recipients in your area.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col items-center justify-center py-8">
              <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-4">
                <svg className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="text-center text-gray-600 mb-6">
                Thank you for your generosity! You'll be notified when someone requests your donation.
              </p>

              {savedDonation && (
                <div className="w-full mb-6 p-4 bg-green-50 rounded-lg border border-green-100">
                  <h3 className="font-medium text-green-700 mb-2">Donation Details:</h3>
                  <p className="text-sm text-gray-600">
                    <span className="font-medium">Food Type:</span> {savedDonation.foodType}
                  </p>
                  <p className="text-sm text-gray-600">
                    <span className="font-medium">Quantity:</span> {savedDonation.quantity}
                  </p>
                  <p className="text-sm text-gray-600">
                    <span className="font-medium">Location:</span> {savedDonation.location.city},{" "}
                    {savedDonation.location.state}
                  </p>
                </div>
              )}

              <div className="flex flex-col gap-2 w-full">
                <Link href="/dashboard">
                  <Button className="w-full bg-green-600 hover:bg-green-700">Go to Dashboard</Button>
                </Link>
                <Link href="/donate">
                  <Button variant="outline" className="w-full border-green-200 text-green-600 hover:bg-green-50">
                    Create Another Donation
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  return (
    <div className="flex min-h-screen flex-col">
      <div className="flex min-h-screen flex-col items-center justify-center p-4 md:p-8 bg-gradient-to-b from-green-100 via-green-50 to-orange-50/20">
        <Link href="/" className="flex items-center gap-2 mb-8">
          <Utensils className="h-6 w-6 text-green-600" />
          <div className="flex flex-col">
            <span className="text-xl font-bold text-green-700 leading-tight">DAAN DATA</span>
            <span className="text-sm text-green-600 -mt-1">दान दाटा</span>
          </div>
        </Link>

        <Card className="w-full max-w-md border-green-100 shadow-lg bg-white">
          <CardHeader className="space-y-1 bg-gradient-to-r from-green-50 to-green-100 rounded-t-lg">
            <CardTitle className="text-2xl text-green-700">Donate Food</CardTitle>
            <CardDescription>Share your surplus food with those who need it</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="foodType">Food Type</Label>
                <Select
                  value={formData.foodType}
                  onValueChange={(value) => handleSelectChange("foodType", value)}
                  required
                >
                  <SelectTrigger id="foodType" className="border-green-200 focus:border-green-300 focus:ring-green-200">
                    <SelectValue placeholder="Select food type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="cooked">Cooked Food</SelectItem>
                    <SelectItem value="packaged">Packaged Food</SelectItem>
                    <SelectItem value="groceries">Groceries</SelectItem>
                    <SelectItem value="fruits">Fruits & Vegetables</SelectItem>
                    <SelectItem value="bakery">Bakery Items</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="quantity">Quantity</Label>
                  <Input
                    id="quantity"
                    name="quantity"
                    placeholder="e.g., 2 kg, 5 boxes"
                    value={formData.quantity}
                    onChange={handleChange}
                    required
                    className="border-green-200 focus:border-green-300 focus:ring-green-200"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="servings">Servings (approx.)</Label>
                  <Input
                    id="servings"
                    name="servings"
                    placeholder="e.g., 4-5 people"
                    value={formData.servings}
                    onChange={handleChange}
                    required
                    className="border-green-200 focus:border-green-300 focus:ring-green-200"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="expiry">Best Before</Label>
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-2 text-green-600" />
                    <Input
                      id="expiry"
                      name="expiry"
                      type="date"
                      value={formData.expiry}
                      onChange={handleChange}
                      required
                      className="border-green-200 focus:border-green-300 focus:ring-green-200"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="pickupTime">Pickup Time</Label>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-2 text-green-600" />
                    <Input
                      id="pickupTime"
                      name="pickupTime"
                      type="time"
                      value={formData.pickupTime}
                      onChange={handleChange}
                      required
                      className="border-green-200 focus:border-green-300 focus:ring-green-200"
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <Label>Location</Label>
                <div className="grid grid-cols-2 gap-4">
                  <Select
                    value={formData.location.state}
                    onValueChange={(value) => handleLocationChange("state", value)}
                    required
                  >
                    <SelectTrigger className="border-green-200 focus:border-green-300 focus:ring-green-200">
                      <SelectValue placeholder="Select state" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Maharashtra">Maharashtra</SelectItem>
                      <SelectItem value="Delhi">Delhi</SelectItem>
                      <SelectItem value="Karnataka">Karnataka</SelectItem>
                      <SelectItem value="Tamil Nadu">Tamil Nadu</SelectItem>
                      <SelectItem value="Gujarat">Gujarat</SelectItem>
                    </SelectContent>
                  </Select>

                  <Select
                    value={formData.location.city}
                    onValueChange={(value) => handleLocationChange("city", value)}
                    required
                  >
                    <SelectTrigger className="border-green-200 focus:border-green-300 focus:ring-green-200">
                      <SelectValue placeholder="Select city" />
                    </SelectTrigger>
                    <SelectContent>
                      {formData.location.state === "Maharashtra" && (
                        <>
                          <SelectItem value="Mumbai">Mumbai</SelectItem>
                          <SelectItem value="Pune">Pune</SelectItem>
                          <SelectItem value="Nagpur">Nagpur</SelectItem>
                        </>
                      )}
                      {formData.location.state === "Delhi" && (
                        <>
                          <SelectItem value="New Delhi">New Delhi</SelectItem>
                          <SelectItem value="North Delhi">North Delhi</SelectItem>
                          <SelectItem value="South Delhi">South Delhi</SelectItem>
                        </>
                      )}
                      {formData.location.state === "Karnataka" && (
                        <>
                          <SelectItem value="Bangalore">Bangalore</SelectItem>
                          <SelectItem value="Mysore">Mysore</SelectItem>
                          <SelectItem value="Hubli">Hubli</SelectItem>
                        </>
                      )}
                      {formData.location.state === "Tamil Nadu" && (
                        <>
                          <SelectItem value="Chennai">Chennai</SelectItem>
                          <SelectItem value="Coimbatore">Coimbatore</SelectItem>
                          <SelectItem value="Madurai">Madurai</SelectItem>
                        </>
                      )}
                      {formData.location.state === "Gujarat" && (
                        <>
                          <SelectItem value="Ahmedabad">Ahmedabad</SelectItem>
                          <SelectItem value="Surat">Surat</SelectItem>
                          <SelectItem value="Vadodara">Vadodara</SelectItem>
                        </>
                      )}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  name="description"
                  placeholder="Describe the food you're donating (e.g., homemade dal and rice, packaged biscuits, etc.)"
                  value={formData.description}
                  onChange={handleChange}
                  className="border-green-200 focus:border-green-300 focus:ring-green-200"
                  rows={3}
                />
              </div>

              {/* Image placeholder - Add food donation image here */}
              <div className="border-2 border-dashed border-green-200 rounded-lg p-4 text-center my-4 bg-green-50/50">
                <Camera className="h-12 w-12 text-green-400 mx-auto mb-2" />
                <p className="text-sm text-green-600">Add food donation image here (600x400px recommended)</p>
              </div>

              <div className="space-y-2">
                <Label>Add Photos</Label>
                <div className="border border-dashed border-green-200 rounded-md p-4">
                  {photos.length > 0 ? (
                    <div className="grid grid-cols-2 gap-2 mb-4">
                      {photos.map((photo, index) => (
                        <div key={index} className="relative rounded-md overflow-hidden h-24">
                          <Image
                            src={photo || "/placeholder.svg"}
                            alt={`Food photo ${index + 1}`}
                            width={120}
                            height={96}
                            className="w-full h-full object-cover"
                          />
                          <button
                            type="button"
                            onClick={() => removePhoto(index)}
                            className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1"
                          >
                            <X className="h-3 w-3" />
                          </button>
                        </div>
                      ))}
                    </div>
                  ) : null}

                  <div className="text-center">
                    <label className="cursor-pointer flex flex-col items-center">
                      <Camera className="h-8 w-8 text-green-600 mx-auto mb-2" />
                      <p className="text-sm text-gray-500">Click to add photos of the food</p>
                      <Button
                        type="button"
                        variant="outline"
                        size="sm"
                        className="mt-2 border-green-200 text-green-600 hover:bg-green-50"
                      >
                        <Plus className="h-4 w-4 mr-1" /> Add Photos
                      </Button>
                      <input type="file" accept="image/*" className="hidden" onChange={handlePhotoUpload} />
                    </label>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <Label>Pickup Options</Label>
                <RadioGroup
                  defaultValue={formData.pickupType}
                  onValueChange={handleRadioChange}
                  className="flex flex-col space-y-1"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="self" id="self" className="text-green-600" />
                    <Label htmlFor="self" className="font-normal">
                      Self Pickup (Recipient will come to your location)
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="delivery" id="delivery" className="text-green-600" />
                    <Label htmlFor="delivery" className="font-normal">
                      I can deliver (Within 2 km radius)
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="volunteer" id="volunteer" className="text-green-600" />
                    <Label htmlFor="volunteer" className="font-normal">
                      Request Volunteer Courier
                    </Label>
                  </div>
                </RadioGroup>
              </div>

              <Alert className="bg-green-50 border-green-200">
                <InfoIcon className="h-4 w-4 text-green-600" />
                <AlertDescription>Please ensure the food is safe, fresh, and properly packaged.</AlertDescription>
              </Alert>

              <Button type="submit" className="w-full bg-orange-500 hover:bg-orange-600" disabled={isLoading}>
                {isLoading ? "Creating Donation..." : "Create Donation"}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

