// Utility functions for exporting the project data

/**
 * Creates a downloadable JSON file with the project data
 */
export function exportProjectData(filename = "daan-data-export.json") {
  try {
    // Gather all data from localStorage
    const data = {
      donations: localStorage.getItem("donations") ? JSON.parse(localStorage.getItem("donations") || "[]") : [],
      userLocation: localStorage.getItem("userLocation")
        ? JSON.parse(localStorage.getItem("userLocation") || "{}")
        : null,
      userData: localStorage.getItem("userData") ? JSON.parse(localStorage.getItem("userData") || "{}") : null,
      exportDate: new Date().toISOString(),
    }

    // Convert to JSON string
    const jsonString = JSON.stringify(data, null, 2)

    // Create blob
    const blob = new Blob([jsonString], { type: "application/json" })

    // Create download link
    const url = URL.createObjectURL(blob)
    const link = document.createElement("a")
    link.href = url
    link.download = filename

    // Click the link to trigger download
    document.body.appendChild(link)
    link.click()

    // Clean up
    document.body.removeChild(link)
    URL.revokeObjectURL(url)

    return true
  } catch (error) {
    console.error("Error exporting data:", error)
    return false
  }
}

/**
 * Imports project data from a JSON file
 */
export function importProjectData(jsonData: string): boolean {
  try {
    const data = JSON.parse(jsonData)

    // Validate the data structure
    if (!data) {
      throw new Error("Invalid data format")
    }

    // Import donations
    if (data.donations && Array.isArray(data.donations)) {
      localStorage.setItem("donations", JSON.stringify(data.donations))
    }

    // Import user location
    if (data.userLocation) {
      localStorage.setItem("userLocation", JSON.stringify(data.userLocation))
    }

    // Import user data
    if (data.userData) {
      localStorage.setItem("userData", JSON.stringify(data.userData))
    }

    return true
  } catch (error) {
    console.error("Error importing data:", error)
    return false
  }
}

/**
 * Clears all project data from localStorage
 */
export function clearProjectData(): boolean {
  try {
    localStorage.removeItem("donations")
    localStorage.removeItem("userLocation")
    localStorage.removeItem("userData")
    return true
  } catch (error) {
    console.error("Error clearing data:", error)
    return false
  }
}

/**
 * Initializes the application on first load
 */
export function initializeApplication() {
  // Import the store functions
  import("@/lib/store").then((store) => {
    // Initialize the store with sample data if needed
    store.initializeStore()
  })
}

