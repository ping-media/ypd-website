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
    <div className="font-lato mx-auto flex max-w-[1440px] flex-col gap-6 p-4 sm:gap-10 sm:p-10 lg:gap-14 lg:p-20">
      {/* Header */}
      <div className="flex w-full max-w-7xl items-center justify-between">
        <h2 className="font-red-rose text-2xl sm:text-3xl">Related Blogs</h2>

        {/* View All Button */}
        <Link
          href="/blogs"
          className="bg-brand-primary hover:bg-brand-primary/90 border-brand-accent rounded-lg border px-4 py-3 text-sm text-white sm:px-5 sm:py-3.5 sm:text-base lg:text-lg"
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
            className="hover:border-brand-accent hover:bg-brand-primary flex h-10 w-10 items-center justify-center rounded-lg border p-2 transition-colors hover:text-white"
          >
            <ArrowLeft size={20} />
          </button>
          <button
            onClick={scrollRight}
            className="hover:border-brand-accent hover:bg-brand-primary flex h-10 w-10 items-center justify-center rounded-lg border p-2 transition-colors hover:text-white"
          >
            <ArrowRight size={20} />
          </button>
        </div> */}

        {/* Blog Cards Slider */}
        <div
          ref={scrollRef}
          className="scrollbar-hide flex snap-x snap-mandatory gap-6 overflow-x-auto sm:gap-8"
        >
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="w-[90%] flex-none snap-start sm:w-[60%] md:w-[45%] lg:w-[380px]"
            >
              <div className="flex h-full flex-col gap-4">
                {/* Image */}
                <div className="relative h-56 w-full overflow-hidden rounded-lg sm:h-64 md:h-72">
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Text Content */}
                <div className="flex flex-1 flex-col gap-3">
                  <div>
                    <p className="text-brand-gray text-sm sm:text-base">
                      {blog.author} • {blog.date}
                    </p>
                    <h3 className="font-red-rose mt-1 text-lg sm:text-xl">
                      {blog.title}
                    </h3>
                    <p className="text-brand-gray mt-2 line-clamp-3 text-sm sm:text-base">
                      {blog.description}
                    </p>
                  </div>

                  {/* Read More at bottom */}
                  <div className="mt-auto">
                    <Link
                      href={blog.link}
                      className="text-brand-primary inline-block text-sm font-semibold sm:text-base"
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
