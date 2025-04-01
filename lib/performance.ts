/**
 * Performance optimization utilities
 */

// Preload critical resources
export const preloadResources = async () => {
  // Create a promise that resolves after a short delay
  // This is a placeholder for actual resource preloading
  return new Promise<void>((resolve) => {
    setTimeout(() => {
      resolve()
    }, 10)
  })
}

// Lazy load non-critical resources
export const lazyLoadResources = async () => {
  // This would be called after the page is rendered
  return new Promise<void>((resolve) => {
    // Use requestIdleCallback if available, otherwise use setTimeout
    if (typeof window !== "undefined" && "requestIdleCallback" in window) {
      ;(window as any).requestIdleCallback(() => {
        // Load non-critical resources here
        resolve()
      })
    } else {
      setTimeout(() => {
        // Load non-critical resources here
        resolve()
      }, 200)
    }
  })
}

// Cache data in memory to avoid repeated localStorage access
const memoryCache: Record<string, any> = {}

// Get data with memory caching
export const getCachedData = <T>(key: string, fallback: T): T => {
  if (memoryCache[key] !== undefined) {
    return memoryCache[key] as T;
  }
  
  try {
    const item = localStorage.getItem(key);
    if (item) {
      const data = JSON.parse(item) as T;memoryCache[key] = data;
      return data;
    }
  } catch (error) {
    console.error(`Error getting cached data for ${key}:`, error);
  }
  
  return fallback;
};

// Set data with memory caching
export const setCachedData = <T>(key: string, data: T): void => {
  try {
    memoryCache[key] = data;
    localStorage.setItem(key, JSON.stringify(data));
  } catch (error) {
    console.error(`Error setting cached data for ${key}:`, error);
  }
};

