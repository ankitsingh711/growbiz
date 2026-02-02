import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Pearl Lemon Clone | Award Winning SEO Agency",
    description: "Pearl Lemon is a globally remote SEO agency helping businesses double their organic traffic. Book a consultation today.",
};

export default function Home() {
    return (
        <main className="min-h-screen bg-white">
            <Header />
            <Hero />
            <Services />
            <Footer />
        </main>
    );
}
