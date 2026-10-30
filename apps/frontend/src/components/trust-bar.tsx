export const TrustBar = () => {
    const logos = [
        {
            name: "ADVANCED",
            icon: (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polygon points="12 2 2 22 22 22" />
                    <line x1="7" y1="15" x2="17" y2="15" />
                </svg>
            ),
        },
        {
            name: "MODERNA Health",
            icon: (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="12" y1="5" x2="12" y2="19" />
                    <line x1="5" y1="12" x2="19" y2="12" />
                </svg>
            ),
        },
        {
            name: "GUILD REALTY",
            icon: (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                    <polyline points="9 22 9 12 15 12 15 22" />
                </svg>
            ),
        },
        {
            name: "SENTRY CLAIMS",
            icon: (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
            ),
        },
        {
            name: "PARAMOUNT SERVICES",
            icon: (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <polygon points="10 8 16 12 10 16 10 8" />
                </svg>
            ),
        },
    ];

    return (
        <section id="customers" className="w-full border-b border-[#E9E8E1] bg-[#FBF9F2] py-12">
            <div className="mx-auto max-w-[1280px] px-6 text-center md:px-10">
                <p className="font-['Space_Grotesk'] text-[11px] font-medium uppercase tracking-[1.2px] text-[#747878]">
                    Trusted by operations & revenue teams at high-growth companies
                </p>
                <div className="mt-8 flex flex-wrap items-center justify-center gap-8 md:gap-14 lg:gap-16">
                    {logos.map((logo) => (
                        <div
                            key={logo.name}
                            className="flex items-center gap-2.5 text-[#747878] opacity-80 grayscale transition hover:opacity-100 hover:grayscale-0"
                        >
                            {logo.icon}
                            <span className="font-['Space_Grotesk'] text-[13px] font-semibold tracking-wider text-[#1B1C18]">
                                {logo.name}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
