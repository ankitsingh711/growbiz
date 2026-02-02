"use client"

import { useState } from "react"
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { caseStudies } from "@/lib/data/case-studies"
import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, Calendar } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CTA } from "@/components/sections/CTA"


export default function CaseStudiesPage() {
    const categories = ["All", "SEO", "Video", "Written", "Lead Gen"]
    const [activeCategory, setActiveCategory] = useState("All")

    const filteredStudies =
        activeCategory === "All"
            ? caseStudies
            : caseStudies.filter((study) => study.category === activeCategory)

    return (
        <main className="min-h-screen bg-white">
            <Header />

            {/* Hero */}
            <section className="py-24 bg-gradient-to-br from-brand-black via-gray-900 to-brand-black text-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-20 left-10 w-72 h-72 bg-brand-yellow rounded-full blur-3xl" />
                    <div className="absolute bottom-20 right-10 w-96 h-96 bg-brand-yellow rounded-full blur-3xl" />
                </div>

                <div className="container relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="max-w-3xl mx-auto text-center space-y-6"
                    >
                        <div className="inline-block px-4 py-2 rounded-full bg-brand-yellow/20 text-brand-yellow text-sm font-bold tracking-wide mb-4">
                            SUCCESS STORIES
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold font-heading leading-tight">
                            Real Results for <span className="text-brand-yellow">Real Businesses</span>
                        </h1>
                        <p className="text-xl text-gray-300">
                            From startups to enterprises, see how we've helped businesses achieve remarkable growth through data-driven marketing strategies.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Filter Tabs & Case Studies Grid */}
            <section className="py-24 container">
                <Tabs defaultValue="All" className="w-full">
                    <div className="flex justify-center mb-12">
                        <TabsList>
                            {categories.map((category) => (
                                <TabsTrigger
                                    key={category}
                                    value={category}
                                    onClick={() => setActiveCategory(category)}
                                >
                                    {category}
                                </TabsTrigger>
                            ))}
                        </TabsList>
                    </div>

                    <TabsContent value={activeCategory}>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {filteredStudies.map((study, index) => (
                                <motion.div
                                    key={study.slug}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    <Link href={`/case-studies/${study.slug}`}>
                                        <div className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                                            {/* Thumbnail */}
                                            <div className="relative h-64 overflow-hidden">
                                                <img
                                                    src={study.thumbnail}
                                                    alt={study.title}
                                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                                                {/* Category Badge */}
                                                <div className="absolute top-4 left-4">
                                                    <span className="inline-block px-3 py-1 rounded-full bg-brand-yellow text-brand-black text-xs font-bold uppercase tracking-wider">
                                                        {study.category}
                                                    </span>
                                                </div>

                                                {/* Metrics */}
                                                {study.metrics && (
                                                    <div className="absolute bottom-4 left-4 right-4 flex gap-4">
                                                        {study.metrics.slice(0, 2).map((metric) => (
                                                            <div key={metric.label} className="text-white">
                                                                <p className="text-2xl font-bold">{metric.value}</p>
                                                                <p className="text-xs text-gray-300 uppercase tracking-wide">
                                                                    {metric.label}
                                                                </p>
                                                            </div>
                                                        ))}
                                                    </div>
                                                )}
                                            </div>

                                            {/* Content */}
                                            <div className="p-6 space-y-4">
                                                <h3 className="text-xl font-bold font-heading text-brand-black group-hover:text-brand-yellow transition-colors">
                                                    {study.title}
                                                </h3>
                                                <p className="text-gray-600 leading-relaxed line-clamp-2">
                                                    {study.summary}
                                                </p>
                                                <div className="flex items-center text-brand-yellow font-medium group-hover:gap-2 transition-all">
                                                    Read Case Study
                                                    <ArrowRight size={16} className="ml-2" />
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </motion.div>
                            ))}
                        </div>

                        {filteredStudies.length === 0 && (
                            <div className="text-center py-16">
                                <p className="text-gray-500 text-lg">No case studies found in this category.</p>
                            </div>
                        )}
                    </TabsContent>
                </Tabs>
            </section>

            {/* CTA */}
            <CTA
                variant="dark"
                title="Want Results Like These?"
                description="Let's discuss how we can help you achieve similar success. Book a free consultation with our team."
            />

            <Footer />
        </main>
    )
}
