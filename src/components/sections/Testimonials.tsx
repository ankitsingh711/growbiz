"use client"

import { motion } from "framer-motion"
import { testimonials } from "@/lib/data/testimonials"
import { Star } from "lucide-react"
import { useState } from "react"

export function Testimonials() {
    const [activeIndex, setActiveIndex] = useState(0)

    const nextTestimonial = () => {
        setActiveIndex((prev) => (prev + 1) % testimonials.length)
    }

    const prevTestimonial = () => {
        setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    }

    const displayedTestimonials = [
        testimonials[activeIndex],
        testimonials[(activeIndex + 1) % testimonials.length],
        testimonials[(activeIndex + 2) % testimonials.length],
    ]

    return (
        <section className="py-24 bg-gray-50">
            <div className="container">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold font-heading mb-4">
                        What Our <span className="text-brand-yellow">Clients Say</span>
                    </h2>
                    <p className="text-gray-600 text-lg">
                        Don't just take our word for it. See what our clients have to say about working with Pearl Lemon.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {displayedTestimonials.map((testimonial, index) => (
                        <motion.div
                            key={testimonial.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-shadow"
                        >
                            <div className="flex items-center gap-1 mb-4">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <Star key={i} className="w-5 h-5 fill-brand-yellow text-brand-yellow" />
                                ))}
                            </div>

                            <p className="text-gray-700 mb-6 leading-relaxed">
                                "{testimonial.content}"
                            </p>

                            <div className="flex items-center gap-4">
                                <img
                                    src={testimonial.avatar}
                                    alt={testimonial.name}
                                    className="w-12 h-12 rounded-full object-cover"
                                />
                                <div>
                                    <p className="font-bold text-brand-black">{testimonial.name}</p>
                                    <p className="text-sm text-gray-600">
                                        {testimonial.role}, {testimonial.company}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Navigation dots */}
                <div className="flex items-center justify-center gap-2 mt-12">
                    {testimonials.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setActiveIndex(index)}
                            className={`w-2 h-2 rounded-full transition-all ${index === activeIndex ? "bg-brand-yellow w-8" : "bg-gray-300"
                                }`}
                            aria-label={`Go to testimonial ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}
