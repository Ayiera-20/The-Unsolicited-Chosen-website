import Footer from "../../components/footer";
import HelpClean from "./Help_Clean";
import InspiringFacts from "./Insipiring_Facts";
import SpreadWord from "./Spread_Word";
import WaysInvolved from "./Ways_Involved";
import ReusableHeroSection from "../.././components/ReusableHeroSection"
import handsJpg from "../../assets/images/hands-different-skin-color-ethnicities-coming-together-sign-diversity.jpg"
// @ts-expect-error Vite transforms query-string image imports at build time
import handsJpgSrcSet from "../../assets/images/hands-different-skin-color-ethnicities-coming-together-sign-diversity.jpg?w=640&w=960&w=1280&w=1600&w=1920&as=srcset"
// @ts-expect-error Vite transforms query-string image imports at build time
import handsWebpSrcSet from "../../assets/images/hands-different-skin-color-ethnicities-coming-together-sign-diversity.jpg?format=webp&w=640&w=960&w=1280&w=1600&w=1920&as=srcset"



const GetInvolved = () => {
    return (
        <div>
             <div>   
                <ReusableHeroSection
                    backgroundImage={{
                        src: handsJpg,
                        srcSet: handsJpgSrcSet,
                        webpSrcSet: handsWebpSrcSet,
                        sizes: '100vw',
                        alt: 'Hands together',
                    }}
                    heading="Get Involved"
                    description="Be part of the change."
                    description2="Serve, give, grow."
                    button="Join Us"
                    height="h-screen"
                    scrollToId="clean-section"
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