const Navbar = () => {
    return (
        <div className="w-full h-16 bg-[#FBF9F2F2] backdrop-blur-md shadow-[0px_1px_8px_0px_rgba(0,0,0,0.04)] flex justify-between items-center px-6 md:px-12 lg:px-24 py-4">
            <div className="flex justify-between gap-6">
                <p className="w-[32.28px] h-6 font-['Space_Grotesk'] font-semibold text-[16px] leading-6 tracking-[-0.48px] lowercase text-[#1B1C18]">
                    foolioo
                </p>

                <div className="flex items-center gap-6 pl-8">
                    <div className="flex items-center gap-1">
                        <p className="font-['Space_Grotesk'] font-medium text-[13px] leading-4.5 tracking-[0.13px] text-[#444748]">
                            Product
                        </p>

                        <p className="font-['FreeSans'] font-medium text-[10px] leading-2.5 tracking-[0.13px] text-[#444748]">
                            ▾
                        </p>
                    </div>

                    <div className="flex items-center gap-1">
                        <p className="font-['Space_Grotesk'] font-medium text-[13px] leading-4.5 tracking-[0.13px] text-[#444748]">
                            Customers
                        </p>

                        <p className="font-['FreeSans'] font-medium text-[10px] leading-2.5 tracking-[0.13px] text-[#444748]">
                            ▾
                        </p>
                    </div>

                    <div className="flex items-center gap-1">
                        <p className="font-['Space_Grotesk'] font-medium text-[13px] leading-4.5 tracking-[0.13px] text-[#444748]">
                            Resources
                        </p>

                        <p className="font-['FreeSans'] font-medium text-[10px] leading-2.5 tracking-[0.13px] text-[#444748]">
                            ▾
                        </p>
                    </div>

                    <div className="flex items-center gap-1">
                        <p className="font-['Space_Grotesk'] font-medium text-[13px] leading-4.5 tracking-[0.13px] text-[#444748]">
                            Pricing
                        </p>

                        <p className="font-['FreeSans'] font-medium text-[10px] leading-2.5 tracking-[0.13px] text-[#444748]">
                            ▾
                        </p>
                    </div>
                </div>
            </div>

            <div className="flex justify-between gap-6">

                <div className="flex items-center gap-6 pl-8">
                    <div className="flex items-center gap-1">
                        <p className="font-['Space_Grotesk'] font-medium text-[13px] leading-4.5 tracking-[0.13px] text-[#444748]">
                            Log in
                        </p>
                    </div>

                    <div className="flex items-center gap-1">
                        <p className="font-['Space_Grotesk'] font-medium text-[13px] leading-4.5 tracking-[0.13px] text-[#444748]">
                            Contact Sales
                        </p>


                    </div>

                    <div className="flex items-center gap-1">
                        <p className="font-['Space_Grotesk'] font-medium text-[13px] leading-4.5 tracking-[0.13px] text-[#444748]">
                            View Demo
                        </p>


                    </div>

                    <div className="flex items-center justify-center font-['Space_Grotesk'] font-medium text-[13px] leading-4.5 tracking-[0.13px] text-white">
                        Start free trial
                    </div>

                </div>
            </div>

        </div>
    );
};

export default Navbar;