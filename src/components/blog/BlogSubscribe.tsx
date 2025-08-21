"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const BlogSubscribe = () => {
  return (
    <section className="w-full flex justify-center p-4 sm:p-8 lg:p-20 bg-white">
      <div className="max-w-2xl w-full flex flex-col items-center text-center gap-6 font-lato">
        <div className="flex flex-col gap-4">
          {/* Label */}
          <p className="text-sm sm:text-base text-brand-primary font-semibold">
            Our blog
          </p>

          {/* Heading */}
          <h2 className="text-2xl sm:text-[42px] font-red-rose">
            Stories and interviews
          </h2>

          <p className="text-brand-gray max-w-2xl text-base sm:text-xl leading-relaxed">
            Subscribe to learn about new product features, the latest in
            technology, solutions, and updates.
          </p>
        </div>

        <form className="w-full flex flex-col items-center justify-center gap-3 mt-4">
          <div className="flex w-full gap-5">
            <Input
              type="email"
              placeholder="Email id"
              className="flex-1 rounded-md border-gray-300 p-3 sm:p-6"
            />
            <Button
              type="submit"
              className="bg-brand-primary hover:bg-brand-primary/90 text-white rounded-md p-3 sm:p-6"
            >
              Get Started
            </Button>
          </div>
          <p className="text-start text-xs text-gray-500 mt-2">
            We care about your data in our{" "}
            <Link href="/privacy-policy" className="underline">
              privacy policy.
            </Link>
          </p>
        </form>
      </div>
    </section>
  );
};

export default BlogSubscribe;
