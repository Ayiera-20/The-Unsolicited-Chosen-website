import ReusableHeroSection from "../../../components/ReusableHeroSection";
import volunteer from "../../../assets/images/collectingGarbage.jpg"
import garbage from "../../../assets/images/2006.i602.009_volunteers_trash_out_flat.jpg"
import Footer from "../../../components/footer";
import { useEffect } from "react";

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
             <div className="flex items-center justify-center gap-20 px-20 py-30">
                
                 <div className="max-w-135 flex flex-col gap-8">
                    <h2 className="text-[#184E35] text-[32px]">Low-Cost Collection Services</h2>
                    <p className="lg:text-lg  md:text-base text-sm">We work to make waste management simple, affordable, and accessible especially in underserved areas of Nairobi where formal waste collection is limited or nonexistent. By introducing color-coded bins, scheduled collections by Micro-Teams, and community-managed systems, we aim to ensure that everyone has a clean and safe environment, regardless of income.</p>
                    <p className="lg:text-lg  md:text-base text-sm">We provide waste collection solutions in areas where residents cannot afford commercial services. </p>
                    <p className="lg:text-lg  md:text-base text-sm">Our approach includes deploying Micro-Collection Teams to pick up waste at designated times and locations.</p>
                    <p className="lg:text-lg  md:text-base text-sm"> We also install labeled bins (organic, recyclable, and others) to promote better waste management at the household level.</p>
                </div>
                {/* <img className="w-125 h-136 bg-cover bg-center" src={garbage} alt="" /> */}
                <div className="w-125 h-136 bg-cover bg-center bg-no-repeat"
                style={{backgroundImage: `url(${garbage})`}}
                >
                </div>
            </div>

            <div className="px-20 py-30 flex flex-col items-center justify-center bg-[#F5FAF6]">
                <h2 className="text-[#184E35] lg:text-[2rem] md:text-[1.75rem] text-2xl  pb-15">Tech-Enabled Waste Tracking</h2>
                <p className="lg:text-lg  md:text-base text-sm max-w-280 pb-8">Each collection point is equipped with QR codes to help our teams log collection data in real-time. This system allows us to track efficiency, detect neglected areas, and share transparent reports with partners and the community. These efforts ensure accountability and service quality at all times.</p>
                <p className="lg:text-lg  md:text-base text-sm max-w-280">Each collection point is equipped with QR codes to help our teams log collection data in real-time. This system allows us to track efficiency, detect neglected areas, and share transparent reports with partners and the community. These efforts ensure accountability and service quality at all times.</p>

                <div className="flex gap-10 items-center justify-center pt-20">
                    <img className="w-161 h-85" src={garbage} alt="" />
                    <img className="w-116 h-86" src={garbage} alt="" />
                </div>
            </div>
            <Footer />

            
        </div>
    )
}
export default AffordableWaste;