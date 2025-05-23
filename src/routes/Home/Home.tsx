import Footer from "../../components/footer";
import AboutSection from "./About";
import CleanEnvironment from "./Clean_Environment";
import GetInvolved from "./Get_Invloved";
import HeroSection from "./Hero";
import Projects from "./Projects";
import WhatWeDo from "./What_we_do";
import WhyUnsolicited from "./Why";

const Home = () => {
    return (
        <div>
            <HeroSection />
            <AboutSection />
            <WhatWeDo />
            <CleanEnvironment />
            <Projects />
            <WhyUnsolicited />
            <GetInvolved />
            <Footer />
        </div>

    )
}
export default Home;