/* ==========================================================================
   EduLearn Pricing Page — Kinetic Brutalism
   ========================================================================== */

import { CheckCircle, X } from "lucide-react";
import { toast } from "sonner";

const plans = [
  {
    name: "Free",
    price: 0,
    period: "forever",
    description: "Perfect for exploring and getting started.",
    color: "bg-white",
    headerColor: "bg-[#FAFAF5]",
    buttonStyle: "bg-white text-[#1A1A1A] border-2 border-[#1A1A1A]",
    features: [
      { text: "Access to 10 free courses", included: true },
      { text: "Community forum access", included: true },
      { text: "Course previews", included: true },
      { text: "Certificate of completion", included: false },
      { text: "Offline downloads", included: false },
      { text: "1-on-1 mentorship sessions", included: false },
      { text: "Priority support", included: false },
    ],
  },
  {
    name: "Pro",
    price: 29,
    period: "per month",
    description: "For serious learners ready to level up.",
    color: "bg-[#FF5733]",
    headerColor: "bg-[#FF5733]",
    buttonStyle: "bg-white text-[#FF5733] border-2 border-white",
    badge: "Most Popular",
    features: [
      { text: "Access to ALL 200+ courses", included: true },
      { text: "Community forum access", included: true },
      { text: "Course previews", included: true },
      { text: "Certificate of completion", included: true },
      { text: "Offline downloads", included: true },
      { text: "1-on-1 mentorship sessions", included: false },
      { text: "Priority support", included: false },
    ],
  },
  {
    name: "Team",
    price: 79,
    period: "per month",
    description: "For teams and organizations scaling skills.",
    color: "bg-white",
    headerColor: "bg-[#1A1A1A]",
    buttonStyle: "bg-[#FF5733] text-white border-2 border-[#1A1A1A]",
    features: [
      { text: "Access to ALL 200+ courses", included: true },
      { text: "Community forum access", included: true },
      { text: "Course previews", included: true },
      { text: "Certificate of completion", included: true },
      { text: "Offline downloads", included: true },
      { text: "1-on-1 mentorship sessions", included: true },
      { text: "Priority support", included: true },
    ],
  },
];

const faqs = [
  {
    q: "Can I switch plans at any time?",
    a: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately.",
  },
  {
    q: "Is there a free trial for Pro?",
    a: "Yes! We offer a 7-day free trial on the Pro plan. No credit card required.",
  },
  {
    q: "What payment methods do you accept?",
    a: "We accept all major credit cards, PayPal, and bank transfers for annual plans.",
  },
  {
    q: "Do certificates expire?",
    a: "No, your certificates of completion are yours forever, even if you cancel your subscription.",
  },
];

export default function Pricing() {
  return (
    <div className="min-h-screen bg-[#FAFAF5]">
      {/* Header */}
      <div className="bg-[#FAFAF5] border-b-2 border-[#1A1A1A] py-16">
        <div className="container text-center">
          <div className="section-tag text-[#FF5733] border-[#FF5733] mb-4 inline-block">
            Pricing
          </div>
          <h1
            className="text-5xl font-extrabold text-[#1A1A1A] leading-tight"
            style={{ fontFamily: "Space Grotesk, sans-serif" }}
          >
            Simple, Transparent Pricing
          </h1>
          <p className="mt-4 text-gray-600 text-lg max-w-xl mx-auto">
            No hidden fees. No surprises. Start free and upgrade when you're
            ready.
          </p>
        </div>
      </div>

      {/* Plans */}
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 stagger-children">
          {plans.map(plan => (
            <div
              key={plan.name}
              className={`border-2 border-[#1A1A1A] overflow-hidden ${plan.color} ${plan.name === "Pro" ? "relative" : ""}`}
              style={{
                boxShadow:
                  plan.name === "Pro"
                    ? "8px 8px 0px #1A1A1A"
                    : "4px 4px 0px #1A1A1A",
                transform: plan.name === "Pro" ? "scale(1.02)" : "none",
              }}
            >
              {/* Header */}
              <div
                className={`${plan.headerColor} border-b-2 border-[#1A1A1A] p-6`}
              >
                {plan.badge && (
                  <div className="mb-3">
                    <span
                      className="text-xs font-extrabold uppercase tracking-wider bg-white text-[#FF5733] px-2 py-1 border-2 border-[#1A1A1A]"
                      style={{ fontFamily: "Space Grotesk, sans-serif" }}
                    >
                      {plan.badge}
                    </span>
                  </div>
                )}
                <h2
                  className={`text-2xl font-extrabold ${plan.name === "Pro" || (plan.name === "Team" && plan.headerColor === "bg-[#1A1A1A]") ? "text-white" : "text-[#1A1A1A]"}`}
                  style={{
                    fontFamily: "Space Grotesk, sans-serif",
                    color:
                      plan.name === "Pro"
                        ? "white"
                        : plan.name === "Team"
                          ? "white"
                          : "#1A1A1A",
                  }}
                >
                  {plan.name}
                </h2>
                <div className="mt-3 flex items-baseline gap-1">
                  <span
                    className="text-5xl font-extrabold"
                    style={{
                      fontFamily: "Space Grotesk, sans-serif",
                      color:
                        plan.name === "Pro"
                          ? "white"
                          : plan.name === "Team"
                            ? "white"
                            : "#1A1A1A",
                    }}
                  >
                    R{plan.price}
                  </span>
                  <span
                    className="text-sm font-medium"
                    style={{
                      color:
                        plan.name === "Pro"
                          ? "rgba(255,255,255,0.8)"
                          : plan.name === "Team"
                            ? "rgba(255,255,255,0.7)"
                            : "#6B7280",
                    }}
                  >
                    /{plan.period}
                  </span>
                </div>
                <p
                  className="mt-2 text-sm"
                  style={{
                    color:
                      plan.name === "Pro"
                        ? "rgba(255,255,255,0.85)"
                        : plan.name === "Team"
                          ? "rgba(255,255,255,0.7)"
                          : "#6B7280",
                  }}
                >
                  {plan.description}
                </p>
              </div>

              {/* Features */}
              <div className="p-6">
                <ul className="space-y-3 mb-8">
                  {plan.features.map(({ text, included }) => (
                    <li key={text} className="flex items-center gap-3">
                      {included ? (
                        <CheckCircle className="w-5 h-5 text-[#4A7C59] shrink-0" />
                      ) : (
                        <X className="w-5 h-5 text-gray-300 shrink-0" />
                      )}
                      <span
                        className={`text-sm ${included ? "text-[#1A1A1A]" : "text-gray-400"}`}
                      >
                        {text}
                      </span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full font-extrabold py-3 text-sm ${plan.buttonStyle}`}
                  style={{
                    fontFamily: "Space Grotesk, sans-serif",
                    boxShadow: "3px 3px 0px #1A1A1A",
                    transition: "box-shadow 0.1s ease, transform 0.1s ease",
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLElement).style.boxShadow =
                      "5px 5px 0px #1A1A1A";
                    (e.currentTarget as HTMLElement).style.transform =
                      "translate(-2px, -2px)";
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLElement).style.boxShadow =
                      "3px 3px 0px #1A1A1A";
                    (e.currentTarget as HTMLElement).style.transform =
                      "translate(0, 0)";
                  }}
                  onMouseDown={e => {
                    (e.currentTarget as HTMLElement).style.boxShadow =
                      "1px 1px 0px #1A1A1A";
                    (e.currentTarget as HTMLElement).style.transform =
                      "translate(2px, 2px)";
                  }}
                  onClick={() =>
                    toast.success(
                      plan.price === 0
                        ? "Welcome! Creating your free account..."
                        : `Starting ${plan.name} plan trial...`
                    )
                  }
                >
                  {plan.price === 0
                    ? "Get Started Free"
                    : `Start ${plan.name} Trial`}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Annual discount banner */}
        <div
          className="mt-10 bg-[#4A7C59] border-2 border-[#1A1A1A] p-6 text-center"
          style={{ boxShadow: "4px 4px 0px #1A1A1A" }}
        >
          <p
            className="text-white font-extrabold text-lg"
            style={{ fontFamily: "Space Grotesk, sans-serif" }}
          >
            💡 Save 40% with Annual Billing — Pro for just R17/month
          </p>
          <button
            className="mt-3 bg-white text-[#4A7C59] font-extrabold text-sm px-6 py-2 border-2 border-[#1A1A1A]"
            style={{
              fontFamily: "Space Grotesk, sans-serif",
              boxShadow: "3px 3px 0px #1A1A1A",
            }}
            onClick={() => toast.info("Annual billing coming soon!")}
          >
            Switch to Annual
          </button>
        </div>

        {/* FAQ */}
        <div className="mt-20">
          <h2
            className="text-3xl font-extrabold text-[#1A1A1A] mb-8 text-center"
            style={{ fontFamily: "Space Grotesk, sans-serif" }}
          >
            Frequently Asked Questions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {faqs.map(({ q, a }) => (
              <div
                key={q}
                className="bg-white border-2 border-[#1A1A1A] p-6"
                style={{ boxShadow: "3px 3px 0px #1A1A1A" }}
              >
                <h3
                  className="font-extrabold text-[#1A1A1A] mb-2"
                  style={{ fontFamily: "Space Grotesk, sans-serif" }}
                >
                  {q}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
