"use client"

import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { services } from "@/lib/data/services"
import { Testimonials } from "@/components/sections/Testimonials"
import { CTA } from "@/components/sections/CTA"
import { Stats } from "@/components/sections/Stats"
import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, CheckCircle } from "lucide-react"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Digital Marketing Services | Pearl Lemon",
    description: "Comprehensive digital marketing services including SEO, PPC, content marketing, lead generation, web design, and video marketing.",
}

export default function ServicesPage() {
    const companyStats = [
        { label: "Happy Clients", value: "500+", suffix: "+" },
        { label: "Projects Delivered", value: "1200+", suffix: "+" },
        { label: "Team Members", value: "50+", suffix: "+" },
        { label: "Countries Served", value: "25+", suffix: "+" },
    ]

    return (
        <main className="min-h-screen bg-white">
            <Header />

            {/* Hero */}
            <section className="py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
                <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-brand-yellow/10 rounded-full blur-3xl -z-10" />
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-yellow/5 rounded-full blur-3xl -z-10" />

                <div className="container">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="space-y-6"
                        >
                            <div className="inline-block px-4 py-2 rounded-full bg-brand-yellow/20 text-brand-black text-sm font-bold tracking-wide">
                                FULL-SERVICE AGENCY
                            </div>
                            <h1 className="text-4xl md:text-6xl font-bold font-heading leading-tight text-brand-black">
                                Digital Marketing Services That{" "}
                                <span className="text-brand-yellow">Drive Results</span>
                            </h1>
                            <p className="text-xl text-gray-600 leading-relaxed">
                                From SEO and PPC to content marketing and web design, we offer comprehensive solutions to help your business grow online.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link
                                    href="/contact"
                                    className="inline-flex items-center justify-center h-14 px-8 bg-brand-yellow text-brand-black font-bold rounded-lg hover:bg-yellow-400 transition-colors group"
                                >
                                    Get Started Today
                                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                                </Link>
                                <Link
                                    href="/case-studies"
                                    className="inline-flex items-center justify-center h-14 px-8 border-2 border-brand-black text-brand-black font-bold rounded-lg hover:bg-brand-black hover:text-white transition-colors"
                                >
                                    View Case Studies
                                </Link>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 }}
                            className="relative"
                        >
                            <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                                <img
                                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800"
                                    alt="Team collaboration"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-tr from-brand-yellow/20 to-transparent" />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Stats */}
            <Stats stats={companyStats} />

            {/* Services Grid */}
            <section className="py-24 container">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold font-heading mb-4">
                        Our <span className="text-brand-yellow">Services</span>
                    </h2>
                    <p className="text-gray-600 text-lg">
                        Comprehensive digital marketing solutions tailored to your business goals. Choose individual services or a complete growth package.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => {
                        const Icon = service.icon
                        return (
                            <motion.div
                                key={service.slug}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <Link href={`/services/${service.slug}`}>
                                    <div className="group h-full bg-white border border-gray-100 rounded-2xl p-8 hover:shadow-xl hover:border-brand-yellow transition-all duration-300 hover:-translate-y-2">
                                        {/* Icon */}
                                        <div className="w-16 h-16 bg-brand-yellow/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand-yellow transition-colors">
                                            <Icon className="w-8 h-8 text-brand-yellow group-hover:text-brand-black transition-colors" />
                                        </div>

                                        {/* Content */}
                                        <h3 className="text-2xl font-bold font-heading mb-4 text-brand-black group-hover:text-brand-yellow transition-colors">
                                            {service.title}
                                        </h3>
                                        <p className="text-gray-600 leading-relaxed mb-6">
                                            {service.shortDescription}
                                        </p>

                                        {/* Learn More Link */}
                                        <div className="flex items-center text-brand-yellow font-medium group-hover:gap-2 transition-all">
                                            Learn More
                                            <ArrowRight size={16} className="ml-2" />
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>
                        )
                    })}
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-24 bg-gray-50">
                <div className="container">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold font-heading mb-4">
                            Why Choose <span className="text-brand-yellow">Pearl Lemon</span>
                        </h2>
                        <p className="text-gray-600 text-lg">
                            We're not just another digital marketing agency. Here's what sets us apart.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        {[
                            {
                                title: "Data-Driven Strategies",
                                description: "Every decision is backed by data and analytics. We don't guess—we test, measure, and optimize.",
                            },
                            {
                                title: "Transparent Reporting",
                                description: "Monthly reports with clear metrics and insights. You'll always know exactly how your campaigns are performing.",
                            },
                            {
                                title: "Experienced Team",
                                description: "Our team has delivered results for Fortune 500 companies and fast-growing startups across 25+ countries.",
                            },
                            {
                                title: "Custom Solutions",
                                description: "No cookie-cutter approaches. Every strategy is tailored to your unique business goals and market position.",
                            },
                            {
                                title: "ROI Focused",
                                description: "We obsess over your return on investment. Our goal is to make you more money than you spend with us.",
                            },
                            {
                                title: "Ongoing Optimization",
                                description: "Digital marketing isn't set-it-and-forget-it. We continuously refine and improve your campaigns.",
                            },
                        ].map((benefit, index) => (
                            <motion.div
                                key={benefit.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="flex gap-4 bg-white p-6 rounded-xl shadow-sm"
                            >
                                <CheckCircle className="w-6 h-6 text-brand-yellow shrink-0 mt-1" />
                                <div>
                                    <h3 className="text-xl font-bold font-heading text-brand-black mb-2">
                                        {benefit.title}
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <Testimonials />

            {/* CTA */}
            <CTA
                variant="gradient"
                title="Ready to Transform Your Marketing?"
                description="Let's discuss your business goals and create a custom strategy to help you achieve them."
                buttonText="Schedule Free Consultation"
            />

            <Footer />
        </main>
    )
}
