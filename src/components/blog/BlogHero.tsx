import Image from "next/image";

interface BlogHeroProps {
  published: string;
  title: string;
  subtitle: string;
  tags: string[];
  image: string;
}

const BlogHero = ({
  published,
  title,
  subtitle,
  tags,
  image,
}: BlogHeroProps) => {
  return (
    <section className="w-full flex justify-center px-4 sm:px-8 lg:px-20 py-12 bg-white">
      <div className="w-full max-w-7xl flex flex-col items-center text-center gap-6 font-lato">
        {/* Published */}
        <p className="text-sm sm:text-base text-brand-primary font-semibold">
          Published {published}
        </p>

        {/* Title */}
        <h1 className="text-2xl sm:text-4xl lg:text-5xl font-red-rose leading-tight">
          {title}
        </h1>

        {/* Subtitle */}
        <p className="text-brand-gray text-base sm:text-lg max-w-3xl leading-relaxed">
          {subtitle}
        </p>

        {/* Tags */}
        <div className="flex gap-2 flex-wrap justify-center">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 text-xs rounded-full bg-brand-bg text-brand-primary font-semibold"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Featured Image */}
        <div className="w-full mt-6">
          <Image
            src={image}
            alt={title}
            width={1200}
            height={600}
            className="w-full max-h-[500px] object-cover rounded-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default BlogHero;
