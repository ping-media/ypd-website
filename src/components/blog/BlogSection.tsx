"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const blogPosts = [
  {
    id: 1,
    title: "How AI is Reshaping Career Guidance",
    author: "Phoenix Baker",
    date: "19 Jan 2022",
    description:
      "Explore how AI tools can analyze skills, personality, and market trends to deliver hyper-personalized career recommendations.",
    image: "/blogs/recent.png",
    tags: ["Design", "Research"],
  },
  {
    id: 2,
    title: "The Hidden Career Paths You Haven’t Considered",
    author: "Phoenix Baker",
    date: "19 Jan 2022",
    description:
      "Introduce unconventional but growing roles in tech, sustainability, and digital industries that match overlooked skills.",
    image: "/blogs/recent1.png",
    tags: ["Design", "Research"],
  },
  {
    id: 3,
    title:
      "From Confusion to Clarity: A Step-by-Step Career Planning Framework",
    author: "Phoenix Baker",
    date: "19 Jan 2022",
    description:
      "Break down a practical, repeatable system for identifying your goals, skills, and best-fit roles.",
    image: "/blogs/recent2.png",
    tags: ["Design", "Research"],
  },
  {
    id: 4,
    title: "The Power of Mentorship in Career Growth",
    author: "Phoenix Baker",
    date: "19 Jan 2022",
    description:
      "Explain how having the right mentor can accelerate skill development, expand networks, and boost confidence.",
    image: "/blogs/recent.png",
    tags: ["Design", "Research"],
  },
  {
    id: 5,
    title: "How to Reinvent Your Career Without Starting Over",
    author: "Phoenix Baker",
    date: "19 Jan 2022",
    description:
      "Offer strategies for pivoting to new industries or roles using transferable skills.",
    image: "/blogs/recent1.png",
    tags: ["Design", "Research"],
  },
  {
    id: 6,
    title: "The Science Behind Choosing the Right Career",
    author: "Phoenix Baker",
    date: "19 Jan 2022",
    description:
      "Dive into cognitive and personality assessments, and why they work better than guesswork.",
    image: "/blogs/recent2.png",
    tags: ["Design", "Research"],
  },
];

const totalPages = 10;

const BlogSection = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page: number) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
  };

  return (
    <section className="w-full flex justify-center p-4 sm:p-10 lg:p-20 font-lato">
      <div className="w-full max-w-[1280px] flex flex-col gap-4 sm:gap-10">
        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl font-red-rose">All blog Posts</h2>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <Link
              key={post.id}
              href={`/blogs/${post.id}`}
              className="flex flex-col rounded-xl overflow-hidden border border-gray-200 hover:shadow-lg transition group"
            >
              <div className="w-full h-48">
                <Image
                  src={post.image}
                  alt={post.title}
                  width={400}
                  height={250}
                  className="w-full h-full object-cover rounded-t-xl"
                />
              </div>

              <div className="p-4 flex flex-col justify-between flex-1">
                <div className="flex flex-col gap-2">
                  <p className="text-sm sm:text-base text-brand-primary font-semibold">
                    {post.author} • {post.date}
                  </p>
                  <h3 className="text-lg sm:text-xl font-red-rose group-hover:underline">
                    {post.title}
                  </h3>
                  <p className="text-brand-gray text-sm sm:text-base">
                    {post.description}
                  </p>
                </div>

                <div className="flex gap-2 flex-wrap mt-4">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs rounded-full bg-brand-bg text-brand-primary font-semibold"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-between pt-6 text-sm text-gray-600">
          {/* Prev */}
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="flex items-center gap-1 px-3 py-1 rounded-md hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronLeft className="w-4 h-4" />
            <span className="hidden sm:inline">Previous</span>
          </button>

          {/* Mobile: only current page */}
          <span className="sm:hidden font-semibold">
            Page {currentPage} of {totalPages}
          </span>

          {/* Tablet + Desktop: fixed pagination */}
          <div className="hidden sm:flex gap-2">
            {[1, 2, 3, "...", totalPages - 2, totalPages - 1, totalPages].map(
              (num, idx) =>
                typeof num === "number" ? (
                  <button
                    key={idx}
                    onClick={() => handlePageChange(num)}
                    className={`w-8 h-8 rounded-md flex items-center justify-center ${
                      num === currentPage
                        ? "bg-brand-primary text-white"
                        : "hover:bg-gray-100"
                    }`}
                  >
                    {num}
                  </button>
                ) : (
                  <span key={idx} className="px-2 select-none text-gray-400">
                    {num}
                  </span>
                )
            )}
          </div>

          {/* Next */}
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="flex items-center gap-1 px-3 py-1 rounded-md hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <span className="hidden sm:inline">Next</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
