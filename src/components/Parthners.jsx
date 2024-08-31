import {airbnb, binance, coinbase, dropbox} from "../assets/index.js";

export function Parthners() {
    return (
        <div className={`my-[30px] sm:mt-[120px]`}>
            <div className={`w-full flex flex-row justify-between items-center`}>
                <div className={`parthner-img-div element`}>
                    <img src={airbnb} alt="client support image"
                         className={`object-contain w-[192px] cursor-pointer parthner-img`}/>
                </div>
                <div className={`parthner-img-div element`}>
                    <img src={binance} alt="client support image"
                         className={`object-contain w-[192px] cursor-pointer parthner-img`}/>
                </div>
                <div className={`parthner-img-div element`}>
                    <img src={coinbase} alt="client support image"
                         className={`object-contain w-[192px] cursor-pointer parthner-img`}/>
                </div>
                <div className={`parthner-img-div element`}>
                    <img src={dropbox} alt="client support image"
                         className={`object-contain w-[192px] cursor-pointer parthner-img`}/>
                </div>
            </div>
        </div>
    );
}