// Types
export type DonationPhoto = string

export type DonationStatus = "Available" | "Requested" | "Completed" | "Expired"

export type Donation = {
  id: number
  foodType: string
  quantity: string
  servings: string
  expiry: string
  pickupTime: string
  description: string
  photos: DonationPhoto[]
  status: DonationStatus
  location: {
    state: string
    city: string
  }
  recipientId?: string
  createdAt?: string
}

// Helper to get a unique ID
const getNextId = (): number => {
  try {
    const donations = getAllDonations()
    return donations.length > 0 ? Math.max(...donations.map((d) => d.id)) + 1 : 1
  } catch (error) {
    return 1
  }
}

// Save user location
export const saveUserLocation = (location: { state: string; city: string; address?: string; pincode?: string }) => {
  try {
    localStorage.setItem("userLocation", JSON.stringify(location))
    return true
  } catch (error) {
    console.error("Error saving location:", error)
    return false
  }
}

// Get user location
export const getUserLocation = () => {
  try {
    const location = localStorage.getItem("userLocation")
    return location ? JSON.parse(location) : null
  } catch (error) {
    console.error("Error getting location:", error)
    return null
  }
}

// Save a donation
export const saveDonation = (donationData: Partial<Donation>): Donation => {
  try {
    const donations = getAllDonations()

    const newDonation: Donation = {
      id: getNextId(),
      foodType: donationData.foodType || "",
      quantity: donationData.quantity || "",
      servings: donationData.servings || "",
      expiry: donationData.expiry || "",
      pickupTime: donationData.pickupTime || "",
      description: donationData.description || "",
      photos: donationData.photos || [],
      status: donationData.status || "Available",
      location: donationData.location || { state: "", city: "" },
      createdAt: new Date().toISOString(),
    }

    donations.push(newDonation)
    localStorage.setItem("donations", JSON.stringify(donations))

    return newDonation
  } catch (error) {
    console.error("Error saving donation:", error)

    // Return a fallback donation
    return {
      id: 1,
      foodType: donationData.foodType || "",
      quantity: donationData.quantity || "",
      servings: donationData.servings || "",
      expiry: donationData.expiry || "",
      pickupTime: donationData.pickupTime || "",
      description: donationData.description || "",
      photos: donationData.photos || [],
      status: "Available",
      location: donationData.location || { state: "", city: "" },
      createdAt: new Date().toISOString(),
    }
  }
}

// Get all donations
export const getAllDonations = (): Donation[] => {
  try {
    const donations = localStorage.getItem("donations")
    return donations ? JSON.parse(donations) : []
  } catch (error) {
    console.error("Error getting donations:", error)
    return []
  }
}

// Get a donation by ID
export const getDonationById = (id: number): Donation | null => {
  try {
    const donations = getAllDonations()
    return donations.find((d) => d.id === id) || null
  } catch (error) {
    console.error("Error getting donation:", error)
    return null
  }
}

// Request a donation
export const requestDonation = (id: number, recipientId: string): boolean => {
  try {
    const donations = getAllDonations()
    const index = donations.findIndex((d) => d.id === id)

    if (index === -1) return false

    donations[index].status = "Requested"
    donations[index].recipientId = recipientId

    localStorage.setItem("donations", JSON.stringify(donations))
    return true
  } catch (error) {
    console.error("Error requesting donation:", error)
    return false
  }
}

// Get donations by user (donor or recipient)
export const getDonationsByUser = (userId: string, type: "donor" | "recipient"): Donation[] => {
  try {
    const donations = getAllDonations()

    if (type === "donor") {
      // In a real app, donations would have a donorId field
      // For now, we'll just return all donations as if they belong to the current user
      return donations
    } else {
      return donations.filter((d) => d.recipientId === userId)
    }
  } catch (error) {
    console.error("Error getting user donations:", error)
    return []
  }
}

// Initialize with sample data if empty
export const initializeStore = () => {
  try {
    const donations = getAllDonations()

    if (donations.length === 0) {
      const sampleDonations: Donation[] = [
        {
          id: 1,
          foodType: "cooked",
          quantity: "3 boxes",
          servings: "6 people",
          expiry: "2023-12-31",
          pickupTime: "18:00",
          description: "Freshly cooked vegetable curry and rice. Still hot and ready to eat.",
          photos: [],
          status: "Available",
          location: {
            state: "Tamil Nadu",
            city: "Chennai",
          },
          createdAt: new Date().toISOString(),
        },
        {
          id: 2,
          foodType: "packaged",
          quantity: "10 packets",
          servings: "10 people",
          expiry: "2024-01-15",
          pickupTime: "12:00",
          description: "Packaged biscuits and snacks from our store. Unopened and within expiry date.",
          photos: [],
          status: "Available",
          location: {
            state: "Maharashtra",
            city: "Mumbai",
          },
          createdAt: new Date().toISOString(),
        },
        {
          id: 3,
          foodType: "fruits",
          quantity: "5 kg",
          servings: "10-15 people",
          expiry: "2023-12-25",
          pickupTime: "09:00",
          description: "Fresh fruits including apples, oranges, and bananas. Perfect condition.",
          photos: [],
          status: "Available",
          location: {
            state: "Karnataka",
            city: "Bangalore",
          },
          createdAt: new Date().toISOString(),
        },
      ]

      localStorage.setItem("donations", JSON.stringify(sampleDonations))
    }
  } catch (error) {
    console.error("Error initializing store:", error)
  }
}

// Call initialize on import
initializeStore()

