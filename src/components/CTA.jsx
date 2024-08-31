export function CTA() {
    return (
        <div className={`my-[30px] sm:mt-[120px]`}>
            <div
                className={`flex flex-col sm:flex-row justify-between items-center bg-black-gradient px-[80px] py-[50px] rounded-[20px]`}>
                <div>
                    <h3 className={`text-[24px] sm:text-[48px] text-white font-poppins font-[600] leading-[67px]`}>
                        Let’s try our service now!
                    </h3>
                    <p className={`mt-6 text-[18px] text-dimWhite font-poppins font-[400] leading-[29px] max-w-[445px]`}>
                        Everything you need to accept card payments and grow your business anywhere on the planet.
                    </p>
                </div>
                <button className={`bg-blue-gradient px-[30px] py-[14px] text-center rounded-xl`}>
                    <a href="#"
                       className={`text-black text-[18px] font-[500] font-poppins leading-[27px] whitespace-nowrap`}>
                        Get Started
                    </a>
                </button>
            </div>
        </div>
    );
}