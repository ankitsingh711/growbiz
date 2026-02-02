import { CaseStudy } from "@/types";

export const caseStudies: CaseStudy[] = [
    {
        slug: "astoria-park",
        title: "How We Doubled Traffic for Astoria Park",
        category: "SEO",
        summary: "A deep dive into local SEO strategies that drove a 200% increase in foot traffic and online bookings.",
        thumbnail: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800",
        metrics: [
            { label: "Traffic Increase", value: "200%" },
            { label: "Leads Generated", value: "500+" },
        ],
    },
    {
        slug: "tech-flow-saas",
        title: "Scaling SaaS Revenue with Content Marketing",
        category: "Written",
        summary: "From 0 to $10k MRR in 6 months using targeted content clusters and high-authority link building.",
        thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
        metrics: [
            { label: "MRR Growth", value: "$10k" },
            { label: "Organic Users", value: "15k/mo" },
        ],
    },
    {
        title: "Video Interview: CEO of E-Com Giant",
        slug: "ecom-giant-interview",
        category: "Video",
        summary: "Watch how we implemented a video-first SEO strategy to dominate the SERPs for competitive keywords.",
        thumbnail: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800",
        metrics: [
            { label: "Video Views", value: "1M+" },
            { label: "Conversion Rate", value: "4.5%" },
        ],
    },
    {
        title: "Local Dentist SEO Dominance",
        slug: "local-dentist-seo",
        category: "SEO",
        summary: "Ranking #1 for 'Dentist near me' in highly competitive London boroughs.",
        thumbnail: "https://images.unsplash.com/photo-1588776814546-1b98f274751c?auto=format&fit=crop&q=80&w=800",
    },
    {
        title: "Fintech Lead Generation Campaign",
        slug: "fintech-lead-gen",
        category: "Lead Gen",
        summary: "Using LinkedIn automation and cold email to generate high-value B2B leads for a fintech startup.",
        thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    },
    {
        title: "Viral Video Marketing Strategy",
        slug: "viral-video-marketing",
        category: "Video",
        summary: "Creating short-form video content that went viral on TikTok and Reels, driving brand awareness.",
        thumbnail: "https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&q=80&w=800",
    },
];
