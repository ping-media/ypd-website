import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import Image from "next/image";
import SocialLinks from "../other/SocialLinks";

const ContactUs = () => {
  return (
    <section className="p-4 sm:p-10 lg:p-20 bg-white flex justify-center">
      <div className="max-w-[1440px] w-full flex flex-col justify-center items-center gap-4 sm:gap-14 font-lato">
        {/* Heading */}
        <div className="max-w-7xl flex flex-col justify-between items-center gap-4">
          <h2 className="font-red-rose text-2xl sm:text-3xl text-center">
            Have Questions? We’re Here to Help.
          </h2>
          <p className="text-base sm:text-lg text-brand-gray max-w-4xl text-center">
            Whether you’re a student, parent, mentor, or partner we’re just a
            message away.
          </p>
        </div>

        {/* Contact Info + Form */}
        <div className="max-w-7xl sm:px-10 lg:px-14 flex flex-col w-full lg:flex-row gap-10 lg:gap-14">
          {/* Left Section */}
          <div className="w-full lg:w-1/2 flex flex-col gap-6">
            {/* Company Name */}
            <h3 className="font-red-rose text-2xl sm:text-3xl text-brand-primary">
              Youth Pulse Digital™
            </h3>

            {/* Address Card */}
            <div className="border-2 border-brand-primary rounded-xl p-6 bg-brand-gray/10 max-w-lg">
              <h4 className="font-poppins font-medium mb-2">India Location</h4>
              <p className="font-sans text-sm leading-relaxed">
                Youth Pulse Digital Pvt Ltd <br />
                Astra Tower, ASO-501, Action Area-IIC, <br />
                New Town, Kolkata-70161, West Bengal
              </p>
            </div>

            {/* Contact Info */}
            <div className="flex flex-col gap-2 font-sans text-sm">
              <p className="flex items-center gap-2">
                <Phone className="w-6 h-6 text-brand-primary" />
                +91 8650126521
              </p>
              <p className="flex items-center gap-2">
                <Image
                  src="/icons/wa.png"
                  alt="Whatsapp"
                  width={24}
                  height={24}
                />
                +91 7300688536 (WhatsApp)
              </p>
              <p className="flex items-center gap-2">
                <Image
                  src="/icons/gmail.png"
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
            <form className="flex flex-col gap-4 font-lato">
              <div className="flex gap-4">
                <Input
                  name="firstName"
                  placeholder="First Name*"
                  className="flex-1 rounded-md bg-gray-100 border border-gray-300 h-12 sm:px-4 focus:border-brand-accent focus:ring-2 focus:ring-brand-accent/40"
                />
                <Input
                  name="lastName"
                  placeholder="Last Name"
                  className="flex-1 rounded-md bg-gray-100 border border-gray-300 h-12 sm:px-4 focus:border-brand-accent focus:ring-2 focus:ring-brand-accent/40"
                />
              </div>

              <Input
                name="email"
                type="email"
                placeholder="Email*"
                className="rounded-md bg-gray-100 border border-gray-300 h-12 sm:px-4 focus:border-brand-accent focus:ring-2 focus:ring-brand-accent/40"
              />

              <Input
                name="subject"
                placeholder="Subject*"
                className="rounded-md bg-gray-100 border border-gray-300 h-12 sm:px-4 focus:border-brand-accent focus:ring-2 focus:ring-brand-accent/40"
              />

              <Textarea
                name="message"
                placeholder="Questions or Message*"
                className="rounded-md bg-gray-100 border border-gray-300 min-h-[150px] sm:px-4 py-3 focus:border-brand-accent focus:ring-2 focus:ring-brand-accent/40"
              />

              {/* Checkbox */}
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="newsletter"
                  name="newsletter"
                  className="w-4 h-4 border-gray-300 rounded accent-brand-primary"
                />
                <label htmlFor="newsletter" className="text-sm text-brand-gray">
                  Sign up for news and updates
                </label>
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                className="bg-brand-primary text-white hover:bg-brand-primary/90 rounded-md px-6 py-3 shadow-sm"
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
