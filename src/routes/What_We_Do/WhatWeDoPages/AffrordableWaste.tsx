import ReusableHeroSection from "../../../components/ReusableHeroSection";
import volunteer from "../../../assets/images/collectingGarbage.jpg"
import garbage from "../../../assets/images/2006.i602.009_volunteers_trash_out_flat.jpg"
import Footer from "../../../components/footer";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import AnimatedText from "../../../components/AnimatedText";
import ScrollImageReveal from "../../../components/ScrollRevealImage";

const AffordableWaste = ()  => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div>
            <ReusableHeroSection
            heading="Affordable Waste Solutions"
            description="Waste disposal should never be a privilege."
            description2="We work to make waste management simple, affordable, and accessible."
            backgroundImage={volunteer}
            height="h-[70vh]"
             />
             <div className="flex flex-col lg:flex-row items-center justify-center md:gap-20 gap-15 md:px-20 px-10 md:py-30 py-15">
                
                 <div className="md:max-w-135 flex flex-col gap-8 text-center md:text-left">
                    <h2 className="text-[#184E35] lg:text-[2rem] md:text-[1.75rem] text-2xl slide">Low-Cost Collection Services</h2>
                    <AnimatedText>
                    <p className="lg:text-lg  md:text-base text-sm">We work to make waste management simple, affordable, and accessible especially in underserved areas of Nairobi where formal waste collection is limited or nonexistent. By introducing color-coded bins, scheduled collections by Micro-Teams, and community-managed systems, we aim to ensure that everyone has a clean and safe environment, regardless of income.</p>
                    <p className="lg:text-lg  md:text-base text-sm">We provide waste collection solutions in areas where residents cannot afford commercial services. </p>
                    <p className="lg:text-lg  md:text-base text-sm">Our approach includes deploying Micro-Collection Teams to pick up waste at designated times and locations.</p>
                    <p className="lg:text-lg  md:text-base text-sm"> We also install labeled bins (organic, recyclable, and others) to promote better waste management at the household level.</p>
                    </AnimatedText>
                </div>
                <ScrollImageReveal>
                <div className="w-125 lg:h-136 h-80 bg-cover bg-center bg-no-repeat animate-zoom-out"
                style={{backgroundImage: `url(${garbage})`}}
                >
                </div>
                </ScrollImageReveal>

            </div>

            <div className="md:px-20 px-10 md:py-30 py-15 flex flex-col items-center justify-center bg-[#F5FAF6] text-center md:text-left">
                <h2 className="text-[#184E35] lg:text-[2rem] md:text-[1.75rem] text-2xl  pb-15 slide">Tech-Enabled Waste Tracking</h2>
                <AnimatedText>
                <p className="lg:text-lg  md:text-base text-sm md:max-w-280 pb-8">Each collection point is equipped with QR codes to help our teams log collection data in real-time. This system allows us to track efficiency, detect neglected areas, and share transparent reports with partners and the community. These efforts ensure accountability and service quality at all times.</p>
                <p className="lg:text-lg  md:text-base text-sm md:max-w-280">Each collection point is equipped with QR codes to help our teams log collection data in real-time. This system allows us to track efficiency, detect neglected areas, and share transparent reports with partners and the community. These efforts ensure accountability and service quality at all times.</p>
                </AnimatedText>

                <div className="flex gap-10 items-center justify-center md:pt-20 pt-10">
                    <ScrollImageReveal>
                        <img className="lg:w-161 lg:h-85 md:w-80 w-50 h-auto animate-zoom-out" src={garbage} alt="" />
                    </ScrollImageReveal>
                    <ScrollImageReveal>
                        <img className="lg:w-116 lg:h-86 md:w-60 w-50 h-auto animate-zoom-out" src={garbage} alt="" />
                    </ScrollImageReveal>
                </div>

                <Link to ="/whatwedo">
                <button className="md:py-4 md:px-8 py-2 px-4 mt-20 rounded-full bg-[#818F39]
              lg:text-lg md:text-base text-sm text-white shadow-2xl border-transparent
               hover:bg-[#184E35] font-bold transition-transform duration-[1000ms] hover:scale-110" >View more programs</button>
                </Link>
            </div>
            <Footer />

            
        </div>
    )
}
export default AffordableWaste;