import SectionSlider from "@/components/ui/SectionSlider";
import TestimonialCard from "./TestimonialCard";

const cardData = [
  {
    rating: 4.8,
    review:
      "The Team Truly Understood My Financial Goals As An Expat. Their Personalized Advice Made Me Feel Confident And Secure About My Future.",
    name: "David M.",
    location: "Singapore",
    avatar: "/client1.png",
  },
  {
    rating: 4.8,
    review:
      "Gantify Has Provided Us With A Unified View Of Our Projects. It Connects Our Workflows Directly To Our Business Goals, Making It Easier To Track Progress.",
    name: "Eleanor Pena",
    avatar: "/client2.png",
  },
  {
    rating: 4.8,
    review:
      "Using Gantify, We've Been Able To Ensure That All Our Project Activities Are Aligned With Our Overarching Business Objectives, Leading To Better Coordination And Success.",
    name: "Leslie Alexander",
    avatar: "/client3.png",
  },
  {
    rating: 4.8,
    review:
      "The team truly understood my financial goals as an expat. Their personalized advice made me feel confident and secure about my future.",
    name: "Jane Cooper",
    avatar: "/client4.png",
  },
];

const Testimonials = () => {
  return (
    <div className="bg-white">
      <SectionSlider
        title="What Our Users Say"
        cardWidth={330} // cards fit in 1280px
        gap={20}
        buttonText="Start Your Journey"
        buttonHref="/personalise"
      >
        {cardData.map((item, index) => (
          <TestimonialCard key={index} {...item} />
        ))}
      </SectionSlider>
    </div>
  );
};

export default Testimonials;
