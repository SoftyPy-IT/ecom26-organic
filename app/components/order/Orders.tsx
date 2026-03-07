"use client";

import Image from "next/image";
import { useGetProfileQuery } from "@/app/redux/features/auth/auth.api";
import Loader from "../shared/Loader";
import SectionHeader from "../shared/SectionHeader";
import { Order, OrderItem, UserProfile } from "@/app/redux/types/TProfile";

const StatusBadge = ({ status }: { status: string }) => {
  const statusStyles: Record<string, string> = {
    pending: "bg-yellow-500",
    completed: "bg-green-500",
    cancelled: "bg-red-500",
  };

  return (
    <span
      className={`px-2 py-1 rounded text-white text-xs capitalize ${statusStyles[status] ?? "bg-gray-400"
        }`}
    >
      {status}
    </span>
  );
};

const OrderItemsList = ({ items }: { items: OrderItem[] }) => (
  <div className="flex flex-col gap-2">
    {items.map((item) => (
      <div key={item.code} className="flex items-center gap-2">
        <Image
          src={item.thumbnail}
          alt={item.name}
          width={40}
          height={40}
          className="rounded object-cover border"
        />
        <div className="flex flex-col">
          <span className="font-medium">{item.name}</span>
          <span className="text-gray-500 text-sm">Qty: {item.quantity}</span>
        </div>
      </div>
    ))}
  </div>
);

export default function Orders() {

  const { data, isLoading } = useGetProfileQuery({});
  if (isLoading) return <Loader />;


  const orders: Order[] = data.data.orders || [];

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <SectionHeader title="Orders" subtitle="Your order history" />

      {orders.length === 0 ? (
        <p className="text-center text-gray-500 mt-6">You have no orders yet.</p>
      ) : (
        <div className="overflow-x-auto mt-6">
          <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
            <thead className="bg-gray-100">
              <tr>
                <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">
                  Order ID
                </th>
                <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">
                  Date
                </th>
                <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">
                  Items
                </th>
                <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">
                  Payment
                </th>
                <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">
                  Status
                </th>
                <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">
                  Total
                </th>
              </tr>
            </thead>

            <tbody>
              {orders.map((order) => (
                <tr key={order._id} className="border-b hover:bg-gray-50 transition">
                  <td className="py-3 px-4 text-sm font-medium text-gray-800">
                    {order._id.slice(-6).toUpperCase()}
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-600">
                    {new Date(order.createdAt).toLocaleDateString()}
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-600">
                    <OrderItemsList items={order.orderItems} />
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-600">{order.paymentMethod}</td>
                  <td className="py-3 px-4 text-sm">
                    <StatusBadge status={order.status} />
                  </td>
                  <td className="py-3 px-4 text-sm font-medium text-gray-800">${order.total}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
