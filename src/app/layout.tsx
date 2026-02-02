import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google"; // Import standard fonts
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export const metadata: Metadata = {
    title: "Pearl Lemon Clone - Award Winning SEO Agency London",
    description: "Pearl Lemon is an award-winning SEO Agency in London. We maintain over 300+ 5-star reviews and guarantee results.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={cn(inter.variable, outfit.variable, "antialiased font-sans bg-white text-slate-900")}>
                {children}
            </body>
        </html>
    );
}
