import { BarChart, Globe, Megaphone, PenTool, Search, Video, LucideIcon } from "lucide-react";

export interface Service {
    slug: string;
    title: string;
    shortDescription: string;
    icon: LucideIcon;
    description: string;
    benefits: string[];
    process: {
        step: number;
        title: string;
        description: string;
    }[];
    faqs: {
        question: string;
        answer: string;
    }[];
    relatedCaseStudies?: string[]; // slugs of related case studies
}

export const services: Service[] = [
    {
        slug: "seo",
        title: "SEO Services",
        shortDescription: "Rank higher on Google with our data-driven SEO strategies.",
        icon: Search,
        description: "Transform your online visibility with our comprehensive SEO services. We combine technical expertise, content strategy, and link building to drive sustainable organic growth. Our proven methodologies have helped businesses across industries dominate search results and multiply their revenue.",
        benefits: [
            "Increased organic traffic from qualified leads",
            "Higher search engine rankings for target keywords",
            "Improved website authority and domain trust",
            "Better user experience and site performance",
            "Long-term sustainable growth and ROI",
            "Comprehensive competitor analysis and insights",
        ],
        process: [
            {
                step: 1,
                title: "SEO Audit & Analysis",
                description: "We conduct a comprehensive audit of your website, analyzing technical SEO, on-page factors, backlink profile, and competitor landscape to identify opportunities.",
            },
            {
                step: 2,
                title: "Strategy Development",
                description: "Based on our findings, we create a customized SEO roadmap aligned with your business goals, targeting high-value keywords and content opportunities.",
            },
            {
                step: 3,
                title: "On-Page Optimization",
                description: "We optimize your website's structure, content, meta tags, internal linking, and technical elements to ensure search engines can crawl and index your site effectively.",
            },
            {
                step: 4,
                title: "Content Creation & Link Building",
                description: "Our team creates SEO-optimized content and builds high-authority backlinks to boost your domain authority and search rankings.",
            },
            {
                step: 5,
                title: "Monitor & Refine",
                description: "We continuously track performance metrics, analyze results, and refine our strategy to ensure sustained growth and adapt to algorithm changes.",
            },
        ],
        faqs: [
            {
                question: "How long does it take to see SEO results?",
                answer: "SEO is a long-term strategy. While you may see initial improvements within 3-4 months, significant results typically appear between 6-12 months. The timeline depends on your industry competitiveness, current website state, and the aggressiveness of the campaign.",
            },
            {
                question: "Do you guarantee #1 rankings?",
                answer: "No reputable SEO agency can guarantee #1 rankings as search algorithms are constantly evolving and controlled by search engines. However, we guarantee transparent reporting, ethical practices, and a data-driven approach that consistently delivers measurable improvements.",
            },
            {
                question: "What's the difference between on-page and off-page SEO?",
                answer: "On-page SEO involves optimizing elements on your website (content, meta tags, site structure, page speed). Off-page SEO focuses on external factors like backlinks, social signals, and brand mentions that influence your site's authority and trustworthiness.",
            },
            {
                question: "Will SEO work for my industry?",
                answer: "Yes! SEO strategies can be tailored to any industry. We've successfully helped clients in healthcare, fintech, e-commerce, B2B services, and more. Each strategy is customized based on your specific market, competition, and business goals.",
            },
        ],
        relatedCaseStudies: ["astoria-park", "local-dentist-seo"],
    },
    {
        slug: "ppc",
        title: "PPC Management",
        shortDescription: "Maximize your ROI with targeted paid advertising campaigns.",
        icon: BarChart,
        description: "Stop wasting money on ineffective ads. Our PPC experts create high-converting campaigns across Google Ads, Facebook, LinkedIn, and more. We focus on reducing your cost per acquisition while scaling your most profitable campaigns.",
        benefits: [
            "Immediate visibility and traffic generation",
            "Precise audience targeting and segmentation",
            "Complete budget control and optimization",
            "Detailed performance tracking and analytics",
            "Higher conversion rates through A/B testing",
            "Scalable campaigns that grow with your business",
        ],
        process: [
            {
                step: 1,
                title: "Goals & Research",
                description: "We define your campaign objectives, research your target audience, analyze competitors, and identify the most profitable keywords and platforms.",
            },
            {
                step: 2,
                title: "Campaign Setup",
                description: "We create compelling ad copy, design conversion-focused landing pages, set up tracking pixels, and structure campaigns for optimal performance.",
            },
            {
                step: 3,
                title: "Launch & Monitor",
                description: "We launch your campaigns across selected platforms and closely monitor performance metrics, making real-time adjustments to maximize results.",
            },
            {
                step: 4,
                title: "Optimize & Scale",
                description: "Through continuous A/B testing and data analysis, we refine targeting, bidding strategies, and creative elements while scaling successful campaigns.",
            },
            {
                step: 5,
                title: "Report & Refine",
                description: "We provide detailed monthly reports with actionable insights and recommendations, ensuring transparency and continuous improvement.",
            },
        ],
        faqs: [
            {
                question: "What's a realistic budget for PPC advertising?",
                answer: "PPC budgets vary widely based on industry, competition, and goals. We typically recommend starting with at least $1,500-$3,000/month for meaningful results. We'll help you determine the optimal budget based on your specific situation and expected ROI.",
            },
            {
                question: "Which platform is best: Google Ads or Facebook Ads?",
                answer: "It depends on your business model and target audience. Google Ads excels for intent-based searches (people actively looking for solutions), while Facebook/Instagram is better for awareness and interest-based targeting. We often recommend a multi-platform approach.",
            },
            {
                question: "How do you measure PPC success?",
                answer: "We track key metrics including CTR, conversion rate, cost per click, cost per acquisition, ROAS (return on ad spend), quality score, and ultimately, the revenue generated from campaigns. Success is measured against your specific business objectives.",
            },
        ],
        relatedCaseStudies: ["fintech-lead-gen"],
    },
    {
        slug: "content",
        title: "Content Marketing",
        shortDescription: "Engage your audience with high-quality, SEO-optimized content.",
        icon: PenTool,
        description: "Content is king, but distribution is queen. We create comprehensive content strategies that attract, engage, and convert your target audience. From blog posts and whitepapers to video scripts and social media content, we craft stories that resonate.",
        benefits: [
            "Establish thought leadership in your industry",
            "Build trust and credibility with your audience",
            "Generate qualified leads through valuable content",
            "Improve SEO with fresh, optimized content",
            "Support sales teams with educational resources",
            "Create shareable assets for social media",
        ],
        process: [
            {
                step: 1,
                title: "Content Audit & Planning",
                description: "We analyze your existing content, identify gaps, research your audience's pain points, and develop a strategic content calendar aligned with business goals.",
            },
            {
                step: 2,
                title: "Content Creation",
                description: "Our team of expert writers, designers, and videographers produce high-quality, SEO-optimized content that resonates with your target audience.",
            },
            {
                step: 3,
                title: "Distribution & Promotion",
                description: "We distribute content across optimal channels—your blog, social media, email, and third-party platforms—to maximize reach and engagement.",
            },
            {
                step: 4,
                title: "Engagement & Analysis",
                description: "We monitor performance metrics, engage with your audience, and analyze what content drives the best results for continuous improvement.",
            },
        ],
        faqs: [
            {
                question: "How often should we publish new content?",
                answer: "Consistency matters more than frequency. We typically recommend 2-4 high-quality blog posts per month, supplemented with social content and videos. The exact frequency depends on your resources, industry, and competition.",
            },
            {
                question: "Can you write about our technical/niche industry?",
                answer: "Absolutely! We've created content for highly technical industries including fintech, SaaS, healthcare, and engineering. We work closely with your subject matter experts to ensure accuracy and depth.",
            },
            {
                question: "How do you ensure content is SEO-optimized?",
                answer: "We conduct keyword research, optimize titles and meta descriptions, use proper heading hierarchy, include strategic internal/external links, optimize images, and ensure content answers search intent while remaining engaging and readable.",
            },
        ],
        relatedCaseStudies: ["tech-flow-saas"],
    },
    {
        slug: "lead-gen",
        title: "Lead Generation",
        shortDescription: "Fill your pipeline with high-quality B2B leads.",
        icon: Megaphone,
        description: "Generate a consistent stream of qualified leads for your sales team. We combine outbound strategies (cold email, LinkedIn outreach) with inbound tactics (landing pages, lead magnets) to build a predictable pipeline of potential customers.",
        benefits: [
            "Consistent flow of qualified prospects",
            "Reduced cost per lead over time",
            "Faster sales cycles with pre-qualified leads",
            "Scalable systems that grow with your business",
            "Multi-channel approach for maximum reach",
            "Detailed lead scoring and segmentation",
        ],
        process: [
            {
                step: 1,
                title: "Ideal Customer Profile",
                description: "We work with you to define your ideal customer profile, including demographics, firmographics, pain points, and buying behaviors.",
            },
            {
                step: 2,
                title: "Lead Magnet Creation",
                description: "We develop compelling lead magnets (ebooks, webinars, tools) and optimize landing pages to capture contact information from interested prospects.",
            },
            {
                step: 3,
                title: "Outreach Campaigns",
                description: "We launch targeted outreach campaigns via email and LinkedIn, using personalized messaging that resonates with your ideal customers.",
            },
            {
                step: 4,
                title: "Nurture & Qualify",
                description: "We implement email nurture sequences, score leads based on engagement, and qualify prospects before passing them to your sales team.",
            },
        ],
        faqs: [
            {
                question: "What's the difference between a lead and a qualified lead?",
                answer: "A lead is anyone who shows interest. A qualified lead (SQL) has been vetted to match your ideal customer profile, has budget, authority, need, and timeline (BANT). We focus on delivering SQLs, not just contact information.",
            },
            {
                question: "How many leads can I expect per month?",
                answer: "Lead volume varies by industry, target market size, and budget. B2B campaigns typically generate 50-200+ qualified leads monthly. We focus on quality over quantity—leads that actually convert into customers.",
            },
            {
                question: "Do you handle cold calling?",
                answer: "We specialize in digital outreach (email, LinkedIn) rather than cold calling. However, we can warm up leads through our campaigns, making any follow-up calls much more effective.",
            },
        ],
        relatedCaseStudies: ["fintech-lead-gen"],
    },
    {
        slug: "web-design",
        title: "Web Design & Development",
        shortDescription: "Convert visitors into customers with a stunning website.",
        icon: Globe,
        description: "Your website is often the first impression potential customers have of your business. We design and develop fast, beautiful, conversion-optimized websites that not only look amazing but drive real business results.",
        benefits: [
            "Modern, mobile-responsive design",
            "Fast loading speeds for better UX and SEO",
            "Conversion-focused layouts and CTAs",
            "Seamless user experience across devices",
            "Built with scalability and security in mind",
            "Easy-to-manage CMS integration",
        ],
        process: [
            {
                step: 1,
                title: "Discovery & Planning",
                description: "We learn about your business goals, target audience, competitors, and design preferences. We create wireframes and site architecture.",
            },
            {
                step: 2,
                title: "Design & Prototype",
                description: "Our designers create high-fidelity mockups that reflect your brand identity. We iterate based on your feedback until the design is perfect.",
            },
            {
                step: 3,
                title: "Development & Testing",
                description: "We build your site using modern frameworks (Next.js, React), ensure it's fast and secure, and thoroughly test across devices and browsers.",
            },
            {
                step: 4,
                title: "Launch & Optimize",
                description: "We handle the technical deployment, set up analytics, and monitor performance. Post-launch, we continuously optimize based on user behavior data.",
            },
        ],
        faqs: [
            {
                question: "How long does it take to build a website?",
                answer: "A typical business website takes 6-12 weeks from kickoff to launch, depending on complexity, number of pages, and custom functionality. E-commerce sites or complex web applications may take 3-6 months.",
            },
            {
                question: "Will my website be mobile-friendly?",
                answer: "Absolutely! All our websites are built with a mobile-first approach, ensuring they look and function perfectly on smartphones, tablets, and desktops. Mobile responsiveness is not optional—it's standard.",
            },
            {
                question: "Can I update the website myself after launch?",
                answer: "Yes! We build sites with user-friendly content management systems (CMS) like WordPress or Sanity. We provide training and documentation so you can easily update content without technical knowledge.",
            },
        ],
    },
    {
        slug: "video",
        title: "Video Marketing",
        shortDescription: "Tell your story with compelling video content.",
        icon: Video,
        description: "Video content generates 1200% more shares than text and images combined. We produce engaging video content for your brand—from explainer videos and product demos to customer testimonials and social media clips.",
        benefits: [
            "Higher engagement and retention rates",
            "Better conversion rates on landing pages",
            "Improved brand recall and awareness",
            "Versatile content for multiple platforms",
            "Enhanced SEO through video content",
            "Stronger emotional connection with audience",
        ],
        process: [
            {
                step: 1,
                title: "Concept & Scripting",
                description: "We develop creative concepts aligned with your marketing goals and write compelling scripts that tell your brand story effectively.",
            },
            {
                step: 2,
                title: "Production",
                description: "Our production team handles filming, animation, voiceover, and all technical aspects to bring your video to life with professional quality.",
            },
            {
                step: 3,
                title: "Editing & Post-Production",
                description: "We edit footage, add graphics, music, and effects, and refine the video until it's polished and ready for distribution.",
            },
            {
                step: 4,
                title: "Distribution & Optimization",
                description: "We optimize videos for different platforms (YouTube, social media, website) and implement strategies to maximize views and engagement.",
            },
        ],
        faqs: [
            {
                question: "What types of videos do you produce?",
                answer: "We create explainer videos, product demos, customer testimonials, brand stories, social media ads, YouTube content, webinar recordings, and animated videos. Each type serves different marketing objectives.",
            },
            {
                question: "How much does video production cost?",
                answer: "Costs vary based on video length, complexity, and production requirements. Simple animated explainers start around $2,000-$5,000, while full production shoots can range from $5,000-$20,000+. We'll provide a detailed quote based on your needs.",
            },
            {
                question: "Can you help with video SEO?",
                answer: "Yes! We optimize video titles, descriptions, tags, thumbnails, and transcripts for search engines. We also implement schema markup and create video sitemaps to improve visibility in search results.",
            },
        ],
        relatedCaseStudies: ["ecom-giant-interview", "viral-video-marketing"],
    },
];
