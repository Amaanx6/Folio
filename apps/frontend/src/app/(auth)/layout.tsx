"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

function CheckIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 20 20"
      fill="none"
      className={className}
    >
      <path
        d="m5 10.2 3.1 3.1L15.2 6"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function LockIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" fill="none" className="h-4 w-4">
      <rect x="4.1" y="8.5" width="11.8" height="8.2" rx="2" stroke="currentColor" strokeWidth="1.3" />
      <path d="M6.8 8.5V6.2a3.2 3.2 0 0 1 6.4 0v2.3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      <path d="M10 11.7v1.8" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 16 16" fill="none" className="h-3.5 w-3.5">
      <path d="M3.2 8h9.6M8.3 3.5 12.8 8l-4.5 4.5" stroke="currentColor" strokeWidth="1.35" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function VoiceWaveform() {
  const heights = [9, 15, 11, 20, 14, 25, 12, 18, 27, 14, 21, 10, 17, 24, 12, 19, 8, 15, 22, 11, 17, 9, 20, 13, 25, 11, 18, 8, 14, 22, 12, 17, 9, 20, 13, 16];

  return (
    <div className="flex h-9 items-center gap-[3px]" aria-label="Illustrative voice waveform">
      {heights.map((height, index) => (
        <span
          key={index}
          className="auth-wave-bar w-[3px] rounded-full bg-[#8B75CE]"
          style={{ height: `${height}px`, animationDelay: `${index * 35}ms` }}
        />
      ))}
    </div>
  );
}

function SessionPreview() {
  return (
    <div className="auth-float relative mx-auto w-full max-w-[610px]">
      <div className="overflow-hidden rounded-[20px] border border-[#E8E5DC] bg-[#FFFEFB] shadow-[0_24px_80px_rgba(38,34,24,0.10)]">
        <div className="flex h-12 items-center justify-between border-b border-[#EEECE5] bg-[#FCFBF7] px-4 sm:px-5">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-[#D8A49A]" />
            <span className="h-2 w-2 rounded-full bg-[#E6C98D]" />
            <span className="h-2 w-2 rounded-full bg-[#9AC7AF]" />
            <span className="ml-2 font-['Space_Grotesk'] text-[10px] font-medium tracking-[0.08em] text-[#747878] sm:text-[11px]">
              FOOLIOO / VOICE OPERATIONS
            </span>
          </div>
          <span className="rounded-full border border-[#E8E5DC] bg-white px-2.5 py-1 font-['Space_Grotesk'] text-[9px] font-medium tracking-[0.08em] text-[#747878] sm:text-[10px]">
            PRODUCT PREVIEW
          </span>
        </div>

        <div className="grid gap-0 md:grid-cols-[1.08fr_0.92fr]">
          <div className="border-b border-[#EEECE5] p-4 sm:p-5 md:border-b-0 md:border-r">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="font-['Space_Grotesk'] text-[9px] font-semibold tracking-[0.12em] text-[#96968F]">
                  SAMPLE CONVERSATION
                </p>
                <h3 className="mt-1.5 font-['Newsreader'] text-[22px] leading-tight text-[#1B1C18]">
                  Lead qualification
                </h3>
              </div>
              <span className="flex shrink-0 items-center gap-1.5 rounded-full bg-[#EDF5EF] px-2.5 py-1.5 font-['Space_Grotesk'] text-[9px] font-medium text-[#397A55]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#4F9A6B]" />
                DEMO
              </span>
            </div>

            <div className="mt-5 flex items-center gap-3 rounded-xl border border-[#EEECE5] bg-[#FCFBF8] p-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#EAE5F5] font-['Newsreader'] text-[16px] text-[#604C99]">
                F
              </div>
              <div className="min-w-0 flex-1">
                <p className="font-['Space_Grotesk'] text-[11px] font-semibold text-[#262720]">Folio voice agent</p>
                <p className="mt-0.5 font-['Space_Grotesk'] text-[10px] text-[#898B84]">Rule-guided conversation</p>
              </div>
              <VoiceWaveform />
            </div>

            <div className="mt-4 space-y-3">
              <div className="max-w-[92%] rounded-xl rounded-tl-sm border border-[#EEECE5] bg-[#F7F6F1] px-3.5 py-3">
                <p className="font-['Space_Grotesk'] text-[9px] font-semibold tracking-[0.08em] text-[#96968F]">AI AGENT</p>
                <p className="mt-1 font-['Space_Grotesk'] text-[11px] leading-[18px] text-[#44473F]">
                  Thanks for your interest. What kind of solution are you looking for?
                </p>
              </div>
              <div className="ml-auto max-w-[88%] rounded-xl rounded-tr-sm border border-[#E7E0F3] bg-[#F4F0FA] px-3.5 py-3">
                <p className="font-['Space_Grotesk'] text-[9px] font-semibold tracking-[0.08em] text-[#806DB2]">PROSPECT</p>
                <p className="mt-1 font-['Space_Grotesk'] text-[11px] leading-[18px] text-[#51496A]">
                  I want to understand the options and pricing first.
                </p>
              </div>
            </div>

            <div className="mt-4 flex items-center justify-between border-t border-[#EEECE5] pt-3">
              <span className="font-['Space_Grotesk'] text-[9px] text-[#92938C]">Transcript preview · Sample data</span>
              <span className="flex items-center gap-1 font-['Space_Grotesk'] text-[9px] font-medium text-[#7561A9]">
                View decision trace <ArrowIcon />
              </span>
            </div>
          </div>

          <div className="p-4 sm:p-5">
            <div className="flex items-center justify-between">
              <p className="font-['Space_Grotesk'] text-[9px] font-semibold tracking-[0.12em] text-[#96968F]">
                EXECUTION PATH
              </p>
              <span className="font-['Space_Grotesk'] text-[9px] text-[#92938C]">01 / 04</span>
            </div>

            <div className="mt-5 space-y-0">
              {[
                { number: "01", title: "Greeting", detail: "Approved opening", state: "done" },
                { number: "02", title: "Understand intent", detail: "Identify the request", state: "active" },
                { number: "03", title: "Qualify the lead", detail: "Ask permitted questions", state: "pending" },
                { number: "04", title: "Route the outcome", detail: "Complete or escalate", state: "pending" },
              ].map((step, index) => (
                <div className="relative flex gap-3 pb-5 last:pb-0" key={step.number}>
                  {index !== 3 && (
                    <span className="absolute left-[13px] top-[29px] h-[calc(100%-17px)] w-px bg-[#E8E5DC]" />
                  )}
                  <span
                    className={`relative z-[1] flex h-[27px] w-[27px] shrink-0 items-center justify-center rounded-full border font-['Space_Grotesk'] text-[9px] font-semibold ${
                      step.state === "done"
                        ? "border-[#D7E8DA] bg-[#EDF5EF] text-[#397A55]"
                        : step.state === "active"
                          ? "border-[#D9D0EC] bg-[#F1ECF8] text-[#705AA8]"
                          : "border-[#EAE8E0] bg-white text-[#A2A39C]"
                    }`}
                  >
                    {step.state === "done" ? <CheckIcon className="h-3.5 w-3.5" /> : step.number}
                  </span>
                  <div className="min-w-0 pt-0.5">
                    <p className={`font-['Space_Grotesk'] text-[11px] font-semibold ${step.state === "pending" ? "text-[#92938C]" : "text-[#282A23]"}`}>
                      {step.title}
                    </p>
                    <p className="mt-0.5 font-['Space_Grotesk'] text-[10px] text-[#92938C]">{step.detail}</p>
                  </div>
                  {step.state === "active" && (
                    <span className="ml-auto mt-1 rounded-full bg-[#F1ECF8] px-2 py-1 font-['Space_Grotesk'] text-[8px] font-semibold uppercase tracking-[0.07em] text-[#705AA8]">
                      Active
                    </span>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-5 rounded-xl border border-[#EAE5F2] bg-[#F8F5FC] p-3.5">
              <div className="flex items-center gap-2">
                <span className="flex h-6 w-6 items-center justify-center rounded-md bg-white text-[#705AA8] shadow-[0_1px_2px_rgba(0,0,0,0.05)]">
                  <LockIcon />
                </span>
                <p className="font-['Space_Grotesk'] text-[10px] font-semibold text-[#51496A]">Guardrails stay in control</p>
              </div>
              <p className="mt-2 font-['Space_Grotesk'] text-[10px] leading-[16px] text-[#777087]">
                Responses follow approved rules. Unhandled requests can be routed to a person.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute -bottom-5 -left-3 hidden items-center gap-2 rounded-xl border border-[#E8E5DC] bg-white/95 px-3.5 py-2.5 shadow-[0_12px_35px_rgba(38,34,24,0.09)] backdrop-blur sm:flex">
        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#EDF5EF] text-[#397A55]">
          <CheckIcon />
        </span>
        <div>
          <p className="font-['Space_Grotesk'] text-[10px] font-semibold text-[#34362E]">Controlled by design</p>
          <p className="font-['Space_Grotesk'] text-[9px] text-[#92938C]">Traceable decisions · Human handoff</p>
        </div>
      </div>
    </div>
  );
}

function SignupPreview() {
  return (
    <div className="auth-float relative mx-auto w-full max-w-[610px]">
      <div className="overflow-hidden rounded-[20px] border border-[#E8E5DC] bg-[#FFFEFB] shadow-[0_24px_80px_rgba(38,34,24,0.10)]">
        <div className="flex h-12 items-center justify-between border-b border-[#EEECE5] bg-[#FCFBF7] px-4 sm:px-5">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-[#D8A49A]" />
            <span className="h-2 w-2 rounded-full bg-[#E6C98D]" />
            <span className="h-2 w-2 rounded-full bg-[#9AC7AF]" />
            <span className="ml-2 font-['Space_Grotesk'] text-[10px] font-medium tracking-[0.08em] text-[#747878] sm:text-[11px]">
              FOOLIOO / WORKFLOW STUDIO
            </span>
          </div>
          <span className="rounded-full border border-[#E8E5DC] bg-white px-2.5 py-1 font-['Space_Grotesk'] text-[9px] font-medium tracking-[0.08em] text-[#747878] sm:text-[10px]">
            SETUP PREVIEW
          </span>
        </div>

        <div className="p-4 sm:p-6">
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div>
              <p className="font-['Space_Grotesk'] text-[9px] font-semibold tracking-[0.12em] text-[#96968F]">
                YOUR FIRST VOICE WORKFLOW
              </p>
              <h3 className="mt-1.5 font-['Newsreader'] text-[25px] leading-tight text-[#1B1C18] sm:text-[29px]">
                Start with a clear path.
              </h3>
              <p className="mt-1.5 max-w-[330px] font-['Space_Grotesk'] text-[11px] leading-[18px] text-[#85877F]">
                Set the objective, define the boundaries, then test the conversation before launch.
              </p>
            </div>
            <span className="rounded-full bg-[#F1ECF8] px-2.5 py-1.5 font-['Space_Grotesk'] text-[9px] font-medium text-[#705AA8]">
              BUILT AROUND YOUR RULES
            </span>
          </div>

          <div className="relative mt-7 grid gap-3 sm:grid-cols-[1fr_46px_1fr] sm:items-center">
            <div className="rounded-xl border border-[#EAE7DE] bg-[#FCFBF8] p-4">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#EFEAF7] text-[#705AA8]">
                <svg viewBox="0 0 24 24" fill="none" className="h-[18px] w-[18px]" aria-hidden="true">
                  <path d="M4 6.5h16M4 12h10M4 17.5h7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                  <circle cx="18" cy="16.5" r="3" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M18 15v1.7l1 0.6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
                </svg>
              </span>
              <p className="mt-4 font-['Space_Grotesk'] text-[11px] font-semibold text-[#31332C]">Define your workflow</p>
              <p className="mt-1 font-['Space_Grotesk'] text-[10px] leading-[16px] text-[#8A8B84]">Choose the goal and the audience you want to reach.</p>
            </div>

            <div className="flex items-center justify-center text-[#A69ABF]">
              <span className="hidden rotate-0 sm:block"><ArrowIcon /></span>
              <span className="rotate-90 sm:hidden"><ArrowIcon /></span>
            </div>

            <div className="rounded-xl border border-[#EAE5F2] bg-[#F8F5FC] p-4">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-white text-[#705AA8] shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
                <LockIcon />
              </span>
              <p className="mt-4 font-['Space_Grotesk'] text-[11px] font-semibold text-[#51496A]">Set the boundaries</p>
              <p className="mt-1 font-['Space_Grotesk'] text-[10px] leading-[16px] text-[#827A92]">Add knowledge, approved responses and escalation rules.</p>
            </div>
          </div>

          <div className="mt-4 rounded-xl border border-[#EAE7DE] p-4">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <p className="font-['Space_Grotesk'] text-[10px] font-semibold tracking-[0.06em] text-[#65675F]">BEFORE YOUR FIRST CAMPAIGN</p>
              <span className="font-['Space_Grotesk'] text-[9px] text-[#92938C]">Your workspace · Your pace</span>
            </div>
            <div className="mt-3 grid gap-2 sm:grid-cols-3">
              {[
                { title: "Connect", detail: "Your calling stack" },
                { title: "Configure", detail: "Voice and guardrails" },
                { title: "Test", detail: "A sample conversation" },
              ].map((item, index) => (
                <div className="flex items-center gap-2 rounded-lg bg-[#FCFBF8] px-2.5 py-2.5" key={item.title}>
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-[#E6E2D8] bg-white font-['Space_Grotesk'] text-[9px] font-semibold text-[#777970]">
                    0{index + 1}
                  </span>
                  <div>
                    <p className="font-['Space_Grotesk'] text-[10px] font-semibold text-[#41433B]">{item.title}</p>
                    <p className="font-['Space_Grotesk'] text-[9px] text-[#92938C]">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="absolute -bottom-5 -right-3 hidden items-center gap-2 rounded-xl border border-[#E8E5DC] bg-white/95 px-3.5 py-2.5 shadow-[0_12px_35px_rgba(38,34,24,0.09)] backdrop-blur sm:flex">
        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#F1ECF8] text-[#705AA8]">
          <CheckIcon />
        </span>
        <div>
          <p className="font-['Space_Grotesk'] text-[10px] font-semibold text-[#34362E]">Start with the essentials</p>
          <p className="font-['Space_Grotesk'] text-[9px] text-[#92938C]">Configure the rest when you're ready</p>
        </div>
      </div>
    </div>
  );
}

export default function AuthLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const isSignUp = pathname?.includes("sign-up") ?? false;

  return (
    <main className="min-h-screen bg-[#FBF9F2] text-[#1B1C18] lg:grid lg:min-h-screen lg:grid-cols-2">
      {/* Authentication form */}
      <section className="relative flex min-h-screen flex-col bg-[#FCFBF7] px-6 py-7 sm:px-10 sm:py-9 lg:min-h-screen lg:px-[clamp(3rem,7vw,7rem)] lg:py-10">
        <header className="flex items-center justify-between">
          <Link
            href="/"
            aria-label="Foolioo home"
            className="font-['Space_Grotesk'] text-[17px] font-semibold lowercase tracking-[-0.7px] text-[#1B1C18] transition-opacity hover:opacity-70"
          >
            foolioo<span className="text-[#7852D6]">.</span>
          </Link>
          <span className="hidden items-center gap-1.5 font-['Space_Grotesk'] text-[10px] font-medium tracking-[0.08em] text-[#92938C] sm:inline-flex lg:hidden xl:inline-flex">
            <LockIcon /> SECURE WORKSPACE ACCESS
          </span>
        </header>

        <div className="flex flex-1 items-center justify-center py-12 lg:py-16">
          <div className="w-full max-w-[400px]">
            <div className="mb-7">
              <p className="mb-3 font-['Space_Grotesk'] text-[10px] font-semibold uppercase tracking-[0.16em] text-[#7852D6]">
                {isSignUp ? "START YOUR FOOLIOO WORKSPACE" : "WORKSPACE ACCESS"}
              </p>
              {children}
            </div>
          </div>
        </div>

        <footer className="flex flex-wrap items-center justify-between gap-3 border-t border-[#EAE8E0] pt-5">
          <p className="font-['Space_Grotesk'] text-[10px] text-[#96968F]">© Foolioo. All rights reserved.</p>
          <span className="flex items-center gap-1.5 font-['Space_Grotesk'] text-[10px] text-[#85877F]">
            <LockIcon /> Secure workspace access
          </span>
        </footer>
      </section>

      {/* Product showcase */}
      <aside className="relative hidden min-h-screen flex-col justify-between overflow-hidden border-l border-[#EAE7DE] bg-[#F8F6EF] px-8 py-9 lg:flex xl:px-14 xl:py-11">
        <div className="pointer-events-none absolute inset-0 opacity-70" aria-hidden="true">
          <div className="absolute -right-36 -top-36 h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle,rgba(133,105,190,0.10),transparent_68%)]" />
          <div className="absolute -bottom-52 -left-40 h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle,rgba(190,176,139,0.13),transparent_68%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(120,115,98,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(120,115,98,0.035)_1px,transparent_1px)] bg-[size:54px_54px] [mask-image:linear-gradient(to_bottom,transparent,black_18%,black_82%,transparent)]" />
        </div>

        <div className="relative z-10 flex items-center justify-between">
          <p className="font-['Space_Grotesk'] text-[10px] font-semibold tracking-[0.16em] text-[#777970]">
            THE FOOLIOO PLATFORM
          </p>
          <span className="flex items-center gap-2 rounded-full border border-[#E7E3D9] bg-white/65 px-3 py-1.5 font-['Space_Grotesk'] text-[9px] font-medium tracking-[0.08em] text-[#777970] backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-[#8E79C5]" />
            {isSignUp ? "BUILT FOR YOUR WORKFLOW" : "YOUR WORKSPACE, CONNECTED"}
          </span>
        </div>

        <div className="relative z-10 mx-auto w-full max-w-[690px] py-14 xl:py-16">
          <div className="mb-9 max-w-[560px]">
            <h2 className="font-['Newsreader'] text-[38px] font-normal leading-[1.04] tracking-[-1.1px] text-[#1B1C18] xl:text-[48px]">
              {isSignUp ? (
                <>Build conversations with <span className="italic text-[#7852D6]">clear intent.</span></>
              ) : (
                <>Your voice operations, <span className="italic text-[#7852D6]">under control.</span></>
              )}
            </h2>
            <p className="mt-4 max-w-[465px] font-['Space_Grotesk'] text-[12px] leading-[21px] text-[#777970] xl:text-[13px]">
              {isSignUp
                ? "Create a workspace for voice campaigns that follow your rules, capture useful context and know when a person should take over."
                : "Pick up where your team left off. Run structured conversations, inspect every decision and keep people in control of the moments that matter."}
            </p>
          </div>

          {isSignUp ? <SignupPreview /> : <SessionPreview />}

          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 font-['Space_Grotesk'] text-[9px] font-medium tracking-[0.09em] text-[#85877F]">
            <span className="flex items-center gap-2"><CheckIcon /> EXPLICIT RULES</span>
            <span className="hidden h-3 w-px bg-[#DDD9CE] sm:block" />
            <span className="flex items-center gap-2"><CheckIcon /> TRACEABLE DECISIONS</span>
            <span className="hidden h-3 w-px bg-[#DDD9CE] sm:block" />
            <span className="flex items-center gap-2"><CheckIcon /> HUMAN CONTROL</span>
          </div>
          <p className="mt-4 text-center font-['Space_Grotesk'] text-[9px] text-[#A09F96]">
            Illustrative product preview · Not live workspace data
          </p>
        </div>

        <div className="relative z-10 flex items-center justify-between border-t border-[#E7E3D9] pt-5">
          <p className="font-['Space_Grotesk'] text-[10px] text-[#92938C]">Deterministic voice operations. From day one.</p>
          <p className="font-['Space_Grotesk'] text-[10px] font-medium tracking-[0.12em] text-[#92938C]">FOOLIOO / 01</p>
        </div>
      </aside>

      {/* Compact brand statement for mobile */}
      <section className="border-t border-[#EAE7DE] bg-[#F8F6EF] px-6 py-8 lg:hidden">
        <p className="font-['Space_Grotesk'] text-[9px] font-semibold tracking-[0.14em] text-[#7852D6]">
          {isSignUp ? "BUILT AROUND YOUR RULES" : "YOUR WORKSPACE, CONNECTED"}
        </p>
        <h2 className="mt-2 max-w-[420px] font-['Newsreader'] text-[29px] leading-[1.1] tracking-[-0.5px] text-[#1B1C18]">
          {isSignUp ? <>Build conversations with <span className="italic text-[#7852D6]">clear intent.</span></> : <>Your voice operations, <span className="italic text-[#7852D6]">under control.</span></>}
        </h2>
        <p className="mt-2 max-w-[460px] font-['Space_Grotesk'] text-[12px] leading-5 text-[#777970]">
          Structured conversations. Traceable decisions. Human control when it matters.
        </p>
      </section>

      <style jsx>{`
        .auth-float {
          animation: auth-float 7s ease-in-out infinite;
        }
        .auth-wave-bar {
          transform-origin: center;
          animation: auth-wave 1.8s ease-in-out infinite alternate;
        }
        @keyframes auth-float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-7px); }
        }
        @keyframes auth-wave {
          from { transform: scaleY(0.55); opacity: 0.55; }
          to { transform: scaleY(1); opacity: 1; }
        }
        @media (prefers-reduced-motion: reduce) {
          .auth-float, .auth-wave-bar { animation: none !important; }
        }
      `}</style>
    </main>
  );
}
