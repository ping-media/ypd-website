import SectionSlider from "@/components/ui/SectionSlider";
import AccreditationCard from "./AccreditationCard";

const accreditations = [
  {
    icon: "/icons/acc1.svg",
    heading: "NSDC",
    subheading: "National Skill Development Corporation",
  },
  {
    icon: "/icons/acc2.svg",
    heading: "CBSE Empanelment",
    subheading: "For integration into Grade 9–12 skilling programs",
  },
  {
    icon: "/icons/acc3.svg",
    heading: "MSME Innovation Mission",
    subheading: "India’s Startup-Linked Talent Ecosystem",
  },
  {
    icon: "/icons/acc4.svg",
    heading: "ISO 21001",
    subheading: "Educational Quality Systems Certification – Target 2026",
  },
  {
    icon: "/icons/acc5.svg",
    heading: "AICTE Collaboration",
    subheading: "Higher Ed Skill Hub Approval – Consultation Started",
  },
];

const Accreditation = () => {
  return (
    <div className="bg-gradient-to-b from-[#f0fff7] via-white to-[#f0fff7]">
      <SectionSlider
        title="Trust That’s Earned Accreditations & Alliances"
        description={
          <>
            YPD is actively pursuing national and global accreditation to serve
            students, institutions, and governments
            <br className="hidden md:block" /> with the highest level of
            credibility.
          </>
        }
        cardWidth={400}
        gap={20}
      >
        {accreditations.map((item, index) => (
          <AccreditationCard
            key={index}
            image={item.icon}
            heading={item.heading}
            subheading={item.subheading}
          />
        ))}
      </SectionSlider>
    </div>
  );
};

export default Accreditation;
