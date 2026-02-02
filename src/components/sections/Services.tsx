"use client"

import { motion } from "framer-motion"
import { ArrowRight, BarChart, Globe, Megaphone, PenTool, Search, Video } from "lucide-react"
import Link from "next/link"

const services = [
    {
        title: "SEO Services",
        description: "Rank higher on Google with our data-driven SEO strategies.",
        icon: Search,
        href: "/services/seo",
    },
    {
        title: "PPC Management",
        description: "Maximize your ROI with targeted paid advertising campaigns.",
        icon: BarChart,
        href: "/services/ppc",
    },
    {
        title: "Content Marketing",
        description: "Engage your audience with high-quality, SEO-optimized content.",
        icon: PenTool,
        href: "/services/content",
    },
    {
        title: "Lead Generation",
        description: "Fill your pipeline with high-quality B2B leads.",
        icon: Megaphone,
        href: "/services/lead-gen",
    },
    {
        title: "Web Design",
        description: "Convert visitors into customers with a stunning website.",
        icon: Globe,
        href: "/services/web-design",
    },
    {
        title: "Video Marketing",
        description: "Tell your story with compelling video content.",
        icon: Video,
        href: "/services/video",
    },
]

export function Services() {
    return (
        <section className="py-24 bg-brand-black text-white">
            <div className="container">
                <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
                    <h2 className="text-3xl md:text-5xl font-bold font-heading text-white">
                        Our <span className="text-brand-yellow">Expertise</span>
                    </h2>
                    <p className="text-gray-400 text-lg">
                        We provide comprehensive digital marketing solutions to help your business grow.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-colors relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                                <service.icon size={100} />
                            </div>

                            <div className="relative z-10 space-y-4">
                                <div className="w-12 h-12 bg-brand-yellow rounded-lg flex items-center justify-center text-brand-black">
                                    <service.icon size={24} />
                                </div>

                                <h3 className="text-2xl font-bold font-heading">{service.title}</h3>
                                <p className="text-gray-400 leading-relaxed">
                                    {service.description}
                                </p>

                                <Link href={service.href} className="inline-flex items-center text-brand-yellow font-medium mt-4 group-hover:gap-2 transition-all">
                                    Learn more <ArrowRight size={16} className="ml-2" />
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
