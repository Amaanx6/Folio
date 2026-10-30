
import { AuthRedirectButton } from "@/components/ui/AuthRedirectButton";

export const Pricing = () => {
    const plans = [
        {
            name: "Starter",
            price: "₹149",
            period: "/month",
            description: "For small teams validating outbound & inbound AI voice operations.",
            credits: "9,000 credits / month",
            estimate: "~25 min of talk time",
            features: [
                "5 active deterministic agents",
                "9,000 included credits / month",
                "1 credit = 10 seconds of conversation",
                "Finite state machine builder",
                "Standard CRM sync (HubSpot, Salesforce)",
                "Email support (24hr SLA)",
            ],
            cta: "Start 7-day trial",
            highlighted: false,
        },
        {
            name: "Professional",
            badge: "RECOMMENDED",
            price: "₹499",
            period: "/month",
            description: "For scaling revenue teams that require high-throughput voice operations.",
            credits: "45,000 credits / month",
            estimate: "~125 min of talk time",
            features: [
                "20 active deterministic agents",
                "45,000 included credits / month",
                "1 credit = 10 seconds of conversation",
                "Advanced state machine & branching",
                "Real-time automated QA grading",
                "Custom webhooks & API access",
                "Priority Slack support & onboarding",
            ],
            cta: "Start 7-day trial",
            highlighted: true,
        },
        {
            name: "Enterprise",
            price: "Custom",
            period: "billed annually",
            description: "For high-volume operations with custom security and carrier routing.",
            credits: "Volume-tiered credits",
            estimate: "Estimated talk time scales with usage",
            features: [
                "Unlimited deterministic agents",
                "Volume-tiered credit pricing",
                "Credit rate adjusts with platform costs",
                "Dedicated carrier trunking & BYO SIP",
                "Dedicated account manager & SLA",
                "SOC-2 Type II & HIPAA compliance",
                "Custom LLM fine-tuning & deployment",
            ],
            cta: "Contact sales",
            highlighted: false,
        },
    ];

    return (
        <section id="pricing" className="w-full border-t border-[#E9E8E1] bg-[#FBF9F2] py-20 md:py-28">
            <div className="mx-auto w-full max-w-[1240px] px-6 md:px-10">

                {/* Header */}
                <div className="flex flex-col items-center text-center">
                    <span className="font-['Space_Grotesk'] text-[11px] font-semibold uppercase tracking-[1.5px] text-[#747878]">
                        TRANSPARENT PRICING
                    </span>

                    <h2 className="mt-4 max-w-[620px]">
                        <span className="block font-['Newsreader'] text-[36px] font-normal leading-[1.12] tracking-[-0.8px] text-[#1B1C18] sm:text-[46px] md:text-[52px]">
                            Pay only for the calls{" "}
                            <span className="italic">you run.</span>
                        </span>
                    </h2>

                    <p className="mt-4 max-w-[540px] font-['Space_Grotesk'] text-[14px] font-normal leading-[22px] tracking-[0.1px] text-[#747878] md:text-[15px]">
                        Fair and transparent pricing that scales with your team. You pay in credits — not fixed minutes — so talk time flexes with real usage. No hidden platform surcharges or surprise overages.
                    </p>
                </div>

                {/* 3 Pricing Cards */}
                <div className="mt-14 grid grid-cols-1 items-stretch gap-6 lg:grid-cols-3">
                    {plans.map((plan) => (
                        <div
                            key={plan.name}
                            className={`relative flex flex-col justify-between rounded-xl p-8 transition duration-200 ${
                                plan.highlighted
                                    ? "border-2 border-[#1B1C18] bg-white shadow-[0px_12px_40px_rgba(0,0,0,0.08)]"
                                    : "border border-[#E9E8E1] bg-white shadow-[0px_4px_20px_rgba(0,0,0,0.03)]"
                            }`}
                        >
                            {/* Recommended Badge */}
                            {plan.badge && (
                                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                                    <span className="rounded-full bg-[#1B1C18] px-3 py-1 font-['Space_Grotesk'] text-[10px] font-bold tracking-wider text-white uppercase">
                                        {plan.badge}
                                    </span>
                                </div>
                            )}

                            <div>
                                <h3 className="font-['Space_Grotesk'] text-[18px] font-bold text-[#1B1C18]">
                                    {plan.name}
                                </h3>

                                <p className="mt-2 min-h-[40px] font-['Space_Grotesk'] text-[13px] text-[#747878]">
                                    {plan.description}
                                </p>

                                {/* Pricing */}
                                <div className="my-6 border-t border-[#E9E8E1] pt-6">
                                    <div className="flex items-baseline gap-1">
                                        <span className="font-['Space_Grotesk'] text-[42px] font-bold text-[#1B1C18]">
                                            {plan.price}
                                        </span>

                                        <span className="font-['Space_Grotesk'] text-[13px] text-[#747878]">
                                            {plan.period}
                                        </span>
                                    </div>

                                    <div className="mt-3 flex flex-col gap-1">
                                        <span className="font-['Space_Grotesk'] text-[12px] font-semibold text-[#1B1C18]">
                                            {plan.credits}
                                        </span>

                                        <span className="font-['Space_Grotesk'] text-[11px] text-[#747878]">
                                            Estimated: {plan.estimate}
                                        </span>
                                    </div>
                                </div>

                                {/* Features */}
                                <ul className="flex flex-col gap-3">
                                    {plan.features.map((feature, i) => (
                                        <li
                                            key={i}
                                            className="flex items-start gap-2.5"
                                        >
                                            <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#E3FCEF] text-[10px] text-[#22A06B]">
                                                ✓
                                            </span>

                                            <span className="font-['Space_Grotesk'] text-[13px] text-[#444748]">
                                                {feature}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* CTA */}
                            <div className="mt-8 pt-4">
                                {plan.name === "Enterprise" ? (
                                    <a
                                        href="mailto:sales@foolioo.app?subject=Enterprise%20Plan%20Inquiry"
                                        className="flex h-11 w-full items-center justify-center rounded-md border border-[#E9E8E1] bg-[#F5F3EC] font-['Space_Grotesk'] text-[13px] font-semibold text-[#1B1C18] transition-colors duration-200 hover:bg-[#E9E8E1]"
                                    >
                                        Contact sales
                                    </a>
                                ) : (
                                    <AuthRedirectButton
                                        className={`flex h-11 w-full items-center justify-center rounded-md font-['Space_Grotesk'] text-[13px] font-semibold transition-colors duration-200 ${
                                            plan.highlighted
                                                ? "bg-[#1B1C18] text-white hover:bg-[#3A3B37]"
                                                : "border border-[#E9E8E1] bg-[#F5F3EC] text-[#1B1C18] hover:bg-[#E9E8E1]"
                                        }`}
                                    >
                                        {plan.cta}
                                    </AuthRedirectButton>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
