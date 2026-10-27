"use client";

import { useState, useEffect } from "react";
import { ComingSoonButton } from "@/components/ui/ComingSoon";
import Link from "next/link";
import { createClient } from "@/lib/supabase/client";
import { User } from "@supabase/supabase-js";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [user, setUser] = useState<User | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    const supabase = createClient();

    useEffect(() => {
        const getInitialUser = async () => {
            const { data: { user } } = await supabase.auth.getUser();
            setUser(user);
            setIsLoading(false);
        };

        getInitialUser();

        const { data: { subscription } } = supabase.auth.onAuthStateChange(
            (_event, session) => {
                setUser(session?.user ?? null);
            }
        );

        return () => {
            subscription.unsubscribe();
        };
    }, [supabase]);

    const navItem =
        "whitespace-nowrap font-['Space_Grotesk'] font-medium text-[13px] leading-[18px] tracking-[0.13px] text-[#444748]";

    const dropdownArrow =
        "font-['FreeSans'] font-medium text-[10px] leading-[10px] tracking-[0.13px] text-[#444748]";

    const dropdownItems = ["Product", "Customers", "Resources", "Pricing"];

    return (
        <nav className="relative z-50 w-full bg-[#FBF9F2F2] shadow-[0px_1px_8px_0px_rgba(0,0,0,0.04)] backdrop-blur-md">
            <div className="mx-auto flex h-16 w-full items-center justify-between px-6 md:px-10 lg:px-8 xl:px-24">
                <div className="flex min-w-0 items-center gap-5 xl:gap-6">
                    <Link href="/" className="shrink-0 font-['Space_Grotesk'] text-[16px] font-semibold leading-6 tracking-[-0.48px] lowercase text-[#1B1C18] transition-opacity hover:opacity-80">
                        foolioo
                    </Link>

                    <div className="hidden items-center gap-4 pl-2 lg:flex xl:gap-6 xl:pl-8">
                        {dropdownItems.map((item) => (
                            <ComingSoonButton
                                key={item}
                                className="flex cursor-pointer items-center gap-1"
                            >
                                <p className={navItem}>{item}</p>
                                <p className={dropdownArrow}>▾</p>
                            </ComingSoonButton>
                        ))}
                    </div>
                </div>

                <div className="hidden items-center gap-4 lg:flex xl:gap-6">
                    {/* Only show "Log in" if user is NOT logged in */}
                    {!isLoading && !user && (
                        <Link href="/sign-in" className={`${navItem} cursor-pointer hover:text-[#1B1C18]`}>
                            Log in
                        </Link>
                    )}

                    <ComingSoonButton className={`${navItem} cursor-pointer`}>
                        Contact Sales
                    </ComingSoonButton>
                    <ComingSoonButton className={`${navItem} cursor-pointer`}>
                        View Demo
                    </ComingSoonButton>

                    {/* Primary Button Logic */}
                    {!isLoading && (
                        <>
                            {user ? (
                                <Link href="/dashboard" className="flex h-9.5 shrink-0 items-center justify-center rounded-xs bg-black px-3 font-['Space_Grotesk'] text-[13px] font-medium leading-4.5 tracking-[0.13px] text-white transition-colors duration-200 hover:bg-[#8A8886] xl:px-4">
                                    Dashboard
                                </Link>
                            ) : (
                                <Link href="/sign-up" className="flex h-9.5 shrink-0 items-center justify-center rounded-xs bg-black px-3 font-['Space_Grotesk'] text-[13px] font-medium leading-4.5 tracking-[0.13px] text-white transition-colors duration-200 hover:bg-[#8A8886] xl:px-4">
                                    Start free trial
                                </Link>
                            )}
                        </>
                    )}
                </div>

                <button
                    type="button"
                    aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
                    aria-expanded={menuOpen}
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md text-[#1B1C18] hover:bg-black/5 lg:hidden"
                >
                    {menuOpen ? (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="22"
                            height="22"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.8"
                            strokeLinecap="round"
                        >
                            <path d="M18 6 6 18" />
                            <path d="m6 6 12 12" />
                        </svg>
                    ) : (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="22"
                            height="22"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.8"
                            strokeLinecap="round"
                        >
                            <path d="M4 7h16" />
                            <path d="M4 12h16" />
                            <path d="M4 17h16" />
                        </svg>
                    )}
                </button>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="absolute left-0 top-full w-full border-t border-black/10 bg-[#FBF9F2] px-6 py-5 shadow-lg md:px-10 lg:hidden">
                    <div className="flex flex-col gap-5">
                        {dropdownItems.map((item) => (
                            <ComingSoonButton
                                key={item}
                                className="flex w-full cursor-pointer items-center justify-between"
                            >
                                <p className={navItem}>{item}</p>
                                <p className={dropdownArrow}>▾</p>
                            </ComingSoonButton>
                        ))}

                        <div className="my-1 border-t border-black/10" />

                        {/* Mobile Log in - Only if logged out */}
                        {!isLoading && !user && (
                            <Link href="/sign-in" className={`${navItem} text-left`}>
                                Log in
                            </Link>
                        )}

                        <ComingSoonButton className={`${navItem} cursor-pointer text-left`}>
                            Contact Sales
                        </ComingSoonButton>
                        <ComingSoonButton className={`${navItem} cursor-pointer text-left`}>
                            View Demo
                        </ComingSoonButton>

                        {/* Mobile Primary Button */}
                        {!isLoading && (
                            <>
                                {user ? (
                                    <Link href="/dashboard" className="flex h-9.5 w-full items-center justify-center rounded-xs bg-black px-4 font-['Space_Grotesk'] text-[13px] font-medium leading-4.5 tracking-[0.13px] text-white transition-colors duration-200 hover:bg-[#8A8886]">
                                        Dashboard
                                    </Link>
                                ) : (
                                    <Link href="/sign-up" className="flex h-9.5 w-full items-center justify-center rounded-xs bg-black px-4 font-['Space_Grotesk'] text-[13px] font-medium leading-4.5 tracking-[0.13px] text-white transition-colors duration-200 hover:bg-[#8A8886]">
                                        Start free trial
                                    </Link>
                                )}
                            </>
                        )}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;