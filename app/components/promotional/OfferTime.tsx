"use client";

import React, { useEffect, useMemo, useState } from "react";
import { formatTime } from "@/app/utils/TimeFormat";

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
} | null;

interface OfferTimeProps {
  endDate?: string;
  onExpire?: () => void;
}

const calculateTimeLeft = (target: number): TimeLeft => {
  const difference = target - Date.now();

  if (difference <= 0) return null;

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / (1000 * 60)) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  };
};

export default function OfferTime({
  endDate = "2026-02-25T23:59:59",
  onExpire,
}: OfferTimeProps) {
  const targetDate = useMemo(() => new Date(endDate).getTime(), [endDate]);

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(() =>
    calculateTimeLeft(targetDate)
  );

  useEffect(() => {
    if (!timeLeft) return;

    const interval = setInterval(() => {
      const updated = calculateTimeLeft(targetDate);

      if (!updated) {
        clearInterval(interval);
        onExpire?.();
      }

      setTimeLeft(updated);
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate, timeLeft, onExpire]);

  if (!timeLeft) {
    return (
      <div className="py-6 text-center">
        <h2 className="text-lg font-semibold text-red-500">
          Offer Expired
        </h2>
      </div>
    );
  }

  const timeBlocks = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds },
  ];

  return (
    <div>
      <h2 className="text-lg font-semibold my-4">
        Limited Time Offer Ends In
      </h2>
      <div className="flex gap-6">
        {timeBlocks.map((block) => (
          <div key={block.label} className="flex flex-col items-center">
            <span className="flex items-center justify-center h-16 w-16 rounded-full bg-white text-black text-xl font-bold shadow-md">
              {formatTime(block.value)}
            </span>
            <p className="mt-2 text-sm text-gray-700">
              {block.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
