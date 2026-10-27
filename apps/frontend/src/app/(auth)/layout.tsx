import Link from "next/link";

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid min-h-screen grid-cols-1 lg:grid-cols-2 bg-[#FBF9F2]">
      {/* Left Side: Form Area */}
      <div className="flex flex-col justify-center px-6 py-12 md:px-10 lg:px-16 bg-white lg:bg-transparent">
        <div className="mb-12">
          <Link 
            href="/" 
            className="font-['Space_Grotesk'] text-[16px] font-semibold tracking-[-0.48px] lowercase text-[#1B1C18]"
          >
            foolioo
          </Link>
        </div>
        <div className="mx-auto w-full max-w-[400px]">
          {children}
        </div>
      </div>

      {/* Right Side: Branding Panel */}
      <div className="hidden border-l border-[#E9E8E1] bg-[#FBF9F2] lg:flex lg:items-center lg:justify-center lg:p-16">
        <div className="max-w-[400px]">
          <p className="font-['Newsreader'] text-[32px] font-normal leading-[1.12] tracking-[-0.6px] text-[#1B1C18]">
            Deterministic voice operations, <span className="italic">from day one.</span>
          </p>
          <p className="mt-4 font-['Space_Grotesk'] text-[14px] leading-[22px] text-[#747878]">
            Join teams running 74.9% connection rates with zero hallucinations. Experience AI voice operations with the reliability of software.
          </p>
        </div>
      </div>
    </div>
  );
}