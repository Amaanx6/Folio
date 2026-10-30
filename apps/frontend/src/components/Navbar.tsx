
"use client";

import { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import { createClient } from "@/lib/supabase/client";
import { User } from "@supabase/supabase-js";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [user, setUser] = useState<User | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    const supabase = useMemo(() => createClient(), []);

    const navLinks = [
        { label: "Product", href: "#product" },
        { label: "Customers", href: "#customers" },
        { label: "Resources", href: "#resources" },
        { label: "Pricing", href: "#pricing" },
    ];

    const navItem =
        "whitespace-nowrap font-['Space_Grotesk'] font-medium text-[13px] leading-[18px] tracking-[0.13px] text-[#444748] transition-colors hover:text-[#1B1C18]";

    const primaryButton =
        "flex h-9.5 shrink-0 items-center justify-center rounded-xs bg-black px-3 font-['Space_Grotesk'] text-[13px] font-medium leading-4.5 tracking-[0.13px] text-white transition-colors duration-200 hover:bg-[#8A8886] xl:px-4";

    const handleNavClick = () => {
        setMenuOpen(false);
    };

    useEffect(() => {
        let mounted = true;

        const getInitialUser = async () => {
            const { data: { user }, error } = await supabase.auth.getUser();

            if (mounted) {
                if (error) {
                    console.error("Failed to fetch user:", error);
                }

                setUser(user);
                setIsLoading(false);
            }
        };

        getInitialUser();

        const {
            data: { subscription },
        } = supabase.auth.onAuthStateChange((_event, session) => {
            if (mounted) {
                setUser(session?.user ?? null);
                setIsLoading(false);
            }
        });

        return () => {
            mounted = false;
            subscription.unsubscribe();
        };
    }, [supabase]);

    return (
        <nav className="relative z-50 w-full bg-[#FBF9F2F2] shadow-[0px_1px_8px_0px_rgba(0,0,0,0.04)] backdrop-blur-md">

            {/* Main Navbar */}
            <div className="mx-auto flex h-16 w-full items-center justify-between px-6 md:px-10 lg:px-8 xl:px-24">

                {/* Logo and Navigation Links */}
                <div className="flex min-w-0 items-center gap-5 xl:gap-6">

                    <Link
                        href="/"
                        onClick={handleNavClick}
                        className="shrink-0 font-['Space_Grotesk'] text-[16px] font-semibold leading-6 tracking-[-0.48px] lowercase text-[#1B1C18] transition-opacity hover:opacity-80"
                    >
                        foolioo
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden items-center gap-4 pl-2 lg:flex xl:gap-6 xl:pl-8">
                        {navLinks.map((item) => (
                            <a
                                key={item.label}
                                href={item.href}
                                className={navItem}
                            >
                                {item.label}
                            </a>
                        ))}
                    </div>
                </div>

                {/* Desktop Actions */}
                <div className="hidden items-center gap-4 lg:flex xl:gap-6">

                    {/* Login */}
                    {!isLoading && !user && (
                        <Link
                            href="/sign-in"
                            className={`${navItem} cursor-pointer`}
                        >
                            Log in
                        </Link>
                    )}

                    {/* Contact Sales */}
                    <a
                        href="mailto:sales@foolioo.app?subject=Sales%20Inquiry"
                        className={`${navItem} cursor-pointer`}
                    >
                        Contact Sales
                    </a>

                    {/* View Demo */}
                    <a
                        href="#demo"
                        className={`${navItem} cursor-pointer`}
                    >
                        View Demo
                    </a>

                    {/* Authentication CTA */}
                    {!isLoading && (
                        user ? (
                            <Link
                                href="/dashboard"
                                className={primaryButton}
                            >
                                Dashboard
                            </Link>
                        ) : (
                            <Link
                                href="/sign-up"
                                className={primaryButton}
                            >
                                Start free trial
                            </Link>
                        )
                    )}
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    type="button"
                    aria-label={
                        menuOpen
                            ? "Close navigation menu"
                            : "Open navigation menu"
                    }
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

                        {/* Mobile Navigation Links */}
                        {navLinks.map((item) => (
                            <a
                                key={item.label}
                                href={item.href}
                                onClick={handleNavClick}
                                className={`${navItem} w-full`}
                            >
                                {item.label}
                            </a>
                        ))}

                        <div className="my-1 border-t border-black/10" />

                        {/* Mobile Login */}
                        {!isLoading && !user && (
                            <Link
                                href="/sign-in"
                                onClick={handleNavClick}
                                className={`${navItem} text-left`}
                            >
                                Log in
                            </Link>
                        )}

                        {/* Mobile Contact Sales */}
                        <a
                            href="mailto:sales@foolioo.app?subject=Sales%20Inquiry"
                            onClick={handleNavClick}
                            className={`${navItem} text-left`}
                        >
                            Contact Sales
                        </a>

                        {/* Mobile View Demo */}
                        <a
                            href="#demo"
                            onClick={handleNavClick}
                            className={`${navItem} text-left`}
                        >
                            View Demo
                        </a>

                        {/* Mobile Authentication CTA */}
                        {!isLoading && (
                            user ? (
                                <Link
                                    href="/dashboard"
                                    onClick={handleNavClick}
                                    className="flex h-9.5 w-full items-center justify-center rounded-xs bg-black px-4 font-['Space_Grotesk'] text-[13px] font-medium leading-4.5 tracking-[0.13px] text-white transition-colors duration-200 hover:bg-[#8A8886]"
                                >
                                    Dashboard
                                </Link>
                            ) : (
                                <Link
                                    href="/sign-up"
                                    onClick={handleNavClick}
                                    className="flex h-9.5 w-full items-center justify-center rounded-xs bg-black px-4 font-['Space_Grotesk'] text-[13px] font-medium leading-4.5 tracking-[0.13px] text-white transition-colors duration-200 hover:bg-[#8A8886]"
                                >
                                    Start free trial
                                </Link>
                            )
                        )}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
