"use client";

import Image from "next/image";
import Link from "next/link";
// import { ArrowLeft, ArrowRight } from "lucide-react";
import { useRef } from "react";

interface Blog {
  id: number;
  title: string;
  date: string;
  author: string;
  description: string;
  image: string;
  link: string;
}

const blogs: Blog[] = [
  {
    id: 1,
    title: "How to Choose the Right Career Stream in Class 10",
    date: "19 Jan 2022",
    author: "Phoenix Baker",
    description:
      "Linear helps streamline software projects, sprints, tasks, and bug tracking. Here's how to get...",
    image: "/blog1.png",
    link: "#",
  },
  {
    id: 2,
    title: "Top 5 Tips to Crack the NDA Exam",
    date: "19 Jan 2022",
    author: "Phoenix Baker",
    description:
      "Linear helps streamline software projects, sprints, tasks, and bug tracking. Here's how to get...",
    image: "/blog2.png",
    link: "#",
  },
  {
    id: 3,
    title: "Growth Mindset: Why It Matters for Career Success",
    date: "19 Jan 2022",
    author: "Phoenix Baker",
    description:
      "Linear helps streamline software projects, sprints, tasks, and bug tracking. Here's how to get...",
    image: "/blog3.png",
    link: "#",
  },
  {
    id: 4,
    title: "Top 5 Tips to Crack the NDA Exam",
    date: "19 Jan 2022",
    author: "Phoenix Baker",
    description:
      "Linear helps streamline software projects, sprints, tasks, and bug tracking. Here's how to get...",
    image: "/blog2.png",
    link: "#",
  },
];

const RelatedBlogs = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  // const scrollLeft = () =>
  //   scrollRef.current?.scrollBy({ left: -400, behavior: "smooth" });

  // const scrollRight = () =>
  //   scrollRef.current?.scrollBy({ left: 400, behavior: "smooth" });

  return (
    <div className="p-4 sm:p-10 lg:p-20 max-w-[1440px] mx-auto flex flex-col gap-6 sm:gap-10 lg:gap-14 font-lato">
      {/* Header */}
      <div className="flex justify-between items-center max-w-7xl w-full">
        <h2 className="text-2xl sm:text-3xl font-red-rose">Related Blogs</h2>

        {/* View All Button */}
        <Link
          href="/blogs"
          className="bg-brand-primary hover:bg-brand-primary/90 border border-brand-accent text-white py-3 px-4 sm:py-3.5 sm:px-5 rounded-lg text-sm sm:text-base lg:text-lg"
        >
          View All
        </Link>
      </div>

      {/* Slider with Controls */}
      <div className="relative">
        {/* Scroll Buttons */}
        {/* <div className="absolute -top-14 right-0 flex gap-2">
          <button
            onClick={scrollLeft}
            className="p-2 border rounded-lg w-10 h-10 hover:text-white hover:border-brand-accent hover:bg-brand-primary flex items-center justify-center transition-colors"
          >
            <ArrowLeft size={20} />
          </button>
          <button
            onClick={scrollRight}
            className="p-2 border rounded-lg w-10 h-10 hover:text-white hover:border-brand-accent hover:bg-brand-primary flex items-center justify-center transition-colors"
          >
            <ArrowRight size={20} />
          </button>
        </div> */}

        {/* Blog Cards Slider */}
        <div
          ref={scrollRef}
          className="flex overflow-x-auto scrollbar-hide snap-x snap-mandatory gap-6 sm:gap-8"
        >
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="flex-none w-[90%] sm:w-[60%] md:w-[45%] lg:w-[380px] snap-start"
            >
              <div className="flex flex-col gap-4 h-full">
                {/* Image */}
                <div className="w-full h-56 sm:h-64 md:h-72 relative rounded-lg overflow-hidden">
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Text Content */}
                <div className="flex flex-col gap-3 flex-1">
                  <div>
                    <p className="text-sm sm:text-base text-brand-gray">
                      {blog.author} • {blog.date}
                    </p>
                    <h3 className="text-lg sm:text-xl font-red-rose mt-1">
                      {blog.title}
                    </h3>
                    <p className="text-sm sm:text-base text-brand-gray mt-2 line-clamp-3">
                      {blog.description}
                    </p>
                  </div>

                  {/* Read More at bottom */}
                  <div className="mt-auto">
                    <Link
                      href={blog.link}
                      className="text-brand-primary font-semibold inline-block text-sm sm:text-base"
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RelatedBlogs;
