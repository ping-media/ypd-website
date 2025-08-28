const UniquePedagogy = () => {
  return (
    <div className="bg-[#fafafa]">
      <div className="font-lato mx-auto flex max-w-[1440px] flex-col gap-4 p-4 sm:gap-10 sm:p-10 lg:gap-14 lg:p-20">
        {/* Heading */}
        <div className="flex max-w-7xl flex-col items-center justify-between gap-4">
          <div className="font-red-rose text-center text-2xl sm:text-3xl">
            Unique Pedagogy
          </div>
          <div className="text-brand-gray max-w-4xl text-center text-base sm:text-lg">
            We don&apos;t just offer career suggestions. We offer clarity,
            co-guided journeys, and future-fit confidence. <br /> Here&apos;s
            how YPD redefines what “career guidance” should mean.
          </div>
        </div>

        {/* compare section */}
        <div className="flex items-center justify-center">
          <div className="scrollbar-hide flex w-full max-w-6xl snap-x snap-mandatory overflow-hidden max-md:flex-nowrap max-md:gap-4 max-md:overflow-x-auto max-md:py-4 max-md:pr-4 max-md:pl-4 max-sm:py-2 md:flex-row md:items-center md:justify-center">
            {/* Features Column */}
            <div className="w-11/12 snap-start overflow-hidden rounded-2xl border border-[#dedede] max-md:flex-shrink-0 max-md:basis-[40%] max-sm:basis-[60%] xl:max-w-[380px]">
              <div className="font-red-rose bg-[#f6f6f6] px-4 py-2 text-center max-[449px]:text-lg min-[450px]:text-xl sm:text-2xl xl:px-8 xl:py-6">
                Features
              </div>
              <div className="flex-1 text-sm font-semibold max-xl:text-center sm:text-base sm:font-bold [&>*]:px-3 [&>*]:py-2.5 xl:[&>*]:px-6 xl:[&>*]:py-5">
                <div>Delivery Style</div>
                <div>User Engagement</div>
                <div>Parent Involvement</div>
                <div>Outcome</div>
                <div>Scalability & Access</div>
                <div>Decision Framework</div>
                <div>Future Role Mapping</div>
              </div>
            </div>

            {/* Youth Pulse Digital Column */}
            <div className="border-brand-accent w-full snap-start overflow-hidden rounded-2xl border bg-white max-md:flex-shrink-0 max-md:basis-[80%] max-sm:basis-[100%] xl:max-w-[352px]">
              <div className="font-red-rose bg-brand-primary border-b px-4 py-2 text-center text-white max-[449px]:text-lg min-[450px]:text-xl sm:text-2xl xl:px-8 xl:py-6">
                Youth Pulse Digital
              </div>
              <div className="[&>*]:border-brand-accent text-brand-gray text-sm max-xl:text-center sm:text-base [&>*]:border-b [&>*]:px-2 [&>*]:py-2.5 xl:[&>*]:px-4 xl:[&>*]:py-5">
                <div>Personalized &amp; Connected Experience</div>
                <div>Active Participation &amp; Immediate Reflection</div>
                <div>Integrated Student-Parent Journey</div>
                <div>True Career Pathway with Career Plan</div>
                <div>Tier 1 - 4 Served, Mobile First Delivery</div>
                <div>
                  15+ Dimensions 360° Profiling Fully Adaptive &amp;
                  Personalized
                </div>
                <div className="border-none">
                  Legacy, Current, Emerging &amp; Future Roles
                </div>
              </div>
            </div>

            {/* Traditional Column */}
            <div className="w-11/12 snap-start overflow-hidden rounded-2xl border border-[#dedede] max-md:flex-shrink-0 max-md:basis-[40%] max-sm:basis-[60%] xl:max-w-[380px]">
              <div className="font-red-rose bg-[#f6f6f6] px-4 py-2 text-center max-[449px]:text-lg min-[450px]:text-xl sm:text-2xl xl:px-8 xl:py-6">
                Traditional
              </div>
              <div className="text-brand-gray text-sm max-xl:text-center sm:text-base [&>*]:px-3 [&>*]:py-2.5 xl:[&>*]:px-6 xl:[&>*]:py-5">
                <div>One-time PDF</div>
                <div>Passive recipient</div>
                <div>Often excluded</div>
                <div>Career fit label</div>
                <div>Urban/school-based</div>
                <div>Interest-based suggestion</div>
                <div>“Be a lawyer, doctor…”</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UniquePedagogy;
