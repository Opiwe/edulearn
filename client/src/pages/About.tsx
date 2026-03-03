/* ==========================================================================
   EduLearn About Page — Kinetic Brutalism
   ========================================================================== */

import { CheckCircle, Target, Heart, Zap } from "lucide-react";
import { toast } from "sonner";
import { stats } from "@/lib/data";

const values = [
  {
    icon: Target,
    title: "Practical First",
    description:
      "Every course is built around real-world projects. You'll graduate with a portfolio, not just a certificate.",
    color: "bg-[#FF5733]",
  },
  {
    icon: Heart,
    title: "Student-Centered",
    description:
      "Our instructors are mentors, not lecturers. They're invested in your success and available for support.",
    color: "bg-[#4A7C59]",
  },
  {
    icon: Zap,
    title: "Always Current",
    description:
      "Curriculum is updated quarterly to reflect the latest industry tools, frameworks, and best practices.",
    color: "bg-[#1A1A1A]",
  },
];

const milestones = [
  { year: "2019", event: "EduLearn founded with 5 courses and 200 students" },
  { year: "2020", event: "Reached 5,000 students; launched mobile app" },
  { year: "2021", event: "Partnered with 20+ industry-leading companies" },
  { year: "2022", event: "Expanded to 100+ courses across 8 categories" },
  { year: "2023", event: "50,000 students worldwide; launched certificate program" },
  { year: "2026", event: "200+ courses, 40 instructors, global community" },
];

export default function About() {
  return (
    <div className="min-h-screen bg-[#FAFAF5]">
      {/* Hero */}
      <div className="bg-[#FAFAF5] border-b-2 border-[#1A1A1A] py-20">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-up">
              <div className="section-tag text-[#FF5733] border-[#FF5733] mb-6">Our Story</div>
              <h1
                className="text-5xl lg:text-6xl font-extrabold text-[#1A1A1A] leading-tight"
                style={{ fontFamily: "Space Grotesk, sans-serif" }}
              >
                We Believe in Learning Without Limits
              </h1>
              <p className="mt-6 text-lg text-gray-600 leading-relaxed">
                EduLearn was founded in 2019 with a simple belief: that world-class education
                should be accessible to anyone, anywhere. We started with 5 courses and 200
                students. Today, we're a global community of 50,000+ learners.
              </p>
              <div className="mt-8 space-y-3">
                {[
                  "Founded by educators and engineers from top tech companies",
                  "100% of instructors have 5+ years of industry experience",
                  "Students in 120+ countries worldwide",
                ].map((point) => (
                  <div key={point} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#4A7C59] mt-0.5 shrink-0" />
                    <p className="text-gray-700">{point}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 translate-x-4 translate-y-4 bg-[#FF5733] border-2 border-[#1A1A1A]" />
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
      </div>

      {/* Stats */}
      <div className="bg-[#1A1A1A] border-b-2 border-[#1A1A1A] py-12">
        <div className="container">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-0">
            {stats.map(({ value, label }, i) => (
              <div
                key={label}
                className={`flex flex-col items-center justify-center py-8 text-center ${
                  i < stats.length - 1 ? "border-r-2 border-gray-700" : ""
                }`}
              >
                <span
                  className="text-4xl font-extrabold text-[#FF5733]"
                  style={{ fontFamily: "Space Grotesk, sans-serif" }}
                >
                  {value}
                </span>
                <span className="mt-1 text-sm text-gray-400 font-medium">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Values */}
      <div className="border-b-2 border-[#1A1A1A] py-20">
        <div className="container">
          <div className="text-center mb-12">
            <div className="section-tag text-[#4A7C59] border-[#4A7C59] mb-4 inline-block">What We Stand For</div>
            <h2
              className="text-4xl font-extrabold text-[#1A1A1A]"
              style={{ fontFamily: "Space Grotesk, sans-serif" }}
            >
              Our Core Values
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 stagger-children">
            {values.map(({ icon: Icon, title, description, color }) => (
              <div
                key={title}
                className="bg-white border-2 border-[#1A1A1A] p-8"
                style={{ boxShadow: "4px 4px 0px #1A1A1A" }}
              >
                <div className={`w-14 h-14 ${color} border-2 border-[#1A1A1A] flex items-center justify-center mb-6`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3
                  className="text-xl font-extrabold text-[#1A1A1A] mb-3"
                  style={{ fontFamily: "Space Grotesk, sans-serif" }}
                >
                  {title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Timeline */}
      <div className="bg-[#FAFAF5] border-b-2 border-[#1A1A1A] py-20">
        <div className="container">
          <div className="text-center mb-12">
            <div className="section-tag text-[#FF5733] border-[#FF5733] mb-4 inline-block">Our Journey</div>
            <h2
              className="text-4xl font-extrabold text-[#1A1A1A]"
              style={{ fontFamily: "Space Grotesk, sans-serif" }}
            >
              How We Got Here
            </h2>
          </div>
          <div className="max-w-2xl mx-auto">
            {milestones.map((m, i) => (
              <div key={m.year} className="flex gap-6 mb-6">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-[#FF5733] border-2 border-[#1A1A1A] flex items-center justify-center shrink-0">
                    <span
                      className="text-xs font-extrabold text-white"
                      style={{ fontFamily: "Space Grotesk, sans-serif" }}
                    >
                      {m.year}
                    </span>
                  </div>
                  {i < milestones.length - 1 && (
                    <div className="w-0.5 flex-1 bg-[#1A1A1A] mt-2" />
                  )}
                </div>
                <div
                  className="bg-white border-2 border-[#1A1A1A] p-4 mb-2 flex-1"
                  style={{ boxShadow: "3px 3px 0px #1A1A1A" }}
                >
                  <p className="text-gray-700">{m.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="py-20">
        <div className="container text-center">
          <h2
            className="text-4xl font-extrabold text-[#1A1A1A]"
            style={{ fontFamily: "Space Grotesk, sans-serif" }}
          >
            Ready to Join the Community?
          </h2>
          <p className="mt-4 text-gray-600 text-lg max-w-lg mx-auto">
            Start your learning journey today with access to 200+ expert-led courses.
          </p>
          <button
            className="mt-8 brut-btn bg-[#FF5733] text-white font-extrabold px-10 py-4 text-base"
            style={{ fontFamily: "Space Grotesk, sans-serif" }}
            onClick={() => toast.info("Sign up feature coming soon!")}
          >
            Get Started for Free
          </button>
        </div>
      </div>
    </div>
  );
}
