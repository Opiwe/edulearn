/* ==========================================================================
   EduLearn Instructors Page — Kinetic Brutalism
   ========================================================================== */

import { Star, Users, BookOpen, ArrowRight } from "lucide-react";
import { toast } from "sonner";
import { instructors } from "@/lib/data";

export default function Instructors() {
  return (
    <div className="min-h-screen bg-[#FAFAF5]">
      {/* Page header */}
      <div className="bg-[#FF5733] border-b-2 border-[#1A1A1A] py-16">
        <div className="container">
          <div className="section-tag text-white border-white mb-4">Expert Mentors</div>
          <h1
            className="text-5xl font-extrabold text-white leading-tight"
            style={{ fontFamily: "Space Grotesk, sans-serif" }}
          >
            Meet Your Instructors
          </h1>
          <p className="mt-3 text-white/90 text-lg max-w-xl">
            Learn from professionals who've built products used by millions at the world's top companies.
          </p>
        </div>
      </div>

      {/* Instructors grid */}
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 stagger-children">
          {instructors.map((instructor) => (
            <div
              key={instructor.id}
              className="bg-white border-2 border-[#1A1A1A] p-8 flex flex-col sm:flex-row gap-6 cursor-pointer group"
              style={{
                boxShadow: "4px 4px 0px #1A1A1A",
                transition: "box-shadow 0.15s ease, transform 0.15s ease",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = "8px 8px 0px #1A1A1A";
                (e.currentTarget as HTMLElement).style.transform = "translate(-4px, -4px)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = "4px 4px 0px #1A1A1A";
                (e.currentTarget as HTMLElement).style.transform = "translate(0, 0)";
              }}
              onClick={() => toast.info(`Viewing ${instructor.name}'s full profile...`)}
            >
              {/* Avatar */}
              <div className="shrink-0">
                <div className="relative">
                  <img
                    src={instructor.avatar}
                    alt={instructor.name}
                    className="w-24 h-24 object-cover border-2 border-[#1A1A1A]"
                  />
                  <div className="absolute -bottom-2 -right-2 bg-[#FF5733] border-2 border-[#1A1A1A] px-2 py-0.5">
                    <span
                      className="text-xs font-extrabold text-white"
                      style={{ fontFamily: "Space Grotesk, sans-serif" }}
                    >
                      {instructor.company}
                    </span>
                  </div>
                </div>
              </div>

              {/* Info */}
              <div className="flex-1">
                <h2
                  className="text-2xl font-extrabold text-[#1A1A1A] group-hover:text-[#FF5733] transition-colors"
                  style={{ fontFamily: "Space Grotesk, sans-serif" }}
                >
                  {instructor.name}
                </h2>
                <p className="text-sm text-gray-500 mt-1">{instructor.title}</p>

                <p className="mt-3 text-sm text-gray-600 leading-relaxed">{instructor.bio}</p>

                {/* Stats */}
                <div className="mt-4 flex items-center gap-5 text-sm">
                  <span className="flex items-center gap-1.5 font-medium text-[#1A1A1A]">
                    <Users className="w-4 h-4 text-[#FF5733]" />
                    {instructor.students.toLocaleString()} students
                  </span>
                  <span className="flex items-center gap-1.5 font-medium text-[#1A1A1A]">
                    <BookOpen className="w-4 h-4 text-[#FF5733]" />
                    {instructor.courses} courses
                  </span>
                  <span className="flex items-center gap-1.5 font-medium text-[#1A1A1A]">
                    <Star className="w-4 h-4 fill-[#FF5733] text-[#FF5733]" />
                    {instructor.rating} rating
                  </span>
                </div>

                {/* Specialties */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {instructor.specialties.map((s) => (
                    <span
                      key={s}
                      className="text-xs font-bold px-2 py-1 border-2 border-[#1A1A1A] text-[#1A1A1A]"
                      style={{ fontFamily: "Space Grotesk, sans-serif" }}
                    >
                      {s}
                    </span>
                  ))}
                </div>

                <button
                  className="mt-5 flex items-center gap-2 text-sm font-extrabold text-[#FF5733] group-hover:gap-3 transition-all"
                  style={{ fontFamily: "Space Grotesk, sans-serif" }}
                >
                  View Courses <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Become an instructor CTA */}
        <div
          className="mt-16 bg-[#1A1A1A] border-2 border-[#1A1A1A] p-10 text-center"
          style={{ boxShadow: "8px 8px 0px #FF5733" }}
        >
          <h2
            className="text-3xl font-extrabold text-white"
            style={{ fontFamily: "Space Grotesk, sans-serif" }}
          >
            Share Your Expertise
          </h2>
          <p className="mt-3 text-gray-400 max-w-lg mx-auto">
            Join our community of expert instructors and help thousands of learners advance their careers.
          </p>
          <button
            className="mt-6 brut-btn bg-[#FF5733] text-white font-extrabold px-8 py-4 text-base"
            style={{ fontFamily: "Space Grotesk, sans-serif", boxShadow: "4px 4px 0px white" }}
            onClick={() => toast.info("Instructor application coming soon!")}
          >
            Become an Instructor
          </button>
        </div>
      </div>
    </div>
  );
}
