import BlogHero from "@/components/blog/BlogHero";
import BlogContent from "@/components/blog/BlogContent";

const blog1 = {
  title: "UX Review Presentations",
  description:
    "How do you create compelling presentations that wow your colleagues and impress your managers?",
  date: "20 Jan 2022",
  author: "Olivia Rhye",
  tags: ["Design", "Research", "Presentation"],
  image: "/blogs/recent.png",
  content: `
    <p>
      Creating a great presentation isn’t just about having beautiful slides — 
      it’s about crafting a story that resonates with your audience.
    </p>
    <p>
      Start by identifying the key pain points and expectations of your team or managers. 
      Then, structure your content into clear sections with a logical flow.
    </p>
    <h2>Tips for a Successful Presentation</h2>
    <ul>
      <li>Keep your slides visually simple.</li>
      <li>Use data and visuals to back up your points.</li>
      <li>Practice your delivery to build confidence.</li>
    </ul>
    <blockquote>
      "Design is not just what it looks like and feels like. Design is how it works." – Steve Jobs
    </blockquote>
    <p>
      By blending clarity, visuals, and confidence, you’ll deliver a 
      presentation that engages and persuades.
    </p>
  `,
};

// const blog2 = {
//   title: "The Future of Career Reinvention",
//   description:
//     "Why standing still is riskier than ever, and how to continuously reinvent yourself in today’s fast-changing world.",
//   date: "5 Mar 2022",
//   author: "Michael Scott",
//   tags: ["Careers", "Growth", "Innovation"],
//   image: "/blogs/recent1.png",
//   content: `
//     <p>
//       The world of work is evolving faster than ever. Automation, AI,
//       and shifting global trends are making it necessary for professionals
//       to continuously adapt.
//     </p>
//     <p>
//       Career reinvention is no longer optional — it’s the key to long-term success.
//     </p>
//     <h2>How to Reinvent Yourself</h2>
//     <ol>
//       <li>Identify transferable skills that work across industries.</li>
//       <li>Stay curious and keep learning new tools and technologies.</li>
//       <li>Network with people outside of your current domain.</li>
//     </ol>
//     <p>
//       The most successful professionals aren’t the ones who avoid change,
//       but those who embrace it and proactively grow.
//     </p>
//   `,
// };

export default function BlogDetail() {
  const blog = blog1;
  return (
    <main className="bg-white">
      <BlogHero
        published={blog.date}
        title={blog.title}
        subtitle={blog.description}
        tags={blog.tags}
        image={blog.image}
      />
      <BlogContent content={blog.content} />
    </main>
  );
}
