"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <Link href="/">
          <div className="text-2xl font-bold text-yellow-600 cursor-pointer">
            Crodlin Halls
          </div>
        </Link>
        <div className="space-x-6">
          <Link href="/home"><button className="text-gray-700 hover:text-yellow-600">Home</button></Link>
          <Link href="/bookings"><button className="text-gray-700 hover:text-yellow-600">My Bookings</button></Link>
          <Link href="/login"><button className="text-gray-700 hover:text-yellow-600">Login</button></Link>
          <Link href="/signup"><button className="text-gray-700 hover:text-yellow-600">Signup</button></Link>
        </div>
      </div>
    </nav>
  );
}

