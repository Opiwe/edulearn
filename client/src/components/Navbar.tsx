/* ==========================================================================
   EduLearn Navbar — Kinetic Brutalism
   Hard border bottom, bold Space Grotesk type, coral CTA button
   ========================================================================== */

import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, GraduationCap } from "lucide-react";
import { toast } from "sonner";

const navLinks = [
  { label: "Courses", href: "/courses" },
  { label: "Instructors", href: "/instructors" },
  { label: "About", href: "/about" },
  { label: "Pricing", href: "/pricing" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [location] = useLocation();

  return (
    <header className="sticky top-0 z-50 bg-[#FAFAF5] border-b-2 border-[#1A1A1A]">
      <div className="container">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-9 h-9 bg-[#FF5733] border-2 border-[#1A1A1A] flex items-center justify-center brut-shadow transition-all duration-150">
              <GraduationCap className="w-5 h-5 text-white" strokeWidth={2.5} />
            </div>
            <span
              className="text-xl font-extrabold text-[#1A1A1A] tracking-tight"
              style={{ fontFamily: "Space Grotesk, sans-serif" }}
            >
              Edu<span className="text-[#FF5733]">Learn</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map(link => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-semibold transition-colors duration-150 relative group ${
                  location === link.href
                    ? "text-[#FF5733]"
                    : "text-[#1A1A1A] hover:text-[#FF5733]"
                }`}
                style={{ fontFamily: "Space Grotesk, sans-serif" }}
              >
                {link.label}
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 bg-[#FF5733] transition-all duration-200 ${
                    location === link.href ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/login"
              className="text-sm font-bold text-[#1A1A1A] px-4 py-2 hover:text-[#FF5733] transition-colors"
              style={{ fontFamily: "Space Grotesk, sans-serif" }}
            >
              Log In
            </Link>
            <Link
              href="/signup"
              className="brut-btn bg-[#FF5733] text-white text-sm px-5 py-2 font-bold"
              style={{ fontFamily: "Space Grotesk, sans-serif" }}
            >
              Get Started
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden p-2 border-2 border-[#1A1A1A]"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t-2 border-[#1A1A1A] bg-[#FAFAF5]">
          <nav className="container py-4 flex flex-col gap-4">
            {navLinks.map(link => (
              <Link
                key={link.href}
                href={link.href}
                className="text-base font-bold text-[#1A1A1A] hover:text-[#FF5733] transition-colors"
                style={{ fontFamily: "Space Grotesk, sans-serif" }}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex flex-col gap-2 pt-2 border-t-2 border-[#1A1A1A]">
              <Link
                href="/login"
                className="text-sm font-bold text-[#1A1A1A] py-2"
                style={{ fontFamily: "Space Grotesk, sans-serif" }}
                onClick={() => setOpen(false)}
              >
                Log In
              </Link>
              <Link
                href="/signup"
                className="brut-btn bg-[#FF5733] text-white text-sm px-5 py-2 font-bold w-full text-center"
                style={{ fontFamily: "Space Grotesk, sans-serif" }}
                onClick={() => setOpen(false)}
              >
                Get Started
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
