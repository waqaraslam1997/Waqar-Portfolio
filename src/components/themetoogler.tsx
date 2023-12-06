'use client'

import { Button } from "./ui/button"
import { SunIcon, MoonIcon } from "@radix-ui/react-icons"
import { useTheme } from "next-themes"

const ThemeToogler = () => {
    const { theme, setTheme } = useTheme();
  return (
    <Button 
    variant="outline"
    size="icon"
    onClick={()=> setTheme ( theme === 'dark' ? 'light' : 'dark')}>
        <SunIcon className="h-5 w-5 rotate-0 scale-100 transition-all dark:rotat-90 dark:scale-0"/>
        <MoonIcon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotat-0 dark:scale-100"/>
    </Button>
  )
}

export default ThemeToogler