import Link from "next/link"
import { siteConfig } from "@/lib/site-config"
import { Facebook, Linkedin, Twitter } from "lucide-react"

export function Footer() {
    return (
        <footer className="bg-brand-black text-white pt-16 pb-8">
            <div className="container grid grid-cols-1 md:grid-cols-4 gap-10">
                {/* Column 1: Brand */}
                <div className="space-y-4">
                    <Link href="/" className="font-heading font-bold text-2xl text-white">
                        GrowBiz
                    </Link>
                    <p className="text-gray-400 text-sm leading-relaxed">
                        {siteConfig.description}. We help businesses grow through data-driven SEO strategies and creative digital marketing.
                    </p>
                </div>

                {/* Column 2: Quick Links */}
                <div>
                    <h3 className="font-heading font-bold text-lg mb-4 text-brand-yellow">Quick Links</h3>
                    <ul className="space-y-2">
                        {siteConfig.nav.map((item) => (
                            <li key={item.href}>
                                <Link href={item.href} className="text-gray-400 hover:text-brand-yellow transition-colors text-sm">
                                    {item.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Column 3: Contact */}
                <div>
                    <h3 className="font-heading font-bold text-lg mb-4 text-brand-yellow">Contact</h3>
                    <ul className="space-y-3 text-sm text-gray-400">
                        <li>{siteConfig.contact.location}</li>
                        <li>
                            <a href={`tel:${siteConfig.contact.phone}`} className="hover:text-brand-yellow">
                                {siteConfig.contact.phone}
                            </a>
                        </li>
                        <li>
                            <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-brand-yellow">
                                {siteConfig.contact.email}
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Column 4: Newsletter/Social */}
                <div>
                    <h3 className="font-heading font-bold text-lg mb-4 text-brand-yellow">Follow Us</h3>
                    <div className="flex gap-4">
                        <Link href={siteConfig.socials.linkedin} className="p-2 bg-white/10 rounded-full hover:bg-brand-yellow hover:text-brand-black transition-colors">
                            <Linkedin size={20} />
                        </Link>
                        <Link href={siteConfig.socials.twitter} className="p-2 bg-white/10 rounded-full hover:bg-brand-yellow hover:text-brand-black transition-colors">
                            <Twitter size={20} />
                        </Link>
                        <Link href={siteConfig.socials.facebook} className="p-2 bg-white/10 rounded-full hover:bg-brand-yellow hover:text-brand-black transition-colors">
                            <Facebook size={20} />
                        </Link>
                    </div>
                </div>
            </div>

            <div className="container mt-12 pt-8 border-t border-white/10 text-center text-sm text-gray-500">
                <p>&copy; {new Date().getFullYear()} GrowBiz Group. All rights reserved.</p>
            </div>
        </footer>
    )
}
