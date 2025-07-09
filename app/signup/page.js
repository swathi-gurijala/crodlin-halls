"use client";
import { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/navigation";
import app from "../../../firebase";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const auth = getAuth(app);
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, pass)
      .then(() => router.push("/home"))
      .catch((e) => alert("Signup failed: " + e.message));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6">Signup</h2>
        <input type="email" placeholder="Email" required
          className="w-full mb-4 px-3 py-2 border rounded"
          value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="Password" required
          className="w-full mb-4 px-3 py-2 border rounded"
          value={pass} onChange={(e) => setPass(e.target.value)} />
        <button className="w-full py-2 bg-yellow-600 text-white rounded">Signup</button>
      </form>
    </div>
  );
}

