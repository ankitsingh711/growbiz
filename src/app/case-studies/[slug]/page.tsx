import { caseStudies } from "@/lib/data/case-studies"
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { Button } from "@/components/ui/button"
import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, Calendar, CheckCircle, TrendingUp } from "lucide-react"

interface Props {
    params: {
        slug: string
    }
}

export async function generateStaticParams() {
    return caseStudies.map((study) => ({
        slug: study.slug,
    }))
}

export default function CaseStudyDetail({ params }: Props) {
    const study = caseStudies.find((s) => s.slug === params.slug)

    if (!study) {
        notFound()
    }

    return (
        <main className="min-h-screen bg-white">
            <Header />

            {/* Hero */}
            <section className="relative h-[60vh] min-h-[500px] flex items-end pb-16">
                <div className="absolute inset-0 z-0">
                    <img
                        src={study.thumbnail}
                        alt={study.title}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                </div>

                <div className="container relative z-10 text-white">
                    <Link
                        href="/case-studies"
                        className="inline-flex items-center text-white/80 hover:text-brand-yellow mb-6 transition-colors"
                    >
                        <ArrowLeft size={16} className="mr-2" /> Back to Case Studies
                    </Link>

                    <div className="flex items-center gap-3 mb-4">
                        <span className="bg-brand-yellow text-brand-black px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                            {study.category}
                        </span>
                        <span className="text-white/80 text-sm flex items-center gap-2">
                            <Calendar size={14} /> 2024 Success Story
                        </span>
                    </div>

                    <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold font-heading mb-6 max-w-4xl leading-tight">
                        {study.title}
                    </h1>

                    <p className="text-lg text-gray-200 max-w-2xl">
                        {study.summary}
                    </p>
                </div>
            </section>

            {/* Metrics Bar */}
            {study.metrics && (
                <section className="bg-brand-black py-12 text-white border-b border-white/10">
                    <div className="container grid grid-cols-2 md:grid-cols-4 gap-8">
                        {study.metrics.map((metric) => (
                            <div key={metric.label} className="text-center md:text-left">
                                <p className="text-4xl lg:text-5xl font-bold text-brand-yellow mb-2">{metric.value}</p>
                                <p className="text-sm text-gray-400 font-medium uppercase tracking-widest">{metric.label}</p>
                            </div>
                        ))}
                    </div>
                </section>
            )}

            {/* Content */}
            <section className="py-24 container grid grid-cols-1 lg:grid-cols-12 gap-12">
                {/* Main Content */}
                <div className="lg:col-span-8 space-y-12">
                    <div className="prose prose-lg prose-headings:font-heading prose-a:text-brand-yellow hover:prose-a:text-brand-black max-w-none">
                        <h2>The Challenge</h2>
                        <p>
                            Every business faces unique hurdles. For {study.title}, the main challenge was breaking through the digital noise in a saturated market. Despite having a superior product, their organic visibility was low, and customer acquisition costs were spiraling.
                        </p>

                        <h2>Our Strategy</h2>
                        <p>
                            Pearl Lemon implemented a comprehensive {study.category} strategy tailored to their specific goals.
                        </p>
                        <ul>
                            <li>Comprehensive Technical Audit</li>
                            <li>Keyword Gap Analysis</li>
                            <li>High-Authority Link Building</li>
                            <li>Conversion Rate Optimization (CRO)</li>
                        </ul>

                        <h2>The Results</h2>
                        <p>
                            Within 6 months, we achieved significant milestones. The data speaks for itself—consistent growth month-over-month and a substantial ROI.
                        </p>
                        <blockquote>
                            "Pearl Lemon didn't just promise results; they delivered them. Their team became an extension of ours."
                        </blockquote>
                    </div>
                </div>

                {/* Sidebar */}
                <aside className="lg:col-span-4 space-y-8">
                    <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 sticky top-24">
                        <h3 className="text-xl font-bold font-heading mb-6">Key Results</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <CheckCircle className="text-brand-yellow shrink-0 mt-1" size={20} />
                                <span>Dominating page 1 for high-value keywords</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <TrendingUp className="text-brand-yellow shrink-0 mt-1" size={20} />
                                <span>Consistent organic traffic growth</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle className="text-brand-yellow shrink-0 mt-1" size={20} />
                                <span>Reduced Cost Per Acquisition (CPA)</span>
                            </li>
                        </ul>

                        <div className="mt-8 pt-8 border-t border-gray-200">
                            <p className="text-center font-bold mb-4">Want similar results?</p>
                            <Button className="w-full h-12 text-base">Book a Free Consultation</Button>
                        </div>
                    </div>
                </aside>
            </section>

            <Footer />
        </main>
    )
}
