"use client"

import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { services } from "@/lib/data/services"
import { CTA } from "@/components/sections/CTA"
import { motion } from "framer-motion"
import Link from "next/link"
import { CheckCircle, ArrowRight, ChevronDown } from "lucide-react"
import * as Accordion from "@radix-ui/react-accordion"

export default function WebDesignServicePage() {
    const service = services.find((s) => s.slug === "web-design")!
    const Icon = service.icon

    return (
        <main className="min-h-screen bg-white">
            <Header />
            <section className="py-24 bg-gradient-to-br from-brand-black via-gray-900 to-brand-black text-white relative overflow-hidden">
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
                            <img src="https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&q=80&w=800" alt="Web Design" className="rounded-2xl shadow-2xl" />
                        </motion.div>
                    </div>
                </div>
            </section>
            <section className="py-24 container">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {service.benefits.map((benefit, index) => (
                        <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex gap-3 bg-gray-50 p-6 rounded-xl">
                            <CheckCircle className="w-6 h-6 text-brand-yellow shrink-0 mt-1" />
                            <p className="text-gray-700">{benefit}</p>
                        </motion.div>
                    ))}
                </div>
            </section>
            <section className="py-24 bg-gray-50">
                <div className="container max-w-4xl space-y-6">
                    {service.process.map((step) => (
                        <motion.div key={step.step} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="bg-white rounded-2xl p-8 flex gap-6">
                            <div className="w-16 h-16 bg-brand-yellow rounded-xl flex items-center justify-center shrink-0">
                                <span className="text-2xl font-bold">{step.step}</span>
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                                <p className="text-gray-600">{step.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>
            <section className="py-24 container max-w-3xl">
                <Accordion.Root type="single" collapsible className="space-y-4">
                    {service.faqs.map((faq, index) => (
                        <Accordion.Item key={index} value={`item-${index}`} className="bg-white border rounded-xl">
                            <Accordion.Header>
                                <Accordion.Trigger className="w-full flex justify-between p-6 text-left group">
                                    <span className="font-bold">{faq.question}</span>
                                    <ChevronDown className="w-5 h-5 text-brand-yellow transition-transform group-data-[state=open]:rotate-180" />
                                </Accordion.Trigger>
                            </Accordion.Header>
                            <Accordion.Content>
                                <div className="px-6 pb-6 text-gray-600">{faq.answer}</div>
                            </Accordion.Content>
                        </Accordion.Item>
                    ))}
                </Accordion.Root>
            </section>
            <CTA variant="dark" title="Launch a Stunning Website" buttonText="Start Your Project" />
            <Footer />
        </main>
    )
}
