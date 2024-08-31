import {features} from "../constants/index.js";

export function Business() {
    return (
        <section id={'business-section'} className={`mt-[30px] sm:mt-[120px]`}>
            <div className={`flex flex-col justify-center items-center sm:flex-row sm:justify-between gap-24`}>
                {/*LEFT SIDE*/}
                <div className={`w-1/2`}>
                    <h3 className={`text-[24px] sm:text-[48px] text-white font-poppins font-bold leading-[76px]`}>
                        You do the business, we’ll handle the money.
                    </h3>

                    <div className={`mt-[24px] text-[18px] text-dimWhite font-poppins font-normal leading[30px]`}>
                        With the right credit card, you can improve your financial life by building credit,
                        earning rewards and saving money. But with hundreds of credit cards on the market.
                    </div>

                    <button className={`bg-blue-gradient px-[30px] py-[14px]  text-center rounded-xl mt-10`}>
                        <a href="#" className={`text-black text-[18px] font-[500] font-poppins leading-[27px] whitespace-nowrap`}>Get Started</a>
                    </button>
                </div>

                {/*RIGHT SIDE*/}
                <div className={`w-1/2`}>
                    <div className={`flex flex-col justify-center items-center gap-2 bg-primary`}>
                        {
                            features.map((feature, index) => (
                                <FeatureCard key={feature.id} {...feature} index={index} />
                            ))
                        }
                    </div>
                </div>

            </div>
        </section>
    );
}

function FeatureCard({icon, title, content, index}) {
    return (
        <div className={`flex flex-row p-5 bg-primary rounded-[20px] feature-card-hover ${index === 1 ? 'bg-black-gradient': 'bg-primary'}`}>
            <div className={`w-[64px] h-[64px] rounded-full flex justify-center items-center bg-dimBlue`}>
                <img src={icon} alt="star" className="w-[50%] h-[50%] object-contain"/>
            </div>

            <div className={`flex flex-col flex-1 ml-6 gap-2`}>
                <h4 className={`text-[18px] text-white font-bold font-poppins leading-[24px]`}>
                    {title}
                </h4>
                <p className={`text-[16px] text-dimWhite font-normal font-poppins leading-[24px]`}>
                    {content}
                </p>
            </div>

        </div>
    );
}