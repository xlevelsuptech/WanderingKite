import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { MainNav } from "@/components/navigation/MainNav";
import { BookingFlyout } from "@/components/booking/BookingFlyout";

const inter = Inter({
    subsets: ["latin"],
    variable: '--font-inter',
});

export const metadata: Metadata = {
    title: "Wandering Kite Studio | Creative Infrastructure for Modern Creators",
    description: "Multi-disciplinary creative hub offering Photography, Camera Rentals, Studio Spaces, and Podcast Production in India.",
    keywords: ["photography studio", "camera rental", "studio rental", "podcast studio", "creative space India"],
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${inter.variable} font-sans antialiased bg-zinc-950 text-white`}>
                <MainNav />
                {children}
                <BookingFlyout />
            </body>
        </html>
    );
}
