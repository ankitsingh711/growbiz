import { teamMembers } from "@/lib/data/team"
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { Button } from "@/components/ui/button"
import { notFound } from "next/navigation"
import { Linkedin, Mail, Twitter } from "lucide-react"
import Link from "next/link"

interface Props {
    params: {
        slug: string
    }
}

export async function generateStaticParams() {
    return teamMembers.map((member) => ({
        slug: member.slug,
    }))
}

export default function TeamMemberDetail({ params }: Props) {
    const member = teamMembers.find((m) => m.slug === params.slug)

    if (!member) {
        notFound()
    }

    return (
        <main className="min-h-screen bg-white">
            <Header />

            <section className="pt-32 pb-20 container">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
                    {/* Sidebar / Headshot */}
                    <div className="md:col-span-5 lg:col-span-4 space-y-8 sticky top-32">
                        <div className="relative rounded-3xl overflow-hidden aspect-[3/4] shadow-2xl">
                            <img
                                src={member.image}
                                alt={member.name}
                                className="w-full h-full object-cover"
                            />
                        </div>

                        <div className="flex justify-center gap-4">
                            {member.socials.linkedin && (
                                <a href={member.socials.linkedin} target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-100 rounded-full hover:bg-brand-yellow hover:text-white transition-colors">
                                    <Linkedin size={24} />
                                </a>
                            )}
                            {member.socials.twitter && (
                                <a href={member.socials.twitter} target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-100 rounded-full hover:bg-brand-yellow hover:text-white transition-colors">
                                    <Twitter size={24} />
                                </a>
                            )}
                            <a href={`mailto:contact@pearllemon.com`} className="p-3 bg-gray-100 rounded-full hover:bg-brand-yellow hover:text-white transition-colors">
                                <Mail size={24} />
                            </a>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="md:col-span-7 lg:col-span-8 space-y-8">
                        <div>
                            <h1 className="text-4xl md:text-6xl font-bold font-heading text-brand-black mb-2">
                                {member.name}
                            </h1>
                            <p className="text-xl md:text-2xl text-brand-yellow font-medium">
                                {member.role}
                            </p>
                        </div>

                        <div className="prose prose-lg text-gray-600 leading-relaxed">
                            <p>{member.bio}</p>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </p>
                            <h3>Areas of Expertise</h3>
                            <ul>
                                <li>Search Engine Optimization</li>
                                <li>Digital Strategy</li>
                                <li>Content Marketing</li>
                                <li>Team Leadership</li>
                            </ul>
                            <blockquote>
                                "Success is not final, failure is not fatal: it is the courage to continue that counts."
                            </blockquote>
                        </div>

                        <div className="bg-brand-black text-white p-8 rounded-2xl md:p-12 mt-12">
                            <h3 className="text-2xl font-bold font-heading mb-4">Work with {member.name.split(' ')[0]}</h3>
                            <p className="text-gray-400 mb-8">
                                Ready to take your business to the next level? Book a consultation directly with our team.
                            </p>
                            <Button size="lg" className="w-full md:w-auto h-14 text-lg">
                                Book a Call
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    )
}
