"use client"

import { Button } from "@/components/ui/button";
import { Sun, Moon, Snowflake } from "lucide-react";
import { useTheme } from "next-themes"
export default function Header() {
    const { theme, setTheme } = useTheme()

    return (
        <div className="h-16 w-full flex justify-center items-center">
            <div className="flex justify-between max-w-7xl w-full">
                <div className="flex gap-2 items-center">
                    <Snowflake size={32} />
                    <h1 className="text-xl font-bold">Stop the Grinch!</h1>
                </div>
                <Button size="icon" onClick={() => setTheme(theme == "dark" ? "light" : "dark")} className="h-12 w-12" variant="ghost">
                    {theme == "dark" ? (<Sun size={32} />) : (<Moon size={32} />)}
                </Button>

            </div>
        </div>
    )
}