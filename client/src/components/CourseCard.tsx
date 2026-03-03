/* ==========================================================================
   EduLearn CourseCard — Kinetic Brutalism
   Hard offset shadow, bold border, tactile hover lift
   ========================================================================== */

import { Star, Clock, Users, BookOpen } from "lucide-react";

export interface Course {
  id: number;
  title: string;
  instructor: string;
  category: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  rating: number;
  students: number;
  duration: string;
  lessons: number;
  price: number;
  originalPrice?: number;
  image: string;
  tag?: string;
  tagColor?: string;
}

interface CourseCardProps {
  course: Course;
  onClick?: () => void;
}

const levelColors: Record<string, string> = {
  Beginner: "bg-[#4A7C59] text-white",
  Intermediate: "bg-[#FF5733] text-white",
  Advanced: "bg-[#1A1A1A] text-white",
};

export default function CourseCard({ course, onClick }: CourseCardProps) {
  return (
    <article
      className="bg-white border-2 border-[#1A1A1A] cursor-pointer group"
      style={{
        boxShadow: "4px 4px 0px #1A1A1A",
        transition: "box-shadow 0.15s ease, transform 0.15s ease",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.boxShadow = "7px 7px 0px #1A1A1A";
        (e.currentTarget as HTMLElement).style.transform = "translate(-3px, -3px)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.boxShadow = "4px 4px 0px #1A1A1A";
        (e.currentTarget as HTMLElement).style.transform = "translate(0, 0)";
      }}
      onClick={onClick}
    >
      {/* Image */}
      <div className="relative overflow-hidden border-b-2 border-[#1A1A1A] aspect-video bg-gray-100">
        <img
          src={course.image}
          alt={course.title}
          className="w-full h-full object-cover"
        />
        {/* Category tag */}
        <div className="absolute top-3 left-3">
          <span
            className="text-xs font-extrabold uppercase tracking-wider px-2 py-1 border-2 border-[#1A1A1A] bg-[#FAFAF5]"
            style={{ fontFamily: "Space Grotesk, sans-serif" }}
          >
            {course.category}
          </span>
        </div>
        {/* Optional badge */}
        {course.tag && (
          <div className="absolute top-3 right-3">
            <span
              className={`text-xs font-extrabold uppercase tracking-wider px-2 py-1 border-2 border-[#1A1A1A] ${course.tagColor || "bg-[#FF5733] text-white"}`}
              style={{ fontFamily: "Space Grotesk, sans-serif" }}
            >
              {course.tag}
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Level */}
        <span
          className={`text-xs font-extrabold uppercase tracking-wider px-2 py-0.5 ${levelColors[course.level]}`}
          style={{ fontFamily: "Space Grotesk, sans-serif" }}
        >
          {course.level}
        </span>

        {/* Title */}
        <h3
          className="mt-3 text-lg font-extrabold text-[#1A1A1A] leading-tight group-hover:text-[#FF5733] transition-colors"
          style={{ fontFamily: "Space Grotesk, sans-serif" }}
        >
          {course.title}
        </h3>

        {/* Instructor */}
        <p className="mt-1 text-sm text-gray-500 font-medium">{course.instructor}</p>

        {/* Stats row */}
        <div className="mt-3 flex items-center gap-4 text-xs text-gray-500">
          <span className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5" />
            {course.duration}
          </span>
          <span className="flex items-center gap-1">
            <BookOpen className="w-3.5 h-3.5" />
            {course.lessons} lessons
          </span>
          <span className="flex items-center gap-1">
            <Users className="w-3.5 h-3.5" />
            {course.students.toLocaleString()}
          </span>
        </div>

        {/* Rating */}
        <div className="mt-2 flex items-center gap-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={`w-3.5 h-3.5 ${i < Math.floor(course.rating) ? "fill-[#FF5733] text-[#FF5733]" : "text-gray-300"}`}
            />
          ))}
          <span className="ml-1 text-xs font-bold text-[#1A1A1A]">{course.rating.toFixed(1)}</span>
        </div>

        {/* Price */}
        <div className="mt-4 pt-4 border-t-2 border-[#1A1A1A] flex items-center justify-between">
          <div className="flex items-baseline gap-2">
            <span
              className="text-2xl font-extrabold text-[#1A1A1A]"
              style={{ fontFamily: "Space Grotesk, sans-serif" }}
            >
              ${course.price}
            </span>
            {course.originalPrice && (
              <span className="text-sm text-gray-400 line-through">${course.originalPrice}</span>
            )}
          </div>
          <button
            className="brut-btn bg-[#FF5733] text-white text-xs font-extrabold px-4 py-2"
            style={{ fontFamily: "Space Grotesk, sans-serif" }}
            onClick={(e) => {
              e.stopPropagation();
              import("sonner").then(({ toast }) =>
                toast.success(`"${course.title}" added to cart!`)
              );
            }}
          >
            Enroll Now
          </button>
        </div>
      </div>
    </article>
  );
}
