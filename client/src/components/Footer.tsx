/* ==========================================================================
   EduLearn Footer — Kinetic Brutalism
   Dark charcoal background, bold grid layout, coral accents
   ========================================================================== */

import { GraduationCap, Twitter, Github, Linkedin, Youtube } from "lucide-react";
import { Link } from "wouter";

const footerLinks = {
  Learn: [
    { label: "All Courses", href: "/courses" },
    { label: "Web Development", href: "/courses" },
    { label: "UI/UX Design", href: "/courses" },
    { label: "Data Science", href: "/courses" },
    { label: "Business", href: "/courses" },
  ],
  Company: [
    { label: "About Us", href: "/about" },
    { label: "Instructors", href: "/instructors" },
    { label: "Careers", href: "#" },
    { label: "Blog", href: "#" },
    { label: "Press", href: "#" },
  ],
  Support: [
    { label: "Help Center", href: "#" },
    { label: "Contact Us", href: "#" },
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Cookie Policy", href: "#" },
  ],
};

const socials = [
  { icon: Twitter, label: "Twitter", href: "#" },
  { icon: Github, label: "GitHub", href: "#" },
  { icon: Linkedin, label: "LinkedIn", href: "#" },
  { icon: Youtube, label: "YouTube", href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-[#1A1A1A] text-white border-t-2 border-[#1A1A1A]">
      <div className="container py-16">
        {/* Top grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 bg-[#FF5733] border-2 border-white flex items-center justify-center">
                <GraduationCap className="w-5 h-5 text-white" strokeWidth={2.5} />
              </div>
              <span
                className="text-xl font-extrabold text-white tracking-tight"
                style={{ fontFamily: "Space Grotesk, sans-serif" }}
              >
                Edu<span className="text-[#FF5733]">Learn</span>
              </span>
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed max-w-xs mb-6">
              Empowering learners worldwide with high-quality, practical courses taught by industry experts.
            </p>
            {/* Social links */}
            <div className="flex items-center gap-3">
              {socials.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 border-2 border-gray-600 flex items-center justify-center text-gray-400 hover:border-[#FF5733] hover:text-[#FF5733] transition-colors duration-150"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4
                className="text-sm font-extrabold text-white uppercase tracking-widest mb-4"
                style={{ fontFamily: "Space Grotesk, sans-serif" }}
              >
                {category}
              </h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-400 hover:text-[#FF5733] transition-colors duration-150"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t-2 border-gray-700 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">
            © 2026 EduLearn. All rights reserved.
          </p>
          <p className="text-sm text-gray-500">
            Built with{" "}
            <span className="text-[#FF5733] font-bold">passion</span> for learners everywhere.
          </p>
        </div>
      </div>
    </footer>
  );
}
