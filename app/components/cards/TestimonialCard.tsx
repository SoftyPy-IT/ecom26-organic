import Image from "next/image";

interface TestimonialCardProps {
  image: string;
  name: string;
  message: string;
  rating: number;
}

export default function TestimonialCard({ image, name, message, rating }: TestimonialCardProps) {
  return (
    <div className="shadow-md rounded-xl p-6 flex flex-col items-center text-center space-y-3 hover:shadow-lg transition">

      {/* User Image */}
      <div className="relative w-16 h-16">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover rounded-full"
        />
      </div>

      {/* Name */}
      <h3 className="text-2xl font-semibold text-gray-800">{name}</h3>

      {/* Message */}
      <p className="text-gray-600 text-base">{message}</p>

      {/* Rating */}
      <div className="flex gap-1">
        {Array.from({ length: rating }).map((_, i) => (
          <span key={i} className="text-yellow-400 text-lg">★</span>
        ))}
        {Array.from({ length: 5 - rating }).map((_, i) => (
          <span key={i} className="text-gray-300 text-lg">★</span>
        ))}
      </div>
    </div>
  );
}
