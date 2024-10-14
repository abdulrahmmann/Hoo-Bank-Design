import '../src/index.css';
import {Navbar} from "./components/Navbar.jsx";
import {Hero} from "./components/Hero.jsx";
import {Stats} from "./components/Stats.jsx";
import {Business} from "./components/Business.jsx";
import {Billing} from "./components/Billing.jsx";
import {CardDeal} from "./components/CardDeal.jsx";
import {Testimonials} from "./components/Testimonials.jsx";
import {Parthners} from "./components/Parthners.jsx";
import {CTA} from "./components/CTA.jsx";
import {Footer} from "./components/Footer.jsx";

function App() {

    return (

        <div className={`w-full bg-primary overflow-hidden`}>

            <div className={`px-6 sm:px-16 flex justify-center items-center`}>
                <div className={`w-full xl:max-w-[1280px]`}>
                    <Navbar/>
                </div>
            </div>

            <div className={`flex justify-center items-start px-6 sm:px-16`}>
                <div className={`w-full xl:max-w-[1280px]`}>
                    <Hero/>
                </div>
            </div>

            <div className={`flex justify-center items-start px-6 sm:px-16`}>
                <div className={`w-full xl:max-w-[1280px]`}>
                    <Stats />
                    <Business />
                    <Billing />
                    <CardDeal />
                    <Testimonials />
                    <Parthners />
                    <CTA />
                </div>
            </div>

            <Footer />

        </div>
    )
}

export default App
