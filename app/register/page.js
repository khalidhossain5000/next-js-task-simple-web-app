"use client"
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Swal from 'sweetalert2';


const Page = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
const [loading, setLoading] = useState(false);
const handleRegister = async (e) => {
  e.preventDefault();
    setLoading(true);
  try {
    const res = await fetch("/api/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, password }),
    });
    const data = await res.json();

   if (res.ok) {
      // SweetAlert Success
      Swal.fire({
        icon: "success",
        title: "Registered!",
        text: data.message,
        confirmButtonColor: "#179800",
      }).then(() => {
        router.push("/"); 
      });
    } else {
      alert(data.message);
    }
  } catch (error) {
    console.error(error);
    alert("Something went wrong!");
  }finally {
    setLoading(false);
  }
};


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
            {loading ? "Registering..." : "Register"}
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
