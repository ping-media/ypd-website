import { ShieldCheck, Lock, BrainCircuit, Database } from "lucide-react";
import Image from "next/image";
import { ReactNode } from "react";

interface SecurityItem {
  icon: string | ReactNode;
  title: string;
  desc: string;
}

const items: SecurityItem[] = [
  {
    icon: "/cvplite/2.png",
    title: "GDPR-Aligned Privacy",
    desc: "Built to respect global student/parent data rights.",
  },
  {
    icon: "/cvplite/1.png",
    title: "SOC2 Certified",
    desc: "Enterprise-grade security trusted by schools & partners.",
  },
  {
    icon: "/cvplite/3.png",
    title: "COPPA-Inspired Student Safety",
    desc: "Aligned with child & student data protection best practices.",
  },
  {
    icon: "/cvplite/4.png",
    title: "Controlled Data Access",
    desc: "Users decide what to share.",
  },
  {
    icon: (
      <ShieldCheck className="text-brand-primary h-8 w-8 sm:h-10 sm:w-10" />
    ),
    title: " Encryption Everywhere",
    desc: "All reports and sessions encrypted in transit & at rest.",
  },
  {
    icon: <Lock className="text-brand-primary h-8 w-8 sm:h-10 sm:w-10" />,
    title: "Ethical AI Framework",
    desc: "Transparent, bias-checked, and clone-proof insights.",
  },
  {
    icon: (
      <BrainCircuit className="text-brand-primary h-8 w-8 sm:h-10 sm:w-10" />
    ),
    title: "No Ads, No Hidden Tracking",
    desc: "YPD platforms are ad-free, with zero third-party tracking.",
  },
  {
    icon: <Database className="text-brand-primary h-8 w-8 sm:h-10 sm:w-10" />,
    title: "Data Stored in India (with Global Redundancy)",
    desc: "Primary data hosted on secure, encrypted servers in India with global backups",
  },
];

export default function CvpSecurity() {
  return (
    <section className="flex justify-center p-4 sm:p-10 lg:p-20">
      <div className="font-lato flex w-full max-w-[1440px] flex-col items-center gap-4">
        {/* Heading */}
        <h2 className="font-red-rose text-center text-xl text-gray-900 sm:text-3xl lg:text-4xl">
          Your Data always kept private and protected
        </h2>

        {/* Subheading */}
        <p className="w-full max-w-3xl text-center text-sm sm:text-lg">
          <span className="text-sm font-bold sm:text-xl">
            We take Security Seriously so you don’t have to worry,
          </span>
          <br />
          Our Enterprise-grade Protections keep your information safe, private
          and in your control.
        </p>

        {/* Grid with plus-style borders */}
        <div className="grid max-w-7xl grid-cols-1 overflow-hidden rounded-xl border border-gray-200 sm:mt-6 sm:grid-cols-2 lg:mt-12 lg:grid-cols-4">
          {items.map((item, i) => (
            <div
              key={i}
              className={`flex flex-col items-start gap-2 border border-gray-200 p-4 sm:gap-3 sm:p-6 ${
                i !== items.length - 1 ? "border-b" : ""
              } sm:border-b sm:${
                i % 2 === 0 ? "border-r" : ""
              } lg:border-b lg:${i % 4 !== 3 ? "border-r" : ""}`}
            >
              <div className="flex items-center justify-center rounded-lg bg-green-50 p-2 sm:p-3">
                {typeof item.icon === "string" ? (
                  <Image
                    src={item.icon}
                    alt={item.title}
                    width={36}
                    height={36}
                    className="object-contain sm:h-12 sm:w-12"
                  />
                ) : (
                  item.icon
                )}
              </div>
              <h3 className="font-red-rose text-brand-primary text-sm sm:text-lg">
                {item.title}
              </h3>
              <p className="text-brand-gray text-xs sm:text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
