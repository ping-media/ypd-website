const Page = () => {
  return (
    <div className="font-lato mx-auto flex max-w-[1440px] flex-col gap-4 p-4 sm:gap-10 sm:p-10 lg:gap-14 lg:px-20 lg:py-10">
      <div className="flex max-w-7xl flex-col justify-between gap-4 sm:gap-6 lg:flex-row">
        <div className="flex-1">
          <h1 className="mb-4 text-2xl font-bold sm:text-3xl lg:text-4xl">
            Terms of Cancellation & Refund
          </h1>
          <p className="mb-4">Last Updated: 25/08/2025</p>
          <p className="mb-4">
            This Cancellation and Refund Policy (&quot;Policy&quot;) governs all
            payment transactions, subscription cancellations, and refund
            requests for Youth Pulse Digital™ services in India. This policy
            complies with Indian consumer protection laws and digital commerce
            regulations.
          </p>

          <h2 className="mt-6 mb-2 text-xl font-semibold sm:text-2xl">
            1. Policy Scope and Applicability
          </h2>
          <p className="mb-2 font-semibold">Covered Services:</p>
          <ul className="mb-4 ml-6 list-disc">
            <li>
              AI-Powered Individual Services: Career guidance, exam preparation,
              professional training, entrepreneurship coaching
            </li>
            <li>
              SaaS Institutional Solutions: School admission systems, hiring
              platforms, onboarding tools
            </li>
            <li>
              Subscription Plans: Monthly, quarterly, and annual premium
              memberships
            </li>
            <li>
              One-time Purchases: Assessment reports, specialized consultations,
              certification programs
            </li>
            <li>
              Enterprise Solutions: Custom AI implementations, dedicated support
              packages
            </li>
          </ul>

          <p className="mb-2 font-semibold">User Categories:</p>
          <ul className="mb-4 ml-6 list-disc">
            <li>
              Individual Consumers: Students, professionals, job seekers,
              entrepreneurs
            </li>
            <li>
              Educational Institutions: Schools, colleges, training centers,
              coaching institutes
            </li>
            <li>
              Corporate Clients: Small businesses, startups, enterprises using
              HR solutions
            </li>
            <li>
              Government Organizations: Public sector institutions utilizing our
              assessment tools
            </li>
          </ul>

          <h2 className="mt-6 mb-2 text-xl font-semibold sm:text-2xl">
            2. Cancellation Terms by Service Type
          </h2>
          <h3 className="mt-4 mb-2 text-lg font-semibold sm:text-xl">
            2.1 Individual AI Services
          </h3>
          <p className="mb-2 font-semibold">Premium Monthly Subscriptions:</p>
          <ul className="mb-4 ml-6 list-disc">
            <li>
              Cancellation Window: Cancel anytime before next billing cycle
            </li>
            <li>
              Access Period: Full access until current billing period ends
            </li>
            <li>Auto-renewal: Stops after current period completion</li>
            <li>
              Refund Eligibility: No refund for current month; prevents future
              charges only
            </li>
          </ul>

          <p className="mb-2 font-semibold">Annual Subscriptions:</p>
          <ul className="mb-4 ml-6 list-disc">
            <li>Grace Period: 7-day full refund window from purchase date</li>
            <li>
              Pro-rata Refunds: Available for unused months after 7-day window
            </li>
            <li>
              Minimum Usage: Refunds not applicable if service used for more
              than 30 days
            </li>
            <li>
              Cancellation Process: Via account settings or customer support
            </li>
          </ul>

          <p className="mb-2 font-semibold">Career Assessment Packages:</p>
          <ul className="mb-4 ml-6 list-disc">
            <li>
              One-time Purchases: 48-hour cancellation window before assessment
              completion
            </li>
            <li>
              Completed Assessments: Non-refundable once reports are generated
            </li>
            <li>
              Technical Issues: Full refund if assessment cannot be completed
              due to platform errors
            </li>
          </ul>

          <h3 className="mt-4 mb-2 text-lg font-semibold sm:text-xl">
            2.2 Educational Institution Services
          </h3>
          <p className="mb-2 font-semibold">School Admission Test Systems:</p>
          <ul className="mb-4 ml-6 list-disc">
            <li>
              Setup Phase: Full refund if cancelled within 15 days of contract
              signing
            </li>
            <li>
              Implementation Phase: 50% refund if cancelled before system goes
              live
            </li>
            <li>
              Active Usage: Pro-rata refund for remaining contract period
              (minimum 3-month notice)
            </li>
            <li>
              Academic Year Contracts: Special terms for mid-academic year
              cancellations
            </li>
          </ul>

          <p className="mb-2 font-semibold">Bulk Student Licenses:</p>
          <ul className="mb-4 ml-6 list-disc">
            <li>
              Volume Discounts: Refunds calculated on original per-user pricing
            </li>
            <li>
              Partial Cancellations: Reduce user count with 30-day notice; price
              adjustments apply
            </li>
            <li>
              End-of-Term: Full access maintained until academic term completion
            </li>
          </ul>

          <h3 className="mt-4 mb-2 text-lg font-semibold sm:text-xl">
            2.3 Corporate HR Solutions
          </h3>
          <p className="mb-2 font-semibold">Hiring Platform Subscriptions:</p>
          <ul className="mb-4 ml-6 list-disc">
            <li>
              Trial Period: 15-day free trial with full cancellation rights
            </li>
            <li>
              Monthly Plans: Cancel with 10-day notice; access continues until
              period end
            </li>
            <li>
              Annual Contracts: 30-day cancellation notice required; pro-rata
              refunds available
            </li>
            <li>
              Custom Integrations: Non-refundable development costs; platform
              fees refundable
            </li>
          </ul>

          <p className="mb-2 font-semibold">Employee Onboarding Systems:</p>
          <ul className="mb-4 ml-6 list-disc">
            <li>Per-employee Pricing: Refunds for unused employee slots</li>
            <li>Fixed-term Licenses: Refunds based on remaining term length</li>
            <li>Training Modules: Non-refundable once accessed by employees</li>
          </ul>

          <h2 className="mt-6 mb-2 text-xl font-semibold sm:text-2xl">
            3. Refund Eligibility and Conditions
          </h2>
          <h3 className="mt-4 mb-2 text-lg font-semibold sm:text-xl">
            3.1 Eligible Refund Scenarios
          </h3>
          <p className="mb-2 font-semibold">Technical Issues:</p>
          <ul className="mb-4 ml-6 list-disc">
            <li>Platform unavailability for more than 48 consecutive hours</li>
            <li>Critical feature failures preventing service usage</li>
            <li>Data loss or corruption due to our system errors</li>
            <li>AI service malfunctions affecting assessment accuracy</li>
          </ul>

          <p className="mb-2 font-semibold">Service Dissatisfaction:</p>
          <ul className="mb-4 ml-6 list-disc">
            <li>
              Individual Services: 7-day money-back guarantee for first-time
              users
            </li>
            <li>
              Institutional Services: 30-day evaluation period with full refund
              option
            </li>
            <li>
              Custom Solutions: Milestone-based refunds if deliverables
              don&apos;t meet specifications
            </li>
          </ul>

          <p className="mb-2 font-semibold">Billing Errors:</p>
          <ul className="mb-4 ml-6 list-disc">
            <li>Duplicate charges processed due to technical errors</li>
            <li>Incorrect pricing applied to accounts</li>
            <li>Unauthorized renewals or upgrades</li>
            <li>Currency conversion errors</li>
          </ul>

          <h3 className="mt-4 mb-2 text-lg font-semibold sm:text-xl">
            3.2 Non-Refundable Items
          </h3>
          <p className="mb-2 font-semibold">Completed Services:</p>
          <ul className="mb-4 ml-6 list-disc">
            <li>Generated assessment reports and career recommendations</li>
            <li>Completed training modules or certification programs</li>
            <li>AI coaching sessions that have been conducted</li>
            <li>Custom reports delivered to institutional clients</li>
          </ul>

          <p className="mb-2 font-semibold">Third-Party Costs:</p>
          <ul className="mb-4 ml-6 list-disc">
            <li>Payment gateway processing fees</li>
            <li>Integration development by external vendors</li>
            <li>Third-party software licenses procured for your use</li>
            <li>Certification body fees for professional credentials</li>
          </ul>

          <p className="mb-2 font-semibold">Promotional Pricing:</p>
          <ul className="mb-4 ml-6 list-disc">
            <li>Services purchased during special offers or discounts</li>
            <li>
              Free trial upgrades to paid plans (beyond standard refund window)
            </li>
            <li>
              Bundle deals and package offers (partial refunds not available)
            </li>
          </ul>

          <h3 className="mt-4 mb-2 text-lg font-semibold sm:text-xl">
            3.3 Cooling-Off Period
          </h3>
          <p className="mb-4">
            Cooling-Off Period (Digital Services) In compliance with the
            Consumer Protection (E-Commerce) Rules, 2020, individual consumers
            purchasing digital services from Youth Pulse Digital™ are entitled
            to a 7-day cooling-off period from the date of purchase. During this
            period, you may cancel your subscription or service for a full
            refund, provided that:
          </p>
          <p className="mb-4">
            The service has not been substantially used, and
          </p>
          <p className="mb-4">
            No final report, certification, or deliverable has been generated
            under your account. Once services are substantially consumed or
            reports delivered, the cooling-off refund is not applicable.
          </p>

          <h2 className="mt-6 mb-2 text-xl font-semibold sm:text-2xl">
            4. Cancellation Procedures
          </h2>
          <h3 className="mt-4 mb-2 text-lg font-semibold sm:text-xl">
            4.1 Self-Service Cancellation
          </h3>
          <p className="mb-2 font-semibold">Individual Users:</p>
          <ol className="mb-4 ml-6 list-decimal">
            <li>
              Account Dashboard: Navigate to &apos;Subscription Management&apos;
              section
            </li>
            <li>
              Cancel Subscription: Click &apos;Cancel&apos; and confirm
              cancellation reason
            </li>
            <li>
              Confirmation: Receive email confirmation with effective date
            </li>
            <li>
              Access: Continue using services until current period expires
            </li>
          </ol>

          <p className="mb-2 font-semibold">Institutional Clients:</p>
          <ol className="mb-4 ml-6 list-decimal">
            <li>
              Admin Portal: Use institutional admin dashboard cancellation
              feature
            </li>
            <li>
              Bulk Operations: Cancel multiple user licenses simultaneously
            </li>
            <li>Data Export: Option to export user data before cancellation</li>
            <li>Transition Period: Maintain access during notice period</li>
          </ol>

          <h3 className="mt-4 mb-2 text-lg font-semibold sm:text-xl">
            4.2 Customer Support Cancellation
          </h3>
          <p className="mb-2 font-semibold">Contact Methods:</p>
          <ul className="mb-4 ml-6 list-disc">
            <li>
              Email:{" "}
              <a
                href="mailto:support@youthpulsedigital.com"
                className="cursor-pointer font-bold hover:underline"
              >
                support@youthpulsedigital.com
              </a>
            </li>
            <li>Phone: +91 8650126521 (Business hours: 9 AM - 6 PM IST)</li>
            <li>Chat: Live chat available on platform (premium users)</li>
            <li>Support Ticket: Through help center with priority handling</li>
          </ul>

          <p className="mb-2 font-semibold">Required Information:</p>
          <ul className="mb-4 ml-6 list-disc">
            <li>Account email address or user ID</li>
            <li>Purchase order number or transaction reference</li>
            <li>Reason for cancellation (helps us improve services)</li>
            <li>
              Preferred refund method (original payment source or bank transfer)
            </li>
          </ul>

          <p className="mb-2 font-semibold">Processing Timeline:</p>
          <ul className="mb-4 ml-6 list-disc">
            <li>Acknowledgment: Within 24 hours of cancellation request</li>
            <li>Review: 2-3 business days for eligibility verification</li>
            <li>Refund Processing: 5-7 business days after approval</li>
            <li>Bank Credit: Additional 3-5 business days depending on bank</li>
          </ul>

          <h2 className="mt-6 mb-2 text-xl font-semibold sm:text-2xl">
            5. Refund Processing and Methods
          </h2>
          <h3 className="mt-4 mb-2 text-lg font-semibold sm:text-xl">
            5.1 Refund Calculation
          </h3>
          <p className="mb-2 font-semibold">Pro-rata Calculations:</p>
          <ul className="mb-4 ml-6 list-disc">
            <li>Monthly Services: Daily rate calculation for unused days</li>
            <li>Annual Services: Monthly rate calculation for unused months</li>
            <li>Usage-based: Refund based on actual feature utilization</li>
            <li>
              Institutional: Consider minimum commitment periods and volume
              discounts
            </li>
          </ul>

          <p className="mb-2 font-semibold">Example Calculation:</p>
          <ul className="mb-4 ml-6 list-disc">
            <li>Annual Subscription: ₹12,000 (12 months)</li>
            <li>Cancellation after: 4 months of usage</li>
            <li>
              Refund calculation: (8 remaining months / 12 months) × ₹12,000 =
              ₹8,000
            </li>
            <li>Less processing fee: ₹8,000 - ₹100 = ₹7,900 refund</li>
          </ul>

          <h3 className="mt-4 mb-2 text-lg font-semibold sm:text-xl">
            5.2 Refund Methods
          </h3>
          <p className="mb-2 font-semibold">Primary Method:</p>
          <ul className="mb-4 ml-6 list-disc">
            <li>
              Original Payment Source: Credit/debit card, UPI, net banking used
              for purchase
            </li>
            <li>Processing Time: 5-7 business days for most payment methods</li>
            <li>
              Bank Dependent: Final credit timing depends on issuing bank
              policies
            </li>
          </ul>

          <p className="mb-2 font-semibold">Alternative Methods:</p>
          <ul className="mb-4 ml-6 list-disc">
            <li>Bank Transfer: For failed card refunds or upon request</li>
            <li>
              Digital Wallets: Paytm, PhonePe, Google Pay (where originally
              used)
            </li>
            <li>
              Account Credit: Option to retain amount as service credit for
              future use
            </li>
          </ul>

          <h3 className="mt-4 mb-2 text-lg font-semibold sm:text-xl">
            5.3 International Transactions
          </h3>
          <p className="mb-2 font-semibold">Foreign Cards:</p>
          <ul className="mb-4 ml-6 list-disc">
            <li>
              Currency Conversion: Refunds in original transaction currency
            </li>
            <li>Exchange Rate: Rate applicable on refund processing date</li>
            <li>
              Additional Charges: Customer responsible for international
              transaction fees
            </li>
          </ul>

          <h2 className="mt-6 mb-2 text-xl font-semibold sm:text-2xl">
            6. Special Circumstances and Exceptions
          </h2>
          <h3 className="mt-4 mb-2 text-lg font-semibold sm:text-xl">
            6.1 Force Majeure Events
          </h3>
          <p className="mb-2 font-semibold">Service Disruptions:</p>
          <ul className="mb-4 ml-6 list-disc">
            <li>Natural disasters affecting service delivery</li>
            <li>Government regulatory changes impacting operations</li>
            <li>Internet infrastructure failures beyond our control</li>
            <li>
              Refund Policy: Pro-rata refunds for extended service disruptions (
              {">"}7 days)
            </li>
          </ul>

          <h3 className="mt-4 mb-2 text-lg font-semibold sm:text-xl">
            6.2 Educational Institution Specific
          </h3>
          <p className="mb-2 font-semibold">
            Academic Calendar Considerations:
          </p>
          <ul className="mb-4 ml-6 list-disc">
            <li>
              Mid-semester Cancellations: Refunds calculated considering
              academic impact
            </li>
            <li>
              Examination Periods: No cancellations accepted during active exam
              windows
            </li>
            <li>
              Student Data: 90-day retention period for cancelled institutional
              accounts
            </li>
          </ul>

          <p className="mb-2 font-semibold">Compliance Requirements:</p>
          <ul className="mb-4 ml-6 list-disc">
            <li>
              Educational Regulations: Refunds subject to state education board
              policies
            </li>
            <li>
              Audit Requirements: Documentation maintained for institutional
              refunds
            </li>
            <li>
              Parent/Guardian Approvals: Required for student service
              cancellations
            </li>
          </ul>

          <h3 className="mt-4 mb-2 text-lg font-semibold sm:text-xl">
            6.3 Corporate Client Exceptions
          </h3>
          <p className="mb-2 font-semibold">Contract Modifications:</p>
          <ul className="mb-4 ml-6 list-disc">
            <li>
              User Volume Changes: Adjustments allowed monthly with pro-rata
              billing
            </li>
            <li>
              Feature Upgrades/Downgrades: Price differences applied to
              remaining term
            </li>
            <li>
              Merger/Acquisition: Special provisions for organizational changes
            </li>
          </ul>

          <h3 className="mt-4 mb-2 text-lg font-semibold sm:text-xl">
            6.4 Parental Refund Rights
          </h3>
          <p className="mb-4">
            Parental Refund Rights for Minors Where services are purchased by a
            school, guardian, or parent on behalf of a minor, refund requests
            must be initiated by the paying institution or parent/guardian.
            Youth Pulse Digital™ will not process individual refund requests
            directly from minors. All such cases will be routed through the
            parent/guardian or the institutional administrator, ensuring
            compliance with parental consent requirements under Indian law.
          </p>

          <h2 className="mt-6 mb-2 text-xl font-semibold sm:text-2xl">
            7. Dispute Resolution for Refunds
          </h2>
          <h3 className="mt-4 mb-2 text-lg font-semibold sm:text-xl">
            7.1 Internal Resolution Process
          </h3>
          <p className="mb-2 font-semibold">Step 1 - Customer Support:</p>
          <ul className="mb-4 ml-6 list-disc">
            <li>
              Initial Contact:{" "}
              <a
                href="mailto:support@youthpulsedigital.com"
                className="cursor-pointer font-bold hover:underline"
              >
                support@youthpulsedigital.com
              </a>
            </li>
            <li>Response Time: 24-48 hours for refund-related queries</li>
            <li>
              Documentation: Provide transaction details and cancellation reason
            </li>
          </ul>

          <p className="mb-2 font-semibold">Step 2 - Escalation:</p>
          <ul className="mb-4 ml-6 list-disc">
            <li>
              Supervisor Review: Unresolved cases escalated within 72 hours
            </li>
            <li>
              Management Review: Complex institutional refunds reviewed by
              senior team
            </li>
            <li>Final Decision: Communicated within 7 business days</li>
          </ul>

          <h3 className="mt-4 mb-2 text-lg font-semibold sm:text-xl">
            7.2 External Resolution
          </h3>
          <p className="mb-2 font-semibold">Consumer Forums:</p>
          <ul className="mb-4 ml-6 list-disc">
            <li>
              National Consumer Helpline: 1915 (for consumer rights issues)
            </li>
            <li>State Consumer Commissions: Available for formal complaints</li>
            <li>
              Online Consumer Courts: E-filing available for digital commerce
              disputes
            </li>
          </ul>

          <p className="mb-2 font-semibold">Banking Channels:</p>
          <ul className="mb-4 ml-6 list-disc">
            <li>
              Chargeback Process: Through issuing bank for payment disputes
            </li>
            <li>
              Payment Gateway Disputes: Direct resolution with Razorpay, PayU,
              or other processors
            </li>
            <li>
              RBI Guidelines: Compliance with Reserve Bank of India digital
              payment norms
            </li>
          </ul>

          <h2 className="mt-6 mb-2 text-xl font-semibold sm:text-2xl">
            8. Refund Timeline and Processing
          </h2>
          <h3 className="mt-4 mb-2 text-lg font-semibold sm:text-xl">
            8.1 Standard Processing Times
          </h3>
          <p className="mb-2 font-semibold">Service Type-wise Timelines:</p>
          <ul className="mb-4 ml-6 list-disc">
            <li>Individual AI Services: 3-5 business days after approval</li>
            <li>
              Educational Institution Services: 7-10 business days (due to
              verification requirements)
            </li>
            <li>
              Corporate Solutions: 10-15 business days (contract review
              required)
            </li>
            <li>
              Custom/Enterprise: 15-20 business days (case-by-case evaluation)
            </li>
          </ul>

          <h3 className="mt-4 mb-2 text-lg font-semibold sm:text-xl">
            8.2 Factors Affecting Processing Time
          </h3>
          <p className="mb-2 font-semibold">Verification Requirements:</p>
          <ul className="mb-4 ml-6 list-disc">
            <li>Identity Verification: For high-value refunds above ₹50,000</li>
            <li>
              Authorization Checks: Institutional refunds require proper
              authorization
            </li>
            <li>
              Fraud Prevention: Additional verification for suspicious
              transactions
            </li>
          </ul>

          <p className="mb-2 font-semibold">Banking Dependencies:</p>
          <ul className="mb-4 ml-6 list-disc">
            <li>
              Weekend/Holiday Processing: Bank processing delays during
              non-working days
            </li>
            <li>
              International Transactions: Additional 3-7 days for foreign
              payment methods
            </li>
            <li>
              Bank Verification: Some banks require additional verification for
              refunds
            </li>
          </ul>

          <h2 className="mt-6 mb-2 text-xl font-semibold sm:text-2xl">
            9. Policy Updates and Communication
          </h2>
          <h3 className="mt-4 mb-2 text-lg font-semibold sm:text-xl">
            9.1 Policy Modifications
          </h3>
          <p className="mb-2 font-semibold">Change Notification:</p>
          <ul className="mb-4 ml-6 list-disc">
            <li>
              Email Updates: All active subscribers notified of policy changes
            </li>
            <li>
              Website Posting: Updated policy posted 30 days before
              implementation
            </li>
            <li>
              Grandfathering: Existing subscriptions honor original refund terms
              for current period
            </li>
          </ul>

          <p className="mb-2 font-semibold">Significant Changes:</p>
          <ul className="mb-4 ml-6 list-disc">
            <li>
              Refund Window Changes: 60-day advance notice for major timeline
              modifications
            </li>
            <li>
              Eligibility Criteria: Updates communicated with clear effective
              dates
            </li>
            <li>
              Processing Method Changes: Alternative arrangements for affected
              users
            </li>
          </ul>

          <h3 className="mt-4 mb-2 text-lg font-semibold sm:text-xl">
            9.2 Customer Communication
          </h3>
          <p className="mb-2 font-semibold">Refund Status Updates:</p>
          <ul className="mb-4 ml-6 list-disc">
            <li>
              Email Notifications: Automatic updates on refund processing status
            </li>
            <li>
              SMS Alerts: Critical updates sent via SMS for institutional
              clients
            </li>
            <li>
              Account Dashboard: Real-time refund status visible in user
              accounts
            </li>
          </ul>

          <h2 className="mt-6 mb-2 text-xl font-semibold sm:text-2xl">
            10. Contact Information
          </h2>
          <p className="mb-2 font-semibold">Cancellation and Refund Support:</p>
          <ul className="mb-4 ml-6 list-disc">
            <li>
              Primary Contact:{" "}
              <a
                href="mailto:support@youthpulsedigital.com"
                className="cursor-pointer font-bold hover:underline"
              >
                support@youthpulsedigital.com
              </a>
            </li>
            <li>Phone Support: +91 8650126521 (Mon-Fri, 9 AM - 6 PM IST)</li>
            <li>WhatsApp Support: +91 7300868536 (Business hours only)</li>
          </ul>

          <p className="mb-2 font-semibold">Escalation Contacts:</p>
          <ul className="mb-4 ml-6 list-disc">
            <li>
              Legal Team:{" "}
              <a
                href="mailto:legal@youthpulsedigital.com"
                className="cursor-pointer font-bold hover:underline"
              >
                legal@youthpulsedigital.com
              </a>
            </li>
            <li>
              Grievance Office:{" "}
              <a
                href="mailto:support@youthpulsedigital.com"
                className="cursor-pointer font-bold hover:underline"
              >
                support@youthpulsedigital.com
              </a>
            </li>
          </ul>

          <p className="mb-2 font-semibold">Business Address:</p>
          <p className="mb-2">Youth Pulse Digital™</p>
          <p className="mb-2">
            {" "}
            Astra Tower, ASO-501,
            <br />
            Action Area-IIC, New Town,
            <br />
            Kolkata – 700161, West Bengal, India
          </p>
          <p className="mb-2">GST Number: 19AACCY0548C1ZG</p>
          {/* <p className="mb-4">PAN: AACCY0548C</p> */}

          <h2 className="mt-6 mb-2 text-xl font-semibold sm:text-2xl">
            11. Legal Compliance and Consumer Rights
          </h2>
          <p className="mb-2">This policy complies with:</p>
          <ul className="mb-4 ml-6 list-disc">
            <li>
              Consumer Protection Act, 2019: Right to refund for defective
              services
            </li>
            <li>
              Digital India Guidelines: Electronic transaction protection
              measures
            </li>
            <li>
              RBI Payment Guidelines: Digital payment security and refund norms
            </li>
            <li>
              Information Technology Act, 2000: Digital service provider
              obligations
            </li>
          </ul>

          <p className="mb-2 font-semibold">Your Rights:</p>
          <ul className="mb-4 ml-6 list-disc">
            <li>Right to cancel services as per this policy</li>
            <li>Right to refund for non-delivery or defective services</li>
            <li>Right to approach consumer forums for dispute resolution</li>
            <li>Right to fair and transparent refund processing</li>
          </ul>

          <p className="mb-4">
            This policy is effective immediately and supersedes all previous
            cancellation and refund terms. For the most current version, please
            visit our website.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Page;
