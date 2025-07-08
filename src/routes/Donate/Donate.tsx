import ReusableHeroSection from "../../components/ReusableHeroSection";
import hands from "../../assets/images/hands-different-skin-color-ethnicities-coming-together-sign-diversity.jpg"
import DonationOptions from "./DonationOptions";
import DonatingCause from "./DonatingCause";
import Footer from "../../components/footer";

const Donate = () => {
    return(
        <div>
            <ReusableHeroSection 
            backgroundImage={hands}
                    heading="Donate and make an impact"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod "
                    description2="tempor incididunt ut labore et dolore magna aliqua."
                    button="Join Us"
                    height="h-screen"
                    scrollToId="donation-section"
            />
            <DonationOptions />
            <DonatingCause />
            <Footer />

        </div>
    )
}
export default Donate;