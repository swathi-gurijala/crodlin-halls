import Navbar from "../components/Navbar";
import HallCard from "../components/HallCard";
import HeroSlider from "../components/HeroSlider";
import QuoteSlider from "../components/QuoteSlider";

const hallsData = [
  {
    id: "1",
    name: "Wedding Palace",
    image: "/images/hall1.jpg",
    location: "Hyderabad",
    price: 1650,
    rating: "4.7",
  },
  {
    id: "2",
    name: "Birthday Bash Venue",
    image: "/images/birthday.jpg",
    location: "Kukatpally",
    price: 1200,
    rating: "4.5",
  },
  {
    id: "3",
    name: "Corporate Hall",
    image: "/images/hall2.jpg",
    location: "Madhapur",
    price: 2200,
    rating: "4.8",
  },
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

