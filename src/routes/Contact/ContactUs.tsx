import ReusableHeroSection from "../.././components/ReusableHeroSection"
import handsJpg from "../../assets/images/hands-different-skin-color-ethnicities-coming-together-sign-diversity.jpg"
// @ts-expect-error Vite transforms query-string image imports at build time
import handsJpgSrcSet from "../../assets/images/hands-different-skin-color-ethnicities-coming-together-sign-diversity.jpg?w=640&w=960&w=1280&w=1600&w=1920&as=srcset"
// @ts-expect-error Vite transforms query-string image imports at build time
import handsWebpSrcSet from "../../assets/images/hands-different-skin-color-ethnicities-coming-together-sign-diversity.jpg?format=webp&w=640&w=960&w=1280&w=1600&w=1920&as=srcset"
import Footer from "../../components/footer";
import GetStarted from "./GetStarted";
import SendMessage from "./SendMessage";


const ContactUs = () => {
    return(
        <div>
            <ReusableHeroSection
                    backgroundImage={{
                        src: handsJpg,
                        srcSet: handsJpgSrcSet,
                        webpSrcSet: handsWebpSrcSet,
                        sizes: '100vw',
                        alt: 'Community hands together',
                    }}
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