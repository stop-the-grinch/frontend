
import "./globals.css";
import Header from "./header";
import { ThemeProvider } from "@/components/ui/theme-provider"
import { Source_Code_Pro } from 'next/font/google'
import { Toaster } from "@/components/ui/toaster"
import PageWrapper from "./page-wrapper";

// font instance
const sourceCodePro = Source_Code_Pro({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-sourcecodepro',
})

export const metadata = {
    title: "Stop the Grinch!",
    description: "Save Christmas by stopping the Grinch!",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={`${sourceCodePro.variable} font-mono`}>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                >
                    <PageWrapper>
                        {children}
                    </PageWrapper>

                </ThemeProvider>
                <Toaster />
            </body>
        </html>
    );
}
