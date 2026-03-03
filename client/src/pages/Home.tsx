/* ==========================================================================
   EduLearn Home Page — Kinetic Brutalism
   Sections: Hero, Stats, Categories, Featured Courses, Instructors,
             Testimonials, Newsletter CTA
   ========================================================================== */

import {
  ArrowRight,
  Play,
  CheckCircle,
  Star,
  Users,
  BookOpen,
  Award,
} from "lucide-react";
import { Link } from "wouter";
import { toast } from "sonner";
import CourseCard from "@/components/CourseCard";
import {
  courses,
  stats,
  categories,
  instructors,
  testimonials,
} from "@/lib/data";

// ─── Hero Section ───────────────────────────────────────────────────────────
function HeroSection() {
  return (
    <section className="bg-[#FAFAF5] border-b-2 border-[#1A1A1A] overflow-hidden">
      <div className="container py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text */}
          <div className="animate-fade-up">
            <div className="section-tag text-[#FF5733] border-[#FF5733] mb-6">
              #1 Online Learning Platform
            </div>
            <h1
              className="text-5xl lg:text-7xl font-extrabold text-[#1A1A1A] leading-[1.05] tracking-tight"
              style={{ fontFamily: "Space Grotesk, sans-serif" }}
            >
              Learn Skills That{" "}
              <span
                className="relative inline-block"
                style={{ color: "#FF5733" }}
              >
                Actually
                <svg
                  className="absolute -bottom-2 left-0 w-full"
                  viewBox="0 0 200 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 9 C50 3, 100 3, 198 9"
                    stroke="#FF5733"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
              </span>{" "}
              Matter
            </h1>
            <p className="mt-6 text-lg text-gray-600 leading-relaxed max-w-lg">
              Join over 50,000 learners mastering in-demand skills through
              hands-on courses taught by industry experts from Google, Airbnb,
              Netflix, and more.
            </p>

            {/* Trust signals */}
            <div className="mt-6 flex flex-wrap gap-3">
              {[
                "Lifetime Access",
                "Certificate Included",
                "30-Day Guarantee",
              ].map(item => (
                <span
                  key={item}
                  className="flex items-center gap-1.5 text-sm font-semibold text-[#1A1A1A]"
                >
                  <CheckCircle className="w-4 h-4 text-[#4A7C59]" />
                  {item}
                </span>
              ))}
            </div>

            {/* CTA buttons */}
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/courses">
                <button
                  className="brut-btn bg-[#FF5733] text-white font-extrabold px-8 py-4 text-base flex items-center gap-2"
                  style={{ fontFamily: "Space Grotesk, sans-serif" }}
                >
                  Browse Courses
                  <ArrowRight className="w-5 h-5" />
                </button>
              </Link>
              <button
                className="brut-btn bg-white text-[#1A1A1A] font-extrabold px-8 py-4 text-base flex items-center gap-2"
                style={{ fontFamily: "Space Grotesk, sans-serif" }}
                onClick={() => toast.info("Video preview coming soon!")}
              >
                <Play className="w-5 h-5 fill-[#FF5733] text-[#FF5733]" />
                Watch Demo
              </button>
            </div>

            {/* Social proof */}
            <div className="mt-8 flex items-center gap-3">
              <div className="flex -space-x-2">
                {[
                  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=40&h=40&fit=crop&crop=face",
                  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face",
                  "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=40&h=40&fit=crop&crop=face",
                  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=40&h=40&fit=crop&crop=face",
                ].map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt="Student"
                    className="w-9 h-9 rounded-full border-2 border-[#FAFAF5] object-cover"
                  />
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-3.5 h-3.5 fill-[#FF5733] text-[#FF5733]"
                    />
                  ))}
                </div>
                <p className="text-xs text-gray-500 font-medium">
                  Trusted by{" "}
                  <span className="font-bold text-[#1A1A1A]">50,000+</span>{" "}
                  students
                </p>
              </div>
            </div>
          </div>

          {/* Right: Hero image */}
          <div
            className="relative animate-fade-up"
            style={{ animationDelay: "0.2s" }}
          >
            {/* Decorative offset background */}
            <div className="absolute inset-0 translate-x-4 translate-y-4 bg-[#FF5733] border-2 border-[#1A1A1A]" />
            <div className="relative border-2 border-[#1A1A1A] overflow-hidden">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663399000840/SQJzznbgrbAg6zmjf7uVAN/hero-main-j9xwkHHY9gH5T9YCev3mCe.webp"
                alt="Students learning online"
                className="w-full h-auto"
              />
            </div>
            {/* Floating stat card */}
            <div
              className="absolute -bottom-6 -left-6 bg-white border-2 border-[#1A1A1A] p-4"
              style={{ boxShadow: "4px 4px 0px #1A1A1A" }}
            >
              <p
                className="text-2xl font-extrabold text-[#1A1A1A]"
                style={{ fontFamily: "Space Grotesk, sans-serif" }}
              >
                200+
              </p>
              <p className="text-xs text-gray-500 font-medium">
                Expert Courses
              </p>
            </div>
            {/* Floating rating card */}
            <div
              className="absolute -top-4 -right-4 bg-[#FF5733] border-2 border-[#1A1A1A] p-3 text-white"
              style={{ boxShadow: "4px 4px 0px #1A1A1A" }}
            >
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 fill-white text-white" />
                <span
                  className="text-lg font-extrabold"
                  style={{ fontFamily: "Space Grotesk, sans-serif" }}
                >
                  4.9
                </span>
              </div>
              <p className="text-xs font-medium opacity-90">Top Rated</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Stats Section ───────────────────────────────────────────────────────────
function StatsSection() {
  const icons = [Users, BookOpen, Award, Star];
  return (
    <section className="bg-[#1A1A1A] border-b-2 border-[#1A1A1A]">
      <div className="container py-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-0">
          {stats.map(({ value, label }, i) => {
            const Icon = icons[i];
            return (
              <div
                key={label}
                className={`flex flex-col items-center justify-center py-8 text-center ${
                  i < stats.length - 1 ? "border-r-2 border-gray-700" : ""
                }`}
              >
                <Icon className="w-6 h-6 text-[#FF5733] mb-2" />
                <span
                  className="text-4xl font-extrabold text-white"
                  style={{ fontFamily: "Space Grotesk, sans-serif" }}
                >
                  {value}
                </span>
                <span className="mt-1 text-sm text-gray-400 font-medium">
                  {label}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ─── Categories Section ──────────────────────────────────────────────────────
function CategoriesSection() {
  return (
    <section className="bg-[#FAFAF5] border-b-2 border-[#1A1A1A] py-20">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
          <div>
            <div className="section-tag text-[#4A7C59] border-[#4A7C59] mb-4">
              Explore Topics
            </div>
            <h2
              className="text-4xl lg:text-5xl font-extrabold text-[#1A1A1A] leading-tight"
              style={{ fontFamily: "Space Grotesk, sans-serif" }}
            >
              Browse by Category
            </h2>
          </div>
          <Link href="/courses">
            <button
              className="brut-btn bg-transparent text-[#1A1A1A] font-bold px-6 py-3 text-sm flex items-center gap-2 whitespace-nowrap"
              style={{ fontFamily: "Space Grotesk, sans-serif" }}
            >
              All Categories <ArrowRight className="w-4 h-4" />
            </button>
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 stagger-children">
          {categories.map(({ name, count, icon: Icon, color }) => (
            <Link key={name} href="/courses">
              <div
                className="group bg-white border-2 border-[#1A1A1A] p-5 text-center cursor-pointer"
                style={{
                  boxShadow: "3px 3px 0px #1A1A1A",
                  transition: "box-shadow 0.15s ease, transform 0.15s ease",
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.boxShadow =
                    "6px 6px 0px #1A1A1A";
                  (e.currentTarget as HTMLElement).style.transform =
                    "translate(-3px, -3px)";
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.boxShadow =
                    "3px 3px 0px #1A1A1A";
                  (e.currentTarget as HTMLElement).style.transform =
                    "translate(0, 0)";
                }}
              >
                <div
                  className={`w-12 h-12 ${color} border-2 border-[#1A1A1A] flex items-center justify-center mx-auto mb-3`}
                >
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3
                  className="text-sm font-extrabold text-[#1A1A1A] leading-tight"
                  style={{ fontFamily: "Space Grotesk, sans-serif" }}
                >
                  {name}
                </h3>
                <p className="mt-1 text-xs text-gray-500">{count} courses</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Featured Courses ────────────────────────────────────────────────────────
function FeaturedCoursesSection() {
  return (
    <section className="bg-[#FAFAF5] border-b-2 border-[#1A1A1A] py-20">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
          <div>
            <div className="section-tag text-[#FF5733] border-[#FF5733] mb-4">
              Top Picks
            </div>
            <h2
              className="text-4xl lg:text-5xl font-extrabold text-[#1A1A1A] leading-tight"
              style={{ fontFamily: "Space Grotesk, sans-serif" }}
            >
              Featured Courses
            </h2>
          </div>
          <Link href="/courses">
            <button
              className="brut-btn bg-transparent text-[#1A1A1A] font-bold px-6 py-3 text-sm flex items-center gap-2 whitespace-nowrap"
              style={{ fontFamily: "Space Grotesk, sans-serif" }}
            >
              View All Courses <ArrowRight className="w-4 h-4" />
            </button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 stagger-children">
          {courses.slice(0, 3).map(course => (
            <CourseCard
              key={course.id}
              course={course}
              onClick={() => toast.info(`Opening "${course.title}"...`)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Instructors Section ─────────────────────────────────────────────────────
function InstructorsSection() {
  return (
    <section className="bg-[#1A1A1A] border-b-2 border-[#1A1A1A] py-20">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
          <div>
            <div className="section-tag text-[#FF5733] border-[#FF5733] mb-4">
              Expert Mentors
            </div>
            <h2
              className="text-4xl lg:text-5xl font-extrabold text-white leading-tight"
              style={{ fontFamily: "Space Grotesk, sans-serif" }}
            >
              Learn from the Best
            </h2>
          </div>
          <Link href="/instructors">
            <button
              className="brut-btn bg-transparent text-white border-white font-bold px-6 py-3 text-sm flex items-center gap-2 whitespace-nowrap"
              style={{
                fontFamily: "Space Grotesk, sans-serif",
                boxShadow: "4px 4px 0px white",
              }}
            >
              All Instructors <ArrowRight className="w-4 h-4" />
            </button>
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 stagger-children">
          {instructors.map(instructor => (
            <div
              key={instructor.id}
              className="bg-[#2A2A2A] border-2 border-gray-600 p-6 group cursor-pointer"
              style={{
                boxShadow: "4px 4px 0px #FF5733",
                transition: "box-shadow 0.15s ease, transform 0.15s ease",
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.boxShadow =
                  "7px 7px 0px #FF5733";
                (e.currentTarget as HTMLElement).style.transform =
                  "translate(-3px, -3px)";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.boxShadow =
                  "4px 4px 0px #FF5733";
                (e.currentTarget as HTMLElement).style.transform =
                  "translate(0, 0)";
              }}
              onClick={() =>
                toast.info(`Viewing ${instructor.name}'s profile...`)
              }
            >
              <div className="relative mb-4">
                <img
                  src={instructor.avatar}
                  alt={instructor.name}
                  className="w-20 h-20 object-cover border-2 border-gray-500 group-hover:border-[#FF5733] transition-colors"
                />
                <div className="absolute -bottom-2 -right-2 bg-[#FF5733] border-2 border-gray-600 px-2 py-0.5">
                  <span
                    className="text-xs font-extrabold text-white"
                    style={{ fontFamily: "Space Grotesk, sans-serif" }}
                  >
                    {instructor.company}
                  </span>
                </div>
              </div>

              <h3
                className="text-lg font-extrabold text-white group-hover:text-[#FF5733] transition-colors"
                style={{ fontFamily: "Space Grotesk, sans-serif" }}
              >
                {instructor.name}
              </h3>
              <p className="text-sm text-gray-400 mt-1">{instructor.title}</p>

              <div className="mt-4 flex items-center justify-between text-xs text-gray-500">
                <span className="flex items-center gap-1">
                  <Users className="w-3.5 h-3.5" />
                  {instructor.students.toLocaleString()}
                </span>
                <span className="flex items-center gap-1">
                  <BookOpen className="w-3.5 h-3.5" />
                  {instructor.courses} courses
                </span>
                <span className="flex items-center gap-1">
                  <Star className="w-3.5 h-3.5 fill-[#FF5733] text-[#FF5733]" />
                  {instructor.rating}
                </span>
              </div>

              <div className="mt-4 flex flex-wrap gap-1">
                {instructor.specialties.slice(0, 3).map(s => (
                  <span
                    key={s}
                    className="text-xs px-2 py-0.5 border border-gray-600 text-gray-400"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Testimonials Section ────────────────────────────────────────────────────
function TestimonialsSection() {
  return (
    <section className="bg-[#FAFAF5] border-b-2 border-[#1A1A1A] py-20">
      <div className="container">
        <div className="text-center mb-12">
          <div className="section-tag text-[#4A7C59] border-[#4A7C59] mb-4 mx-auto inline-block">
            Student Stories
          </div>
          <h2
            className="text-4xl lg:text-5xl font-extrabold text-[#1A1A1A] leading-tight"
            style={{ fontFamily: "Space Grotesk, sans-serif" }}
          >
            Real Results, Real People
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 stagger-children">
          {testimonials.map(t => (
            <div
              key={t.id}
              className="bg-white border-2 border-[#1A1A1A] p-6"
              style={{ boxShadow: "4px 4px 0px #1A1A1A" }}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-[#FF5733] text-[#FF5733]"
                  />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-gray-700 leading-relaxed text-sm mb-6">
                "{t.quote}"
              </blockquote>

              {/* Course tag */}
              <div className="mb-4">
                <span className="text-xs font-bold text-[#FF5733] border border-[#FF5733] px-2 py-0.5">
                  {t.course}
                </span>
              </div>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t-2 border-[#1A1A1A]">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-10 h-10 object-cover border-2 border-[#1A1A1A]"
                />
                <div>
                  <p
                    className="text-sm font-extrabold text-[#1A1A1A]"
                    style={{ fontFamily: "Space Grotesk, sans-serif" }}
                  >
                    {t.name}
                  </p>
                  <p className="text-xs text-gray-500">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── About Teaser Section ────────────────────────────────────────────────────
function AboutTeaserSection() {
  return (
    <section className="bg-[#FF5733] border-b-2 border-[#1A1A1A] py-20">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="section-tag text-white border-white mb-6">
              Our Mission
            </div>
            <h2
              className="text-4xl lg:text-5xl font-extrabold text-white leading-tight"
              style={{ fontFamily: "Space Grotesk, sans-serif" }}
            >
              Education Should Be Accessible to Everyone
            </h2>
            <p className="mt-6 text-white/90 text-lg leading-relaxed">
              We believe that world-class education shouldn't be locked behind
              expensive degrees. Our platform connects ambitious learners with
              industry experts who teach real-world skills that employers
              actually want.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/about">
                <button
                  className="bg-white text-[#FF5733] font-extrabold px-8 py-4 text-base border-2 border-white"
                  style={{
                    fontFamily: "Space Grotesk, sans-serif",
                    boxShadow: "4px 4px 0px #1A1A1A",
                    transition: "box-shadow 0.15s ease, transform 0.15s ease",
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLElement).style.boxShadow =
                      "7px 7px 0px #1A1A1A";
                    (e.currentTarget as HTMLElement).style.transform =
                      "translate(-3px, -3px)";
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLElement).style.boxShadow =
                      "4px 4px 0px #1A1A1A";
                    (e.currentTarget as HTMLElement).style.transform =
                      "translate(0, 0)";
                  }}
                >
                  Our Story
                </button>
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 translate-x-4 translate-y-4 bg-[#1A1A1A] border-2 border-[#1A1A1A]" />
            <div className="relative border-2 border-[#1A1A1A] overflow-hidden">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663399000840/SQJzznbgrbAg6zmjf7uVAN/about-team-LjdTM6vTqrmnzUkCFSVneQ.webp"
                alt="EduLearn team"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Newsletter CTA ──────────────────────────────────────────────────────────
function NewsletterSection() {
  return (
    <section className="bg-[#FAFAF5] py-20">
      <div className="container">
        <div
          className="bg-[#1A1A1A] border-2 border-[#1A1A1A] p-10 lg:p-16 text-center"
          style={{ boxShadow: "8px 8px 0px #FF5733" }}
        >
          <div className="section-tag text-[#FF5733] border-[#FF5733] mb-6 inline-block">
            Stay Updated
          </div>
          <h2
            className="text-4xl lg:text-5xl font-extrabold text-white leading-tight"
            style={{ fontFamily: "Space Grotesk, sans-serif" }}
          >
            Start Learning Today
          </h2>
          <p className="mt-4 text-gray-400 text-lg max-w-xl mx-auto">
            Get weekly course recommendations, industry insights, and exclusive
            discounts delivered to your inbox.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 bg-[#2A2A2A] border-2 border-gray-600 text-white placeholder-gray-500 px-4 py-3 text-sm focus:outline-none focus:border-[#FF5733] transition-colors"
              style={{ fontFamily: "Lato, sans-serif" }}
            />
            <button
              className="brut-btn bg-[#FF5733] text-white font-extrabold px-6 py-3 text-sm whitespace-nowrap"
              style={{
                fontFamily: "Space Grotesk, sans-serif",
                boxShadow: "4px 4px 0px white",
              }}
              onClick={() =>
                toast.success("You're subscribed! Welcome to EduLearn.")
              }
            >
              Subscribe Free
            </button>
          </div>
          <p className="mt-4 text-xs text-gray-600">
            No spam, ever. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
}

// ─── Main Export ─────────────────────────────────────────────────────────────
export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <StatsSection />
      <CategoriesSection />
      <FeaturedCoursesSection />
      <InstructorsSection />
      <TestimonialsSection />
      <AboutTeaserSection />
      <NewsletterSection />
    </div>
  );
}
