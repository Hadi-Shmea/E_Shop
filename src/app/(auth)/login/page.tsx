"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const adminEmails = ["admin@example.com"];

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (adminEmails.includes(email)) {
      router.push("/dashboard");
    } else {
      router.push("/shop");
    }
  };

  return (
    <main className="flex min-h-screen text-black">
      {/* Left side - Login form */}
      <div className="w-full md:w-1/2 flex items-center justify-center bg-white p-10">
        <div className="max-w-md w-full">
          {/* Logo */}
          <div className="flex items-center space-x-2 mb-8">
            <div className="w-6 h-6 bg-blue-600 rounded-sm"></div>
            <span className="text-xl font-bold text-gray-800">Culters</span>
          </div>

          <h1 className="text-2xl font-bold mb-2">Sign In</h1>
          <p className="text-gray-500 mb-6">
            Welcome back! Please sign in to continue.
          </p>

          {/* Google Sign In */}
          <button className="w-full border border-gray-300 py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-gray-50 transition">
            <svg
              className="w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 48 48"
            >
              <path
                fill="#4285F4"
                d="M24 9.5c3.94 0 6.6 1.71 8.12 3.14l5.97-5.97C34.37 3.37 29.66 1 24 1 14.97 1 7.09 6.6 3.69 14.54l6.98 5.42C12.12 13.1 17.65 9.5 24 9.5z"
              />
              <path
                fill="#34A853"
                d="M46.5 24.5c0-1.57-.14-3.07-.39-4.5H24v9h12.7c-.55 2.96-2.2 5.47-4.7 7.16l7.39 5.73C43.84 38.52 46.5 32.02 46.5 24.5z"
              />
              <path
                fill="#FBBC05"
                d="M10.67 28.96c-.48-1.44-.75-2.97-.75-4.46 0-1.55.27-3.04.75-4.46l-6.98-5.42C2.59 17.62 2 20.73 2 24c0 3.27.59 6.38 1.69 9.38l6.98-5.42z"
              />
              <path
                fill="#EA4335"
                d="M24 47c6.48 0 11.91-2.13 15.87-5.8l-7.39-5.73c-2.04 1.38-4.67 2.2-8.48 2.2-6.35 0-11.88-3.6-14.33-8.96l-6.98 5.42C7.09 41.4 14.97 47 24 47z"
              />
            </svg>
            <span>Sign in with Google</span>
          </button>

          <div className="flex items-center my-6">
            <div className="flex-grow border-t border-gray-300"></div>
            <span className="px-4 text-gray-400 text-sm">or</span>
            <div className="flex-grow border-t border-gray-300"></div>
          </div>

          {/* Email + Password Form */}
          <form onSubmit={handleLogin} className="space-y-4">
            <input
              type="email"
              placeholder="Email"
              className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <input
              type="password"
              placeholder="Password"
              className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2">
                <input type="checkbox" className="w-4 h-4" />
                Remember me
              </label>
              <a href="#" className="text-blue-600 hover:underline">
                Forgot password?
              </a>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
            >
              Sign In
            </button>
          </form>

          <p className="mt-6 text-center text-gray-600 text-sm">
            Don&apos;t have an account?{" "}
            <a href="#" className="text-blue-600 hover:underline">
              Sign Up
            </a>
          </p>
        </div>
      </div>

      {/* Right side - Info Section */}
      <div className="hidden md:flex w-1/2 bg-blue-600 text-white items-center justify-center p-10">
        <div className="max-w-md text-center">
          <h2 className="text-3xl font-bold mb-4">
            Easy-to-Use Dashboard for Managing Your Business.
          </h2>
          <p className="text-blue-100">
            Streamline your business management with our user-friendly
            dashboard. Simplify tasks, track key metrics, and make informed
            decisions effortlessly.
          </p>
        </div>
      </div>
    </main>
  );
}
