import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const BlogSubscribe = () => {
  return (
    <section className="flex w-full justify-center bg-white p-4 sm:p-8 lg:p-20">
      <div className="font-lato flex w-full max-w-2xl flex-col items-center gap-6 text-center">
        <div className="flex flex-col gap-4">
          {/* Label */}
          <p className="text-brand-primary text-sm font-semibold sm:text-base">
            Our blog
          </p>

          {/* Heading */}
          <h2 className="font-red-rose text-2xl sm:text-[42px]">
            Stories and interviews
          </h2>

          <p className="text-brand-gray max-w-2xl text-base leading-relaxed sm:text-xl">
            Subscribe to learn about new product features, the latest in
            technology, solutions, and updates.
          </p>
        </div>

        <form className="mt-4 flex w-full flex-col items-center justify-center gap-3">
          <div className="flex w-full gap-5">
            <Input
              type="email"
              placeholder="Email id"
              className="flex-1 rounded-md border-gray-300 p-3 sm:p-6"
            />
            <Button
              type="submit"
              className="bg-brand-primary hover:bg-brand-primary/90 rounded-md p-3 text-white sm:p-6"
            >
              Get Started
            </Button>
          </div>
          <p className="mt-2 text-start text-xs text-gray-500">
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
