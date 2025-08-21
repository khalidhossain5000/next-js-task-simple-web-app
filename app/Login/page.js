"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

import React from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });
    if (result.ok) {
      router.push("/products"); // login success → redirect
    } else {
      alert("Invalid credentials");
    }
  };

  const handleGoogleSignIn = async () => {
    await signIn("google", { callbackUrl: "/products" });
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#EFEBE3]">
      <div className="bg-white p-10 rounded-xl shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold text-[#111111] mb-6 text-center">
          Login
        </h2>

        {/* Credentials Form */}
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 border border-gray-300 rounded text-[#111111]"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 border border-gray-300 rounded text-[#111111]"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button
            type="submit"
            className="w-full py-3 rounded-lg bg-[#179800] text-white font-semibold text-lg"
          >
            Login
          </button>
        </form>

        <div className="my-6 text-center text-[#111111]">OR</div>

        {/* Google Login */}
        <button
          onClick={handleGoogleSignIn}
          className="w-full py-3 rounded-lg border border-[#179800] text-[#179800] font-semibold text-lg flex items-center justify-center gap-2 hover:bg-[#179800] hover:text-white transition"
        >
          Sign in with Google
        </button>

        <p className="text-center text-[#111111] mt-4">
          Don’t have an account?{" "}
          <a href="/register" className="text-[#179800] font-semibold">
            Register
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;



