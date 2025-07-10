"use client";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import app from "@/firebase";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { loadRazorpay } from "../../../razorpay";

const halls = {
  "1": { name: "Wedding Palace", price: 1650 },
  "2": { name: "Birthday Bash Venue", price: 1200 },
  "3": { name: "Corporate Hall", price: 2200 },
};

export default function BookPage({ params }) {
  const { id } = params;
  const hall = halls[id];
  const [user, setUser] = useState(null);
  const router = useRouter();
  const firestore = getFirestore(app);

  useEffect(() => {
    import("firebase/auth").then(({ getAuth }) => {
      const auth = getAuth(app);
      auth.onAuthStateChanged((u) => setUser(u));
    });
  }, []);

  const handlePayment = async () => {
    if (!user) return alert("Please login first!");
    const res = await loadRazorpay();
    const options = { key: "YOUR_RAZORPAY_KEY", amount: hall.price * 100, name: hall.name, handler: async function (resp) {
      await addDoc(collection(firestore, "bookings"), {
        hallId: id,
        userId: user.uid,
        paymentId: resp.razorpay_payment_id,
        timestamp: new Date().toISOString(),
      });
      alert("Booking confirmed!");
      router.push("/bookings");
    }};
    new window.Razorpay(options).open();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-lg">
        <h2 className="text-2xl font-bold mb-4">Book {hall.name}</h2>
        <p className="mb-6">Price: ₹{hall.price}</p>
        <button className="w-full py-3 bg-yellow-600 text-white rounded" onClick={handlePayment}>
          Pay & Book Now
        </button>
      </div>
    </div>
  );
}

