import UserSay from "@/components/careerPath/UserSay";
import Pathways from "@/components/careerPath/pathways/Pathways";
import Possibilities from "@/components/careerPath/Possibilities";
import Samples from "@/components/careerPath/Samples";
import Image from "next/image";

const reviews = [
  {
    id: 1,
    name: "Courtney Henry",
    text: "The Team Truly Understood My Financial Goals As An Expat. Their Personalized Advice Made Me Feel Confident And Secure About My Future.",
    image: "/about/c1.png",
  },
  {
    id: 2,
    name: "Courtney Henry",
    text: "The Team Truly Understood My Financial Goals As An Expat. Their Personalized Advice Made Me Feel Confident And Secure About My Future.",
    image: "/about/c2.png",
  },
  {
    id: 3,
    name: "Courtney Henry",
    text: "The Team Truly Understood My Financial Goals As An Expat. Their Personalized Advice Made Me Feel Confident And Secure About My Future.",
    image: "/about/c1.png",
  },
];
const Page = () => {
  return (
    <>
      <section className="flex justify-center">
        <div className="font-lato flex w-full max-w-[1440px] flex-col gap-4 sm:gap-10 lg:gap-14">
          {/* Image Wrapper */}
          <div className="overflow-hidden shadow-sm">
            <Image
              src="/careerPath/careerPath.png"
              alt="Career Path"
              width={1440}
              height={600}
              className="h-[50vh] w-full object-cover object-center lg:h-[60vh]"
              priority
            />
          </div>
        </div>
      </section>

      <Samples />
      <Pathways />
      <Possibilities />
      <UserSay
        title="WHAT USERS ACROSS INDIA SAY ABOUT YPD"
        reviews={reviews}
      />
      {/* <Review /> */}
    </>
  );
};

export default Page;
