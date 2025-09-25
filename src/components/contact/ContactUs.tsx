"use client";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Phone } from "lucide-react";
import Image from "next/image";
import SocialLinks from "../other/SocialLinks";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const formSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(1, "Subject is required"),
  message: z.string().min(1, "Message is required"),
  newsletter: z.boolean().default(false),
});

const ContactUs = () => {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      subject: "",
      message: "",
      newsletter: false,
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    console.log(values);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      const data = await res.json();

      if (data.success) {
        alert(
          "🙏 Thank You for Connecting with Youth Pulse Digital™ \n\n" +
            "✅Your Request Has Been Received.\n\n" +
            "We’ve received your application / demo request and our team will connect with you within 48 hours to confirm the next steps.",
        );
        form.reset();
      } else {
        alert("Failed to send message. Try again.");
      }
    } catch (err) {
      console.error(err);
      alert("Something went wrong.");
    }
  };

  return (
    <section className="flex justify-center bg-white p-4 sm:px-10 lg:px-20">
      <div className="font-lato flex w-full max-w-[1440px] flex-col items-center justify-center gap-4 sm:gap-14">
        {/* Heading */}
        <div className="flex max-w-7xl flex-col items-center justify-between gap-4">
          <h2 className="font-red-rose text-center text-2xl sm:text-3xl">
            Have Questions? We&apos;re Here to Help.
          </h2>
          <p className="text-brand-gray max-w-4xl text-center text-base sm:text-lg">
            Whether you&apos;re a student, parent, mentor, or partner we&apos;re
            just a message away.
          </p>
        </div>

        {/* Contact Info + Form */}
        <div className="flex w-full max-w-7xl flex-col gap-10 pb-4 sm:px-10 sm:pb-10 lg:flex-row lg:gap-14 lg:px-14 lg:pb-14">
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
                GST: 19AACCY0548C1ZG
              </p>
            </div>

            {/* Contact Info */}
            <div className="flex w-fit flex-col gap-2 font-sans text-sm">
              <p className="flex cursor-pointer items-center gap-2 hover:opacity-60">
                <Phone className="text-brand-primary h-6 w-6" />
                <a href="tel:+918650126521">+91 8650126521</a>
              </p>
              <p className="flex cursor-pointer items-center gap-2 hover:opacity-60">
                <Image
                  src="/icons/wa.svg"
                  alt="Whatsapp"
                  width={24}
                  height={24}
                />
                <a
                  href="https://wa.me/917300868536"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  +91 7300688536
                </a>
              </p>
              <p className="flex cursor-pointer items-center gap-2 hover:opacity-60">
                <Image
                  src="/icons/gmail.svg"
                  alt="Gmail"
                  width={24}
                  height={24}
                />
                <a href="mailto:support@youthpulsedigital.com">
                  support@youthpulsedigital.com
                </a>
              </p>
            </div>

            {/* Social Links */}
            <SocialLinks />
          </div>

          {/* Right Section - Form */}
          <div className="w-full lg:w-1/2">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="font-lato flex flex-col gap-4"
              >
                <div className="flex gap-4">
                  <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                      <FormItem className="flex-1">
                        <FormControl>
                          <Input
                            placeholder="First Name*"
                            className="focus:border-brand-accent focus:ring-brand-accent/40 h-12 rounded-md border border-gray-300 bg-gray-100 focus:ring-2 sm:px-4"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="lastName"
                    render={({ field }) => (
                      <FormItem className="flex-1">
                        <FormControl>
                          <Input
                            placeholder="Last Name"
                            className="focus:border-brand-accent focus:ring-brand-accent/40 h-12 rounded-md border border-gray-300 bg-gray-100 focus:ring-2 sm:px-4"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="Email*"
                          className="focus:border-brand-accent focus:ring-brand-accent/40 h-12 rounded-md border border-gray-300 bg-gray-100 focus:ring-2 sm:px-4"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          placeholder="Subject*"
                          className="focus:border-brand-accent focus:ring-brand-accent/40 h-12 rounded-md border border-gray-300 bg-gray-100 focus:ring-2 sm:px-4"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Textarea
                          placeholder="Questions or Message*"
                          className="focus:border-brand-accent focus:ring-brand-accent/40 min-h-[150px] rounded-md border border-gray-300 bg-gray-100 py-3 focus:ring-2 sm:px-4"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Checkbox */}
                <FormField
                  control={form.control}
                  name="newsletter"
                  render={({ field }) => (
                    <FormItem>
                      <div className="flex items-center gap-2">
                        <FormControl>
                          <input
                            type="checkbox"
                            id="newsletter"
                            className="accent-brand-primary h-4 w-4 rounded border-gray-300"
                            checked={field.value}
                            onChange={field.onChange}
                          />
                        </FormControl>
                        <label
                          htmlFor="newsletter"
                          className="text-brand-gray text-sm"
                        >
                          Sign up for news and updates
                        </label>
                      </div>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Submit Button */}
                <button
                  type="submit"
                  className="btn-size btn-primary shadow-sm"
                >
                  Send
                </button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
