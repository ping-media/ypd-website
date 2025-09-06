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
    icon: "/cvplite/1.png",
    title: "Soc 2 Certified",
    desc: "Independently Audited for top-tier Security and Privacy",
  },
  {
    icon: "/cvplite/2.png",
    title: "GDPR Compliance",
    desc: "Privacy built to meet EU regulations",
  },
  {
    icon: "/cvplite/3.png",
    title: "HIPAA Compliant",
    desc: "Complete protection for healthcare organizations",
  },
  {
    icon: "/cvplite/4.png",
    title: "PCI-DSS Certified",
    desc: "Process your Payment Certified to Securely handle and information.",
  },
  {
    icon: (
      <ShieldCheck className="text-brand-primary h-8 w-8 sm:h-10 sm:w-10" />
    ),
    title: "Access & Permission",
    desc: "Control Who gets access with robust permission and two factor authentication",
  },
  {
    icon: <Lock className="text-brand-primary h-8 w-8 sm:h-10 sm:w-10" />,
    title: "Encryption Everywhere",
    desc: "Your data is encrypted in transit and reset.",
  },
  {
    icon: (
      <BrainCircuit className="text-brand-primary h-8 w-8 sm:h-10 sm:w-10" />
    ),
    title: "Proprietary AI",
    desc: "Complete protection for healthcare organizations",
  },
  {
    icon: <Database className="text-brand-primary h-8 w-8 sm:h-10 sm:w-10" />,
    title: "Data Storage",
    desc: "AWS Encrypted Servers",
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
