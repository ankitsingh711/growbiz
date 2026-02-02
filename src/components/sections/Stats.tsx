"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

interface Stat {
    label: string
    value: string
    suffix?: string
}

interface StatsProps {
    stats: Stat[]
}

export function Stats({ stats }: StatsProps) {
    return (
        <section className="py-16 bg-brand-black text-white">
            <div className="container">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="text-center"
                        >
                            <AnimatedNumber value={stat.value} suffix={stat.suffix} />
                            <p className="text-gray-400 text-sm uppercase tracking-widest mt-2">
                                {stat.label}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

function AnimatedNumber({ value, suffix = "" }: { value: string; suffix?: string }) {
    const [displayValue, setDisplayValue] = useState("0")
    const numericValue = parseInt(value.replace(/\D/g, ""))

    useEffect(() => {
        if (isNaN(numericValue)) {
            setDisplayValue(value)
            return
        }

        let start = 0
        const duration = 2000
        const increment = numericValue / (duration / 16)

        const timer = setInterval(() => {
            start += increment
            if (start >= numericValue) {
                setDisplayValue(value)
                clearInterval(timer)
            } else {
                setDisplayValue(Math.floor(start).toString() + suffix)
            }
        }, 16)

        return () => clearInterval(timer)
    }, [numericValue, value, suffix])

    return <p className="text-4xl md:text-5xl font-bold text-brand-yellow">{displayValue}</p>
}
