"use client";
import { useState, useEffect } from "react";
import app from "@/firebase";
import { getAuth } from "firebase/auth";
import { getFirestore, collection, query, where, getDocs } from "firebase/firestore";

export default function MyBookings() {
  const [user, setUser] = useState(null);
  const [bookings, setBookings] = useState([]);
  
  useEffect(() => {
    const auth = getAuth(app);
    auth.onAuthStateChanged(async (u) => {
      if (u) {
        setUser(u);
        const firestore = getFirestore(app);
        const q = query(collection(firestore, "bookings"), where("userId", "==", u.uid));
        const snap = await getDocs(q);
        const data = snap.docs.map((d) => d.data());
        setBookings(data);
      }
    });
  }, []);

  if (!user) return <p className="p-8">Login to view your bookings.</p>;

  return (
    <div className="max-w-2xl mx-auto py-10">
      <h2 className="text-3xl font-bold mb-6">Your Bookings</h2>
      {bookings.length === 0 ? (
        <p>You have no bookings yet.</p>
      ) : (
        bookings.map((b,i) => (
          <div key={i} className="border p-4 rounded mb-4">
            <p><strong>Hall ID:</strong> {b.hallId}</p>
            <p><strong>Payment Ref:</strong> {b.paymentId}</p>
            <p><strong>Date:</strong> {new Date(b.timestamp).toLocaleString()}</p>
          </div>
        ))
      )}
    </div>
  );
}

