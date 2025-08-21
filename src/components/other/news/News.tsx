import SectionSlider from "@/components/ui/SectionSlider";
import NewsCard from "./NewsCard";

const News = () => {
  const cardData = [
    {
      icon: "/icons/n1.png",
      description:
        "Enabling Tier 2/3 youth with clarity-first career guidance.",
    },
    {
      icon: "/icons/n2.png",
      description:
        "Feature story on YPD's Intelligent model and its impact in Indian learning system",
    },
    {
      icon: "/icons/n3.png",
      description:
        "Highlight from pilots how students are using Career Verse to decide on emerging careers.",
    },
  ];
  return (
    <div className="bg-white">
      <SectionSlider
        title="YPD In the News – Spotlight Highlights"
        description={
          <>
            From career innovation to youth empowerment, YPD is already being
            noticed. Our news journey is just <br className="hidden md:block" />
            getting started.
          </>
        }
        cardWidth={430} // cards fit in 1280px
        gap={20}
        buttonText="Start Your Journey"
        buttonHref="/personalise"
      >
        {cardData.map((item, index) => (
          <NewsCard
            key={index}
            description={item.description}
            icon={item.icon}
          />
        ))}
      </SectionSlider>
    </div>
  );
};

export default News;
