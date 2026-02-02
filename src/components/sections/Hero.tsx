"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import Image from "next/image"
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
                        AWARD WINNING SEO AGENCY
                    </div>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-heading leading-tight text-brand-black">
                        Grow Your Business With <span className="text-brand-yellow">GrowBiz</span>
                    </h1>
                    <p className="text-lg md:text-xl text-gray-600 max-w-lg leading-relaxed">
                        We are a globally remote team of SEO experts, content creators, and digital strategists dedicated to doubling your traffic.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                        <a
                            href="https://wa.me/917003104443?text=Hi, I'd like to book a call with GrowBiz"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Button size="lg" className="text-base h-12 px-8">
                                Book A Call
                            </Button>
                        </a>
                        <Link href="/case-studies">
                            <Button variant="outline" size="lg" className="text-base h-12 px-8">
                                View Case Studies
                            </Button>
                        </Link>
                    </div>

                    <div className="pt-8 flex items-center gap-4 text-sm font-medium text-gray-500">
                        <div className="flex -space-x-2">
                            <img
                                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=faces"
                                alt="Client"
                                className="w-10 h-10 rounded-full border-2 border-white object-cover"
                            />
                            <img
                                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&h=100&fit=crop&crop=faces"
                                alt="Client"
                                className="w-10 h-10 rounded-full border-2 border-white object-cover"
                            />
                            <img
                                src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop&crop=faces"
                                alt="Client"
                                className="w-10 h-10 rounded-full border-2 border-white object-cover"
                            />
                            <img
                                src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop&crop=faces"
                                alt="Client"
                                className="w-10 h-10 rounded-full border-2 border-white object-cover"
                            />
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
                    {/* Office Image */}
                    <div className="relative w-full aspect-square md:aspect-auto md:h-full rounded-3xl overflow-hidden shadow-2xl">
                        <Image
                            src="/office-hero.jpg"
                            alt="GrowBiz Marketing Agency Office"
                            fill
                            className="object-cover"
                            priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-tr from-brand-yellow/10 to-transparent mix-blend-overlay z-10" />
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
