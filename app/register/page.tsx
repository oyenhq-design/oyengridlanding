"use client";

import { useState } from "react";
import Link from "next/link";
import {
  User, Mail, Building2, Lock, Eye, EyeOff, ArrowRight,
  Users, LayoutDashboard, BarChart3, ShieldCheck, Rocket
} from "lucide-react";

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [agreed, setAgreed] = useState(false);
  const [form, setForm] = useState({
    fullName: "",
    workEmail: "",
    companyName: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Register submit", form, { agreed });
  };

  const features = [
    {
      icon: Users,
      title: "Learner Management",
      desc: "Track progress and engagement",
    },
    {
      icon: LayoutDashboard,
      title: "Program Management",
      desc: "Create and manage training programs",
    },
    {
      icon: BarChart3,
      title: "Reports & Analytics",
      desc: "Real-time insights and custom reports",
    },
    {
      icon: ShieldCheck,
      title: "Security First",
      desc: "Enterprise-grade security and compliance",
    },
  ];

  return (
    <main className="min-h-screen bg-[#F7F7F5] flex items-center justify-center p-4 sm:p-8 antialiased font-sans selection:bg-[#D4A017]/20">
      {/* Card wrapper */}
      <div className="w-full max-w-[1080px] bg-white rounded-3xl shadow-[0_4px_40px_rgba(0,0,0,0.08)] overflow-hidden flex flex-col lg:flex-row">

        {/* ── LEFT: FORM ────────────────────────────────────────────────── */}
        <div className="flex-1 p-8 sm:p-10 md:p-14 flex flex-col">

          {/* Logo + Already have account */}
          <div className="flex items-start justify-between mb-10">
            <Link href="/" className="flex items-center gap-2 group w-fit">
              {/* Logo */}
              <img
                src="/oyen-grid-icon-clean.png"
                alt=""
                aria-hidden="true"
                className="w-9.5 h-9.5 object-contain"
              />
              <div className="flex flex-col">
                <span className="font-extrabold text-[#111827] text-[14.5px] tracking-[0.06em] uppercase leading-none">
                  OYEN GRID
                </span>
                <span className="text-[7.5px] font-black text-zinc-400 uppercase tracking-[0.18em] leading-none mt-1">
                  TRAINING OPERATIONS INFRASTRUCTURE
                </span>
              </div>
            </Link>

            <p className="text-sm text-zinc-500 font-medium mt-1 hidden sm:block">
              Already have an account?{" "}
              <Link href="/sign-in" className="font-bold text-[#D4A017] hover:text-[#B38012] transition-colors">
                Sign in
              </Link>
            </p>
          </div>

          {/* Heading */}
          <div className="mb-8">
            <h1 className="text-[28px] sm:text-[32px] font-extrabold text-[#111827] tracking-tight leading-tight mb-1.5">
              Create your account
            </h1>
            <p className="text-sm text-zinc-500 font-medium">
              Start your journey with OYEN GRID
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4 flex-1">

            {/* Full name */}
            <div className="space-y-1.5">
              <label htmlFor="fullName" className="block text-[13px] font-semibold text-zinc-800">
                Full name <span className="text-[#D4A017]">*</span>
              </label>
              <div className="relative">
                <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  required
                  placeholder="Enter your full name"
                  value={form.fullName}
                  onChange={handleChange}
                  className="w-full h-11 pl-10 pr-4 rounded-xl border border-zinc-200 focus:border-[#D4A017] bg-white text-[13px] text-zinc-800 placeholder-zinc-400 focus:outline-none transition-colors"
                />
              </div>
            </div>

            {/* Work email */}
            <div className="space-y-1.5">
              <label htmlFor="workEmail" className="block text-[13px] font-semibold text-zinc-800">
                Work email <span className="text-[#D4A017]">*</span>
              </label>
              <div className="relative">
                <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
                <input
                  id="workEmail"
                  name="workEmail"
                  type="email"
                  required
                  placeholder="Enter your work email"
                  value={form.workEmail}
                  onChange={handleChange}
                  className="w-full h-11 pl-10 pr-4 rounded-xl border border-zinc-200 focus:border-[#D4A017] bg-white text-[13px] text-zinc-800 placeholder-zinc-400 focus:outline-none transition-colors"
                />
              </div>
            </div>

            {/* Company name */}
            <div className="space-y-1.5">
              <label htmlFor="companyName" className="block text-[13px] font-semibold text-zinc-800">
                Company name <span className="text-[#D4A017]">*</span>
              </label>
              <div className="relative">
                <Building2 className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
                <input
                  id="companyName"
                  name="companyName"
                  type="text"
                  required
                  placeholder="Enter your company name"
                  value={form.companyName}
                  onChange={handleChange}
                  className="w-full h-11 pl-10 pr-4 rounded-xl border border-zinc-200 focus:border-[#D4A017] bg-white text-[13px] text-zinc-800 placeholder-zinc-400 focus:outline-none transition-colors"
                />
              </div>
            </div>

            {/* Password */}
            <div className="space-y-1.5">
              <label htmlFor="password" className="block text-[13px] font-semibold text-zinc-800">
                Password <span className="text-[#D4A017]">*</span>
              </label>
              <div className="relative">
                <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  required
                  placeholder="Create a password"
                  value={form.password}
                  onChange={handleChange}
                  className="w-full h-11 pl-10 pr-11 rounded-xl border border-zinc-200 focus:border-[#D4A017] bg-white text-[13px] text-zinc-800 placeholder-zinc-400 focus:outline-none transition-colors"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-zinc-600 focus:outline-none"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Confirm password */}
            <div className="space-y-1.5">
              <label htmlFor="confirmPassword" className="block text-[13px] font-semibold text-zinc-800">
                Confirm password <span className="text-[#D4A017]">*</span>
              </label>
              <div className="relative">
                <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type={showConfirmPassword ? "text" : "password"}
                  required
                  placeholder="Confirm your password"
                  value={form.confirmPassword}
                  onChange={handleChange}
                  className="w-full h-11 pl-10 pr-11 rounded-xl border border-zinc-200 focus:border-[#D4A017] bg-white text-[13px] text-zinc-800 placeholder-zinc-400 focus:outline-none transition-colors"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-zinc-600 focus:outline-none"
                >
                  {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Terms checkbox */}
            <label className="flex items-start gap-3 cursor-pointer select-none pt-1">
              <div className="relative flex-shrink-0 mt-0.5">
                <input
                  type="checkbox"
                  checked={agreed}
                  onChange={(e) => setAgreed(e.target.checked)}
                  className="w-4 h-4 rounded border-zinc-300 accent-[#D4A017] cursor-pointer"
                />
              </div>
              <span className="text-[12.5px] text-zinc-500 leading-relaxed">
                I agree to the{" "}
                <Link href="#" className="font-semibold text-[#D4A017] hover:underline">
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link href="#" className="font-semibold text-[#D4A017] hover:underline">
                  Privacy Policy
                </Link>
              </span>
            </label>

            {/* Submit */}
            <button
              type="submit"
              disabled={!agreed}
              className="w-full h-12 rounded-xl bg-[#D4A017] hover:bg-[#B38012] disabled:opacity-50 disabled:cursor-not-allowed text-white font-extrabold text-[13.5px] tracking-wide flex items-center justify-center gap-2.5 transition-all active:scale-[0.99] shadow-sm hover:shadow-md"
            >
              Create Account
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>

          {/* Divider */}
          <div className="relative my-6 text-center">
            <div className="absolute inset-0 flex items-center" aria-hidden="true">
              <div className="w-full border-t border-zinc-100" />
            </div>
            <span className="relative bg-white px-3 text-[11px] font-bold text-zinc-400 uppercase tracking-widest">
              or sign up with
            </span>
          </div>

          {/* OAuth buttons */}
          <div className="grid grid-cols-2 gap-3">
            <a
              href="/"
              className="h-11 rounded-xl border border-zinc-200 hover:border-zinc-300 bg-white flex items-center justify-center gap-2.5 text-[12.5px] font-semibold text-zinc-700 hover:bg-zinc-50 transition-all active:scale-[0.99]"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M23.745 12.27c0-.79-.07-1.54-.19-2.27h-11.3v4.51h6.47c-.29 1.48-1.14 2.73-2.4 3.58v3h3.86c2.26-2.09 3.56-5.17 3.56-8.82z"/>
                <path fill="#34A853" d="M12.255 24c3.24 0 5.95-1.08 7.93-2.91l-3.86-3c-1.08.72-2.45 1.16-4.07 1.16-3.13 0-5.78-2.11-6.73-4.96h-3.98v3.09C3.515 21.3 7.615 24 12.255 24z"/>
                <path fill="#FBBC05" d="M5.525 14.29c-.25-.72-.38-1.49-.38-2.29s.14-1.57.38-2.29V6.62h-3.98a11.86 11.86 0 000 10.76l3.98-3.09z"/>
                <path fill="#EA4335" d="M12.255 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C18.205 1.19 15.495 0 12.255 0c-4.64 0-8.74 2.7-10.71 6.62l3.98 3.09c.95-2.85 3.6-4.96 6.73-4.96z"/>
              </svg>
              Google
            </a>

            <a
              href="/"
              className="h-11 rounded-xl border border-zinc-200 hover:border-zinc-300 bg-white flex items-center justify-center gap-2.5 text-[12.5px] font-semibold text-zinc-700 hover:bg-zinc-50 transition-all active:scale-[0.99]"
            >
              <svg className="w-4 h-4" viewBox="0 0 23 23">
                <rect x="0" y="0" width="10.5" height="10.5" fill="#F25022" />
                <rect x="11.5" y="0" width="10.5" height="10.5" fill="#7FBA00" />
                <rect x="0" y="11.5" width="10.5" height="10.5" fill="#00A4EF" />
                <rect x="11.5" y="11.5" width="10.5" height="10.5" fill="#FFB900" />
              </svg>
              Microsoft
            </a>
          </div>

          {/* Mobile: already have account */}
          <p className="sm:hidden text-center text-xs text-zinc-500 font-medium mt-6">
            Already have an account?{" "}
            <Link href="/sign-in" className="font-bold text-[#D4A017]">Sign in</Link>
          </p>
        </div>

        {/* ── RIGHT: FEATURES PANEL ─────────────────────────────────────── */}
        <div className="hidden lg:flex lg:w-[42%] bg-[#FAFAF8] border-l border-zinc-100 flex-col justify-between p-10 xl:p-14 relative overflow-hidden">

          {/* Subtle amber glow */}
          <div className="absolute top-0 right-0 w-72 h-72 bg-[#D4A017]/5 rounded-full -translate-y-1/3 translate-x-1/3 pointer-events-none" />

          <div className="relative z-10">
            {/* Rocket icon */}
            <div className="w-14 h-14 rounded-2xl bg-[#D4A017]/10 flex items-center justify-center mb-8">
              <Rocket className="w-7 h-7 text-[#D4A017]" />
            </div>

            {/* Headline */}
            <h2 className="text-[22px] font-extrabold text-[#111827] leading-snug mb-8 tracking-tight">
              Everything you need<br />
              to run training{" "}
              <span className="text-[#D4A017]">at scale.</span>
            </h2>

            {/* Feature list */}
            <div className="space-y-6">
              {features.map(({ icon: Icon, title, desc }) => (
                <div key={title} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#D4A017]/10 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-4.5 h-4.5 text-[#D4A017]" />
                  </div>
                  <div>
                    <p className="text-[13.5px] font-bold text-[#111827] leading-none mb-1">
                      {title}
                    </p>
                    <p className="text-[12px] text-zinc-500 leading-relaxed">
                      {desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom decorative wave dots */}
          <div className="relative mt-10 h-28 pointer-events-none select-none">
            <svg viewBox="0 0 300 120" className="absolute bottom-0 right-0 w-full opacity-30" fill="none">
              {/* Dotted wave pattern */}
              {[...Array(8)].map((_, row) =>
                [...Array(16)].map((_, col) => (
                  <circle
                    key={`${row}-${col}`}
                    cx={col * 20 + 10}
                    cy={row * 14 + Math.sin((col + row) * 0.6) * 8 + 10}
                    r="1.5"
                    fill="#D4A017"
                    opacity={0.15 + (row * 0.07)}
                  />
                ))
              )}
            </svg>
          </div>
        </div>

      </div>
    </main>
  );
}
