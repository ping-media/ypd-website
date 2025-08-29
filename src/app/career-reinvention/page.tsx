import Hero from "@/components/career-reinvention/Hero";
import CvpVideo from "@/components/cvp/CvpVideo";

const page = () => {
  return (
    <>
      <Hero />
      {/*  */}
      {/* SECTION TO ADD (CRP SECTION) */}
      {/*  */}
      <CvpVideo
        heading="Step Into the Career Reinvention Program™"
        subheading="Take a quick look at how our AI-driven journey helps you discover your strengths, map career paths, and make smarter choices."
        videoId="ScMzIvxBSi4"
        thumbnail="/video.png"
      />
    </>
  );
};

export default page;
