const UniquePedagogy = () => {
  return (
    <div className="bg-[#fafafa]">
      <div className="p-4 sm:p-10 lg:p-20 max-w-[1440px] mx-auto flex flex-col gap-4 sm:gap-10 lg:gap-14 font-lato">
        {/* Heading */}
        <div className="max-w-7xl flex flex-col justify-between items-center gap-4">
          <div className="font-red-rose text-2xl sm:text-3xl text-center">
            Unique Pedagogy
          </div>
          <div className="text-base sm:text-lg text-brand-gray max-w-4xl text-center">
            We don&apos;t just offer career suggestions. We offer clarity,
            co-guided journeys, and future-fit confidence. <br /> Here&apos;s
            how YPD redefines what “career guidance” should mean.
          </div>
        </div>

        {/* compare section */}
        <div className="flex justify-center items-center">
          <div
            className="flex md:flex-row max-md:flex-nowrap max-md:overflow-x-auto
          max-md:gap-4 scrollbar-hide snap-x snap-mandatory 
          max-w-6xl md:justify-center md:items-center w-full overflow-hidden 
          max-md:pl-4 max-md:pr-4 max-sm:py-2 max-md:py-4"
          >
            {/* Features Column */}
            <div className="xl:max-w-[380px] w-11/12 border border-[#dedede] rounded-2xl overflow-hidden max-md:flex-shrink-0 max-sm:basis-[60%] max-md:basis-[40%] snap-start">
              <div className="text-center py-2 px-4 xl:py-6 xl:px-8 font-red-rose max-[449px]:text-lg min-[450px]:text-xl sm:text-2xl bg-[#f6f6f6]">
                Features
              </div>
              <div className="flex-1 xl:[&>*]:px-6 xl:[&>*]:py-5 [&>*]:py-2.5 [&>*]:px-3 font-semibold sm:font-bold max-xl:text-center text-sm sm:text-base ">
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
            <div className="bg-white border border-brand-accent xl:max-w-[352px] w-full rounded-2xl overflow-hidden max-md:flex-shrink-0 max-sm:basis-[100%] max-md:basis-[80%] snap-start">
              <div className="text-center py-2 px-4 xl:py-6 xl:px-8 font-red-rose max-[449px]:text-lg min-[450px]:text-xl sm:text-2xl border-b bg-brand-primary text-white ">
                Youth Pulse Digital
              </div>
              <div className="xl:[&>*]:px-4 xl:[&>*]:py-5 [&>*]:py-2.5 [&>*]:px-2  [&>*]:border-b [&>*]:border-brand-accent text-brand-gray max-xl:text-center text-sm sm:text-base">
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
            <div className="xl:max-w-[380px] w-11/12 border border-[#dedede] rounded-2xl overflow-hidden max-md:flex-shrink-0 max-sm:basis-[60%] max-md:basis-[40%] snap-start">
              <div className="text-center py-2 px-4 xl:py-6 xl:px-8 font-red-rose max-[449px]:text-lg min-[450px]:text-xl sm:text-2xl bg-[#f6f6f6]">
                Traditional
              </div>
              <div className="xl:[&>*]:px-6 xl:[&>*]:py-5 [&>*]:py-2.5 [&>*]:px-3 text-brand-gray max-xl:text-center text-sm sm:text-base">
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
