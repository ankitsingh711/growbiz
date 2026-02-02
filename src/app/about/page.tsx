"use client"

import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { Stats } from "@/components/sections/Stats"
import { Testimonials } from "@/components/sections/Testimonials"
import { CTA } from "@/components/sections/CTA"
import { motion } from "framer-motion"
import Link from "next/link"
import { Award, Target, Users, Zap } from "lucide-react"


export default function AboutPage() {
    const companyStats = [
        { label: "Happy Clients", value: "500+", suffix: "+" },
        { label: "Projects Completed", value: "1200+", suffix: "+" },
        { label: "Team Members", value: "50+", suffix: "+" },
        { label: "Years of Excellence", value: "8+", suffix: "+" },
    ]

    const awards = [
        {
            year: "2024",
            title: "Best SEO Agency",
            organization: "Digital Marketing Awards",
        },
        {
            year: "2023",
            title: "Top 10 Content Marketing Agency",
            organization: "Content Marketing Institute",
        },
        {
            year: "2023",
            title: "Google Partner Premier",
            organization: "Google",
        },
        {
            year: "2022",
            title: "Best B2B Lead Generation",
            organization: "B2B Marketing Expo",
        },
    ]

    return (
        <main className="min-h-screen bg-white">
            <Header />

            {/* Hero */}
            <section className="py-24 bg-gradient-to-br from-brand-yellow via-yellow-400 to-brand-yellow relative overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-10 left-20 w-64 h-64 bg-white rounded-full blur-3xl" />
                    <div className="absolute bottom-10 right-20 w-96 h-96 bg-white rounded-full blur-3xl" />
                </div>

                <div className="container relative z-10">
                    <div className="max-w-4xl mx-auto text-center space-y-6">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="inline-block px-4 py-2 rounded-full bg-brand-black/10 text-brand-black text-sm font-bold tracking-wide mb-4"
                        >
                            ABOUT US
                        </motion.div>
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl md:text-6xl font-bold font-heading leading-tight text-brand-black"
                        >
                            We Help Businesses Dominate Their Markets
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-xl text-gray-700 max-w-2xl mx-auto"
                        >
                            Pearl Lemon is an award-winning digital marketing agency that's helped over 500 businesses worldwide achieve extraordinary growth through data-driven strategies and innovative marketing.
                        </motion.p>
                    </div>
                </div>
            </section>

            {/* Stats */}
            <Stats stats={companyStats} />

            {/* Our Story */}
            <section className="py-24 container">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        <h2 className="text-3xl md:text-5xl font-bold font-heading">
                            Our <span className="text-brand-yellow">Story</span>
                        </h2>
                        <div className="space-y-4 text-gray-600 leading-relaxed">
                            <p>
                                Founded in 2016 by Deepak Shukla, Pearl Lemon began as a one-person SEO consultancy with a simple mission: deliver transparent, results-driven marketing services that actually work.
                            </p>
                            <p>
                                What started in a London coffee shop has grown into a globally distributed team of 50+ digital marketing experts serving clients across 25 countries. But our core values haven't changed—we still obsess over ROI, believe in radical transparency, and treat every client's business like our own.
                            </p>
                            <p>
                                Today, Pearl Lemon is recognized as one of the leading SEO and digital marketing agencies, with awards from Google, SEMrush, and numerous industry publications. But we measure our success by yours—the businesses we've helped scale, the revenue we've generated, and the relationships we've built.
                            </p>
                        </div>
                        <Link
                            href="/meet-our-team"
                            className="inline-flex items-center justify-center h-12 px-6 bg-brand-yellow text-brand-black font-bold rounded-lg hover:bg-yellow-400 transition-colors"
                        >
                            Meet Our Team
                        </Link>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <img
                            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800"
                            alt="Team collaboration"
                            className="rounded-2xl shadow-2xl"
                        />
                        <div className="absolute inset-0 bg-gradient-to-tr from-brand-yellow/10 to-transparent rounded-2xl" />
                    </motion.div>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="py-24 bg-gray-50">
                <div className="container">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100"
                        >
                            <div className="w-16 h-16 bg-brand-yellow rounded-xl flex items-center justify-center mb-6">
                                <Target className="w-8 h-8 text-brand-black" />
                            </div>
                            <h3 className="text-2xl font-bold font-heading text-brand-black mb-4">
                                Our Mission
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                To empower businesses of all sizes with world-class digital marketing strategies that drive measurable growth. We believe every business deserves access to transparent, effective marketing—not just those with enterprise budgets.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100"
                        >
                            <div className="w-16 h-16 bg-brand-yellow rounded-xl flex items-center justify-center mb-6">
                                <Zap className="w-8 h-8 text-brand-black" />
                            </div>
                            <h3 className="text-2xl font-bold font-heading text-brand-black mb-4">
                                Our Vision
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                To become the most trusted digital marketing partner for ambitious businesses worldwide. We're building a future where marketing is data-driven, transparent, and accessible to everyone.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Core Values */}
            <section className="py-24 container">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold font-heading mb-4">
                        Our Core <span className="text-brand-yellow">Values</span>
                    </h2>
                    <p className="text-gray-600 text-lg">
                        These principles guide everything we do and shape how we serve our clients.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {[
                        {
                            icon: Users,
                            title: "Client-First",
                            description: "Your success is our success. We treat your business like our own and obsess over your ROI.",
                        },
                        {
                            icon: Target,
                            title: "Results-Driven",
                            description: "We're measured by outcomes, not activity. Every strategy is built to deliver measurable results.",
                        },
                        {
                            icon: Award,
                            title: "Transparency",
                            description: "No black boxes. You'll always know what we're doing, why we're doing it, and what results it's driving.",
                        },
                        {
                            icon: Zap,
                            title: "Innovation",
                            description: "Digital marketing evolves daily. We stay ahead by constantly testing, learning, and adapting.",
                        },
                    ].map((value, index) => {
                        const Icon = value.icon
                        return (
                            <motion.div
                                key={value.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="text-center space-y-4"
                            >
                                <div className="w-20 h-20 bg-brand-yellow/10 rounded-2xl flex items-center justify-center mx-auto">
                                    <Icon className="w-10 h-10 text-brand-yellow" />
                                </div>
                                <h3 className="text-xl font-bold font-heading text-brand-black">
                                    {value.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed">{value.description}</p>
                            </motion.div>
                        )
                    })}
                </div>
            </section>

            {/* Awards & Recognition */}
            <section className="py-24 bg-brand-black text-white">
                <div className="container">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold font-heading mb-4">
                            Awards & <span className="text-brand-yellow">Recognition</span>
                        </h2>
                        <p className="text-gray-400 text-lg">
                            Our work has been recognized by industry leaders and clients worldwide.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
                        {awards.map((award, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white/5 border border-white/10 p-6 rounded-xl text-center hover:bg-white/10 transition-colors"
                            >
                                <div className="w-12 h-12 bg-brand-yellow rounded-lg flex items-center justify-center mx-auto mb-4">
                                    <Award className="w-6 h-6 text-brand-black" />
                                </div>
                                <p className="text-brand-yellow font-bold text-lg mb-2">{award.year}</p>
                                <h3 className="font-bold text-white mb-2">{award.title}</h3>
                                <p className="text-sm text-gray-400">{award.organization}</p>
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
                title="Ready to Work With Us?"
                description="Join hundreds of businesses that trust Pearl Lemon to drive their digital growth."
                buttonText="Start Your Journey"
            />

            <Footer />
        </main>
    )
}
