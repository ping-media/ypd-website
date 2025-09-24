export type BillingCycle = "one-time" | "monthly" | "annually";
export type Currency = "INR" | "AED";

export interface Plan {
  title: string;
  description: string;
  price: {
    INR: string;
    AED: string;
  };
  features: string[];
  highlight?: boolean;
  priceText?: string;
  period?: string;
}

export interface ProductPricing {
  billingTypes: BillingCycle[];
  plans: {
    [key in BillingCycle]?: Plan[];
  };
}

// ✅ Export the pricing data here
export const pricingData: Record<string, ProductPricing> = {
  // ---------------- CVP Lite™ ----------------
  "CVP Lite™": {
    billingTypes: ["one-time"],
    plans: {
      "one-time": [
        {
          title: "Free Plan",
          description: "For students starting their journey",
          price: {
            INR: "Free",
            AED: "Free",
          },
          features: [
            "Profile setup",
            "Dashboard Preview",
            "Locked after preview, upgrade anytime",
            "Best for students who want to 'try before they trust.'",
          ],
        },
        {
          title: "Premium",
          description: "Complete your full Career Persona Journey",
          price: {
            INR: "₹1299",
            AED: "179.00",
          },
          features: [
            "Full access",
            "Personal Action Plan",
            "Downloadable CVP Lite™ Report",
            "1 Year access",
            "Email Support",
            "Built for Class 7-12 students who want trusted, structured clarity",
          ],
          highlight: true,
        },
      ],
    },
  },

  // ---------------- CVP Advance ----------------
  "CVP Advance™": {
    billingTypes: ["one-time"],
    plans: {
      "one-time": [
        {
          title: "Free Plan",
          description: "For students starting their journey",
          price: {
            INR: "Free",
            AED: "Free",
          },
          features: [
            "Profile setup",
            "Dashboard Preview",
            "Locked after preview, upgrade anytime",
            "Best for students who want to 'try before they trust.'",
          ],
        },
        {
          title: "Premium",
          description: "Best for career decision-making",
          price: {
            INR: "₹2499",
            AED: "369.00",
          },
          features: [
            "Full access",
            "7-day deep dive Journey",
            "Personalized Career Pathway Plan",
            "Downloadable CVP Advance™ Report",
            "1 Year access",
            "Built for Class 9-UG students who want trusted, structured clarity",
            "Email Support",
            "Optional mentor review available at cost",
          ],
          highlight: true,
        },
      ],
    },
  },

  // ---------------- CareerVerse ----------------
  "CareerVerse™": {
    billingTypes: ["one-time"],
    plans: {
      "one-time": [
        {
          title: "Free Plan",
          description: "Perfect to explore and get started",
          price: {
            INR: "Free",
            AED: "Free",
          },
          features: [
            "Account Creation",
            "Dashboard View",
            "Profile Setup",
            "Role Selection",
          ],
        },
        {
          title: "Pro",
          description: "Best for focused Role Experience",
          price: {
            INR: "₹1499",
            AED: "259.00",
          },
          features: [
            "Account Creation",
            "Dashboard View",
            "Profile Setup",
            "Simulate 3 Chosen Roles",
            "Career Fit Report",
            "1 Year access",
            "Built for Class 9-UG students who want clarity on career selection",
            "Email Support",
          ],
          highlight: true,
        },
        {
          title: "Premium",
          description: "Best for alternate Role Experience",
          price: {
            INR: "₹2499",
            AED: "479.00",
          },
          features: [
            "Account Creation",
            "Dashboard View",
            "Profile Setup",
            "Simulate 8 Chosen Roles",
            "Career Fit Report",
            "1 Year access",
            "Built for Class 9-UG students who want clarity on career selection",
            "Email Support",
            "Optional mentor review available at cost",
          ],
          highlight: true,
        },
      ],
    },
  },

  // ---------------- Mission SSB ----------------
  "Mission SSB™": {
    billingTypes: ["monthly"],
    plans: {
      monthly: [
        {
          title: "Free Plan",
          description: "For starters",
          price: {
            INR: "Free",
            AED: "Free",
          },
          features: [
            "Account Creation",
            "Profile Set Up",
            "Dashboard View",
            "1 OIR Test",
            "Unlock Pro & Premium Plans",
          ],
        },
        {
          title: "Pro",
          description: "Best for 11th–UG Students",
          price: {
            INR: "₹3499",
            AED: "369.00",
          },
          period: "month",
          features: [
            "Account Creation",
            "Dashboard View",
            "Profile Setup",
            "Written Exam",
            "SSB Preparation",
            "Progress Tracking",
            "1 Year access",
            "Email Support",
            "Minimum 2 Months Subscription Required",
            "Optional Human Assessor Access",
          ],
          highlight: true,
        },
        {
          title: "Premium",
          description: "Best for 11th – Graduates",
          price: {
            INR: "₹5499",
            AED: "549.00",
          },
          period: "month",
          features: [
            "Account Creation",
            "Dashboard View",
            "Profile Setup",
            "Written Exam",
            "SSB Preparation",
            "Personal Interview – AI Driven",
            "Progress & Weakness Tracking",
            "1 Year access",
            "Email Support",
            "Minimum 3 Months Subscription Required",
            "Optional Human Assessor Access",
          ],
          highlight: true,
        },
      ],
    },
  },
  // ---------------- UPSC Mentor ----------------
  "UPSC Mentor™": {
    billingTypes: ["monthly", "annually"],
    plans: {
      monthly: [
        {
          title: "Basic",
          description: "UPSC prep foundation",
          price: { INR: "$20", AED: "$20" },
          features: [
            "Daily capsules",
            "Prelims question bank",
            "Reflection nudges",
          ],
        },
        {
          title: "Pro",
          description: "Structured UPSC pathway",
          price: { INR: "$60", AED: "$60" },
          features: [
            "Everything in Basic",
            "Mains framework",
            "Essay/Interview practice",
            "Mentor nudges",
          ],
          highlight: true,
        },
        {
          title: "Premium",
          description: "Complete UPSC mentor",
          price: { INR: "$120", AED: "$120" },
          features: [
            "Everything in Pro",
            "Full simulation tracks",
            "Personalized reports",
            "Mentor sessions",
          ],
        },
      ],
      annually: [
        {
          title: "Basic",
          description: "UPSC prep foundation",
          price: { INR: "$200", AED: "$200" },
          features: [
            "Daily capsules",
            "Prelims question bank",
            "Reflection nudges",
          ],
        },
        {
          title: "Pro",
          description: "Structured UPSC pathway",
          price: { INR: "$600", AED: "$600" },
          features: [
            "Everything in Basic",
            "Mains framework",
            "Essay/Interview practice",
            "Mentor nudges",
          ],
          highlight: true,
        },
        {
          title: "Premium",
          description: "Complete UPSC mentor",
          price: { INR: "$1200", AED: "$1200" },
          features: [
            "Everything in Pro",
            "Full simulation tracks",
            "Personalized reports",
            "Mentor sessions",
          ],
        },
      ],
    },
  },
  // ---------------- Counseling Guru ----------------
  "Counseling Guru™": {
    billingTypes: ["one-time"],
    plans: {
      "one-time": [
        {
          title: "Free Plan",
          description: "For Starters",
          price: {
            INR: "Free",
            AED: "Free",
          },
          features: [
            "Account Creation",
            "Profile Set Up",
            "Dashboard View",
            "Unlock Counseling Session with Pro & Premium Plans",
          ],
        },
        {
          title: "Pro",
          description: "Best for Self-Serve Counseling Session",
          price: {
            INR: "₹1499",
            AED: "269.00",
          },
          features: [
            "Account Creation",
            "Dashboard View",
            "Profile Setup",
            "Career Guidance Journey",
            "Session Report",
            "1 Year access",
            "Email Support",
          ],
          highlight: true,
        },
        {
          title: "Premium",
          description: "Best for Mentor Driven Counseling Session",
          price: {
            INR: "₹3499",
            AED: "469.00",
          },
          features: [
            "Account Creation",
            "Dashboard View",
            "Profile Setup",
            "Session Booking",
            "Decision-Making Journey",
            "45 min Mentor Guided Session",
            "Final Recommendation Report",
            "1 Year access",
            "Email Support",
          ],
          highlight: true,
        },
      ],
    },
  },
  // ---------------- Global Navigator ----------------
  "Global Navigator™": {
    billingTypes: ["one-time"],
    plans: {
      "one-time": [
        {
          title: "Free Plan",
          description: "For Starters",
          price: {
            INR: "Free",
            AED: "Free",
          },
          features: [
            "Account Creation",
            "Profile Set Up",
            "Dashboard View",
            "Unlock Counseling Session with Pro & Premium Plans",
          ],
        },
        {
          title: "Pro",
          description: "Best for Self-Serve Counseling Session",
          price: {
            INR: "₹3499",
            AED: "499.00",
          },
          features: [
            "Account Creation",
            "Dashboard View",
            "Profile Setup",
            "Career Guidance Journey",
            "Session Report",
            "1 Year access",
            "Email Support",
          ],
          highlight: true,
        },
        {
          title: "Premium",
          description: "Best for Mentor Driven Counseling Session",
          price: {
            INR: "₹7499",
            AED: "899.00",
          },
          features: [
            "Account Creation",
            "Dashboard View",
            "Profile Setup",
            "Session Booking",
            "Global Guidance Journey",
            "60 min Mentor Guided Session",
            "Final Recommendation Report",
            "1 Year access",
            "Email Support",
          ],
          highlight: true,
        },
      ],
    },
  },
  // ---------------- Reboot Navigator ----------------
  "Reboot Navigator™": {
    billingTypes: ["monthly"],
    plans: {
      monthly: [
        {
          title: "Free Plan",
          description: "For Starters",
          price: {
            INR: "Free",
            AED: "Free",
          },
          features: [
            "Account Creation",
            "Profile Set Up",
            "Dashboard View",
            "1 Core Skill Practice",
            "Unlock Pro & Premium Plans",
          ],
        },
        {
          title: "Pro",
          description: "Best for Starters & Micro Entrepreneurs",
          price: {
            INR: "₹1299",
            AED: "169.00",
          },
          period: "month",
          priceText: "Subscribe Now",
          features: [
            "Account Creation",
            "Dashboard View",
            "Profile Setup",
            "18 Core Skills",
            "1 X Retry",
            "Progress Tracking",
            "1 Year access",
            "Email Support",
            "Minimum 2 Months Subscription Required",
          ],
          highlight: true,
        },
        {
          title: "Premium",
          description: "Best for Employability Skills",
          price: {
            INR: "₹2199",
            AED: "269.00",
          },
          period: "month",
          priceText: "Subscribe Now",
          features: [
            "Account Creation",
            "Dashboard View",
            "Profile Setup",
            "18 Core + 18 Industry Cluster Skills",
            "3 X Retry",
            "Progress & Weakness Tracking",
            "1 Year access",
            "Email Support",
            "Minimum 3 Months Subscription Required",
            "Optional Industry Expert Access",
          ],
          highlight: true,
        },
      ],
    },
  },
  // ---------------- Aptitude Trainer ----------------
  "Aptitude Trainer™": {
    billingTypes: ["monthly"],
    plans: {
      monthly: [
        {
          title: "Free Plan",
          description: "For Starters",
          price: {
            INR: "Free",
            AED: "Free",
          },
          features: [
            "Account Creation",
            "Profile Set Up",
            "Dashboard View",
            "1 Aptitude Scenario",
            "Unlock Pro & Premium Plans",
          ],
        },
        {
          title: "Pro",
          description: "Best for Freshers & Mid Professionals",
          price: {
            INR: "₹2499",
            AED: "269.00",
          },
          features: [
            "Account Creation",
            "Dashboard View",
            "Profile Setup",
            "8 Core + 8 Adaptive Aptitudes",
            "1 X Retry",
            "Progress Tracking",
            "1 Year access",
            "Email Support",
            "Minimum 2 Months Subscription Required",
          ],
          highlight: true,
        },
        {
          title: "Premium",
          description: "Best for Mid-Senior Professionals",
          price: {
            INR: "₹4499",
            AED: "399.00",
          },
          features: [
            "Account Creation",
            "Dashboard View",
            "Profile Setup",
            "8 Core + All Adaptive Aptitudes",
            "2 X Retry",
            "Progress & Weakness Tracking",
            "1 Year access",
            "Email Support",
            "Minimum 3 Months Subscription Required",
            "Optional Industry Expert Access",
          ],
          highlight: true,
        },
      ],
    },
  },
  // ---------------- Reinvention Guru ----------------
  "Reinvention Guru™": {
    billingTypes: ["monthly"],
    plans: {
      monthly: [
        {
          title: "Free Plan",
          description: "For Starters",
          price: {
            INR: "Free",
            AED: "Free",
          },
          features: [
            "Profile Setup & Domain Selection",
            "Access to 1 domain (1 theme)",
            "Dashboard overview",
            "Upgrade path to Pro & Premium",
          ],
        },
        {
          title: "Pro",
          description: "Best for Learners & Professionals",
          price: {
            INR: "₹3499",
            AED: "$0",
          },
          features: [
            "Full Profile & Persona Creation",
            "All domains & 5 themes unlocked",
            "Step-locked training workflow",
            "AI Mentor Feedback",
            "Progress Tracking & Streak Badges",
            "Portfolio-ready outcome snapshots",
          ],
          highlight: true,
        },
        {
          title: "Premium",
          description: "Best for Mid-Senior Professionals & Leaders",
          price: {
            INR: "₹5499",
            AED: "$0",
          },
          features: [
            "All 10 domains & themes unlocked",
            "Advanced leadership scenarios",
            "Cross-domain connections",
            "AI Mentor Feedback",
            "Personalized growth tasks + resource links",
            "Reinvention Index + Peer Benchmark view",
            "Shareable Certificate",
          ],
          highlight: true,
        },
      ],
    },
  },
  // ---------------- Admission Test System ----------------
  "Admission Test System": {
    billingTypes: ["monthly", "annually"],
    plans: {
      monthly: [
        {
          title: "Basic",
          description: "Entry-level test prep",
          price: { INR: "$10", AED: "$10" },
          features: [
            "Standardized MCQs",
            "Difficulty levels",
            "Instant scoring",
          ],
        },
        {
          title: "Pro",
          description: "Advanced admission prep",
          price: { INR: "$40", AED: "$40" },
          features: [
            "Everything in Basic",
            "Adaptive tests",
            "Personalized feedback",
            "Practice reports",
          ],
          highlight: true,
        },
        {
          title: "Premium",
          description: "Complete admission package",
          price: { INR: "$80", AED: "$80" },
          features: [
            "Everything in Pro",
            "Mentorship add-on",
            "Skill insights",
            "Parent dashboard",
          ],
        },
      ],
      annually: [
        {
          title: "Basic",
          description: "Entry-level test prep",
          price: { INR: "$100", AED: "$100" },
          features: [
            "Standardized MCQs",
            "Difficulty levels",
            "Instant scoring",
          ],
        },
        {
          title: "Pro",
          description: "Advanced admission prep",
          price: { INR: "$400", AED: "$400" },
          features: [
            "Everything in Basic",
            "Adaptive tests",
            "Personalized feedback",
            "Practice reports",
          ],
          highlight: true,
        },
        {
          title: "Premium",
          description: "Complete admission package",
          price: { INR: "$800", AED: "$800" },
          features: [
            "Everything in Pro",
            "Mentorship add-on",
            "Skill insights",
            "Parent dashboard",
          ],
        },
      ],
    },
  },

  // ---------------- Hiring & Boarding ----------------
  "Hiring & Boarding™": {
    billingTypes: ["monthly", "annually"],
    plans: {
      monthly: [
        {
          title: "Basic",
          description: "Simplify hiring",
          price: { INR: "$50", AED: "$50" },
          features: ["Job-ready assessments", "Candidate dashboard", "Reports"],
        },
        {
          title: "Pro",
          description: "Smart hiring & onboarding",
          price: { INR: "$120", AED: "$120" },
          features: [
            "Everything in Basic",
            "Role-fit alignment",
            "Employer dashboards",
            "Adaptive tasks",
          ],
          highlight: true,
        },
        {
          title: "Premium",
          description: "Enterprise talent suite",
          price: { INR: "$250", AED: "$250" },
          features: [
            "Everything in Pro",
            "AI-driven onboarding",
            "Skill gap analytics",
            "Dedicated support",
          ],
        },
      ],
      annually: [
        {
          title: "Basic",
          description: "Simplify hiring",
          price: { INR: "$500", AED: "$500" },
          features: ["Job-ready assessments", "Candidate dashboard", "Reports"],
        },
        {
          title: "Pro",
          description: "Smart hiring & onboarding",
          price: { INR: "$1200", AED: "$1200" },
          features: [
            "Everything in Basic",
            "Role-fit alignment",
            "Employer dashboards",
            "Adaptive tasks",
          ],
          highlight: true,
        },
        {
          title: "Premium",
          description: "Enterprise talent suite",
          price: { INR: "$2500", AED: "$2500" },
          features: [
            "Everything in Pro",
            "AI-driven onboarding",
            "Skill gap analytics",
            "Dedicated support",
          ],
        },
      ],
    },
  },
};
