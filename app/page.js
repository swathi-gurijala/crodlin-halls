import Navbar from "../components/Navbar";
import HallCard from "../components/HallCard";
import HeroSlider from "../components/HeroSlider";
import QuoteSlider from "../components/QuoteSlider";

const hallsData = [
  {
    id: "1",
    name: "Wedding Palace",
    image: "https://images.pexels.com/photos/6130502/pexels-photo-6130502.jpeg?auto=compress&cs=tinysrgb&h=600", // Wedding Hall
    location: "Hyderabad",
    price: 1650,
    rating: "4.7",
  },
  {
    id: "2",
    name: "Birthday Bash Venue",
    image: "https://images.pexels.com/photos/3171837/pexels-photo-3171837.jpeg?auto=compress&cs=tinysrgb&h=600", // Birthday Venue
    location: "Kukatpally",
    price: 1200,
    rating: "4.5",
  },
  {
    id: "3",
    name: "Corporate Hall",
    image: "https://images.pexels.com/photos/5824558/pexels-photo-5824558.jpeg?auto=compress&cs=tinysrgb&h=600", // Corporate Hall
    location: "Madhapur",
    price: 2200,
    rating: "4.8",
  },

  // 🔸 Optional Placeholder Example
  {
    id: "4",
    name: "Luxury Banquet",
    image: "https://via.placeholder.com/600x400?text=No+Image+Available", // Placeholder image
    location: "Secunderabad",
    price: 2000,
    rating: "4.6",
  },

  // 🔸 Optional Blank Image (for testing)
  {
    id: "5",
    name: "Upcoming Venue",
    image: "", // Blank (will show broken img if not handled)
    location: "Gachibowli",
    price: 1800,
    rating: "4.3",
  }
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="max-w-6xl mx-auto py-12 px-4">
        <h1 className="text-4xl font-bold text-center text-yellow-600 mb-10">
          Explore Our Premium Event Halls
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {hallsData.map((hall) => (
            <HallCard key={hall.id} hall={hall} />
          ))}
        </div>
      </div>
      <QuoteSlider />
      <HeroSlider />
    </div>
  );
}
