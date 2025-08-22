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
    icon: <ShieldCheck className="w-10 h-10 text-brand-primary" />,
    title: "Access & Permission",
    desc: "Control Who gets access with robust permission and two factor authentication",
  },
  {
    icon: <Lock className="w-10 h-10 text-brand-primary" />,
    title: "Encryption Everywhere",
    desc: "Your data is encrypted in transit and reset.",
  },
  {
    icon: <BrainCircuit className="w-10 h-10 text-brand-primary" />,
    title: "AI models we use",
    desc: "Complete protection for healthcare organizations",
  },
  {
    icon: <Database className="w-10 h-10 text-brand-primary" />,
    title: "Data Storage",
    desc: "AWS Encrypted Servers",
  },
];

export default function CvpSecurity() {
  return (
    <section className="p-4 sm:p-10 lg:p-20 flex justify-center">
      <div className="max-w-[1440px] w-full flex flex-col items-start gap-4 font-lato">
        {/* Heading */}
        <h2 className="font-red-rose text-2xl sm:text-3xl lg:text-4xl text-gray-900">
          Your Data always kept private and protected
        </h2>

        {/* Subheading */}
        <p className="max-w-3xl text-left text-base sm:text-lg w-full">
          <span className="text-base font-bold sm:text-xl">
            We take Security Seriously so you don’t have to worry,
          </span>
          <br />
          Our Enterprise-grade Protections keep your information safe, private
          and in your control.
        </p>

        {/* Grid with plus-style borders */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 w-full sm:mt-6 lg:mt-12 border border-gray-200 rounded-xl overflow-hidden">
          {items.map((item, i) => (
            <div
              key={i}
              className={`flex flex-col items-start gap-3 p-6
                ${i < items.length - 4 ? "border-b border-gray-200" : ""}
                sm:${i % 2 !== 1 ? "border-r border-gray-200" : ""}
                lg:${i % 4 !== 3 ? "border-r border-gray-200" : ""}
              `}
            >
              <div className="bg-green-50 p-3 rounded-lg flex items-center justify-center">
                {typeof item.icon === "string" ? (
                  <Image
                    src={item.icon}
                    alt={item.title}
                    width={48}
                    height={48}
                    className="object-contain"
                  />
                ) : (
                  item.icon
                )}
              </div>
              <h3 className="font-red-rose text-lg text-brand-primary">
                {item.title}
              </h3>
              <p className="text-sm text-brand-gray">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
