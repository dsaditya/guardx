export interface BlogSection {
  id: string;
  heading: string;
  body: string[];
  list?: string[];
  quote?: string;
  subsections?: { id: string; heading: string; body: string[] }[];
}

export interface BlogPost {
  slug: string;
  image?: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  intro: string;
  sections: BlogSection[];
  metaDescription: string;
}

export const blogPosts: BlogPost[] = [];

export const getPost = (slug: string) => blogPosts.find((p) => p.slug === slug);
export const categories = Array.from(new Set(blogPosts.map((p) => p.category)));
