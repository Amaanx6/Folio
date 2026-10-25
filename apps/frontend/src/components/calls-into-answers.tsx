export const CallsIntoAnswers = () => {
    const cards = [
        {
            number: "01",
            title: "High-Volume Outreach",
            description:
                "Scale your outbound calling operations with human-like cadence and deterministic reliability across thousands of contacts simultaneously.",
            metric: "24x Higher Conversion Rate",
        },
        {
            number: "02",
            title: "Real-time Structured QA",
            description:
                "Grade every single conversation in real time against your compliance criteria. Instantly detect buyer objections and policy violations.",
            metric: "99.2% QA & Script Adherence",
        },
        {
            number: "03",
            title: "Automated Follow-up Summary",
            description:
                "Turn hours of call audio into structured CRM notes, calendar events, and follow-up emails dispatched in sub-second time.",
            metric: "0-Sec Follow-up Latency",
        },
    ];

    return (
        <section className="w-full border-t border-[#E9E8E1] bg-[#FBF9F2] py-20 md:py-28">
            <div className="mx-auto w-full max-w-[1240px] px-6 md:px-10">
                {/* Header */}
                <div className="flex flex-col items-center text-center">
                    <span className="font-['Space_Grotesk'] text-[11px] font-semibold uppercase tracking-[1.5px] text-[#747878]">
                        UNIFIED OPERATIONS
                    </span>
                    <h2 className="mt-4 max-w-[640px]">
                        <span className="block font-['Newsreader'] text-[36px] font-normal leading-[1.12] tracking-[-0.8px] text-[#1B1C18] sm:text-[46px] md:text-[52px]">
                            Together, they turn calls into{" "}
                            <span className="italic">answers.</span>
                        </span>
                    </h2>
                </div>

                {/* 3 Large Cards Grid */}
                <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
                    {cards.map((card) => (
                        <div
                            key={card.number}
                            className="flex flex-col justify-between rounded-xl border border-[#E9E8E1] bg-white p-6 shadow-[0px_4px_20px_rgba(0,0,0,0.03)] transition duration-200 hover:shadow-[0px_8px_30px_rgba(0,0,0,0.06)]"
                        >
                            <div>
                                <span className="font-['Space_Grotesk'] text-[12px] font-bold text-[#747878]">
                                    {card.number}
                                </span>
                                <h3 className="mt-4 font-['Space_Grotesk'] text-[18px] font-bold tracking-tight text-[#1B1C18]">
                                    {card.title}
                                </h3>
                                <p className="mt-3 font-['Space_Grotesk'] text-[14px] font-normal leading-[22px] text-[#747878]">
                                    {card.description}
                                </p>
                            </div>

                            <div className="mt-8 border-t border-[#E9E8E1] pt-4">
                                <span className="inline-block rounded-md bg-[#F5F3EC] px-3 py-1 font-['Space_Grotesk'] text-[11px] font-semibold text-[#1B1C18]">
                                    {card.metric}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
