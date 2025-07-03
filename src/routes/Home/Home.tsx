import Footer from "../../components/footer";
import AboutSection from "./About";
import CleanEnvironment from "./Clean_Environment";
import GetInvolved from "./Get_Invloved";
import HeroSection from "./Hero";
import WhatWeDo from "./What_we_do";
import WhyUnsolicited from "./Why";

const Home = () => {
    return (
        <div>
            <HeroSection />
            <AboutSection />
            <WhatWeDo />
            <CleanEnvironment />
            <WhyUnsolicited />
            <GetInvolved />
            <Footer />
        </div>

    )
}
export default Home;