/* ==========================================================================
   EduLearn — Shared Data
   ========================================================================== */

import {
  Code2,
  Palette,
  BarChart3,
  TrendingUp,
  Camera,
  Megaphone,
} from "lucide-react";
import type { Course } from "@/components/CourseCard";

export const courses: Course[] = [
  {
    id: 1,
    title: "Complete Web Development Bootcamp 2026",
    instructor: "Sarah Mitchell",
    category: "Web Dev",
    level: "Beginner",
    rating: 4.9,
    students: 48320,
    duration: "52h",
    lessons: 312,
    price: 89,
    originalPrice: 199,
    image:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663399000840/SQJzznbgrbAg6zmjf7uVAN/course-webdev-ikzFo7mGaary8WbQrRYfZM.webp",
    tag: "Bestseller",
    tagColor: "bg-[#FF5733] text-white",
  },
  {
    id: 2,
    title: "UI/UX Design Mastery: From Figma to Prototype",
    instructor: "James Okafor",
    category: "Design",
    level: "Intermediate",
    rating: 4.8,
    students: 31450,
    duration: "38h",
    lessons: 224,
    price: 79,
    originalPrice: 179,
    image:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663399000840/SQJzznbgrbAg6zmjf7uVAN/course-design-FJMUE67XAmF8KepJVgfqZo.webp",
    tag: "New",
    tagColor: "bg-[#4A7C59] text-white",
  },
  {
    id: 3,
    title: "Data Science & Machine Learning with Python",
    instructor: "Dr. Priya Sharma",
    category: "Data Science",
    level: "Intermediate",
    rating: 4.7,
    students: 27890,
    duration: "64h",
    lessons: 380,
    price: 99,
    originalPrice: 229,
    image:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663399000840/SQJzznbgrbAg6zmjf7uVAN/course-data-Mt9RpoZXkBgkaGUGQfdf7Y.webp",
    tag: "Hot",
    tagColor: "bg-[#1A1A1A] text-white",
  },
  {
    id: 4,
    title: "React & Next.js: Build Production-Ready Apps",
    instructor: "Alex Chen",
    category: "Web Dev",
    level: "Advanced",
    rating: 4.9,
    students: 19200,
    duration: "44h",
    lessons: 265,
    price: 94,
    originalPrice: 199,
    image:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663399000840/SQJzznbgrbAg6zmjf7uVAN/course-webdev-ikzFo7mGaary8WbQrRYfZM.webp",
    tag: "Bestseller",
    tagColor: "bg-[#FF5733] text-white",
  },
  {
    id: 5,
    title: "Brand Identity Design: Strategy to Execution",
    instructor: "Maria Santos",
    category: "Design",
    level: "Beginner",
    rating: 4.6,
    students: 14750,
    duration: "28h",
    lessons: 168,
    price: 69,
    originalPrice: 149,
    image:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663399000840/SQJzznbgrbAg6zmjf7uVAN/course-design-FJMUE67XAmF8KepJVgfqZo.webp",
  },
  {
    id: 6,
    title: "Deep Learning & Neural Networks Fundamentals",
    instructor: "Dr. Priya Sharma",
    category: "Data Science",
    level: "Advanced",
    rating: 4.8,
    students: 11340,
    duration: "56h",
    lessons: 334,
    price: 109,
    originalPrice: 249,
    image:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663399000840/SQJzznbgrbAg6zmjf7uVAN/course-data-Mt9RpoZXkBgkaGUGQfdf7Y.webp",
    tag: "New",
    tagColor: "bg-[#4A7C59] text-white",
  },
];

export const instructors = [
  {
    id: 1,
    name: "Sarah Mitchell",
    title: "Senior Full-Stack Engineer",
    company: "Ex-Google",
    students: 48320,
    courses: 6,
    rating: 4.9,
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=face",
    bio: "10+ years building scalable web applications. Passionate about making complex concepts accessible to everyone.",
    specialties: ["React", "Node.js", "TypeScript", "AWS"],
  },
  {
    id: 2,
    name: "James Okafor",
    title: "Lead Product Designer",
    company: "Ex-Airbnb",
    students: 31450,
    courses: 4,
    rating: 4.8,
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face",
    bio: "Award-winning designer who has shaped products used by millions. Expert in design systems and user research.",
    specialties: ["Figma", "Design Systems", "UX Research", "Prototyping"],
  },
  {
    id: 3,
    name: "Dr. Priya Sharma",
    title: "AI Research Scientist",
    company: "Ex-DeepMind",
    students: 39230,
    courses: 5,
    rating: 4.9,
    avatar:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=200&fit=crop&crop=face",
    bio: "PhD in Machine Learning from MIT. Published researcher with a gift for explaining complex AI concepts simply.",
    specialties: ["Python", "TensorFlow", "PyTorch", "Statistics"],
  },
  {
    id: 4,
    name: "Alex Chen",
    title: "Principal Engineer",
    company: "Ex-Netflix",
    students: 19200,
    courses: 3,
    rating: 4.9,
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&crop=face",
    bio: "Architect of streaming infrastructure serving 200M+ users. Specializes in performance and scalability.",
    specialties: ["React", "Next.js", "System Design", "Performance"],
  },
];

export const stats = [
  { value: "50K+", label: "Active Students" },
  { value: "200+", label: "Expert Courses" },
  { value: "40+", label: "Top Instructors" },
  { value: "4.8", label: "Average Rating" },
];

export const categories = [
  { name: "Web Development", count: 68, icon: Code2, color: "bg-[#FF5733]" },
  { name: "UI/UX Design", count: 42, icon: Palette, color: "bg-[#4A7C59]" },
  { name: "Data Science", count: 55, icon: BarChart3, color: "bg-[#1A1A1A]" },
  { name: "Business", count: 37, icon: TrendingUp, color: "bg-[#FF5733]" },
  { name: "Photography", count: 24, icon: Camera, color: "bg-[#4A7C59]" },
  { name: "Marketing", count: 31, icon: Megaphone, color: "bg-[#1A1A1A]" },
];

export const testimonials = [
  {
    id: 1,
    name: "Lucas Fernandez",
    role: "Frontend Developer at Spotify",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    quote:
      "EduLearn completely transformed my career. I went from zero coding knowledge to landing a job at Spotify in just 8 months. The quality of instruction is unmatched.",
    course: "Complete Web Development Bootcamp",
    rating: 5,
  },
  {
    id: 2,
    name: "Aisha Patel",
    role: "UX Designer at Microsoft",
    avatar:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop&crop=face",
    quote:
      "The UI/UX course was incredibly practical. I built a portfolio of 5 real projects and got hired within 3 months of completing it. Best investment I've ever made.",
    course: "UI/UX Design Mastery",
    rating: 5,
  },
  {
    id: 3,
    name: "Marcus Thompson",
    role: "Data Scientist at Tesla",
    avatar:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&h=100&fit=crop&crop=face",
    quote:
      "Dr. Sharma's teaching style is exceptional. Complex ML concepts become crystal clear. I now lead a data science team at Tesla — this course was the foundation.",
    course: "Data Science & Machine Learning",
    rating: 5,
  },
];
