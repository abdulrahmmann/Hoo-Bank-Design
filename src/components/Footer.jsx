import {facebook, instagram, linkedin, logo, twitter} from "../assets/index.js";
import {footerLinks} from "../constants/index.js";

export function Footer() {
    return (
        <footer className={`w-full bg-footer py-8`}>
            <div className={`flex flex-col px-[130px]`}>
                <div className={`md:grid grid-cols-5 mb-20 gap-20`}>

                    <ul className={`col-span-2`}>
                        <li className={`mb-[30px]`}>
                            <img src={logo} alt="hoobank logo!"/>
                        </li>
                        <li className={`text-[14px] text-dimWhite font-poppins font-normal leading-[32px]`}>
                            A new way to make the payments <br /> easy, reliable and secure.
                        </li>
                    </ul>

                    <ul>
                        <FootLink name={'Usefull Links'} link={'#'} isTitle={true}/>
                        <FootLink name={'Content'} link={'#'} isTitle={false}/>
                        <FootLink name={'How it Works'} link={'#'} isTitle={false}/>
                        <FootLink name={'Create'} link={'#'} isTitle={false}/>
                        <FootLink name={'Explore'} link={'#'} isTitle={false}/>
                        <FootLink name={'Terms & Services'} link={'#'} isTitle={false}/>
                    </ul>

                    <ul>
                        <FootLink name={'Community'} link={'#'} isTitle={true}/>
                        <FootLink name={'Help Center'} link={'#'} isTitle={false}/>
                        <FootLink name={'Partners'} link={'#'} isTitle={false}/>
                        <FootLink name={'Suggestions'} link={'#'} isTitle={false}/>
                        <FootLink name={'Blog'} link={'#'} isTitle={false}/>
                        <FootLink name={'Newsletters'} link={'#'} isTitle={false}/>
                    </ul>

                    <ul>
                        <FootLink name={'Partner'} link={'#'} isTitle={true}/>
                        <FootLink name={'Our Partner'} link={'#'} isTitle={false}/>
                        <FootLink name={'Become a Partner'} link={'#'} isTitle={false}/>
                    </ul>

                </div>

                <div className={`flex justify-between items-center p-6 border-t-2 border-dimWhite`}>
                    <div className={`text-dimWhite`}>
                        Copyright &copy; 2021 HooBank. All Rights Reserved.
                    </div>
                    <div className={'flex justify-end items-center gap-7'}>
                        <a href="https://www.instagram.com/">
                            <img src={instagram} alt="instagram logo!"/>
                        </a>
                        <a href="https://www.facebook.com/">
                            <img src={facebook} alt="facebook logo!"/>
                        </a>
                        <a href="https://www.twitter.com/">
                            <img src={twitter} alt="twitter logo!"/>
                        </a>
                        <a href="https://www.linkedin.com/">
                            <img src={linkedin} alt="linkedin logo!"/>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

function FootLink({name, link, isTitle}) {
    return (
        <li className={`text-[14px] ${isTitle ? 'text-white' : 'text-dimWhite'} hover:text-white font-poppins font-normal leading-[32px]`}>
            <a href={`${link}`}>{name}</a>
        </li>
    );
}