import {feedback} from "../constants/index.js";
import {quotes} from "../assets/index.js";

export function Testimonials() {
    return (
        <div className={`my-[30px] sm:mt-[120px]`}>
            <div className={`flex flex-row justify-around items-center`}>
                <h3 className={`text-[24px] sm:text-[36px] text-white font-poppins font-[600] leading-[80px] w-1/2`}>
                    What people are saying about us
                </h3>
                <q className={`text-[12px] text-dimWhite font-poppins italic font-[4000] leading-[22px] max-w-[360px]`}>
                    Everything you need to accept card payments and grow your business anywhere on the planet
                    Everything you need to accept card payments and grow your business anywhere on the planet.
                </q>
            </div>

            <div className={`flex flex-wrap sm:justify-between justify-center mt-6`}>
                {
                    feedback.map((card, index) => (
                        <FeedbackCard key={card.id} {...card} index={index}/>
                    ))
                }
            </div>
        </div>
    );
}

function FeedbackCard({name, img, title, content, index}) {
    return (
        <div className={`mt-4 sm:mt-20 flex flex-col max-w-[340px] min-h-[370px] py-10 px-8 bg-primary rounded-[20px] feature-card-hover`}>
            <div className={``}>
                <img src={quotes} alt="quotes image!" className={`w-[42.6px] h-[27.6px] object-contain`}/>
            </div>
            <div className={`text-[18px] text-white font-poppins font-[400] leading-[32px] mt-[20px] sm:mt-[40px]`}>
                {content}
            </div>
            <div className={`flex flex-row flex-1 justify-start items-center mt-[8px] sm:mt-[20px]`}>
                <img src={img} alt="feedback user image!" className="w-[48px] h-[48px] rounded-full" />
                <div className={`flex flex-col justify-start items-start ml-6`}>
                    <h3 className={`text-[20px] text-white font-poppins font-[400] leading-[32px]`}>
                        {name}
                    </h3>
                    <p className={`text-[16px] text-dimWhite font-poppins font-[400] leading-[24px] `}>
                        {title}
                    </p>
                </div>
            </div>
        </div>
    )
}