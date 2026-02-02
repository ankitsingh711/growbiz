export interface CaseStudy {
    slug: string;
    title: string;
    category: "Video" | "Written" | "SEO" | "Lead Gen";
    summary: string;
    thumbnail: string; // URL to image/video thumbnail
    metrics?: {
        label: string;
        value: string;
    }[];
    content?: string; // Markdown or HTML content
}

export interface TeamMember {
    slug: string;
    name: string;
    role: string;
    bio: string;
    image: string;
    socials: {
        linkedin?: string;
        twitter?: string;
    };
}
