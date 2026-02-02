"use client"

import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { teamMembers } from "@/lib/data/team"
import { motion } from "framer-motion"
import Link from "next/link"
import { Linkedin, Twitter, Mail } from "lucide-react"
import { CTA } from "@/components/sections/CTA"


export default function MeetOurTeamPage() {
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
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="max-w-3xl mx-auto text-center space-y-6"
                    >
                        <div className="inline-block px-4 py-2 rounded-full bg-brand-black/10 text-brand-black text-sm font-bold tracking-wide mb-4">
                            OUR TEAM
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold font-heading leading-tight text-brand-black">
                            Meet the Experts Behind Your Success
                        </h1>
                        <p className="text-xl text-gray-700">
                            A globally distributed team of SEO specialists, content creators, developers, and growth hackers dedicated to your success.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Team Grid */}
            <section className="py-24 container">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                    {teamMembers.map((member, index) => (
                        <motion.div
                            key={member.slug}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <Link href={`/team/${member.slug}`}>
                                <div className="group">
                                    {/* Image Container */}
                                    <div className="relative overflow-hidden rounded-2xl mb-6 aspect-square">
                                        <img
                                            src={member.image}
                                            alt={member.name}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-brand-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                        {/* Social Links Overlay */}
                                        <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            {member.socials.linkedin && (
                                                <a
                                                    href={member.socials.linkedin}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="p-3 bg-white rounded-full hover:bg-brand-yellow transition-colors"
                                                    onClick={(e) => e.stopPropagation()}
                                                >
                                                    <Linkedin className="w-5 h-5 text-brand-black" />
                                                </a>
                                            )}
                                            {member.socials.twitter && (
                                                <a
                                                    href={member.socials.twitter}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="p-3 bg-white rounded-full hover:bg-brand-yellow transition-colors"
                                                    onClick={(e) => e.stopPropagation()}
                                                >
                                                    <Twitter className="w-5 h-5 text-brand-black" />
                                                </a>
                                            )}
                                            <a
                                                href="mailto:contact@pearllemon.com"
                                                className="p-3 bg-white rounded-full hover:bg-brand-yellow transition-colors"
                                                onClick={(e) => e.stopPropagation()}
                                            >
                                                <Mail className="w-5 h-5 text-brand-black" />
                                            </a>
                                        </div>
                                    </div>

                                    {/* Member Info */}
                                    <div className="text-center space-y-2">
                                        <h3 className="text-2xl font-bold font-heading text-brand-black group-hover:text-brand-yellow transition-colors">
                                            {member.name}
                                        </h3>
                                        <p className="text-brand-yellow font-medium">{member.role}</p>
                                        <p className="text-gray-600 line-clamp-3">{member.bio}</p>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Company Values */}
            <section className="py-24 bg-gray-50">
                <div className="container">
                    <div className="max-w-3xl mx-auto text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold font-heading mb-4">
                            Our <span className="text-brand-yellow">Core Values</span>
                        </h2>
                        <p className="text-gray-600 text-lg">
                            These principles guide everything we do and shape how we serve our clients.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        {[
                            {
                                title: "Transparency",
                                description: "We believe in honest communication and clear reporting. You'll always know exactly what we're doing and why.",
                            },
                            {
                                title: "Results-Driven",
                                description: "We're obsessed with delivering measurable results. Every strategy is built around your specific business goals.",
                            },
                            {
                                title: "Continuous Learning",
                                description: "The digital landscape evolves daily. We stay ahead by constantly learning, testing, and adapting our strategies.",
                            },
                        ].map((value, index) => (
                            <motion.div
                                key={value.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center"
                            >
                                <h3 className="text-2xl font-bold font-heading text-brand-black mb-4">
                                    {value.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed">{value.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Join Team CTA */}
            <CTA
                variant="dark"
                title="Join Our Growing Team"
                description="We're always looking for talented individuals to join our remote team. If you're passionate about digital marketing and love solving complex challenges, we'd love to hear from you."
                buttonText="View Open Positions"
                buttonHref="/contact"
            />

            <Footer />
        </main>
    )
}
