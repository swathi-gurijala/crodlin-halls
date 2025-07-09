"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export default function HallCard({ hall }) {
  return (
    <motion.div
      whileHover={{
        scale: 1.05,
        boxShadow: "0 15px 30px rgba(0, 0, 0, 0.15)",
      }}
      className="bg-gradient-to-br from-yellow-50 to-white rounded-xl shadow-lg overflow-hidden transition-all duration-300"
    >
      <img
        src={hall.image || "https://via.placeholder.com/600x400?text=No+Image"}
        alt={hall.name}
        className="w-full h-48 object-cover transition-transform duration-500 hover:scale-105"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold text-yellow-800 mb-1">{hall.name}</h3>
        <p className="text-gray-600">📍 {hall.location}</p>
        <p className="text-gray-800 font-bold">₹{hall.price}</p>
        <p className="text-yellow-500">⭐ {hall.rating}</p>

        <Link href={`/book/${hall.id}`}>
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="mt-4 w-full bg-yellow-600 text-white py-2 rounded hover:bg-yellow-700 transition"
          >
            Book Now
          </motion.button>
        </Link>
      </div>
    </motion.div>
  );
}
