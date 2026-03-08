'use client';

import React, { useMemo, useState } from 'react';
import ReviewForm from './forms/ReviewForm';
import { IReview } from '@/app/redux/types/TProductDetails';

type TabType = 'description' | 'reviews';

interface ProductReviewsProps {
  description: string;
  reviews: IReview[];
  id: string;
}

export default function ProductReviews({ description, id, reviews = [] }: ProductReviewsProps) {
  const [activeTab, setActiveTab] = useState<TabType>('description');

  /* ===================== Derived Values ===================== */

  const totalReviews = reviews.length;

  const averageRating = useMemo(() => {
    if (!totalReviews) return 0;

    const total = reviews.reduce((acc, review) => acc + (review.rating ?? 0), 0);

    return total / totalReviews;
  }, [reviews, totalReviews]);

  const roundedRating = Math.round(averageRating);

  /* ===================== UI ===================== */

  return (
    <section className="mt-20">
      {/* ================= Tabs ================= */}
      <div className="border-b border-gray-200">
        <div className="flex gap-8">
          <TabButton
            label="Description"
            active={activeTab === 'description'}
            onClick={() => setActiveTab('description')}
          />

          <TabButton
            label={`Reviews (${totalReviews})`}
            active={activeTab === 'reviews'}
            onClick={() => setActiveTab('reviews')}
          />
        </div>
      </div>

      {/* ================= Content ================= */}
      <div className="py-12">
        {activeTab === 'description' && <DescriptionContent description={description} />}

        {activeTab === 'reviews' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* ===== Review List ===== */}
            <div className="lg:col-span-2 space-y-10">
              <ReviewSummary
                averageRating={averageRating}
                roundedRating={roundedRating}
                totalReviews={totalReviews}
              />

              {totalReviews === 0 ? <EmptyReviewState /> : <ReviewList reviews={reviews} />}
            </div>

            {/* ===== Review Form ===== */}
            <div className="lg:col-span-1">
              <div className="sticky top-28 border border-gray-200 rounded-lg p-6 shadow-sm bg-white">
                <h4 className="text-lg font-semibold mb-6">Write a Review</h4>
                <ReviewForm id={id} />
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

/* ===================== Sub Components ===================== */

function TabButton({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`relative py-4 text-sm font-medium transition-colors
        ${active ? 'text-black' : 'text-gray-500 hover:text-black'}`}
    >
      {label}

      {active && <span className="absolute bottom-0 left-0 w-full h-[2px] bg-black" />}
    </button>
  );
}

function DescriptionContent({ description }: { description: string }) {
  return (
    <div
      className="prose max-w-none text-justify text-gray-700"
      dangerouslySetInnerHTML={{ __html: description }}
    />
  );
}

function ReviewSummary({
  averageRating,
  roundedRating,
  totalReviews,
}: {
  averageRating: number;
  roundedRating: number;
  totalReviews: number;
}) {
  return (
    <div className="flex items-center gap-8 border-b border-gray-200 pb-8">
      <div className="text-5xl font-bold text-gray-900">{averageRating.toFixed(1)}</div>

      <div>
        <StarRating rating={roundedRating} />
        <p className="text-sm text-gray-500 mt-2">
          Based on {totalReviews} review{totalReviews !== 1 && 's'}
        </p>
      </div>
    </div>
  );
}

function ReviewList({ reviews }: { reviews: IReview[] }) {
  return (
    <div className="space-y-8">
      {reviews.map((review) => (
        <div key={review.id} className="border-b border-gray-200 pb-6">
          <div className="flex justify-between items-start mb-3">
            <div>
              <h4 className="font-semibold text-gray-800">{review.name}</h4>
              <StarRating rating={review.rating ?? 0} small />
            </div>

            <span className="text-xs text-gray-400">{review.date}</span>
          </div>

          <p className="text-gray-600 text-sm leading-relaxed">{review.comment}</p>
        </div>
      ))}
    </div>
  );
}

function StarRating({ rating, small }: { rating: number; small?: boolean }) {
  const sizeClass = small ? 'text-sm' : 'text-lg';

  return (
    <div className={`text-yellow-500 ${sizeClass}`}>
      {'★'.repeat(Math.min(5, rating))}
      {'☆'.repeat(5 - Math.min(5, rating))}
    </div>
  );
}

function EmptyReviewState() {
  return (
    <div className="py-10 text-center border border-dashed border-gray-300 rounded-lg">
      <p className="text-gray-500">No reviews yet. Be the first to review this product.</p>
    </div>
  );
}
