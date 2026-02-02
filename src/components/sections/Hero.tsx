"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import Link from "next/link"

export function Hero() {
    return (
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-white pt-20">
            {/* Background Decorative Elements */}
            <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-brand-yellow/10 rounded-full blur-3xl -z-10" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-50 rounded-full blur-3xl -z-10" />

            <div className="container px-4 md:px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="space-y-6"
                >
                    <div className="inline-block px-3 py-1 rounded-full bg-brand-yellow/20 text-brand-black text-sm font-bold tracking-wide mb-2">
                        AWARD WINNING SEO AGENCY LONDON
                    </div>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-heading leading-tight text-brand-black">
                        Grow Your Business With <span className="text-brand-yellow">GrowBiz</span>
                    </h1>
                    <p className="text-lg md:text-xl text-gray-600 max-w-lg leading-relaxed">
                        We are a globally remote team of SEO experts, content creators, and digital strategists dedicated to doubling your traffic.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                        <Button size="lg" className="text-base h-12 px-8">
                            Book A Call
                        </Button>
                        <Button variant="outline" size="lg" className="text-base h-12 px-8">
                            View Case Studies
                        </Button>
                    </div>

                    <div className="pt-8 flex items-center gap-4 text-sm font-medium text-gray-500">
                        <div className="flex -space-x-2">
                            {[1, 2, 3, 4].map((i) => (
                                <div key={i} className="w-10 h-10 rounded-full bg-gray-200 border-2 border-white" />
                            ))}
                        </div>
                        <p>Trusted by 500+ Clients Worldwide</p>
                    </div>
                </motion.div>

                {/* Visual Content */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative lg:h-[600px] w-full flex items-center justify-center"
                >
                    {/* Placeholder for Hero Image - simulating the vibrant style */}
                    <div className="relative w-full aspect-square md:aspect-auto md:h-full rounded-3xl overflow-hidden bg-gray-100 shadow-2xl">
                        <div className="absolute inset-0 bg-gradient-to-tr from-brand-yellow/20 to-transparent mix-blend-overlay z-10" />
                        <div className="w-full h-full flex items-center justify-center bg-slate-50 text-gray-400">
                            [Hero Image Placeholder - Suggest replacing with vibrant team photo or 3D abstract]
                        </div>
                    </div>

                    {/* Floating Cards simulating success metrics */}
                    <motion.div
                        animate={{ y: [0, -20, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute -bottom-10 -left-10 bg-white p-6 rounded-xl shadow-xl border border-gray-100 hidden md:block"
                    >
                        <p className="text-3xl font-bold text-brand-black">2x</p>
                        <p className="text-sm text-gray-500">Traffic Growth</p>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}
