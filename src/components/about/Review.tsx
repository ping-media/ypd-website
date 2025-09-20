import Image from "next/image";
import { Quote } from "lucide-react";
import SectionSlider from "../ui/SectionSlider";

interface Review {
  id: number;
  course: string;
  name: string;
  text: string;
  image: string;
  education: string;
}

const Reviews: Review[] = [
  {
    id: 1,
    course: "CVP Lite™ (Class 10 Student)",
    name: "Ritika Sharma",
    education: "Class 10, Jaipur",
    text: "I was always confused between Science and Commerce. CVP Lite™ helped me see my real strengths, not just my marks. Today, I'm much more confident about choosing my stream.",
    image: "/about/c1.png",
  },
  {
    id: 2,
    course: "CVP Advance (Parent Perspective)",
    name: "Mr. & Mrs. Menon",
    education: "Kochi",
    text: "As parents, we wanted clarity before our son entered Class 11. CVP Advance gave us a fullreport that matched his aptitude with future careers. The journey was eye-opening.",
    image: "/about/c2.png",
  },
  {
    id: 3,
    course: "Career Reinvention Program (Working Professional)",
    name: "Rajiv Malhotra",
    education: "32, Pune",
    text: "After my company downsized, I felt lost. The CRP Aptitude Trainer, trained me on aptitudes from all perspective. It felt like a roadmap for a second innings & growth.",
    image: "/about/c3.png",
  },
  {
    id: 4,
    course: "Mission SSB™ (Aspirant)",
    name: "Aniket Singh",
    education: "NDA Aspirant, Patna",
    text: "Mission SSB™ felt different from regular coaching. The Al mentor gave me practice capsules and feedback daily. I could track my OLOs like never before.",
    image: "/about/c4.png",
  },
  {
    id: 5,
    course: "UPSC Mentor (Graduate Student)",
    name: "Shalini Verma",
    education: "Delhi University",
    text: "UPSC prep always felt overwhelming. With YPD's UPSC Mentor, I finally got a structured path daily current affairs, mock answers, and feedback like a real coach. It saved me so much",
    image: "/about/c5.png",
  },
  {
    id: 6,
    course: "Counselling Guru (Parent Feedback)",
    name: "Ramesh & Kavita Iyer",
    education: "Parents, Bengaluru",
    text: "The Counseling Guru session was unlike any counseling we had before. It combined real reports, skill gaps, and career options. We finally felt assured as a family.",
    image: "/about/c6.png",
  },
];

function ReviewCard({ name, text, image, education, course }: Review) {
  return (
    <div className="flex h-full flex-col justify-between rounded-xl border bg-white shadow-md">
      {/* Quote */}
      <div className="flex-1 p-6">
        <Quote className="text-brand-primary fill-brand-primary h-6 w-6 rotate-180 transform" />
        <p className="mt-3 font-medium">{course}</p>
        <p className="text-brand-gray mt-3">{text}</p>
      </div>

      {/* Footer */}
      <div className="flex items-center gap-3 rounded-b-xl bg-gray-50 p-4">
        <Image
          src={image}
          alt={name}
          width={40}
          height={40}
          className="rounded-full object-cover"
        />
        <div>
          <p className="font-medium text-gray-800">{name}</p>
          <p className="text-brand-gray text-xs">{education}</p>
        </div>
      </div>
    </div>
  );
}

export default function Review() {
  return (
    <SectionSlider
      title="What Our Learners & Parents Say"
      cardWidth={460}
      gap={24}
    >
      {Reviews.map((t) => (
        <ReviewCard key={t.id} {...t} />
      ))}
    </SectionSlider>
  );
}
