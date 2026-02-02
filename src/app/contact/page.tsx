"use client"

import { useState } from "react"
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { Button } from "@/components/ui/button"
import { Mail, MapPin, Phone, Globe } from "lucide-react"

export default function ContactPage() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        message: ""
    })
    const [loading, setLoading] = useState(false)
    const [status, setStatus] = useState<{ type: "success" | "error", message: string } | null>(null)

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setLoading(true)
        setStatus(null)

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            })

            const data = await response.json()

            if (response.ok) {
                setStatus({ type: "success", message: "Message sent successfully! We'll get back to you soon." })
                setFormData({ firstName: "", lastName: "", email: "", message: "" })
            } else {
                setStatus({ type: "error", message: data.error || "Failed to send message" })
            }
        } catch (error) {
            setStatus({ type: "error", message: "An error occurred. Please try again later." })
        } finally {
            setLoading(false)
        }
    }

    return (
        <main className="min-h-screen bg-white">
            <Header />

            <section className="pt-32 pb-20 container">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h1 className="text-4xl md:text-6xl font-bold font-heading text-brand-black mb-6">
                        Let's <span className="text-brand-yellow">Talk</span>
                    </h1>
                    <p className="text-xl text-gray-500">
                        Ready to grow your business? Schedule a call with our team or drop us a visit.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-gray-50 rounded-[40px] p-8 md:p-12 overflow-hidden shadow-sm border border-gray-100">
                    {/* Contact Info */}
                    <div className="space-y-8">
                        <div className="bg-white p-8 rounded-3xl space-y-6 shadow-sm">
                            <h3 className="text-2xl font-bold font-heading">Contact Info</h3>

                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-brand-yellow/10 rounded-full text-brand-black">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <p className="font-bold">Email Us</p>
                                    <a href="mailto:business@thegrowbiz.in" className="text-gray-500 hover:text-brand-yellow transition-colors">business@thegrowbiz.in</a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-brand-yellow/10 rounded-full text-brand-black">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <p className="font-bold">Call Us</p>
                                    <a href="tel:+917003104443" className="text-gray-500 hover:text-brand-yellow transition-colors">+91 7003104443</a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-brand-yellow/10 rounded-full text-brand-black">
                                    <Globe size={24} />
                                </div>
                                <div>
                                    <p className="font-bold">Visit Us Online</p>
                                    <a href="https://www.thegrowbiz.in" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-brand-yellow transition-colors">www.thegrowbiz.in</a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-brand-yellow/10 rounded-full text-brand-black">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <p className="font-bold">Location</p>
                                    <p className="text-gray-500">India<br />(Serving clients worldwide)</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-brand-black text-white p-8 rounded-3xl flex items-center justify-between">
                            <div>
                                <h3 className="text-xl font-bold">Book a Consultation</h3>
                                <p className="text-gray-400 text-sm mt-1">Free 30-min strategy call</p>
                            </div>
                            <a
                                href="https://wa.me/917003104443?text=Hi, I'd like to book a call with GrowBiz"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Button variant="default" className="shrink-0 bg-brand-yellow text-brand-black hover:bg-white hover:text-brand-black">
                                    Book Now
                                </Button>
                            </a>
                        </div>
                    </div>

                    {/* Form */}
                    <div className="bg-white p-8 md:p-10 rounded-3xl shadow-sm">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="firstName" className="text-sm font-medium">First Name</label>
                                    <input
                                        type="text"
                                        id="firstName"
                                        value={formData.firstName}
                                        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                                        className="w-full h-12 rounded-lg border border-gray-200 px-4 focus:outline-none focus:ring-2 focus:ring-brand-yellow/50"
                                        placeholder="John"
                                        required
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="lastName" className="text-sm font-medium">Last Name</label>
                                    <input
                                        type="text"
                                        id="lastName"
                                        value={formData.lastName}
                                        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                                        className="w-full h-12 rounded-lg border border-gray-200 px-4 focus:outline-none focus:ring-2 focus:ring-brand-yellow/50"
                                        placeholder="Doe"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-medium">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    className="w-full h-12 rounded-lg border border-gray-200 px-4 focus:outline-none focus:ring-2 focus:ring-brand-yellow/50"
                                    placeholder="john@company.com"
                                    required
                                />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-medium">Message</label>
                                <textarea
                                    id="message"
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    className="w-full h-32 rounded-lg border border-gray-200 p-4 focus:outline-none focus:ring-2 focus:ring-brand-yellow/50 resize-none"
                                    placeholder="Tell us about your project..."
                                    required
                                />
                            </div>

                            {status && (
                                <div className={`p-4 rounded-lg ${status.type === "success" ? "bg-green-50 text-green-700" : "bg-red-50 text-red-700"}`}>
                                    {status.message}
                                </div>
                            )}

                            <Button
                                type="submit"
                                size="lg"
                                className="w-full h-14 text-base"
                                disabled={loading}
                            >
                                {loading ? "Sending..." : "Send Message"}
                            </Button>
                        </form>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    )
}
