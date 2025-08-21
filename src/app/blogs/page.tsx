import BlogSection from "@/components/blog/BlogSection";
import BlogSubscribe from "@/components/blog/BlogSubscribe";
import Recent from "@/components/blog/Recent";

const page = () => {
  return (
    <>
      <BlogSubscribe />
      <Recent />
      <BlogSection />
    </>
  );
};

export default page;
