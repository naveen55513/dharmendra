import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
import type { BlogPost as BlogPostType } from '../data/mockData';
import { mockBlogPosts } from '../data/mockData';

export interface CreateBlogPostInput {
  title: string;
  excerpt: string;
  content: string;
  category: 'government-exams' | 'fitness' | 'motivation';
  tags: string[];
  author: string;
  featuredImage?: string;
  readTime?: string;
  date?: string;
}

interface BlogContextValue {
  posts: BlogPostType[];
  addPost: (input: CreateBlogPostInput) => BlogPostType;
  deletePost: (id: number) => void;
}

const BlogContext = createContext<BlogContextValue | undefined>(undefined);

const STORAGE_KEY = 'blogPosts';

function generateSlugFromTitle(title: string): string {
  const base = title
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
  return base || `post-${Date.now()}`;
}

function getInitialPosts(): BlogPostType[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw) as BlogPostType[];
      if (Array.isArray(parsed) && parsed.length >= 0) {
        return parsed;
      }
    }
  } catch {}
  return mockBlogPosts;
}

export const BlogProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [posts, setPosts] = useState<BlogPostType[]>(() => getInitialPosts());

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(posts));
    } catch {}
  }, [posts]);

  const addPost = (input: CreateBlogPostInput): BlogPostType => {
    const nextId = (posts.reduce((max, p) => Math.max(max, p.id), 0) || 0) + 1;
    let slug = generateSlugFromTitle(input.title);
    const existingSlugs = new Set(posts.map(p => p.slug));
    if (existingSlugs.has(slug)) {
      let counter = 2;
      while (existingSlugs.has(`${slug}-${counter}`)) counter += 1;
      slug = `${slug}-${counter}`;
    }

    const newPost: BlogPostType = {
      id: nextId,
      title: input.title,
      slug,
      excerpt: input.excerpt,
      content: input.content,
      category: input.category,
      tags: input.tags,
      date: input.date || new Date().toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' }),
      readTime: input.readTime || `${Math.max(1, Math.round(input.content.split(/\s+/).length / 200))} min read`,
      author: input.author,
      featuredImage: input.featuredImage,
    };

    setPosts(prev => [newPost, ...prev]);
    return newPost;
  };

  const deletePost = (id: number) => {
    setPosts(prev => prev.filter(p => p.id !== id));
  };

  const value = useMemo<BlogContextValue>(
    () => ({ posts, addPost, deletePost }),
    [posts]
  );

  return <BlogContext.Provider value={value}>{children}</BlogContext.Provider>;
};

export function useBlog(): BlogContextValue {
  const ctx = useContext(BlogContext);
  if (!ctx) {
    throw new Error('useBlog must be used within BlogProvider');
  }
  return ctx;
}


