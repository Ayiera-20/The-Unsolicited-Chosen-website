import ReusableHeroSection from "../.././components/ReusableHeroSection"
import hands from "../../assets/images/hands-different-skin-color-ethnicities-coming-together-sign-diversity.jpg"
import Footer from "../../components/footer";
import GetStarted from "./GetStarted";
import SendMessage from "./SendMessage";


const ContactUs = () => {
    return(
        <div>
            <ReusableHeroSection
                    backgroundImage={hands}
                    heading="Contact Us"
                    description="Have questions, suggestions, or want to partner with us? "
                    description2="We'd love to hear from you!"
                    button="Send a messsage"
                    height="h-[80vh]"
                    scrollToId="message-section"
                    
                />
                <GetStarted />
                <SendMessage />
                <Footer />

        </div>
    )
}
export default ContactUs;