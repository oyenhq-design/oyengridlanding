"use client";

import { useState } from "react";
import Link from "next/link";
import { Mail, Lock, Eye, EyeOff, ArrowLeft } from "lucide-react";

export default function SignInPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submit sign in", { email, password, rememberMe });
  };

  return (
    <main className="min-h-screen bg-white flex antialiased text-[#111827] font-sans selection:bg-[#D4A017]/20">
      
      {/* ── LEFT COLUMN: SIGN IN FORM (42% width on desktop) ───────────────── */}
      <div className="w-full lg:w-[42%] flex flex-col justify-between p-8 sm:p-12 md:p-16 relative z-10 bg-white">
        
        {/* Top: Header / Logo lockup */}
        <div className="flex flex-col gap-1.5 shrink-0">
          <Link href="/" className="inline-flex items-center gap-2 group w-fit">
            {/* Back Arrow to home */}
            <div className="mr-1 p-1.5 rounded-lg hover:bg-zinc-100 transition-colors text-zinc-400 group-hover:text-zinc-600">
              <ArrowLeft className="w-4 h-4" />
            </div>
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
        </div>

        {/* Middle: Form Area */}
        <div className="my-auto py-12 max-w-[420px] w-full mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-extrabold tracking-tight text-zinc-900 mb-2">
              Welcome back
            </h1>
            <p className="text-sm text-zinc-500 font-medium">
              Sign in to your account to continue
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Email Address */}
            <div className="space-y-2">
              <label htmlFor="email" className="block text-xs font-bold text-zinc-900 uppercase tracking-wider">
                Email address
              </label>
              <div className="relative">
                <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
                <input
                  id="email"
                  type="email"
                  required
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full h-11 pl-10 pr-4 rounded-xl border border-zinc-200 focus:border-[#D4A017] bg-white text-[13px] placeholder-zinc-400 focus:outline-none transition-colors"
                />
              </div>
            </div>

            {/* Password */}
            <div className="space-y-2">
              <label htmlFor="password" className="block text-xs font-bold text-zinc-900 uppercase tracking-wider">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  required
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full h-11 pl-10 pr-10 rounded-xl border border-zinc-200 focus:border-[#D4A017] bg-white text-[13px] placeholder-zinc-400 focus:outline-none transition-colors"
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

            {/* Remember Me & Forgot Password */}
            <div className="flex items-center justify-between text-xs">
              <label className="flex items-center gap-2 cursor-pointer select-none font-semibold text-zinc-600">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="w-4 h-4 rounded border-zinc-300 text-[#D4A017] focus:ring-[#D4A017] accent-[#D4A017] cursor-pointer"
                />
                Remember me
              </label>
              <Link href="#" className="font-bold text-[#D4A017] hover:text-[#B38012] transition-colors">
                Forgot password?
              </Link>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full h-11 rounded-xl bg-[#D4A017] hover:bg-[#B38012] text-white font-extrabold text-[13px] uppercase tracking-wider transition-colors shadow-sm hover:shadow active:scale-[0.99] transition-all"
            >
              Sign In
            </button>
          </form>

          {/* Divider */}
          <div className="relative my-8 text-center shrink-0">
            <div className="absolute inset-0 flex items-center" aria-hidden="true">
              <div className="w-full border-t border-zinc-150" />
            </div>
            <span className="relative bg-white px-3 text-[11px] font-bold text-zinc-400 uppercase tracking-widest">
              or continue with
            </span>
          </div>

          {/* OAuth Buttons */}
          <div className="grid grid-cols-2 gap-4">
            {/* Google */}
            <a
              href="https://accounts.google.com/o/oauth2/v2/auth?client_id=mock_id&redirect_uri=http://localhost:3000/&response_type=token&scope=email%20profile"
              className="h-11 rounded-xl border border-zinc-200 hover:border-zinc-300 bg-white flex items-center justify-center gap-2 text-[12px] font-bold text-zinc-700 transition-colors hover:bg-zinc-50 active:scale-[0.99] transition-all"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24">
                <path
                  fill="#EA4335"
                  d="M12.24 10.285V14.4h6.887c-.648 2.41-2.519 4.114-5.136 4.114-3.41 0-6.19-2.78-6.19-6.19s2.78-6.19 6.19-6.19c1.7 0 3.24.69 4.36 1.81l3.05-3.05C18.8 2.2 15.68 1 12.24 1 6.04 1 12.24s5.04 11.24 11.24 11.24c5.84 0 10.74-4.22 11.21-9.72h-11.21z"
                />
              </svg>
              Google
            </a>
            
            {/* Microsoft */}
            <a
              href="https://login.microsoftonline.com/common/oauth2/v2.0/authorize?client_id=mock_id&redirect_uri=http://localhost:3000/&response_type=token&scope=user.read"
              className="h-11 rounded-xl border border-zinc-200 hover:border-zinc-300 bg-white flex items-center justify-center gap-2 text-[12px] font-bold text-zinc-700 transition-colors hover:bg-zinc-50 active:scale-[0.99] transition-all"
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
        </div>

        {/* Bottom: Footer / Sign Up Link */}
        <div className="text-center text-xs text-zinc-500 font-medium shrink-0 pt-4">
          Don&apos;t have an account?{" "}
          <Link href="/register" className="font-bold text-[#D4A017] hover:text-[#B38012] transition-colors ml-0.5">
            Sign up
          </Link>
        </div>

      </div>

      {/* ── RIGHT COLUMN: BRANDED INFOGRAPHIC VISUAL (58% width on desktop) ─── */}
      <div className="hidden lg:flex lg:w-[58%] bg-[#FAF9F6] relative items-center justify-center overflow-hidden border-l border-zinc-100">
        
        {/* Soft atmospheric gradient */}
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_70%_30%,rgba(212,160,23,0.03),transparent_70%)]" />
        
        {/* Illustration image container */}
        <div className="relative w-[85%] h-[85%] max-w-[620px] max-h-[620px] select-none pointer-events-none">
          <img
            src="/login-illustration.png"
            alt="OYEN GRID Operations Architecture"
            className="w-full h-full object-contain filter drop-shadow-[0_16px_36px_rgba(0,0,0,0.04)]"
          />
        </div>

      </div>

    </main>
  );
}
