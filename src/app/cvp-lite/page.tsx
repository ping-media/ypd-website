import CvpFeature from "@/components/cvp/CvpFeature";
import CvpHero from "@/components/cvp/CvpHero";
import CvpInside from "@/components/cvp/CvpInside";
import CvpJourney from "@/components/cvp/CvpJourney";
import CvpLiteSteps from "@/components/cvp/CvpLiteSteps";
import CvpLiteWorks from "@/components/cvp/CvpLiteWorks";
import CvpPricing from "@/components/cvp/CvpPricing";
import CvpRealworld from "@/components/cvp/CvpRealworld";
import CvpVideo from "@/components/cvp/CvpVideo";
import WhyCvpLite from "@/components/cvp/WhyCvpLite";

const page = () => {
  return (
    <>
      <CvpHero
        title="Start Your Career Clarity Journey in Just a Few Hours"
        subtitle={
          <>
            <span className="relative inline-block px-1">
              <span className="relative z-10 font-semibold text-brand-primary">
                YPD’s CVP Lite
              </span>
              <span className="absolute inset-0 bg-brand-bg rounded-sm rotate-[-2deg] scale-y-110 z-0"></span>
            </span>{" "}
            is your first step toward real career clarity a guided, AI-powered
            self-discovery experience built for{" "}
            <span className="relative inline-block px-1">
              <span className="relative z-10 font-semibold text-brand-primary">
                Grade 9 to 12 students
              </span>
              <span className="absolute inset-0 bg-green-100 rounded-sm rotate-[-2deg] scale-y-110 z-0"></span>
            </span>
            .
          </>
        }
        features={[
          "Guided, adaptive career journey",
          "Move from uncertainty to clarity",
          "No overwhelm or pressure",
          "Built on YPD’s trusted frameworks",
          "A powerful starting point for every learner",
        ]}
        buttonText="Start Program Now"
        buttonLink="/program"
        image="/cvplite/cvplite.png"
        imageAlt="Student learning"
      />
      <CvpVideo
        heading="Step Inside the Experience of CVP Lite™"
        subheading="Take a quick look at how our AI-driven journey helps you discover your interests, passions, your choices and maps it with potential career pathways, not static, not generic — all personalized & adaptive"
        videoId="ScMzIvxBSi4"
        thumbnail="/video.png"
      />
      <CvpFeature />
      <CvpInside />
      <WhyCvpLite />
      <CvpLiteSteps />
      <CvpLiteWorks />
      <CvpJourney />
      <CvpRealworld />
      <CvpPricing />
    </>
  );
};

export default page;
