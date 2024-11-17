"use client";

import Snowfall from "react-snowfall";
import Header from "./header";
import { useTheme } from "next-themes";

export default function PageWrapper({ children }) {
    const { theme } = useTheme();

    return (
        <div className="relative w-full h-full flex flex-col items-center">
            <Header />
            <div className="w-full flex-1 flex flex-col max-w-7xl z-10">
                {children}
            </div>
            <Snowfall snowflakeCount={30}
                color={theme == "dark" ? "white" : "black"} />
        </div>

    );
}