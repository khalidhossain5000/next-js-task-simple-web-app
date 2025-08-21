"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Swal from "sweetalert2";
import { FcGoogle } from "react-icons/fc";
import { signIn } from "next-auth/react";

const Page = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [loadingGoogle, setLoadingGoogle] = useState(false);

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
        await signIn("credentials", {
          redirect: true,
          email,
          password,
          callbackUrl: "/",
        });
        Swal.fire({
          icon: "success",
          title: "Registered & Logged in!",
          confirmButtonColor: "#179800",
        });
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error(error);
      alert("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      setLoadingGoogle(true);
      await signIn("google", { callbackUrl: "/" });
      if (res?.ok) {
        Swal.fire({
          icon: "success",
          title: "Register Successful!",
          timer: 2000,
          showConfirmButton: false,
        }).then(async () => {
          // Register হয়ে গেলে সঙ্গে সঙ্গে login
          await signIn("credentials", {
            redirect: true, // true হলে callbackUrl এ পাঠাবে
            email,
            password,
            callbackUrl: "/", // success হলে home page
          });
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Login Failed",
          text: "Please try again!",
        });
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoadingGoogle(false);
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
            className="cursor-pointer w-full py-3 rounded-lg bg-[#179800] text-white font-semibold text-lg"
          >
            {loading ? "Registering..." : "Register"}
          </button>
        </form>

        <button
          type="button"
          onClick={handleGoogleLogin}
          className="mt-3 w-full p-3 bg-white border rounded-lg flex items-center justify-center gap-2 text-lg"
          disabled={loadingGoogle}
        >
          {loadingGoogle ? (
            "Signing in..."
          ) : (
            <>
              <FcGoogle size={24} />
              Continue with Google
            </>
          )}
        </button>

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
