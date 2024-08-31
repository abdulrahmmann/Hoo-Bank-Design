import {card} from "../assets/index.js";

export function CardDeal() {
    return (
        <div className={`mt-[30px] sm:mt-[120px]`}>
            <div className={`flex flex-col justify-center sm:flex-row sm:justify-between items-center gap-24`}>
                <div className={`w-1/2`}>
                    <h3 className={`text-[24px] sm:text-[48px] text-white font-[600] font-poppins leading-[76px] mb-[8px] sm:mb-[24px]`}>
                        Find a better card deal in few easy steps.
                    </h3>
                    <p className={`text-[18px] text-dimWhite font-[400] font-poppins leading-[30px] mb-[8px] sm:mb-[24px]`}>
                        Arcu tortor, purus in mattis at sed integer faucibus.
                        Aliquet quis aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
                    </p>
                    <button className={`bg-blue-gradient px-[30px] py-[14px] text-center rounded-xl`}>
                        <a href="#"
                           className={`text-black text-[18px] font-[500] font-poppins leading-[27px] whitespace-nowrap`}>Get
                            Started</a>
                    </button>
                </div>

                <div className={`w-1/2`}>
                    <img src={card} alt="card deal image!" className={`object-contain`}/>
                </div>
            </div>
        </div>
    );
}