"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export default function HallCard({ hall }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(0,0,0,0.2)" }}
      className="bg-white rounded-xl overflow-hidden"
    >
      <img src={hall.image} alt={hall.name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-semibold">{hall.name}</h3>
        <p className="text-gray-600">📍 {hall.location}</p>
        <p className="text-gray-800 font-bold">₹{hall.price}</p>
        <p className="text-yellow-500">⭐ {hall.rating}</p>
        <Link href={`/book/${hall.id}`}>
          <button className="mt-4 w-full bg-yellow-600 text-white py-2 rounded hover:bg-yellow-700 transition">
            Book Now
          </button>
        </Link>
      </div>
    </motion.div>
  );
}

