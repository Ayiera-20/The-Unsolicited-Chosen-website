import Footer from "../../components/footer";
import GetInvolved from "../Home/Get_Invloved";
import Hero from "./Hero";
import Mission from "./Mission";
import OurStory from "./Our_Story";
import Quote from "./Quote";
import Team from "./Team";



const About = () => {
    return(
        <div>
            <Hero />
            <Mission />
            <OurStory />
            <Team />
            <Quote />
            <GetInvolved />
            <Footer />
        </div>
    )
}

export default About;