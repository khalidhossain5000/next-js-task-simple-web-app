"use client"
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const Page = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleRegister = async (e) => {
    e.preventDefault();
    
    // এখন আমরা শুধু console.log করব, পরবর্তীতে MongoDB integration হবে
    console.log({ name, email, password });
    
    // success হলে redirect
    router.push("/products");
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#EFEBE3]">
      <div className="bg-white p-10 rounded-xl shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold text-[#111111] mb-6 text-center">
          Register
        </h2>

        <form className="flex flex-col gap-4" onSubmit={handleRegister}>
          <input
            type="text"
            placeholder="Full Name"
            className="w-full p-3 border border-gray-300 rounded text-[#111111]"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
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
            Register
          </button>
        </form>

        <p className="text-center text-[#111111] mt-4">
          Already have an account?{" "}
          <Link href="/Login" className="text-[#179800] font-semibold">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Page;
