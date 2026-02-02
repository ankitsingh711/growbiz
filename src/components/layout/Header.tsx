"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"

import { siteConfig } from "@/lib/site-config"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

export function Header() {
    const [isScrolled, setIsScrolled] = React.useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)
    const pathname = usePathname()

    React.useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    // Close mobile menu on route change
    React.useEffect(() => {
        setIsMobileMenuOpen(false)
    }, [pathname])

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                isScrolled
                    ? "bg-white/80 backdrop-blur-md shadow-sm py-3"
                    : "bg-transparent py-5"
            )}
        >
            <div className="container flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 z-50 relative">
                    <div className="bg-brand-yellow w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold font-heading">
                        <Image
                            src="/logo.png"
                            alt="Logo"
                            width={24}
                            height={24}
                            className="w-6 h-6"
                        />
                    </div>
                    <span className={cn("font-heading font-bold text-xl tracking-tight", isScrolled ? "text-brand-black" : "text-brand-black")}>
                        GrowBiz
                    </span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {siteConfig.nav.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={cn(
                                "text-sm font-medium transition-colors hover:text-brand-yellow",
                                pathname === item.href ? "text-brand-yellow font-bold" : "text-brand-black"
                            )}
                        >
                            {item.title}
                        </Link>
                    ))}
                    <Button>Book a Call</Button>
                </nav>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden z-50 relative p-2"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Toggle menu"
                >
                    {isMobileMenuOpen ? (
                        <X className="w-6 h-6 text-brand-black" />
                    ) : (
                        <Menu className="w-6 h-6 text-brand-black" />
                    )}
                </button>

                {/* Mobile Nav Overlay */}
                <AnimatePresence>
                    {isMobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, x: "100%" }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: "100%" }}
                            transition={{ type: "spring", damping: 25, stiffness: 200 }}
                            className="fixed inset-0 bg-white z-40 flex flex-col items-center justify-center gap-8 md:hidden"
                        >
                            <nav className="flex flex-col items-center gap-6">
                                {siteConfig.nav.map((item) => (
                                    <Link
                                        key={item.href}
                                        href={item.href}
                                        className="text-2xl font-bold font-heading text-brand-black hover:text-brand-yellow transition-colors"
                                    >
                                        {item.title}
                                    </Link>
                                ))}
                                <Button size="lg" className="mt-4">
                                    Book a Call
                                </Button>
                            </nav>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </header>
    )
}
