import {close, logo, menu} from "../assets/index.js";
import {navLinks} from "../constants/index.js";
import {useState} from "react";

export function Navbar() {
    const [active, setActive] = useState("Home");
    const [toggle, setToggle] = useState(false);

    return (
        <nav className={`flex justify-between items-center py-4 navbar`}>
            <img src={`${logo}`} className={`w-[120px]`} alt="Hoo Bank Logo!"/>

            <ul className={`hidden list-none sm:flex justify-end items-center`}>
                {
                    navLinks.map((nav, index) => (
                        <li key={nav.id}
                            className={`text-[16px] font-normal font-poppins hover:text-white cursor-pointer
                            ${active === nav.title ? 'text-white' : 'text-dimWhite'}
                            ${index === navLinks.length - 1 ? 'mr-0' : 'mr-6'}
                            `}
                            onClick={() => setActive(nav.title)}
                        >
                            <a href={`#${nav.title}`}>{nav.title}</a>
                        </li>
                    ))
                }
            </ul>

            <div className={`sm:hidden flex justify-end items-center flex-1`}>
                <img src={`${toggle ? close : menu}`} alt="toggle menu navbar!" className={`cursor-pointer`}
                     onClick={() => setToggle(!toggle)}
                />
                <div
                    className={`min-w-[140px] p-4 bg-black-gradient rounded-xl mx-4 my-2 absolute top-20 right-0 z-10
                    ${toggle? 'flex': 'hidden'} sidebar`}
                >
                    <ul className={`list-none flex flex-col justify-end items-start flex-1 gap-2`}>
                        {
                            navLinks.map((nav, index) => (
                                <li key={nav.id}
                                    className={`text-[16px] font-normal font-poppins hover:text-white cursor-pointer
                                    ${active === nav.title ? 'text-white' : 'text-dimWhite'}
                                    ${index === navLinks.length - 1 ? 'mr-0' : 'mr-6'}
                                    `}
                                    onClick={() => setActive(nav.title)}
                                >
                                    <a href={`#${nav.title}`}>{nav.title}</a>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>

        </nav>
    );
}
