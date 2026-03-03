/* ==========================================================================
   EduLearn Courses Page — Kinetic Brutalism
   Full course catalog with category filter, level filter, and search
   ========================================================================== */

import { useState } from "react";
import { Search, SlidersHorizontal } from "lucide-react";
import { toast } from "sonner";
import CourseCard from "@/components/CourseCard";
import { courses, categories } from "@/lib/data";

const levels = ["All", "Beginner", "Intermediate", "Advanced"];

export default function Courses() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedLevel, setSelectedLevel] = useState("All");

  const filtered = courses.filter((c) => {
    const matchSearch =
      c.title.toLowerCase().includes(search.toLowerCase()) ||
      c.instructor.toLowerCase().includes(search.toLowerCase());
    const matchCategory =
      selectedCategory === "All" ||
      c.category.toLowerCase().includes(selectedCategory.toLowerCase().split(" ")[0]);
    const matchLevel = selectedLevel === "All" || c.level === selectedLevel;
    return matchSearch && matchCategory && matchLevel;
  });

  return (
    <div className="min-h-screen bg-[#FAFAF5]">
      {/* Page header */}
      <div className="bg-[#1A1A1A] border-b-2 border-[#1A1A1A] py-16">
        <div className="container">
          <div className="section-tag text-[#FF5733] border-[#FF5733] mb-4">All Courses</div>
          <h1
            className="text-5xl font-extrabold text-white leading-tight"
            style={{ fontFamily: "Space Grotesk, sans-serif" }}
          >
            Explore Our Catalog
          </h1>
          <p className="mt-3 text-gray-400 text-lg max-w-xl">
            200+ hands-on courses taught by industry experts. Find your next skill.
          </p>
        </div>
      </div>

      {/* Filters */}
      <div className="border-b-2 border-[#1A1A1A] bg-white sticky top-16 z-40">
        <div className="container py-4">
          <div className="flex flex-col md:flex-row gap-4 items-start md:items-center">
            {/* Search */}
            <div className="relative flex-1 max-w-sm">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search courses or instructors..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full border-2 border-[#1A1A1A] pl-10 pr-4 py-2.5 text-sm bg-[#FAFAF5] focus:outline-none focus:border-[#FF5733] transition-colors"
                style={{ fontFamily: "Lato, sans-serif" }}
              />
            </div>

            {/* Category filter */}
            <div className="flex items-center gap-2 flex-wrap">
              <SlidersHorizontal className="w-4 h-4 text-gray-500 shrink-0" />
              {["All", ...categories.map((c) => c.name)].slice(0, 5).map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`text-xs font-bold px-3 py-1.5 border-2 border-[#1A1A1A] transition-all ${
                    selectedCategory === cat
                      ? "bg-[#FF5733] text-white"
                      : "bg-white text-[#1A1A1A] hover:bg-[#FAFAF5]"
                  }`}
                  style={{ fontFamily: "Space Grotesk, sans-serif" }}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Level filter */}
            <div className="flex items-center gap-2 flex-wrap">
              {levels.map((level) => (
                <button
                  key={level}
                  onClick={() => setSelectedLevel(level)}
                  className={`text-xs font-bold px-3 py-1.5 border-2 border-[#1A1A1A] transition-all ${
                    selectedLevel === level
                      ? "bg-[#1A1A1A] text-white"
                      : "bg-white text-[#1A1A1A] hover:bg-[#FAFAF5]"
                  }`}
                  style={{ fontFamily: "Space Grotesk, sans-serif" }}
                >
                  {level}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Course grid */}
      <div className="container py-12">
        {filtered.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-4xl mb-4">🔍</p>
            <h3
              className="text-2xl font-extrabold text-[#1A1A1A]"
              style={{ fontFamily: "Space Grotesk, sans-serif" }}
            >
              No courses found
            </h3>
            <p className="mt-2 text-gray-500">Try adjusting your filters or search term.</p>
            <button
              className="mt-6 brut-btn bg-[#FF5733] text-white font-bold px-6 py-3 text-sm"
              style={{ fontFamily: "Space Grotesk, sans-serif" }}
              onClick={() => {
                setSearch("");
                setSelectedCategory("All");
                setSelectedLevel("All");
              }}
            >
              Clear Filters
            </button>
          </div>
        ) : (
          <>
            <p className="text-sm text-gray-500 mb-6 font-medium">
              Showing <span className="font-bold text-[#1A1A1A]">{filtered.length}</span> courses
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 stagger-children">
              {filtered.map((course) => (
                <CourseCard
                  key={course.id}
                  course={course}
                  onClick={() => toast.info(`Opening "${course.title}"...`)}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
