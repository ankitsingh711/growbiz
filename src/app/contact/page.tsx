import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { Button } from "@/components/ui/button"
import { Calendar, Mail, MapPin, Phone } from "lucide-react"

export default function ContactPage() {
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
                                    <a href="mailto:info@pearllemon.com" className="text-gray-500 hover:text-brand-yellow transition-colors">info@pearllemon.com</a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-brand-yellow/10 rounded-full text-brand-black">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <p className="font-bold">Call Us</p>
                                    <a href="tel:+442071833436" className="text-gray-500 hover:text-brand-yellow transition-colors">+44 207 183 3436</a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-brand-yellow/10 rounded-full text-brand-black">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <p className="font-bold">Visit Us</p>
                                    <p className="text-gray-500">Kemp House, 152-160 City Road<br />London EC1V 2NX</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-brand-black text-white p-8 rounded-3xl flex items-center justify-between">
                            <div>
                                <h3 className="text-xl font-bold">Book a Consultation</h3>
                                <p className="text-gray-400 text-sm mt-1">Free 30-min strategy call</p>
                            </div>
                            <Button variant="default" className="shrink-0 bg-brand-yellow text-brand-black hover:bg-white hover:text-brand-black">
                                Book Now
                            </Button>
                        </div>
                    </div>

                    {/* Form (Mock) */}
                    <div className="bg-white p-8 md:p-10 rounded-3xl shadow-sm">
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium">First Name</label>
                                    <input type="text" className="w-full h-12 rounded-lg border border-gray-200 px-4 focus:outline-none focus:ring-2 focus:ring-brand-yellow/50" placeholder="John" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium">Last Name</label>
                                    <input type="text" className="w-full h-12 rounded-lg border border-gray-200 px-4 focus:outline-none focus:ring-2 focus:ring-brand-yellow/50" placeholder="Doe" />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium">Email</label>
                                <input type="email" className="w-full h-12 rounded-lg border border-gray-200 px-4 focus:outline-none focus:ring-2 focus:ring-brand-yellow/50" placeholder="john@company.com" />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium">Message</label>
                                <textarea className="w-full h-32 rounded-lg border border-gray-200 p-4 focus:outline-none focus:ring-2 focus:ring-brand-yellow/50 resize-none" placeholder="Tell us about your project..." />
                            </div>

                            <Button size="lg" className="w-full h-14 text-base">
                                Send Message
                            </Button>
                        </form>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    )
}
