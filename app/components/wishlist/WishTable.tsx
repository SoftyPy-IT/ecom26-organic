import Image from "next/image";

const products = [
  {
    id: 1,
    name: "Cherry",
    price: 18.0,
    image:
      "https://freebw.com/templates/oragnive-v1/images/best-sell-01.jpg",
    inStock: true,
  },
  {
    id: 2,
    name: "Asparagus",
    price: 12.0,
    image:
      "https://freebw.com/templates/oragnive-v1/images/best-sell-02.jpg",
    inStock: true,
  },
];

export default function WishTable() {
  return (
    <div className="py-6">
      {/* Scroll container */}
      <div className="w-full overflow-x-auto">
        {/* 👇 This min-width is the key */}
        <table className="min-w-[900px] w-full border border-gray-200 bg-white">
          <thead className="bg-gray-50 text-xs uppercase text-gray-600">
            <tr>
              <th className="px-6 py-4 text-left">Product</th>
              <th className="px-6 py-4 text-left">Price</th>
              <th className="px-6 py-4 text-left">Status</th>
              <th className="px-6 py-4 text-left">Action</th>
              <th className="px-6 py-4 text-left">Remove</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-100">
            {products.map((product) => (
              <tr key={product.id} className="hover:bg-gray-50">
                <td className="px-6 py-5 whitespace-nowrap">
                  <div className="flex items-center gap-4">
                    <div className="relative w-16 h-16 shrink-0">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-contain"
                        sizes="64px"
                      />
                    </div>
                    <span className="font-medium text-gray-800">
                      {product.name}
                    </span>
                  </div>
                </td>

                <td className="px-6 py-5 whitespace-nowrap">
                  ${product.price.toFixed(2)}
                </td>

                <td className="px-6 py-5 whitespace-nowrap">
                  {product.inStock ? (
                    <span className="text-green-600 font-medium">
                      In Stock
                    </span>
                  ) : (
                    <span className="text-red-500 font-medium">
                      Out of Stock
                    </span>
                  )}
                </td>

                <td className="px-6 py-5 whitespace-nowrap">
                  <button className="border px-4 py-2 text-xs uppercase tracking-widest bg-[#81b03f] border-[#81b03f] text-white shadow hover:shadow-lg hover:bg-[#81b03f] hover:border-[#81b03f] transition">
                    Shop Now
                  </button>
                </td>

                <td className="px-6 py-5 whitespace-nowrap">
                  <button className="text-gray-400 hover:text-red-500">
                    ✕
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
