import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import Image from "next/image";
import SocialLinks from "../other/SocialLinks";

const ContactUs = () => {
  return (
    <section className="flex justify-center bg-white p-4 sm:px-10 lg:px-20">
      <div className="font-lato flex w-full max-w-[1440px] flex-col items-center justify-center gap-4 sm:gap-14">
        {/* Heading */}
        <div className="flex max-w-7xl flex-col items-center justify-between gap-4">
          <h2 className="font-red-rose text-center text-2xl sm:text-3xl">
            Have Questions? We’re Here to Help.
          </h2>
          <p className="text-brand-gray max-w-4xl text-center text-base sm:text-lg">
            Whether you’re a student, parent, mentor, or partner we’re just a
            message away.
          </p>
        </div>

        {/* Contact Info + Form */}
        <div className="flex w-full max-w-7xl flex-col gap-10 sm:px-10 lg:flex-row lg:gap-14 lg:px-14">
          {/* Left Section */}
          <div className="flex w-full flex-col gap-6 lg:w-1/2">
            {/* Company Name */}
            <h3 className="font-red-rose text-brand-primary text-2xl sm:text-3xl">
              Youth Pulse Digital™
            </h3>

            {/* Address Card */}
            <div className="border-brand-primary bg-brand-gray/10 max-w-lg rounded-xl border-2 p-6">
              <h4 className="font-poppins mb-2 font-medium">India Location</h4>
              <p className="font-sans text-sm leading-relaxed">
                Youth Pulse Digital Pvt Ltd <br />
                Astra Tower, ASO-501, Action Area-IIC, <br />
                New Town, Kolkata-700161, West Bengal <br />
                CIN: U62010WB2025PTC281468 <br />
                PAN: AACCY0548C
              </p>
            </div>

            {/* Contact Info */}
            <div className="flex flex-col gap-2 font-sans text-sm">
              <p className="flex cursor-pointer items-center gap-2 hover:opacity-60">
                <Phone className="text-brand-primary h-6 w-6" />
                +91 8650126521
              </p>
              <p className="flex cursor-pointer items-center gap-2 hover:opacity-60">
                <Image
                  src="/icons/wa.svg"
                  alt="Whatsapp"
                  width={24}
                  height={24}
                />
                +91 7300688536
              </p>
              <p className="flex cursor-pointer items-center gap-2 hover:opacity-60">
                <Image
                  src="/icons/gmail.svg"
                  alt="Gmail"
                  width={24}
                  height={24}
                />
                support@youthpulsedigital.com
              </p>
            </div>

            {/* Social Links */}
            <SocialLinks />
          </div>

          {/* Right Section - Form */}
          <div className="w-full lg:w-1/2">
            <form className="font-lato flex flex-col gap-4">
              <div className="flex gap-4">
                <Input
                  name="firstName"
                  placeholder="First Name*"
                  className="focus:border-brand-accent focus:ring-brand-accent/40 h-12 flex-1 rounded-md border border-gray-300 bg-gray-100 focus:ring-2 sm:px-4"
                />
                <Input
                  name="lastName"
                  placeholder="Last Name"
                  className="focus:border-brand-accent focus:ring-brand-accent/40 h-12 flex-1 rounded-md border border-gray-300 bg-gray-100 focus:ring-2 sm:px-4"
                />
              </div>

              <Input
                name="email"
                type="email"
                placeholder="Email*"
                className="focus:border-brand-accent focus:ring-brand-accent/40 h-12 rounded-md border border-gray-300 bg-gray-100 focus:ring-2 sm:px-4"
              />

              <Input
                name="subject"
                placeholder="Subject*"
                className="focus:border-brand-accent focus:ring-brand-accent/40 h-12 rounded-md border border-gray-300 bg-gray-100 focus:ring-2 sm:px-4"
              />

              <Textarea
                name="message"
                placeholder="Questions or Message*"
                className="focus:border-brand-accent focus:ring-brand-accent/40 min-h-[150px] rounded-md border border-gray-300 bg-gray-100 py-3 focus:ring-2 sm:px-4"
              />

              {/* Checkbox */}
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="newsletter"
                  name="newsletter"
                  className="accent-brand-primary h-4 w-4 rounded border-gray-300"
                />
                <label htmlFor="newsletter" className="text-brand-gray text-sm">
                  Sign up for news and updates
                </label>
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                className="bg-brand-primary hover:bg-brand-primary/90 rounded-md px-6 py-3 text-white shadow-sm"
              >
                Send
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
