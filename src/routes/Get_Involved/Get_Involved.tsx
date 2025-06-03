import Footer from "../../components/footer";
import HelpClean from "./Help_Clean";
import InspiringFacts from "./Insipiring_Facts";
import SpreadWord from "./Spread_Word";
import WaysInvolved from "./Ways_Involved";
import ReusableHeroSection from "../.././components/ReusableHeroSection"
import hands from "../../assets/images/hands-different-skin-color-ethnicities-coming-together-sign-diversity.jpg"



const GetInvolved = () => {
    return (
        <div>
             <div>   
                <ReusableHeroSection
                    backgroundImage={hands}
                    heading="Get Involved"
                    description="Be part of the change."
                    description2="Serve, give, grow."
                    button="Join Us"
                    height="h-screen"
                />
            </div>
            <HelpClean />
            <WaysInvolved />
            <InspiringFacts />
            <SpreadWord />
            <Footer />
            
           


            

        </div>
    );
}

export default GetInvolved;