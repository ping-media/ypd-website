import SectionSlider from "@/components/ui/SectionSlider";
import PartnersCard from "./PartnersCard";

const partnersData = [
  {
    image: "/partners1.png",
    title: "School Connect",
    buttonText: "Join Now",
    href: "/#",
  },
  {
    image: "/partners2.png",
    title: "College Connect",
    buttonText: "Join Now",
    href: "/#",
  },
  {
    image: "/partners3.png",
    title: "MSME Connect",
    buttonText: "Join Now",
    href: "/#",
  },
  {
    image: "/partners4.png",
    title: "Corporate Connect",
    buttonText: "Join Now",
    href: "/#",
  },
  {
    image: "/partners5.png",
    title: "Parent Connect",
    buttonText: "Join Now",
    href: "/#",
  },
  {
    image: "/partners6.png",
    title: "Mentor Connect",
    buttonText: "Join Now",
    href: "/#",
  },
  {
    image: "/partners7.png",
    title: "Expert Connect",
    buttonText: "Join Now",
    href: "/#",
  },
];

const Partners = () => {
  return (
    <div className="bg-white">
      <SectionSlider
        title="Our Partner Ecosystem Built for Scalable Impact"
        description={
          <>
            We&apos;re inviting visionary institutions, companies, and NGOs to
            join the movement. Partnerships are central
            <br className="hidden md:block" /> to the YPD mission, and many more
            are coming soon.
          </>
        }
        cardWidth={280}
        gap={20}
      >
        {partnersData.map((item, index) => (
          <PartnersCard
            key={index}
            image={item.image}
            title={item.title}
            buttonText={item.buttonText}
            href={item.href}
          />
        ))}
      </SectionSlider>
    </div>
  );
};

export default Partners;
