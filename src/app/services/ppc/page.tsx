"use client"

import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { services } from "@/lib/data/services"
import { caseStudies } from "@/lib/data/case-studies"
import { CTA } from "@/components/sections/CTA"
import { motion } from "framer-motion"
import Link from "next/link"
import { CheckCircle, ArrowRight, ChevronDown } from "lucide-react"
import * as Accordion from "@radix-ui/react-accordion"

export default function PPCServicePage() {
    const service = services.find((s) => s.slug === "ppc")!
    const Icon = service.icon
    const relatedStudies = caseStudies.filter((study) =>
        service.relatedCaseStudies?.includes(study.slug)
    )

    return (
        <main className="min-h-screen bg-white">
            <Header />

            <section className="py-24 bg-gradient-to-br from-brand-black via-gray-900 to-brand-black text-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-20 left-10 w-96 h-96 bg-brand-yellow rounded-full blur-3xl" />
                    <div className="absolute bottom-20 right-10 w-96 h-96 bg-brand-yellow rounded-full blur-3xl" />
                </div>

                <div className="container relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="space-y-6">
                            <div className="w-20 h-20 bg-brand-yellow rounded-2xl flex items-center justify-center mb-6">
                                <Icon className="w-10 h-10 text-brand-black" />
                            </div>
                            <h1 className="text-4xl md:text-6xl font-bold font-heading leading-tight">{service.title}</h1>
                            <p className="text-xl text-gray-300 leading-relaxed">{service.description}</p>
                            <Link href="/contact" className="inline-flex items-center justify-center h-14 px-8 bg-brand-yellow text-brand-black font-bold rounded-lg hover:bg-white transition-colors group">
                                Get Started <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </motion.div>
                        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
                            <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800" alt="PPC Management" className="rounded-2xl shadow-2xl" />
                        </motion.div>
                    </div>
                </div>
            </section>

            <section className="py-24 container">
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold font-heading mb-4">Why Choose Our <span className="text-brand-yellow">PPC Services</span></h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {service.benefits.map((benefit, index) => (
                        <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.05 }} className="flex gap-3 bg-gray-50 p-6 rounded-xl border border-gray-100">
                            <CheckCircle className="w-6 h-6 text-brand-yellow shrink-0 mt-1" />
                            <p className="text-gray-700 leading-relaxed">{benefit}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            <section className="py-24 bg-gray-50">
                <div className="container">
                    <div className="max-w-3xl mx-auto text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold font-heading mb-4">Our <span className="text-brand-yellow">Process</span></h2>
                    </div>
                    <div className="max-w-4xl mx-auto space-y-6">
                        {service.process.map((step, index) => (
                            <motion.div key={step.step} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 flex gap-6">
                                <div className="shrink-0">
                                    <div className="w-16 h-16 bg-brand-yellow rounded-xl flex items-center justify-center">
                                        <span className="text-2xl font-bold text-brand-black">{step.step}</span>
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold font-heading text-brand-black mb-3">{step.title}</h3>
                                    <p className="text-gray-600 leading-relaxed">{step.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-24 container">
                <div className="max-w-3xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold font-heading mb-4">Frequently Asked <span className="text-brand-yellow">Questions</span></h2>
                    </div>
                    <Accordion.Root type="single" collapsible className="space-y-4">
                        {service.faqs.map((faq, index) => (
                            <Accordion.Item key={index} value={`item-${index}`} className="bg-white border border-gray-100 rounded-xl overflow-hidden">
                                <Accordion.Header>
                                    <Accordion.Trigger className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors group">
                                        <span className="text-lg font-bold text-brand-black pr-4">{faq.question}</span>
                                        <ChevronDown className="w-5 h-5 text-brand-yellow shrink-0 transition-transform group-data-[state=open]:rotate-180" />
                                    </Accordion.Trigger>
                                </Accordion.Header>
                                <Accordion.Content className="overflow-hidden data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp">
                                    <div className="px-6 pb-6 text-gray-600 leading-relaxed">{faq.answer}</div>
                                </Accordion.Content>
                            </Accordion.Item>
                        ))}
                    </Accordion.Root>
                </div>
            </section>

            <CTA variant="dark" title="Ready to Scale Your Paid Advertising?" description="Let's create high-converting PPC campaigns that maximize your ROI." buttonText="Start Your PPC Campaign" />
            <Footer />
        </main>
    )
}
