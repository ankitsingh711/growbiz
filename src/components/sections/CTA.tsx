"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

interface CTAProps {
    variant?: "default" | "dark" | "gradient"
    title?: string
    description?: string
    buttonText?: string
    buttonHref?: string
}

export function CTA({
    variant = "default",
    title = "Ready to Grow Your Business?",
    description = "Book a free consultation with our experts and discover how we can help you achieve your goals.",
    buttonText = "Book Free Consultation",
    buttonHref = "/contact",
}: CTAProps) {
    const variants = {
        default: "bg-brand-yellow",
        dark: "bg-brand-black text-white",
        gradient: "bg-gradient-to-r from-brand-yellow to-yellow-500",
    }

    return (
        <section className={`py-24 ${variants[variant]}`}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto text-center space-y-8"
                >
                    <h2
                        className={`text-3xl md:text-5xl font-bold font-heading ${variant === "dark" ? "text-white" : "text-brand-black"
                            }`}
                    >
                        {title}
                    </h2>
                    <p
                        className={`text-lg md:text-xl max-w-2xl mx-auto ${variant === "dark" ? "text-gray-300" : "text-gray-700"
                            }`}
                    >
                        {description}
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link href={buttonHref}>
                            <Button
                                size="lg"
                                className={`h-14 px-8 text-base font-bold group ${variant === "dark"
                                        ? "bg-brand-yellow text-brand-black hover:bg-white"
                                        : "bg-brand-black text-white hover:bg-gray-800"
                                    }`}
                            >
                                {buttonText}
                                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                            </Button>
                        </Link>
                        <Link href="/case-studies">
                            <Button
                                variant="outline"
                                size="lg"
                                className={`h-14 px-8 text-base ${variant === "dark"
                                        ? "border-white text-white hover:bg-white hover:text-brand-black"
                                        : "border-brand-black text-brand-black hover:bg-brand-black hover:text-white"
                                    }`}
                            >
                                View Case Studies
                            </Button>
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
