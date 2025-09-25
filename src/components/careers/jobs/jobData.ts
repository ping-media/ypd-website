import { Job } from "./JobList";

export interface JobDetails extends Job {
  salary: string;
  experience: string;
  jobType: string;
  postedDate: string;
  tags: string[];
  description: string;
  aboutRole: string;
  responsibilities: string[];
  whyYPD: string;
  mustHave: string[];
  niceToHave: string[];
  perks: {
    title: string;
    description: string;
  }[];
}

export const jobs: JobDetails[] = [
  {
    id: 2,
    title: "Senior Manager, Technology & Infrastructure",
    location: "Hybrid (India/UAE)",
    flexibility: "Full Time",
    role: "Technology & Infrastructure",
    slug: "senior-manager-technology-infrastructure",
    salary: "Industry Standard",
    experience: "10–12 years",
    jobType: "Full Time",
    postedDate: "25/09/2025",
    tags: [
      "Technology",
      "IT Management",
      "Infrastructure",
      "Cybersecurity",
      "Cloud",
    ],
    description:
      "As a Senior Manager – Technology & Infrastructure at YPD, you’ll lead the IT backbone of a fast-scaling EdTech startup. Your role is to ensure YPD’s systems, platforms, and AI-driven tools are secure, reliable, and future-ready, while shaping long-term infrastructure strategies.",
    aboutRole:
      "This role combines executional oversight with strategic vision, making it critical to YPD’s mission of delivering AI-powered, contextualized learning. You’ll oversee IT operations across India and UAE, mentor managers, and advise leadership on technology decisions.",
    responsibilities: [
      "Lead IT operations, ensuring uptime, reliability, and scalability of infrastructure.",
      "Oversee cloud platforms, Google Workspace, AI-based tools, and internal applications.",
      "Implement cybersecurity frameworks and ensure compliance with YPD’s security policies.",
      "Manage vendor partnerships, negotiate contracts, and evaluate new technology providers.",
      "Prepare IT budgets, ensuring efficient use of resources.",
      "Mentor IT Managers (Grade 5) and Assistant IT Managers (Grade 6), building succession plans.",
      "Partner with Product, R&D, Sales, and Customer Success teams to align tech solutions with business needs.",
      "Maintain dashboards, risk reports, and present quarterly updates to leadership.",
    ],
    whyYPD:
      "At YPD, technology is more than support—it’s a strategic driver of innovation and trust. You’ll influence how our platforms scale, secure our data, and enable students, mentors, and institutions, shaping the future of AI-powered education across India and UAE.",
    mustHave: [
      "Bachelor’s degree in IT, Computer Science, or Engineering.",
      "10–12 years of IT/technology experience, with 3–5 years in senior management.",
      "Strong knowledge of IT infrastructure, cloud administration, and SaaS management.",
      "Proven leadership in IT teams within startups, SaaS, or EdTech.",
      "Strong background in cybersecurity audits and compliance.",
    ],
    niceToHave: [
      "Postgraduate/MBA qualification.",
      "Certifications (CISSP, CISM, ITIL Expert, Google Cloud/Workspace Architect).",
      "Experience in multi-country IT operations.",
    ],
    perks: [
      {
        title: "Flexible Work Culture",
        description:
          "Whether you’re working remote, hybrid, or from the office, YPD gives you the flexibility to balance your work and life without friction.",
      },
      {
        title: "Learning & Growth Support",
        description:
          "Access to mentorship, role-based training, and continuous learning resources to sharpen your skills and grow in your career path.",
      },
      {
        title: "Impactful Work",
        description:
          "Every role at YPD contributes directly to shaping the future of students and professionals. Your work creates real impact.",
      },
      {
        title: "Team Bonding & Collaboration",
        description:
          "From open team sessions to virtual hangouts, we keep work engaging and connected, making sure collaboration feels natural, not forced.",
      },
      {
        title: "Career Pathway Clarity",
        description:
          "With our growth system, you’ll always know your growth track — from where you start to where you can progress next.",
      },
      {
        title: "Aligned Remuneration",
        description:
          "Our compensation is structured to reflect startup realities while staying competitive with industry benchmarks, ensuring fairness and transparency at every grade.",
      },
    ],
  },
  {
    id: 3,
    title: "Customer Success Manager",
    location: "Hybrid (India/UAE)",
    flexibility: "Full Time",
    role: "Customer Success",
    slug: "customer-success-manager",
    salary: "Industry Standard",
    experience: "5–7 years",
    jobType: "Full Time",
    postedDate: "25/09/2025",
    tags: [
      "Customer Success",
      "Student Relations",
      "Program Management",
      "EdTech",
      "CRM",
    ],
    description:
      "As a Customer Success Manager at YPD, you’ll ensure that students, parents, and institutions experience real value from our programs. You’ll own the post-enrollment journey, making sure every learner is onboarded smoothly, engaged effectively, and supported throughout.",
    aboutRole:
      "This role combines hands-on relationship management with process leadership, playing a vital part in adoption, retention, and satisfaction for YPD’s Career Vision Program™, Career Reinvention Program™, and AI Mentor platforms.",
    responsibilities: [
      "Own the customer journey for students, parents, and institutional partners post-enrollment.",
      "Ensure smooth onboarding and orientation to YPD tools and mentorship modules.",
      "Act as the primary point of contact for escalations and issue resolution.",
      "Monitor engagement levels and develop retention plans to reduce dropouts.",
      "Supervise Customer Success Executives (Grades 7–8) and ensure CRM hygiene.",
      "Collect and share structured feedback to improve YPD programs.",
      "Collaborate with Sales, Marketing, Product, and R&D for alignment.",
      "Maintain dashboards and provide regular reporting on adoption, NPS, and churn.",
    ],
    whyYPD:
      "At YPD, Customer Success is not support—it’s impact. You’ll be part of a mission-driven team that ensures students and parents don’t just join, but thrive. Work at the center of a fast-scaling EdTech startup that combines AI, mentorship, and critical skills to make learning contextual, personalized, and future-ready.",
    mustHave: [
      "Bachelor’s degree in Business, Education, Psychology, or related field.",
      "5–7 years of experience in Customer Success, Student Relations, or Program Management.",
      "Strong communication and empathy skills.",
      "Familiarity with CRM platforms and success dashboards.",
      "Ability to manage a small team and align them to KPIs.",
    ],
    niceToHave: [
      "Prior experience in EdTech, SaaS, or training/career services.",
      "Analytical ability to turn data into actionable insights.",
      "Adaptability to work in a fast-paced startup environment.",
    ],
    perks: [
      {
        title: "Flexible Work Culture",
        description:
          "Whether you’re working remote, hybrid, or from the office, YPD gives you the flexibility to balance your work and life without friction.",
      },
      {
        title: "Learning & Growth Support",
        description:
          "Access to mentorship, role-based training, and continuous learning resources to sharpen your skills and grow in your career path.",
      },
      {
        title: "Impactful Work",
        description:
          "Every role at YPD contributes directly to shaping the future of students and professionals. Your work creates real impact.",
      },
      {
        title: "Team Bonding & Collaboration",
        description:
          "From open team sessions to virtual hangouts, we keep work engaging and connected, making sure collaboration feels natural, not forced.",
      },
      {
        title: "Career Pathway Clarity",
        description:
          "With our growth system, you’ll always know your growth track — from where you start to where you can progress next.",
      },
      {
        title: "Aligned Remuneration",
        description:
          "Our compensation is structured to reflect startup realities while staying competitive with industry benchmarks, ensuring fairness and transparency at every grade.",
      },
    ],
  },
  {
    id: 4,
    title: "Finance Manager",
    location: "Hybrid (India/UAE)",
    flexibility: "Full Time",
    role: "Finance",
    slug: "finance-manager",
    salary: "Industry Standard",
    experience: "6–10 years",
    jobType: "Full Time",
    postedDate: "2025-09-25",
    tags: ["Finance", "Accounts", "Payroll", "Compliance", "Budgeting"],
    description:
      "As a Finance Manager at YPD, you will safeguard the company’s financial health while enabling sustainable growth across India and UAE operations. This role goes beyond numbers—it’s about building trust, ensuring compliance, and equipping leadership with clear financial insights.",
    aboutRole:
      "You’ll manage day-to-day finance operations while also contributing to budgets, audits, and investor-ready reporting. It’s a pivotal position that balances execution and strategy, directly influencing YPD’s scaling journey.",
    responsibilities: [
      "Manage payroll, reimbursements, vendor payments, and ledgers.",
      "Maintain accurate reconciliations, cash flow statements, and financial controls.",
      "Prepare annual budgets, monitor variances, and provide corrective recommendations.",
      "Ensure compliance with GST, TDS, PF, and UAE statutory obligations.",
      "Coordinate with auditors, consultants, and banks.",
      "Deliver monthly, quarterly, and annual financial reports.",
      "Provide financial insights for leadership decision-making and investor decks.",
      "Supervise Accounts & Payroll Executives (Grades 7–6).",
      "Recommend process improvements and finance automation.",
    ],
    whyYPD:
      "At YPD, finance isn’t just back-office—it’s a growth enabler. As Finance Manager, you’ll have the opportunity to shape the backbone of a mission-driven EdTech startup, managing multi-entity financial operations across India and UAE. You’ll contribute directly to investor confidence, operational efficiency, and strategic scaling.",
    mustHave: [
      "Bachelor’s degree in Commerce, Accounting, or Finance.",
      "6–10 years of finance and accounts experience, with at least 2–3 years in a managerial role.",
      "Strong knowledge of payroll, statutory filings, GST, TDS, and reconciliations.",
      "Ability to prepare budgets, forecasts, and financial reports.",
      "Integrity and transparency in handling sensitive data.",
    ],
    niceToHave: [
      "CA/ICWA/MBA Finance qualification.",
      "Prior experience in startups, EdTech, or SaaS.",
      "Exposure to India + UAE compliance frameworks.",
      "Familiarity with automation tools for finance workflows.",
    ],
    perks: [
      {
        title: "Flexible Work Culture",
        description:
          "Whether you’re working remote, hybrid, or from the office, YPD gives you the flexibility to balance your work and life without friction.",
      },
      {
        title: "Learning & Growth Support",
        description:
          "Access to mentorship, role-based training, and continuous learning resources to sharpen your skills and grow in your career path.",
      },
      {
        title: "Impactful Work",
        description:
          "Every role at YPD contributes directly to shaping the future of students and professionals. Your work creates real impact.",
      },
      {
        title: "Team Bonding & Collaboration",
        description:
          "From open team sessions to virtual hangouts, we keep work engaging and connected, making sure collaboration feels natural, not forced.",
      },
      {
        title: "Career Pathway Clarity",
        description:
          "With our growth system, you’ll always know your growth track — from where you start to where you can progress next.",
      },
      {
        title: "Aligned Remuneration",
        description:
          "Our compensation is structured to reflect startup realities while staying competitive with industry benchmarks, ensuring fairness and transparency at every grade.",
      },
    ],
  },
  {
    id: 5,
    title: "IT Manager",
    location: "Hybrid (India/UAE)",
    flexibility: "Full Time",
    role: "IT",
    slug: "it-manager",
    salary: "Industry Standard",
    experience: "6–10 years",
    jobType: "Full Time",
    postedDate: "2025-09-25",
    tags: [
      "IT",
      "Infrastructure",
      "Technical Support",
      "Cloud",
      "Cybersecurity",
    ],
    description:
      "As an IT Manager at YPD, you will own the end-to-end delivery of IT operations. This includes ensuring the reliability, security, and scalability of all systems, platforms, and devices across YPD. You’ll lead the technical support team, manage vendors, enforce IT governance, and align infrastructure with our mission as a cloud-first, AI-driven EdTech startup.",
    aboutRole:
      "This role blends hands-on execution with strategic planning, making it central to YPD’s growth and stability. You’ll ensure YPD’s platforms and systems remain secure, reliable, and future-ready while supporting a growing user base across India and UAE.",
    responsibilities: [
      "Oversee daily IT operations for employees, mentors, and student-facing systems.",
      "Manage Google Workspace, custom GPT tools, and learning platforms.",
      "Lead and mentor the Technical Support team (Grades 6–7).",
      "Translate YPD’s growth roadmap into IT infrastructure and cost planning.",
      "Enforce cybersecurity, data protection, and compliance policies.",
      "Handle vendor selection, negotiations, and SLA monitoring.",
      "Track IT incidents, root causes, and mitigation actions.",
      "Provide technical expertise during institutional or government projects.",
    ],
    whyYPD:
      "At YPD, technology isn’t just a backbone—it’s a driver of innovation. You’ll gain exposure to both startup agility and enterprise-level rigor, working closely with Product, R&D, HR, and leadership teams, ensuring systems remain secure, reliable, and future-ready.",
    mustHave: [
      "Bachelor’s degree in IT, Computer Science, or Engineering.",
      "6–10 years of IT experience, with at least 2–3 years in a managerial role.",
      "Strong knowledge of IT systems, cloud administration, and cybersecurity.",
      "Proficiency in Google Workspace administration.",
      "Proven experience managing vendors and budgets.",
    ],
    niceToHave: [
      "Certifications such as Google Workspace Admin, CompTIA Security+, CISSP, ITIL.",
      "Prior exposure to startups, EdTech, or SaaS ecosystems.",
      "MBA or equivalent management qualification.",
    ],
    perks: [
      {
        title: "Flexible Work Culture",
        description:
          "Whether you’re working remote, hybrid, or from the office, YPD gives you the flexibility to balance your work and life without friction.",
      },
      {
        title: "Learning & Growth Support",
        description:
          "Access to mentorship, role-based training, and continuous learning resources to sharpen your skills and grow in your career path.",
      },
      {
        title: "Impactful Work",
        description:
          "Every role at YPD contributes directly to shaping the future of students and professionals. Your work creates real impact.",
      },
      {
        title: "Team Bonding & Collaboration",
        description:
          "From open team sessions to virtual hangouts, we keep work engaging and connected, making sure collaboration feels natural, not forced.",
      },
      {
        title: "Career Pathway Clarity",
        description:
          "With our growth system, you’ll always know your growth track — from where you start to where you can progress next.",
      },
      {
        title: "Aligned Remuneration",
        description:
          "Our compensation is structured to reflect startup realities while staying competitive with industry benchmarks, ensuring fairness and transparency at every grade.",
      },
    ],
  },
  {
    id: 6,
    title: "Assistant Marketing Manager",
    location: "Hybrid (India/UAE)",
    flexibility: "Full Time",
    role: "Marketing",
    slug: "assistant-marketing-manager",
    salary: "Industry Standard",
    experience: "3–5 years",
    jobType: "Full Time",
    postedDate: "2025-09-25",
    tags: [
      "Marketing",
      "Campaign Management",
      "Digital Marketing",
      "Branding",
      "EdTech",
    ],
    description:
      "As an Assistant Marketing Manager at YPD, you’ll bridge strategy and execution—helping leadership design and deliver impactful campaigns while guiding a small team of executives and interns. You’ll manage projects across digital, social, and offline channels, ensuring YPD’s brand voice remains consistent while supporting lead generation and institutional outreach.",
    aboutRole:
      "This role is ideal for someone who enjoys both hands-on marketing execution and mentoring juniors, with the drive to build campaigns that resonate with students, parents, and partners.",
    responsibilities: [
      "Co-develop campaign plans with the Marketing Manager and leadership team.",
      "Manage execution of campaigns across digital, email, and offline channels.",
      "Ensure timely delivery of marketing collaterals in line with YPD’s brand.",
      "Supervise and mentor Marketing Executives (Grade 7) and interns.",
      "Track campaign KPIs and report actionable insights.",
      "Manage campaign budgets responsibly.",
      "Coordinate with content, design, and digital vendors.",
      "Conduct competitor research and propose new outreach initiatives.",
    ],
    whyYPD:
      "At YPD, marketing is not just about promotions—it’s about telling powerful stories of career clarity, reinvention, and innovation. You’ll be working with a mission-driven EdTech startup that connects AI-powered tools with human mentorship, creating real impact for students and professionals.",
    mustHave: [
      "Bachelor’s degree in Marketing, Business, or Communications (MBA preferred).",
      "3–5 years of experience in marketing, ideally in EdTech, SaaS, or education.",
      "Strong project management and organizational skills.",
      "Ability to juggle multiple campaigns with tight deadlines.",
      "Sound knowledge of digital marketing and analytics.",
    ],
    niceToHave: [
      "Experience managing junior team members.",
      "Hands-on knowledge of campaign dashboards, SEO, or automation tools.",
      "Creativity with the ability to balance performance and storytelling.",
    ],
    perks: [
      {
        title: "Flexible Work Culture",
        description:
          "Whether you’re working remote, hybrid, or from the office, YPD gives you the flexibility to balance your work and life without friction.",
      },
      {
        title: "Learning & Growth Support",
        description:
          "Access to mentorship, role-based training, and continuous learning resources to sharpen your skills and grow in your career path.",
      },
      {
        title: "Impactful Work",
        description:
          "Every role at YPD contributes directly to shaping the future of students and professionals. Your work creates real impact.",
      },
      {
        title: "Team Bonding & Collaboration",
        description:
          "From open team sessions to virtual hangouts, we keep work engaging and connected, making sure collaboration feels natural, not forced.",
      },
      {
        title: "Career Pathway Clarity",
        description:
          "With our growth system, you’ll always know your growth track — from where you start to where you can progress next.",
      },
      {
        title: "Aligned Remuneration",
        description:
          "Our compensation is structured to reflect startup realities while staying competitive with industry benchmarks, ensuring fairness and transparency at every grade.",
      },
    ],
  },
  {
    id: 7,
    title: "Senior Technical Support / Assistant IT Manager",
    location: "Hybrid (India/UAE)",
    flexibility: "Full Time",
    role: "IT Support",
    slug: "senior-technical-support-assistant-it-manager",
    salary: "Industry Standard",
    experience: "3–6 years",
    jobType: "Full Time",
    postedDate: "2025-09-25",
    tags: [
      "IT Support",
      "Technical Support",
      "Google Workspace",
      "Cybersecurity",
      "Cloud",
    ],
    description:
      "As a Senior Technical Support / Assistant IT Manager at YPD, you will bridge technical problem-solving with team leadership. You’ll handle escalated IT issues, oversee Google Workspace and internal systems, and ensure compliance with cybersecurity and data protection policies.",
    aboutRole:
      "Beyond resolving incidents, this role is about enabling smooth IT operations for employees, mentors, and clients in a lean, cloud-first startup. You’ll contribute to IT strategy and build systems that support multi-country operations.",
    responsibilities: [
      "Manage escalated IT issues and ensure timely resolution of complex problems.",
      "Supervise and mentor Technical Support Executives (Grade 7) and interns.",
      "Oversee Google Workspace administration, user provisioning, and permissions.",
      "Ensure adherence to YPD’s Cybersecurity, Data Protection, and Asset Management policies.",
      "Manage IT assets, device rollouts, security patches, and audit trails.",
      "Liaise with vendors, negotiate SLAs, and evaluate new tools aligned with YPD’s strategy.",
      "Contribute to IT strategy planning with the IT Manager and leadership team.",
      "Maintain dashboards and compliance documentation.",
      "Support cross-team needs such as IT onboarding, product integration, and client-facing tech interactions.",
    ],
    whyYPD:
      "At YPD, IT isn’t just about support—it’s about enabling innovation and growth. You’ll be part of an agile EdTech startup where technology powers AI-driven learning, gain exposure to multi-country operations (India + UAE), and build IT systems that shape the future of education.",
    mustHave: [
      "Bachelor’s degree in IT, Computer Science, or related field.",
      "3–6 years of IT support/administration experience.",
      "Strong troubleshooting skills across hardware, cloud, and networking.",
      "Proven experience with Google Workspace administration.",
      "Leadership potential with ability to mentor junior staff.",
    ],
    niceToHave: [
      "Certifications such as Google Workspace Admin, CompTIA Security+, ITIL.",
      "Experience in startups, EdTech, or SaaS ecosystems.",
      "Vendor negotiation and stakeholder management experience.",
    ],
    perks: [
      {
        title: "Flexible Work Culture",
        description:
          "Whether you’re working remote, hybrid, or from the office, YPD gives you the flexibility to balance your work and life without friction.",
      },
      {
        title: "Learning & Growth Support",
        description:
          "Access to mentorship, role-based training, and continuous learning resources to sharpen your skills and grow in your career path.",
      },
      {
        title: "Impactful Work",
        description:
          "Every role at YPD contributes directly to shaping the future of students and professionals. Your work creates real impact.",
      },
      {
        title: "Team Bonding & Collaboration",
        description:
          "From open team sessions to virtual hangouts, we keep work engaging and connected, making sure collaboration feels natural, not forced.",
      },
      {
        title: "Career Pathway Clarity",
        description:
          "With our growth system, you’ll always know your growth track — from where you start to where you can progress next.",
      },
      {
        title: "Aligned Remuneration",
        description:
          "Our compensation is structured to reflect startup realities while staying competitive with industry benchmarks, ensuring fairness and transparency at every grade.",
      },
    ],
  },
  {
    id: 8,
    title: "Accounts & Payroll Executive",
    location: "Hybrid (India, occasional on-site)",
    flexibility: "Full Time",
    role: "Finance",
    slug: "accounts-payroll-executive",
    salary: "Industry Standard",
    experience: "2–4 years",
    jobType: "Full Time",
    postedDate: "2025-09-25",
    tags: ["Accounts", "Payroll", "Finance", "Compliance", "Accounting"],
    description:
      "As an Accounts & Payroll Executive at YPD, you will play a critical role in ensuring financial discipline and employee trust. You will handle payroll processing, statutory compliance, and daily financial transactions with accuracy and confidentiality.",
    aboutRole:
      "This role directly contributes to the transparency and efficiency of YPD’s financial operations while supporting growth in India and UAE. You’ll gain exposure to multi-country compliance, startup agility, and process automation.",
    responsibilities: [
      "Prepare monthly payroll as per YPD’s Salary & Grade Structure (Grades 4–10).",
      "Process statutory deductions (PF, ESI, TDS, etc.) and ensure compliance.",
      "Record daily financial transactions and maintain ledgers.",
      "Support vendor payments, reimbursements, and petty cash reconciliation.",
      "Assist in preparing monthly/quarterly financial reports.",
      "Coordinate with HR for payroll inputs and external auditors for filings.",
      "Maintain strict confidentiality of employee and company financial data.",
      "Follow YPD’s Expense Controls & Approval Matrix and finance policies.",
    ],
    whyYPD:
      "At YPD, finance isn’t just about numbers — it’s about trust, transparency, and enabling growth. You’ll be part of a mission-driven team building AI-powered solutions for education, ensuring smooth operations and contributing to multi-country compliance.",
    mustHave: [
      "Bachelor’s degree in Commerce, Accounting, or Finance.",
      "2–4 years of experience in payroll, accounting, or finance administration.",
      "Strong attention to detail and accuracy in financial processing.",
      "Familiarity with payroll systems and accounting software.",
      "Integrity in handling sensitive employee and company financial data.",
    ],
    niceToHave: [
      "Experience in startups, EdTech, or SaaS environments.",
      "Working knowledge of GST, TDS, and other statutory filings.",
      "Proficiency in cloud-based accounting tools.",
    ],
    perks: [
      {
        title: "Flexible Work Culture",
        description:
          "Whether you’re working remote, hybrid, or from the office, YPD gives you the flexibility to balance your work and life without friction.",
      },
      {
        title: "Learning & Growth Support",
        description:
          "Access to mentorship, role-based training, and continuous learning resources to sharpen your skills and grow in your career path.",
      },
      {
        title: "Impactful Work",
        description:
          "Every role at YPD contributes directly to shaping the future of students and professionals. Your work creates real impact.",
      },
      {
        title: "Team Bonding & Collaboration",
        description:
          "From open team sessions to virtual hangouts, we keep work engaging and connected, making sure collaboration feels natural, not forced.",
      },
      {
        title: "Career Pathway Clarity",
        description:
          "With our growth system, you’ll always know your growth track — from where you start to where you can progress next.",
      },
      {
        title: "Aligned Remuneration",
        description:
          "Our compensation is structured to reflect startup realities while staying competitive with industry benchmarks, ensuring fairness and transparency at every grade.",
      },
    ],
  },
  {
    id: 9,
    title: "Marketing Executive",
    location: "Hybrid (India/UAE)",
    flexibility: "Full Time",
    role: "Marketing",
    slug: "marketing-executive",
    salary: "Industry Standard",
    experience: "0–3 years",
    jobType: "Full Time",
    postedDate: "2025-09-25",
    tags: [
      "Marketing",
      "Digital Marketing",
      "Campaign Execution",
      "Events",
      "EdTech",
    ],
    description:
      "As a Marketing Executive at YPD, you’ll play a key role in executing campaigns that build awareness, generate leads, and strengthen YPD’s brand presence. You’ll work across digital platforms, events, and outreach activities to ensure students, parents, institutions, and partners experience YPD’s story.",
    aboutRole:
      "This is a role for someone who enjoys hands-on marketing work, from social media scheduling to supporting events, while learning how AI is shaping the future of EdTech.",
    responsibilities: [
      "Execute digital marketing campaigns across social media, email, and partner channels.",
      "Support content creation for posts, brochures, and event collaterals.",
      "Manage posting calendars and track engagement metrics.",
      "Align campaigns with lead-generation goals in partnership with Sales.",
      "Conduct competitor benchmarking and share insights.",
      "Support webinars, institutional events, and outreach activities.",
      "Coordinate with design, sales, and product teams for accurate and consistent messaging.",
    ],
    whyYPD:
      "At YPD, marketing is about more than visibility—it’s about building connections. You’ll be part of a mission-driven EdTech startup where campaigns drive student clarity, institutional trust, and innovation. This is an opportunity to grow in a dynamic environment while mastering the art of AI-supported marketing practices.",
    mustHave: [
      "Strong communication skills (written & verbal).",
      "Familiarity with digital marketing tools and analytics dashboards.",
      "Basic knowledge of SEO, email marketing, and social media management.",
      "Creativity with attention to detail.",
      "Collaborative mindset with willingness to learn.",
    ],
    niceToHave: [
      "1–3 years of marketing experience in EdTech, SaaS, or startup ecosystems.",
      "Prior exposure to event management and lead-generation campaigns.",
      "Freshers with strong creativity and digital acumen may also be considered.",
    ],
    perks: [
      {
        title: "Flexible Work Culture",
        description:
          "Whether you’re working remote, hybrid, or from the office, YPD gives you the flexibility to balance your work and life without friction.",
      },
      {
        title: "Learning & Growth Support",
        description:
          "Access to mentorship, role-based training, and continuous learning resources to sharpen your skills and grow in your career path.",
      },
      {
        title: "Impactful Work",
        description:
          "Every role at YPD contributes directly to shaping the future of students and professionals. Your work creates real impact.",
      },
      {
        title: "Team Bonding & Collaboration",
        description:
          "From open team sessions to virtual hangouts, we keep work engaging and connected, making sure collaboration feels natural, not forced.",
      },
      {
        title: "Career Pathway Clarity",
        description:
          "With our growth system, you’ll always know your growth track — from where you start to where you can progress next.",
      },
      {
        title: "Aligned Remuneration",
        description:
          "Our compensation is structured to reflect startup realities while staying competitive with industry benchmarks, ensuring fairness and transparency at every grade.",
      },
    ],
  },
  {
    id: 10,
    title: "Sales Executive",
    location: "Hybrid (India/UAE)",
    flexibility: "Full Time",
    role: "Sales",
    slug: "sales-executive",
    salary: "Industry Standard",
    experience: "0–3 years",
    jobType: "Full Time",
    postedDate: "2025-09-25",
    tags: [
      "Sales",
      "EdTech Sales",
      "CRM",
      "Client Engagement",
      "Institutional Sales",
    ],
    description:
      "As a Sales Executive at YPD, you’ll play a vital role in converting opportunities into long-term institutional relationships. You’ll meet with schools, colleges, and training partners to present YPD’s solutions—including the Career Vision Program™, Career Reinvention Program™, and AI Mentor platforms—while building trust with decision-makers.",
    aboutRole:
      "This role is a balance of consultative selling, pipeline management, and client engagement, with direct impact on YPD’s expansion into Tier 1–4 education markets.",
    responsibilities: [
      "Convert qualified leads into active opportunities and closures.",
      "Schedule and deliver product demos, presentations, and client meetings (onsite/virtual).",
      "Maintain accurate sales pipeline records using CRM tools.",
      "Prepare weekly sales forecasts and share progress with managers.",
      "Build strong client relationships and ensure repeat business through renewals/referrals.",
      "Identify new opportunities in Tier 2/3 cities and emerging education hubs.",
      "Represent YPD at education fairs, webinars, and industry events.",
      "Collaborate with Internal Sales Executives (Grade 8) and Marketing for campaigns.",
    ],
    whyYPD:
      "At YPD, sales is not just about numbers—it’s about creating meaningful connections. You’ll join a mission-driven EdTech startup where every closure translates into impact for students and institutions, with access to AI-powered products, fast-scaling markets, and a supportive team.",
    mustHave: [
      "Strong communication and presentation skills (English + Hindi; regional language a plus).",
      "Persuasive selling ability with confidence in addressing senior educators.",
      "Familiarity with CRM tools, Google Workspace, and online meeting platforms.",
      "Willingness to travel and adapt to varied institutional environments.",
      "Persistence, ownership, and resilience under targets.",
    ],
    niceToHave: [
      "1–3 years of experience in sales (EdTech, SaaS, or education industry preferred).",
      "Prior exposure to Tier 2/3 institutional sales.",
      "Freshers with a strong drive and proven communication skills may be considered.",
    ],
    perks: [
      {
        title: "Flexible Work Culture",
        description:
          "Whether you’re working remote, hybrid, or from the office, YPD gives you the flexibility to balance your work and life without friction.",
      },
      {
        title: "Learning & Growth Support",
        description:
          "Access to mentorship, role-based training, and continuous learning resources to sharpen your skills and grow in your career path.",
      },
      {
        title: "Impactful Work",
        description:
          "Every role at YPD contributes directly to shaping the future of students and professionals. Your work creates real impact.",
      },
      {
        title: "Team Bonding & Collaboration",
        description:
          "From open team sessions to virtual hangouts, we keep work engaging and connected, making sure collaboration feels natural, not forced.",
      },
      {
        title: "Career Pathway Clarity",
        description:
          "With our growth system, you’ll always know your growth track — from where you start to where you can progress next.",
      },
      {
        title: "Aligned Remuneration",
        description:
          "Our compensation is structured to reflect startup realities while staying competitive with industry benchmarks, ensuring fairness and transparency at every grade.",
      },
    ],
  },
  {
    id: 11,
    title: "Technical Support Executive",
    location: "Hybrid (India/UAE)",
    flexibility: "Full Time",
    role: "IT Support",
    slug: "technical-support-executive",
    salary: "Industry Standard",
    experience: "1–3 years",
    jobType: "Full Time",
    postedDate: "2025-09-25",
    tags: [
      "IT Support",
      "Helpdesk",
      "Technical Support",
      "Google Workspace",
      "Cloud Tools",
    ],
    description:
      "As a Technical Support Executive at YPD, you’ll be the first line of defense in keeping our systems, tools, and devices running smoothly. You’ll help employees, mentors, and students use YPD’s platforms confidently—resolving day-to-day technical issues, onboarding users, and ensuring compliance with IT and cybersecurity policies.",
    aboutRole:
      "This role is perfect for someone who enjoys hands-on troubleshooting, problem-solving, and working with people to make technology easy. You’ll gain exposure to cloud-first IT operations and grow within a structured technology career path.",
    responsibilities: [
      "Provide first-level support for YPD platforms, devices, and collaboration tools.",
      "Troubleshoot hardware/software issues across laptops, mobiles, and connectivity.",
      "Assist new employees and mentors with device setup, account access, and tool training.",
      "Conduct basic orientations for Google Workspace, AI tools, and collaboration apps.",
      "Ensure compliance with YPD’s IT and cybersecurity policies.",
      "Log and track support tickets, escalate unresolved issues, and maintain resolution records.",
      "Share regular reports with IT leadership on recurring issues.",
      "Collaborate with HR/Admin for IT onboarding and asset handovers.",
      "Provide user feedback to improve platform usability.",
    ],
    whyYPD:
      "At YPD, IT support is not just about fixing issues—it’s about empowering people with technology. You’ll contribute to a mission-driven EdTech startup, ensuring our mentors, students, and employees can use AI-powered tools effectively, while growing within a structured technology career path.",
    mustHave: [
      "Diploma or Bachelor’s degree in IT, Computer Science, or related field.",
      "1–3 years of experience in IT helpdesk or technical support.",
      "Strong problem-solving and troubleshooting ability.",
      "Familiarity with cloud tools, Google Workspace, and collaboration platforms.",
      "Patience and communication skills in handling non-technical users.",
    ],
    niceToHave: [
      "Experience in startups, EdTech, or SaaS environments.",
      "Basic certifications (Google Workspace Admin, CompTIA, ITIL Foundation).",
      "Exposure to asset management and compliance audits.",
    ],
    perks: [
      {
        title: "Flexible Work Culture",
        description:
          "Whether you’re working remote, hybrid, or from the office, YPD gives you the flexibility to balance your work and life without friction.",
      },
      {
        title: "Learning & Growth Support",
        description:
          "Access to mentorship, role-based training, and continuous learning resources to sharpen your skills and grow in your career path.",
      },
      {
        title: "Impactful Work",
        description:
          "Every role at YPD contributes directly to shaping the future of students and professionals. Your work creates real impact.",
      },
      {
        title: "Team Bonding & Collaboration",
        description:
          "From open team sessions to virtual hangouts, we keep work engaging and connected, making sure collaboration feels natural, not forced.",
      },
      {
        title: "Career Pathway Clarity",
        description:
          "With our growth system, you’ll always know your growth track — from where you start to where you can progress next.",
      },
      {
        title: "Aligned Remuneration",
        description:
          "Our compensation is structured to reflect startup realities while staying competitive with industry benchmarks, ensuring fairness and transparency at every grade.",
      },
    ],
  },
  {
    id: 12,
    title: "Internal Sales Executive",
    location: "Remote (India/UAE)",
    flexibility: "Full Time",
    role: "Sales",
    slug: "internal-sales-executive",
    salary: "Industry Standard",
    experience: "0–2 years",
    jobType: "Full Time",
    postedDate: "2025-09-25",
    tags: ["Sales", "Inside Sales", "CRM", "EdTech", "Lead Generation"],
    description:
      "As an Internal Sales Executive at YPD, you’ll be at the forefront of connecting schools, colleges, and institutions with our transformative learning solutions. Your role will focus on identifying, qualifying, and nurturing leads, ensuring YPD’s programs (Career Vision Program™, Career Reinvention Program™, AI Mentors) reach the right students and institutions.",
    aboutRole:
      "This is a high-energy role where persistence, communication, and clarity will define your success. You’ll gain exposure to fast-scaling EdTech practices, innovative tools, and a collaborative culture where learning never stops.",
    responsibilities: [
      "Research and map schools, colleges, and training partners across India and UAE.",
      "Identify decision-makers (principals, directors, coordinators) and qualify leads.",
      "Conduct outreach via calls, emails, and LinkedIn campaigns.",
      "Present YPD’s offerings in a simple and persuasive manner.",
      "Maintain accurate CRM records, follow-ups, and weekly pipeline reports.",
      "Assist in preparing proposals, presentations, and institutional demos.",
      "Gather market feedback on pricing, features, and competition.",
    ],
    whyYPD:
      "At YPD, you’ll contribute to a purpose-driven EdTech platform that blends AI, mentorship, and behavioral science. This is more than sales — it’s about helping students and institutions see clarity, act confidently, and grow purposefully.",
    mustHave: [
      "Strong communication (English + Hindi; regional language a plus).",
      "Resilience to handle rejections and persistence in follow-ups.",
      "Basic knowledge of Google Workspace and CRM tools.",
      "Time management and organizational skills.",
    ],
    niceToHave: [
      "Prior experience in inside sales, telecalling, or EdTech sales.",
      "Understanding of institutional sales cycles.",
      "Ability to collect and share structured market insights.",
    ],
    perks: [
      {
        title: "Flexible Work Culture",
        description:
          "Whether you’re working remote, hybrid, or from the office, YPD gives you the flexibility to balance your work and life without friction.",
      },
      {
        title: "Learning & Growth Support",
        description:
          "Access to mentorship, role-based training, and continuous learning resources to sharpen your skills and grow in your career path.",
      },
      {
        title: "Impactful Work",
        description:
          "Every role at YPD contributes directly to shaping the future of students and professionals. Your work creates real impact.",
      },
      {
        title: "Team Bonding & Collaboration",
        description:
          "From open team sessions to virtual hangouts, we keep work engaging and connected, making sure collaboration feels natural, not forced.",
      },
      {
        title: "Career Pathway Clarity",
        description:
          "With our growth system, you’ll always know your growth track — from where you start to where you can progress next.",
      },
      {
        title: "Aligned Remuneration",
        description:
          "Our compensation is structured to reflect startup realities while staying competitive with industry benchmarks, ensuring fairness and transparency at every grade.",
      },
    ],
  },
];
