/* ==========================================================================
   EduLearn Signup Page
   ========================================================================== */

import { useState } from "react";
import { Link, useLocation } from "wouter";
import {
  GraduationCap,
  Eye,
  EyeOff,
  Mail,
  Lock,
  User,
  Check,
} from "lucide-react";
import { toast } from "sonner";

export default function SignupPage() {
  const [, setLocation] = useLocation();
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    agreeTerms: false,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.agreeTerms) {
      toast.error("Please agree to the terms and conditions");
      return;
    }
    setIsLoading(true);

    await new Promise(resolve => setTimeout(resolve, 1000));

    toast.success("Account created successfully!");
    setLocation("/");
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-[#FAFAF5] flex">
      {/* Left Panel - Image */}
      <div className="hidden lg:block flex-1 bg-[#1A1A1A] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#FF5733] to-[#4A7C59] opacity-20" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white p-8">
            <div className="w-24 h-24 bg-[#FF5733] border-4 border-white mx-auto mb-6 flex items-center justify-center shadow-[6px_6px_0px_rgba(255,255,255,0.3)]">
              <GraduationCap className="w-12 h-12" />
            </div>
            <h2
              className="text-3xl font-extrabold mb-4"
              style={{ fontFamily: "Space Grotesk, sans-serif" }}
            >
              Join EduLearn Today
            </h2>
            <p className="text-white/80 max-w-md">
              Start your learning journey with access to 500+ courses from
              industry experts.
            </p>
          </div>
        </div>
      </div>

      {/* Right Panel - Form */}
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          <Link href="/" className="flex items-center gap-2 mb-8">
            <div className="w-10 h-10 bg-[#FF5733] border-2 border-[#1A1A1A] flex items-center justify-center shadow-[3px_3px_0px_#1A1A1A]">
              <GraduationCap className="w-6 h-6 text-white" strokeWidth={2.5} />
            </div>
            <span
              className="text-2xl font-extrabold text-[#1A1A1A]"
              style={{ fontFamily: "Space Grotesk, sans-serif" }}
            >
              Edu<span className="text-[#FF5733]">Learn</span>
            </span>
          </Link>

          <h1
            className="text-4xl font-extrabold text-[#1A1A1A] mb-2"
            style={{ fontFamily: "Space Grotesk, sans-serif" }}
          >
            Create account
          </h1>
          <p className="text-gray-600 mb-8">Start learning for free today</p>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label
                className="block text-sm font-bold text-[#1A1A1A] mb-2"
                style={{ fontFamily: "Space Grotesk, sans-serif" }}
              >
                Full Name
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={e =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full pl-10 pr-4 py-3 border-2 border-[#1A1A1A] bg-white focus:outline-none focus:shadow-[3px_3px_0px_#1A1A1A] transition-shadow"
                  placeholder="Enter your full name"
                  style={{ fontFamily: "Space Grotesk, sans-serif" }}
                />
              </div>
            </div>

            <div>
              <label
                className="block text-sm font-bold text-[#1A1A1A] mb-2"
                style={{ fontFamily: "Space Grotesk, sans-serif" }}
              >
                Email
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={e =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full pl-10 pr-4 py-3 border-2 border-[#1A1A1A] bg-white focus:outline-none focus:shadow-[3px_3px_0px_#1A1A1A] transition-shadow"
                  placeholder="Enter your email"
                  style={{ fontFamily: "Space Grotesk, sans-serif" }}
                />
              </div>
            </div>

            <div>
              <label
                className="block text-sm font-bold text-[#1A1A1A] mb-2"
                style={{ fontFamily: "Space Grotesk, sans-serif" }}
              >
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type={showPassword ? "text" : "password"}
                  required
                  minLength={6}
                  value={formData.password}
                  onChange={e =>
                    setFormData({ ...formData, password: e.target.value })
                  }
                  className="w-full pl-10 pr-12 py-3 border-2 border-[#1A1A1A] bg-white focus:outline-none focus:shadow-[3px_3px_0px_#1A1A1A] transition-shadow"
                  placeholder="Create a password (min 6 characters)"
                  style={{ fontFamily: "Space Grotesk, sans-serif" }}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[#1A1A1A]"
                >
                  {showPassword ? (
                    <EyeOff className="w-5 h-5" />
                  ) : (
                    <Eye className="w-5 h-5" />
                  )}
                </button>
              </div>
            </div>

            <label className="flex items-start gap-3 cursor-pointer">
              <div className="relative mt-0.5">
                <input
                  type="checkbox"
                  checked={formData.agreeTerms}
                  onChange={e =>
                    setFormData({ ...formData, agreeTerms: e.target.checked })
                  }
                  className="sr-only"
                />
                <div
                  className={`w-5 h-5 border-2 border-[#1A1A1A] flex items-center justify-center transition-colors ${
                    formData.agreeTerms ? "bg-[#FF5733]" : "bg-white"
                  }`}
                >
                  {formData.agreeTerms && (
                    <Check className="w-3 h-3 text-white" />
                  )}
                </div>
              </div>
              <span className="text-sm text-gray-600">
                I agree to the{" "}
                <a
                  href="#"
                  className="font-bold text-[#FF5733] hover:underline"
                >
                  Terms of Service
                </a>{" "}
                and{" "}
                <a
                  href="#"
                  className="font-bold text-[#FF5733] hover:underline"
                >
                  Privacy Policy
                </a>
              </span>
            </label>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-[#FF5733] text-white font-extrabold py-4 border-2 border-[#1A1A1A] shadow-[3px_3px_0px_#1A1A1A] hover:shadow-[6px_6px_0px_#1A1A1A] hover:translate-x-[-3px] hover:translate-y-[-3px] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              style={{ fontFamily: "Space Grotesk, sans-serif" }}
            >
              {isLoading ? "Creating account..." : "Create Account"}
            </button>
          </form>

          <p className="mt-8 text-center text-gray-600">
            Already have an account?{" "}
            <Link
              href="/login"
              className="font-bold text-[#FF5733] hover:underline"
            >
              Log in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
