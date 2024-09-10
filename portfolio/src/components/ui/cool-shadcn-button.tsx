"'use client'"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { useState } from "react"

export function CoolShadcnButton() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <Button
      className={cn(
        "relative overflow-hidden font-bold",
        "bg-gradient-to-r from-purple-500 to-pink-500",
        "hover:shadow-lg hover:scale-105",
        "transition-all duration-300 ease-in-out",
        "focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50"
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <span className="relative z-10">Click Me!</span>
      <span
        className={cn(
          "absolute inset-0 bg-gradient-to-r from-blue-500 to-teal-500",
          "transition-opacity duration-300 ease-in-out",
          isHovered ? "opacity-100" : "opacity-0"
        )}
      />
      <span className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 animate-pulse" />
    </Button>
  )
}