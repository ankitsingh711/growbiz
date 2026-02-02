export interface Testimonial {
    id: string;
    name: string;
    role: string;
    company: string;
    content: string;
    rating: number;
    avatar: string;
}

export const testimonials: Testimonial[] = [
    {
        id: "1",
        name: "James Mitchell",
        role: "CEO",
        company: "TechFlow SaaS",
        content: "Pearl Lemon took our organic traffic from 500 to 15,000 monthly visitors in just 6 months. Their SEO expertise is unmatched, and the ROI speaks for itself. Best investment we've made.",
        rating: 5,
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150",
    },
    {
        id: "2",
        name: "Sarah Chen",
        role: "Marketing Director",
        company: "Astoria Park",
        content: "The team at Pearl Lemon didn't just understand our business—they became true partners. Our local SEO campaign doubled our foot traffic and online bookings. Exceptional work!",
        rating: 5,
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150",
    },
    {
        id: "3",
        name: "Michael Roberts",
        role: "Founder",
        company: "FinanceHub",
        content: "We were skeptical about lead generation, but Pearl Lemon proved us wrong. They delivered 150+ qualified B2B leads in the first quarter alone. Our sales team is thrilled.",
        rating: 5,
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150",
    },
    {
        id: "4",
        name: "Emily Watson",
        role: "Head of Growth",
        company: "CloudStore",
        content: "Their PPC management reduced our cost per acquisition by 40% while tripling our conversion volume. The attention to detail and transparent reporting is refreshing.",
        rating: 5,
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150",
    },
    {
        id: "5",
        name: "David Park",
        role: "CMO",
        company: "HealthFirst Clinic",
        content: "We went from page 5 to ranking #1 for 'dentist near me' in our competitive London market. Pearl Lemon's local SEO strategies are world-class. Highly recommended!",
        rating: 5,
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150",
    },
    {
        id: "6",
        name: "Lisa Anderson",
        role: "VP Marketing",
        company: "StyleHub",
        content: "The video marketing campaign they created for us went viral—over 1 million views! Our brand awareness skyrocketed, and we saw a direct impact on sales. Amazing team.",
        rating: 5,
        avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&q=80&w=150",
    },
    {
        id: "7",
        name: "Tom Bradford",
        role: "E-commerce Manager",
        company: "GearPro",
        content: "Our new website design from Pearl Lemon increased our conversion rate by 65%. It's not just beautiful—it's built to sell. Worth every penny.",
        rating: 5,
        avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=150",
    },
    {
        id: "8",
        name: "Rachel Green",
        role: "Content Lead",
        company: "EduTech Pro",
        content: "Their content marketing strategy positioned us as thought leaders in the EdTech space. Blog traffic is up 300%, and we're generating qualified leads daily. Outstanding results!",
        rating: 5,
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150",
    },
];
