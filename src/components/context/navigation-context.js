"use client";
import { createContext, useContext, useState } from 'react'

const NavigationContext = createContext()

export function NavigationProvider({ children }) {
  const [pendingCount, setPendingCount] = useState(0)
  const isPending = pendingCount > 0

  return (
    <NavigationContext.Provider value={{
      isPending,
      increment: () => setPendingCount(c => c + 1),
      decrement: () => setPendingCount(c => Math.max(0, c - 1))
    }}>
      {children}
    </NavigationContext.Provider>
  )
}

export const useNavigation = () => useContext(NavigationContext)