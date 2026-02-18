import Image from "next/image";
import Link from "next/link";

export interface Props {
  image?: string;
  title?: string;
  price?: number;
}

export default function OfferedCard({ image, title, price }: Props) {
  return (
    <Link href="/shop">
      <div className="border border-gray-200 hover:shadow-lg hover:border-[#81b03f] transition duration-300 flex flex-col  w-full">

        {/* Image Section */}
        <div className="relative w-full h-24 flex items-center justify-center rounded-t-xl overflow-hidden">
          <Image
            src={image || "/placeholder.png"}
            alt={title || "product"}
            fill
            className="object-contain p-3"
          />
        </div>

        {/* Content Section */}
        <div className="flex flex-col justify-between flex-1 p-4 text-center">
          <h2 className="text-xl font-medium line-clamp-2">
            {title}
          </h2>

          <p className="text-xl font-semibold pt-2">
            ${price}
          </p>
        </div>
      </div>
    </Link>
  );
}
