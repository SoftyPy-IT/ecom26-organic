"use client";
import BlogCard from "../cards/BlogCard";
import CategoryItems from "../category/CategoryItems";
import QueryAction from "../shared/QueryAction";
import { blogData } from "./Blog";
import { useState } from "react";
import LatestBlog from "./LatestBlog";

const categoryData = [
  { id: 1, name: "All", total: 10 },
  { id: 2, name: "Fruits", total: 5 },
  { id: 3, name: "Vegetables", total: 5 },
];

export default function BlogList() {
  const [search, setSearch] = useState("");

  return (
    <div className="flex flex-col md:flex-row gap-4 py-4">
      <div className="w-full md:w-3/4 flex flex-wrap gap-4">
        {blogData.map((blog, idx) => (
          <BlogCard key={idx} blog={blog} />
        ))}
      </div>
      <div className="w-full md:w-1/4">
        <QueryAction setSearch={setSearch} />
        <CategoryItems title="Categories" items={categoryData} />
        <LatestBlog title="Latest Blog" />
      </div>
    </div>
  )
}
