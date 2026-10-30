"use client";

import { useState } from "react";
import { ComingSoonButton } from "@/components/ui/ComingSoon";

const AgentFeatureCard = ({
    icon,
    title,
    description,
    metric,
}: {
    icon: "shield" | "conversation" | "handoff";
    title: string;
    description: string;
    metric: string;
}) => (
    <article className="flex min-h-[270px] flex-col rounded-lg border border-[#F0EFE8] bg-[#F6F5EF] p-6 md:p-7">
        <div className="flex h-10 w-10 items-center justify-center rounded-sm bg-black text-white">
            <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
            >
                {icon === "shield" && (
                    <>
                        <path d="M12 3.2 19 6v5.2c0 4.4-2.8 7.6-7 9.6-4.2-2-7-5.2-7-9.6V6l7-2.8Z" />
                        <path d="m9 11.8 2 2 4-4.2" />
                    </>
                )}

                {icon === "conversation" && (
                    <>
                        <path d="M4 18.5v-1.2A4.3 4.3 0 0 1 8.3 13h2.4a4.3 4.3 0 0 1 4.3 4.3v1.2" />
                        <circle cx="9.5" cy="7.5" r="3" />
                        <path d="M17 8a3 3 0 0 1 0 5.8M18.5 5.5a6 6 0 0 1 0 10.8" />
                    </>
                )}

                {icon === "handoff" && (
                    <>
                        <path d="M4 13v-1a8 8 0 0 1 16 0v1" />
                        <path d="M4 13h2.5A2.5 2.5 0 0 1 9 15.5v1A2.5 2.5 0 0 1 6.5 19H6a2 2 0 0 1-2-2v-4Z" />
                        <path d="M20 13h-2.5a2.5 2.5 0 0 0-2.5 2.5v1a2.5 2.5 0 0 0 2.5 2.5h.5a2 2 0 0 0 2-2v-4Z" />
                        <path d="M15 6.5a4.5 4.5 0 0 1 4 4.5" />
                    </>
                )}
            </svg>
        </div>

        <h3 className="mt-5 font-['Space_Grotesk'] text-[17px] font-semibold leading-6 text-[#1B1C18]">
            {title}
        </h3>

        <p className="mt-3 font-['Space_Grotesk'] text-[14px] leading-[23px] text-[#747878]">
            {description}
        </p>

        <p className="mt-auto pt-8 font-['Space_Grotesk'] text-[16px] font-bold uppercase leading-5 tracking-[-0.2px] text-[#7852D6]">
            {metric}
        </p>
    </article>
);

// ---------------------------------------------
// DETERMINISTIC AGENT TAB
// ---------------------------------------------

const DeterministicAgentPanel = () => (
    <div className="mt-10 overflow-hidden rounded-xl border border-[#E9E8E1] bg-white shadow-[0px_8px_30px_rgba(0,0,0,0.06)]">

        {/* Agent Engine Header */}
        <div className="flex min-h-11 flex-wrap items-center justify-between gap-2 bg-[#EAE9E2] px-5 py-3 md:px-7">
            <div className="flex items-center gap-3">
                <span className="h-3 w-3 shrink-0 rounded-full bg-[#2FC29B]" />

                <span className="font-['Space_Grotesk'] text-[11px] font-semibold uppercase tracking-[0.55px] text-[#1B1C18]">
                    FOLIO DETERMINISTIC VOICE ENGINE
                </span>
            </div>

            <p className="font-['Space_Grotesk'] text-[11px] font-medium tracking-[0.1px] text-[#565A5A] md:text-[12px]">
                Voice Stack: Ultra-low latency Neural SIP (280ms)
            </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 gap-4 bg-white p-5 sm:p-6 lg:grid-cols-3 lg:gap-6 lg:p-8">

            <AgentFeatureCard
                icon="shield"
                title="Strict Guardrail Contracts"
                description="Unlike generic LLM wrappers, Folio voice agents are bound to explicit decision trees and knowledge bases. If a prospect asks an out-of-scope question, the agent never improvises."
                metric="99.98% Policy Adherence"
            />

            <AgentFeatureCard
                icon="conversation"
                title="Natural Cadence & Turn-Taking"
                description="Human-grade barge-in latency allows prospects to interrupt, ask for clarification, or pause without the robotic hesitation that damages caller trust."
                metric={"< 300ms Audio Response"}
            />

            <AgentFeatureCard
                icon="handoff"
                title="Live Human Warm-Handoff"
                description="At the exact moment empathy or negotiation requires human nuance, the call transfers smoothly with a 3-second context briefing to your team."
                metric="Zero Dead-Air Transfers"
            />

        </div>
    </div>
);

// ---------------------------------------------
// MAIN TWO PRODUCTS COMPONENT
// ---------------------------------------------

export const TwoProducts = () => {
    const [activeTab, setActiveTab] = useState<"campaigns" | "agent">("campaigns");

    return (
        <section className="w-full border-t border-[#E9E8E1] bg-[#FBF9F2] pt-20 pb-16 md:pt-28 md:pb-24">

            <div className="mx-auto w-full max-w-[1240px] px-6 md:px-10">

                {/* Section Header */}
                <div className="flex flex-col items-center text-center">

                    <span className="font-['Space_Grotesk'] text-[11px] font-semibold uppercase tracking-[1.5px] text-[#747878]">
                        PRODUCT ARCHITECTURE
                    </span>

                    <h2 className="mt-4 max-w-[620px]">
                        <span className="block font-['Newsreader'] text-[36px] font-normal leading-[1.12] tracking-[-0.8px] text-[#1B1C18] sm:text-[46px] md:text-[52px]">
                            Two products, one seamless
                        </span>

                        <span className="block font-['Newsreader'] text-[36px] font-normal italic leading-[1.12] tracking-[-0.8px] text-[#1B1C18] sm:text-[46px] md:text-[52px]">
                            experience.
                        </span>
                    </h2>

                    <p className="mt-4 max-w-[540px] font-['Space_Grotesk'] text-[14px] font-normal leading-[22px] tracking-[0.1px] text-[#747878] md:text-[15px]">
                        Foolioo blends high-volume campaign orchestration with deterministic voice agent workflows into a single reliable platform.
                    </p>
                </div>

                {/* ---------------------------------
                    TAB SWITCHERS
                ---------------------------------- */}

                <div
                    className="mt-8 flex items-center justify-center gap-2"
                    role="tablist"
                    aria-label="Folio products"
                >
                    {/* Campaigns Tab */}
                    <button
                        type="button"
                        id="campaigns-tab"
                        role="tab"
                        aria-selected={activeTab === "campaigns"}
                        aria-controls="product-panel"
                        onClick={() => setActiveTab("campaigns")}
                        className={`flex h-9 items-center gap-2 rounded-full px-5 font-['Space_Grotesk'] text-[12px] font-medium tracking-[0.2px] transition-all duration-200 ${
                            activeTab === "campaigns"
                                ? "bg-[#1B1C18] text-white shadow-xs"
                                : "border border-[#E9E8E1] bg-white text-[#747878] hover:bg-[#F5F3EC]"
                        }`}
                    >
                        <span>Two Campaigns</span>
                    </button>

                    {/* Deterministic Agent Tab */}
                    <button
                        type="button"
                        id="agent-tab"
                        role="tab"
                        aria-selected={activeTab === "agent"}
                        aria-controls="product-panel"
                        onClick={() => setActiveTab("agent")}
                        className={`flex h-9 items-center gap-2 rounded-full px-5 font-['Space_Grotesk'] text-[12px] font-medium tracking-[0.2px] transition-all duration-200 ${
                            activeTab === "agent"
                                ? "bg-[#1B1C18] text-white shadow-xs"
                                : "border border-[#E9E8E1] bg-white text-[#747878] hover:bg-[#F5F3EC]"
                        }`}
                    >
                        <span>Deterministic Agent</span>
                    </button>
                </div>

                {/* ---------------------------------
                    DYNAMIC PRODUCT CONTENT
                ---------------------------------- */}

                <div
                    id="product-panel"
                    role="tabpanel"
                    aria-labelledby={activeTab === "agent" ? "agent-tab" : "campaigns-tab"}
                    aria-live="polite"
                >
                    {activeTab === "agent" ? (

                        // Show Deterministic Agent UI
                        <DeterministicAgentPanel />

                    ) : (

                        // ---------------------------------
                        // ORIGINAL CAMPAIGNS DASHBOARD
                        // ---------------------------------

                        <div className="mt-10 overflow-hidden rounded-xl border border-[#E9E8E1] bg-white shadow-[0px_8px_30px_rgba(0,0,0,0.06)]">

                            {/* Mac Browser Chrome */}
                            <div className="flex h-11 items-center justify-between border-b border-[#E9E8E1] bg-[#FAFAF8] px-4">

                                <div className="flex items-center gap-2">
                                    <span className="h-3 w-3 rounded-full bg-[#EF4444]/80" />
                                    <span className="h-3 w-3 rounded-full bg-[#F59E0B]/80" />
                                    <span className="h-3 w-3 rounded-full bg-[#10B981]/80" />
                                </div>

                                <div className="flex h-7 items-center rounded-md border border-[#E9E8E1] bg-white px-3 font-['Space_Grotesk'] text-[11px] text-[#747878] shadow-2xs">
                                    <span className="text-[#A1A1AA]">
                                        https://
                                    </span>

                                    <span className="font-medium text-[#1B1C18]">
                                        app.foolioo.ai/campaigns/q4-renewal-outreach
                                    </span>
                                </div>

                                <div className="flex items-center gap-1.5">
                                    <span className="h-2 w-2 rounded-full bg-[#22A06B]" />

                                    <span className="font-['Space_Grotesk'] text-[11px] font-medium text-[#22A06B]">
                                        Live Session
                                    </span>
                                </div>
                            </div>

                            {/* Window Inner Content */}
                            <div className="grid grid-cols-1 lg:grid-cols-12">

                                {/* Left Column: 3 Metric Cards */}
                                <div className="flex flex-col gap-4 border-b border-[#E9E8E1] bg-[#FCFBF8] p-6 lg:col-span-4 lg:border-b-0 lg:border-r">

                                    {/* Card 1: Connection Rate */}
                                    <div className="flex flex-col justify-between rounded-lg border border-[#E9E8E1] bg-white p-4 shadow-2xs">

                                        <div className="flex items-center justify-between">
                                            <span className="font-['Space_Grotesk'] text-[11px] font-semibold uppercase tracking-[0.6px] text-[#747878]">
                                                CONNECTION RATE
                                            </span>

                                            <span className="rounded bg-[#E3FCEF] px-1.5 py-0.5 font-['Space_Grotesk'] text-[10px] font-semibold text-[#22A06B]">
                                                +12.3%
                                            </span>
                                        </div>

                                        <div className="mt-2 flex items-baseline gap-2">
                                            <span className="font-['Space_Grotesk'] text-[32px] font-bold text-[#1B1C18]">
                                                74.9%
                                            </span>

                                            <span className="font-['Space_Grotesk'] text-[11px] text-[#747878]">
                                                vs industry avg 24%
                                            </span>
                                        </div>

                                        <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-[#F5F3EC]">
                                            <div className="h-full w-[74.9%] rounded-full bg-[#22A06B]" />
                                        </div>
                                    </div>

                                    {/* Card 2: Total Minutes */}
                                    <div className="flex flex-col justify-between rounded-lg border border-[#E9E8E1] bg-white p-4 shadow-2xs">

                                        <div className="flex items-center justify-between">
                                            <span className="font-['Space_Grotesk'] text-[11px] font-semibold uppercase tracking-[0.6px] text-[#747878]">
                                                CONNECTED MINUTES
                                            </span>

                                            <span className="font-['Space_Grotesk'] text-[10px] text-[#747878]">
                                                Today
                                            </span>
                                        </div>

                                        <div className="mt-2 flex items-baseline gap-2">
                                            <span className="font-['Space_Grotesk'] text-[32px] font-bold text-[#1B1C18]">
                                                525 min
                                            </span>

                                            <span className="font-['Space_Grotesk'] text-[11px] text-[#747878]">
                                                (Avg: 3m 42s)
                                            </span>
                                        </div>

                                        <p className="mt-2 font-['Space_Grotesk'] text-[11px] text-[#747878]">
                                            142 completed outbound conversations
                                        </p>
                                    </div>

                                    {/* Card 3: Cost per minute */}
                                    <div className="flex flex-col justify-between rounded-lg border border-[#E9E8E1] bg-white p-4 shadow-2xs">

                                        <div className="flex items-center justify-between">
                                            <span className="font-['Space_Grotesk'] text-[11px] font-semibold uppercase tracking-[0.6px] text-[#747878]">
                                                EFFECTIVE COST
                                            </span>

                                            <span className="rounded bg-[#E3FCEF] px-1.5 py-0.5 font-['Space_Grotesk'] text-[10px] font-semibold text-[#22A06B]">
                                                Deterministic
                                            </span>
                                        </div>

                                        <div className="mt-2 flex items-baseline gap-2">
                                            <span className="font-['Space_Grotesk'] text-[32px] font-bold text-[#1B1C18]">
                                                ₹0.07
                                            </span>

                                            <span className="font-['Space_Grotesk'] text-[11px] text-[#747878]">
                                                / minute
                                            </span>
                                        </div>

                                        <p className="mt-2 font-['Space_Grotesk'] text-[11px] text-[#747878]">
                                            vs outsourced call center rep (₹18/min)
                                        </p>
                                    </div>
                                </div>

                                {/* Right Column: Live Conversation Transcript */}
                                <div className="flex flex-col justify-between p-6 lg:col-span-8">

                                    {/* Call Header */}
                                    <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#E9E8E1] pb-4">

                                        <div className="flex items-center gap-3">
                                            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#E9E8E1] font-['Space_Grotesk'] text-[12px] font-bold text-[#1B1C18]">
                                                AM
                                            </div>

                                            <div>
                                                <p className="font-['Space_Grotesk'] text-[13px] font-semibold text-[#1B1C18]">
                                                    Ananya Mehta • VP Operations, Guild Real Estate
                                                </p>

                                                <p className="font-['Space_Grotesk'] text-[11px] text-[#747878]">
                                                    +91 98200 45192 • Mumbai, MH
                                                </p>
                                            </div>
                                        </div>

                                        <div className="flex items-center gap-2">
                                            <span className="rounded-full bg-[#EDE9FE] px-2.5 py-1 font-['Space_Grotesk'] text-[11px] font-semibold text-[#6D28D9]">
                                                ACTIVE CALL (02:44)
                                            </span>

                                            <ComingSoonButton className="rounded-md border border-[#E9E8E1] bg-white px-2.5 py-1 font-['Space_Grotesk'] text-[11px] font-medium text-[#EF4444] hover:bg-[#FEE2E2]">
                                                End Call
                                            </ComingSoonButton>
                                        </div>
                                    </div>

                                    {/* Dialogue Messages */}
                                    <div className="my-6 flex flex-col gap-4">

                                        {/* AI Message */}
                                        <div className="flex items-start gap-3">
                                            <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#1B1C18]">
                                                <span className="font-['Space_Grotesk'] text-[10px] font-bold text-white">
                                                    AI
                                                </span>
                                            </div>

                                            <div className="rounded-lg rounded-tl-none border border-[#E9E8E1] bg-[#F5F3EC] p-3.5 shadow-2xs">
                                                <p className="font-['Space_Grotesk'] text-[13px] leading-[20px] text-[#1B1C18]">
                                                    &ldquo;Hello Ananya, thank you for taking the time to speak with Foolioo. I&apos;m following up on your team&apos;s inquiry regarding our automated outbound dialer and deterministic voice agent. Is now still a good time for a quick 3-minute discussion?&rdquo;
                                                </p>
                                            </div>
                                        </div>

                                        {/* User Response */}
                                        <div className="flex items-start justify-end gap-3">
                                            <div className="max-w-[85%] rounded-lg rounded-tr-none border border-[#E9E8E1] bg-white p-3.5 shadow-2xs">
                                                <p className="font-['Space_Grotesk'] text-[13px] leading-[20px] text-[#1B1C18]">
                                                    &ldquo;Hey Aarav. Yeah, I have a few minutes. We&apos;re currently handling about 1,800 inquiries manually and we&apos;re looking to automate the qualification step.&rdquo;
                                                </p>
                                            </div>

                                            <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#E9E8E1]">
                                                <span className="font-['Space_Grotesk'] text-[10px] font-bold text-[#1B1C18]">
                                                    AM
                                                </span>
                                            </div>
                                        </div>

                                        {/* AI Message */}
                                        <div className="flex items-start gap-3">
                                            <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#1B1C18]">
                                                <span className="font-['Space_Grotesk'] text-[10px] font-bold text-white">
                                                    AI
                                                </span>
                                            </div>

                                            <div className="rounded-lg rounded-tl-none border border-[#DDD6FE] bg-[#F5F3FF] p-3.5 shadow-2xs">
                                                <p className="font-['Space_Grotesk'] text-[13px] leading-[20px] text-[#4338CA]">
                                                    &ldquo;That&apos;s exactly what we specialize in. Foolioo can qualify those 1,800 prospective tenants in under two hours with strict adherence to your compliance script and zero hallucinations. Would you like me to trigger an automated demo run to your phone right now?&rdquo;
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Guardrail Footer Bar */}
                                    <div className="flex flex-wrap items-center justify-between gap-3 rounded-lg border border-[#E9E8E1] bg-[#FBF9F2] p-3">

                                        <div className="flex items-center gap-2">
                                            <span className="text-[14px]">
                                                ⚡️
                                            </span>

                                            <span className="font-['Space_Grotesk'] text-[12px] font-medium text-[#1B1C18]">
                                                Guardrail active: Compliance disclosure delivered and acknowledged.
                                            </span>
                                        </div>

                                        <ComingSoonButton className="rounded bg-[#1B1C18] px-3 py-1 font-['Space_Grotesk'] text-[11px] font-medium text-white hover:bg-[#3A3B37]">
                                            Inspect Telemetry
                                        </ComingSoonButton>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};