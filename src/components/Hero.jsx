import {discount, robot} from "../assets/index.js";

export function Hero() {
    return (
        <section id={"hero-section"} className={`md:mt-12 lg:mt-[10px] relative`}>
            <div
                className={`flex-col items-center justify-center gap-y-16 md:flex-row flex md:justify-center md:items-center`}>
                {/* LEFT SIDE */}
                <div className={`flex-col sm:flex-col sm:justify-center sm:items-center`}>
                    <div
                        className={`mt-4 mx-auto sm:mb-4 sm:mx-0 flex justify-between items-center gap-2 max-w-fit px-4
                        p-1 md:py-2 bg-discount-gradient rounded-full mb-4`}>
                        <img src={`${discount}`} alt="discount image!"/>
                        <div className={`text-sm text-white font-poppins font-normal leading-7`}>
                            20%
                            <span className={`text-dimWhite`}>&nbsp;DISCOUNT FOR&nbsp;</span>
                            1 MONTH
                            <span className={`text-dimWhite`}>&nbsp;ACCOUNT</span>
                        </div>
                    </div>

                    <div className={`flex-col justify-start items-center text-[40px] ss:text-[35px] lg:text-[72px] text-white 
                    font-poppins font-bold leading-tight whitespace-nowrap relative text-center sm:text-start `}>
                        <div>
                            The Next
                            <br/>
                            <span className={`text-secondary`}>Generation</span>
                            <br/>
                            Payment Method.
                        </div>
                    </div>

                    <div
                        className={`text-[16px] sm:text-[18px] text-dimWhite font-normal font-poppins mt-6 text-center sm:text-start`}>
                        Our team of experts uses a methodology to identify the credit cards most likely to fit your
                        needs.
                        We examine annual percentage rates, annual fees.
                    </div>

                    <button className={`get-started text-primary text-[16px] font-normal font-poppins bg-blue-gradient h-[54px]
                    whitespace-nowrap px-4 text-center w-[180px] rounded-2xl mt-6 flex justify-center items-center`}>
                        Get Started
                    </button>

                </div>

                {/* RIGHT SIDE */}
                <div className={``}>
                    <img src={`${robot}`} alt="robot image!"
                         className={`max-w-[100%] relative -right-[120px] hidden md:block`}/>
                </div>
            </div>
        </section>
    );
}