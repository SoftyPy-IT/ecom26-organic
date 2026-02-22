"use client";
import BlogCard from "../cards/BlogCard";
import CategoryItems from "../category/CategoryItems";
import QueryAction from "../shared/QueryAction";
import { blogData } from "./Blog";
import { useState } from "react";
import LatestBlog from "./LatestBlog";
import Container from "../shared/Container";

const categoryData = [
  { id: 1, name: "All", total: 10 },
  { id: 2, name: "Fruits", total: 5 },
  { id: 3, name: "Vegetables", total: 5 },
];

export default function BlogList() {
  const [search, setSearch] = useState("");

  return (
   <Container className="px-2 2xl:px-0 py-4">
     <div className="flex flex-col md:flex-row gap-4">
      <div className="w-full  md:w-3/4 flex flex-wrap gap-4">
        {blogData.map((blog, idx) => (
          <BlogCard key={idx} blog={blog} />
        ))}
      </div>
      <div className="w-full sticky top-20 h-fit space-y-6 md:w-1/4">
        <QueryAction setSearch={setSearch} />
        <CategoryItems title="Categories" items={categoryData} />
        <LatestBlog title="Latest Blog" />
      </div>
    </div>
   </Container>
  )
}
