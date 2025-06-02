"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@vectorcn/ui/components/button"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  return (
    <Button variant="ghost" size="icon" onClick={toggleTheme} className="rounded-none bg-background border cursor-pointer">
      <Sun
        className="h-[1.2rem] w-[1.2rem] dark:hidden"
      />
      <Moon
        className="hidden h-[1.2rem] w-[1.2rem] dark:block dark:text-white"
      />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}