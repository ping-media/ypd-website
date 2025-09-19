export type BillingCycle = "one-time" | "monthly" | "annually";

export interface Plan {
  title: string;
  description: string;
  price: string; // India only for now
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
  // ---------------- CVP Lite ----------------
  "CVP Lite™": {
    billingTypes: ["one-time"],
    plans: {
      "one-time": [
        {
          title: "Free Plan",
          description: "For students starting their journey",
          price: "Free",
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
          price: "₹1299",
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
          price: "Free",
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
          price: "₹2499",
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
          price: "Free",
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
          price: "₹1999",
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
          price: "₹3999",
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
          price: "Free",
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
          price: "₹3499",
          period:"month",
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
          price: "₹5499",
          period:"month",
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
        price: "$20",
        features: [
          "Daily capsules",
          "Prelims question bank",
          "Reflection nudges",
        ],
      },
      {
        title: "Pro",
        description: "Structured UPSC pathway",
        price: "$60",
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
        price: "$120",
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
        price: "$200",
        features: [
          "Daily capsules",
          "Prelims question bank",
          "Reflection nudges",
        ],
      },
      {
        title: "Pro",
        description: "Structured UPSC pathway",
        price: "$600",
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
        price: "$1,200",
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
        price: "Free",
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
        price: "₹1499",
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
        price: "₹3499",
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
        price: "Free",
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
        price: "₹3499",
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
        price: "₹7499",
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
        price: "Free",
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
        price: "₹1299",
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
        price: "₹2199",
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
        price: "Free",
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
        price: "₹2499",
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
        price: "₹4499",
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
// ---------------- Admission Test System ----------------
"Admission Test System": {
  billingTypes: ["monthly", "annually"],
  plans: {
    monthly: [
      {
        title: "Basic",
        description: "Entry-level test prep",
        price: "$10",
        features: [
          "Standardized MCQs",
          "Difficulty levels",
          "Instant scoring",
        ],
      },
      {
        title: "Pro",
        description: "Advanced admission prep",
        price: "$40",
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
        price: "$80",
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
        price: "$100",
        features: [
          "Standardized MCQs",
          "Difficulty levels",
          "Instant scoring",
        ],
      },
      {
        title: "Pro",
        description: "Advanced admission prep",
        price: "$400",
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
        price: "$800",
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
        price: "$50",
        features: [
          "Job-ready assessments",
          "Candidate dashboard",
          "Reports",
        ],
      },
      {
        title: "Pro",
        description: "Smart hiring & onboarding",
        price: "$120",
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
        price: "$250",
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
        price: "$500",
        features: [
          "Job-ready assessments",
          "Candidate dashboard",
          "Reports",
        ],
      },
      {
        title: "Pro",
        description: "Smart hiring & onboarding",
        price: "$1,200",
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
        price: "$2,500",
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
