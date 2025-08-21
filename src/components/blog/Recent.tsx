import Image from "next/image";
import Link from "next/link";

const blogPosts = [
  {
    id: 1,
    title:
      "The Rise of Career Reinvention Why Standing Still is Riskier Than Ever",
    author: "Olivia Rhye",
    date: "20 Jan 2022",
    image: "/blogs/recent.png",
    description:
      "Many professionals stay in familiar roles because they feel safe. But industries shift. Technologies change. What feels stable today could be obsolete tomorrow.",
    tags: ["Design", "Research", "Presentation"],
  },
  {
    id: 2,
    title: "The 5 Future-Proof Skills You Need by 2030",
    author: "Phoenix Baker",
    date: "19 Jan 2022",
    image: "/blogs/recent1.png",
    description:
      "In the future of work, the winners aren’t the ones who know everything — they’re the ones who can learn anything.",
    tags: ["Design", "Research"],
  },
  {
    id: 3,
    title: "Why Your Resume Alone Won’t Get You Hired Anymore",
    author: "Lana Steiner",
    date: "18 Jan 2022",
    image: "/blogs/recent2.png",
    description:
      "A polished resume no longer guarantees a callback — employers now seek proof of potential.",
    tags: ["Software", "Research"],
  },
];

const Recent = () => {
  return (
    <section className="w-full flex justify-center p-4 sm:p-10 lg:p-20 font-lato">
      <div className="w-full max-w-[1280px] flex flex-col gap-4 sm:gap-10">
        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl font-red-rose">
          Recent blog posts
        </h2>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left Featured Blog */}
          <Link
            href={`/blog/${blogPosts[0].id}`}
            className="flex flex-col rounded-xl overflow-hidden h-full group"
          >
            <Image
              src={blogPosts[0].image}
              alt={blogPosts[0].title}
              width={800}
              height={400}
              className="w-full h-64 sm:h-72 object-cover rounded-xl"
            />
            <div className="pt-6 flex flex-col gap-3 flex-1">
              <p className="text-sm sm:text-base text-brand-primary font-semibold">
                {blogPosts[0].author} • {blogPosts[0].date}
              </p>
              <h3 className="text-xl sm:text-2xl font-red-rose group-hover:underline">
                {blogPosts[0].title}
              </h3>
              <p className="text-brand-gray text-sm sm:text-base line-clamp-3">
                {blogPosts[0].description}
              </p>
              <div className="flex gap-2 flex-wrap mt-2">
                {blogPosts[0].tags.map((tag) => (
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

          {/* Right Blogs */}
          {/* Right Blogs */}
          <div className="flex flex-col gap-6 h-full">
            {blogPosts.slice(1).map((post) => (
              <Link
                key={post.id}
                href={`/blog/${post.id}`}
                className="flex flex-col sm:flex-row rounded-xl overflow-hidden h-full group"
              >
                {/* Image */}
                <div className="w-full sm:w-1/2">
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={400}
                    height={250}
                    className="w-full h-48 sm:h-full object-cover rounded-xl"
                  />
                </div>

                {/* Content */}
                <div className="w-full sm:w-1/2 sm:pl-4 flex flex-col justify-between h-full py-4 sm:py-0">
                  <div className="flex flex-col gap-2">
                    <p className="text-sm sm:text-base text-brand-primary font-semibold">
                      {post.author} • {post.date}
                    </p>
                    <h3 className="text-lg sm:text-xl font-red-rose group-hover:underline line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-brand-gray text-sm sm:text-base line-clamp-3">
                      {post.description}
                    </p>
                  </div>

                  {/* Tags always at bottom */}
                  <div className="flex gap-2 flex-wrap mt-3">
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
        </div>
      </div>
    </section>
  );
};

export default Recent;
