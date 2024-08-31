import {apple, bill, google} from "../assets/index.js";

export function Billing() {
    return (
        <div className={`mt-[30px] sm:mt-[120px]`}>
            <div className={`flex flex-col justify-center sm:flex-row sm:justify-between items-center gap-24`}>
                <div className={`w-1/2`}>
                    <img src={bill} alt="bill image!" className={`object-contain`}/>
                </div>

                <div className={`w-1/2`}>
                    <h3 className={`text-[24px] sm:text-[48px] text-white font-poppins font-[600] leading-[76px] mb-[8px] sm:mb-[24px]`}>
                        Easily control your billing & invoicing.
                    </h3>
                    <p className={`text-[18px] text-dimWhite font-poppins font-[400] leading-[28px] mb-[8px] sm:mb-[24px]`}>
                        Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean neque.
                        Fusce ipsum orci rhoncus aliporttitor integer platea placerat.
                    </p>
                    <div className={`flex flex-row justify-start items-center gap-2`}>
                        <img src={apple} alt="apple store!" />
                        <img src={google} alt="google play!" />
                    </div>
                </div>
            </div>
        </div>
    );
}