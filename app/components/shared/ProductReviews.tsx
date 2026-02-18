"use client";
import React, { useMemo, useState } from "react";
import ReviewForm from "./forms/ReviewForm";

interface Review {
  id: number;
  name: string;
  rating: number;
  comment: string;
  date: string;
}

export default function ProductReviews() {
  const [activeTab, setActiveTab] = useState<"description" | "reviews">(
    "description"
  );

  const productData = {
    description: {
      title: "Product Overview",
      paragraphs: [
        "This product is crafted using premium-grade materials to ensure durability, performance, and long-term reliability.",
        "Designed with modern aesthetics and functionality in mind, it delivers exceptional value for both everyday use and professional applications.",
        "Every detail has been carefully engineered to provide comfort, efficiency, and a superior user experience.",
      ],
    },
    reviews: [
      {
        id: 1,
        name: "John Doe",
        rating: 5,
        comment: "Excellent quality product. Highly recommended!",
        date: "Jan 12, 2026",
      },
      {
        id: 2,
        name: "Sarah Smith",
        rating: 4,
        comment: "Very good value for money. Fast delivery.",
        date: "Feb 02, 2026",
      },
    ] as Review[],
  };


  const averageRating = useMemo(() => {
    if (!productData.reviews.length) return 0;
    return (
      productData.reviews.reduce((acc, r) => acc + r.rating, 0) /
      productData.reviews.length
    );
  }, [productData.reviews]);

  const tabs = [
    { id: "description", label: "Description" },
    {
      id: "reviews",
      label: `Reviews (${productData.reviews.length})`,
    },
  ];

  return (
    <div className="mt-16">
      {/* ---------------- Tabs ---------------- */}
      <div className="flex gap-6">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() =>
              setActiveTab(tab.id as "description" | "reviews")
            }
            className={`relative px-4 py-3 text-sm font-medium transition
              ${activeTab === tab.id
                ? "text-black"
                : "text-gray-500 hover:text-black"
              }`}
          >
            {tab.label}

            {activeTab === tab.id && (
              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-black" />
            )}
          </button>
        ))}
      </div>

      {/* ---------------- Content ---------------- */}
      <div className="py-10">
        {/* -------- Description -------- */}
        {activeTab === "description" && (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-gray-900">
              {productData.description.title}
            </h3>

            {productData.description.paragraphs.map((text, index) => (
              <p
                key={index}
                className="text-gray-600 leading-relaxed"
              >
                {text}
              </p>
            ))}
          </div>
        )}

        {/* -------- Reviews -------- */}
        {activeTab === "reviews" && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Left: Review List */}
            <div className="lg:col-span-2 space-y-8">
              {/* Summary */}
              <div className="flex items-center gap-6 border-[#81b03f] border-b pb-6">
                <div className="text-4xl font-bold">
                  {averageRating.toFixed(1)}
                </div>

                <div>
                  <div className="text-yellow-500 text-lg">

                    {"★".repeat(Math.round(averageRating))}
                    {"☆".repeat(5 - Math.round(averageRating))}
                  </div>
                  <p className="text-sm text-gray-500">
                    Total {productData.reviews.length} reviews
                  </p>
                </div>
              </div>

              {/* Reviews */}
              {productData.reviews.length === 0 ? (
                <p className="text-gray-500">
                  No reviews yet. Be the first to review this product.
                </p>
              ) : (
                productData.reviews.map((review) => (
                  <div
                    key={review.id}
                    className="border-b border-[#81b03f] pb-6"
                  >
                    <div className="flex justify-between mb-2">
                      <h4 className="font-semibold text-gray-800">
                        {review.name}
                      </h4>
                      <span className="text-xs text-gray-400">
                        {review.date}
                      </span>
                    </div>

                    <div className="text-yellow-500 mb-3 text-sm">
                      {"★".repeat(review.rating)}
                      {"☆".repeat(5 - review.rating)}
                    </div>

                    <p className="text-gray-600 text-sm leading-relaxed">
                      {review.comment}
                    </p>
                  </div>
                ))
              )}
            </div>

            {/* Right: Review Form */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 border border-[#81b03f] p-6 shadow-sm">
                <h4 className="font-semibold mb-4">
                  Write a Review
                </h4>
                <ReviewForm />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
