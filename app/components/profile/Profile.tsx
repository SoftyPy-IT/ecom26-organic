"use client";

import { useGetProfileQuery } from "@/app/redux/features/auth/auth.api";
import {
  Mail,
  User,
  ShieldCheck,
  Calendar,
  Box,
  Heart,
  ClipboardList,
  Star,
  ShoppingCart,
} from "lucide-react";
import SectionHeader from "../shared/SectionHeader";
import Loader from "../shared/Loader";
import Link from "next/link";
import { useAppSelector } from "@/app/redux/hooks/hook";

type InfoItemProps = {
  icon: React.ReactNode;
  label: string;
  value: string | number;
};

const InfoItem = ({ icon, label, value }: InfoItemProps) => (
  <div className="flex items-center gap-3 bg-gray-50 p-3 rounded-lg shadow-sm hover:shadow-md transition">
    <div className="text-xl">{icon}</div>
    <div>
      <p className="text-sm text-gray-500">{label}</p>
      <p className="font-medium text-gray-900">{value}</p>
    </div>
  </div>
);

export default function Profile() {
  const { data, isLoading, } = useGetProfileQuery({});
  const { itemsCount } = useAppSelector((state) => state.wishList);
  const { itemsCount: cartItemsCount } = useAppSelector((state) => state.cart);
  if (isLoading) return <Loader />;

  const {
    firstName,
    lastName,
    email,
    role,
    status,
    isVerified,
    hasShippingAddress,
    orders,
    createdAt,
    updatedAt,
  } = data.data;

  return (
    <div>
      <SectionHeader title="Profile" subtitle="Your profile information" />

      {/* Basic Info */}
      <section className="mb-8 bg-white p-6  shadow-md">
        <h2 className="text-xl font-semibold mb-4">Basic Information</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <InfoItem icon={<User className="text-blue-500" />} label="Name" value={`${firstName} ${lastName}`} />
          <InfoItem icon={<Mail className="text-green-500" />} label="Email" value={email} />
          <InfoItem icon={<ShieldCheck className="text-purple-500" />} label="Role" value={role} />
          <InfoItem icon={<ShieldCheck className="text-yellow-500" />} label="Status" value={status} />
          <InfoItem icon={<ShieldCheck className="text-green-600" />} label="Verified" value={isVerified ? "Yes" : "No"} />
          <InfoItem icon={<Box className="text-indigo-500" />} label="Has Shipping Address" value={hasShippingAddress ? "Yes" : "No"} />
        </div>
      </section>

      {/* Activity Stats */}
      <section className="mb-8 bg-white p-6 shadow-md">
        <h2 className="text-xl font-semibold mb-4">Activity</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <InfoItem icon={<Box className="text-blue-500" />} label="Orders" value={orders?.length ?? 0} />
          <InfoItem icon={<Heart className="text-red-500" />} label="Wishlist" value={itemsCount} />
          <InfoItem icon={<ShoppingCart className="text-red-500" />} label="Cart" value={cartItemsCount} />
        </div>
      </section>

      {/* Account Dates */}
      <section className="bg-white p-6 shadow-md">
        <h2 className="text-xl font-semibold mb-4">Account Info</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <InfoItem icon={<Calendar className="text-green-500" />} label="Created At" value={new Date(createdAt).toLocaleString()} />
          <InfoItem icon={<Calendar className="text-orange-500" />} label="Last Updated" value={new Date(updatedAt).toLocaleString()} />
        </div>
      </section>

      <div className="flex justify-center py-6">
        <Link href="/update">
          <button className="bg-[#81b03f] text-white px-4 py-2 hover:bg-[#81b03f]/80 transition">
            Update Profile
          </button>
        </Link>
      </div>
    </div>
  );
}
