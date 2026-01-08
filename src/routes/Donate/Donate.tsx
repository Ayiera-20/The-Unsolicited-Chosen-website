import ReusableHeroSection from "../../components/ReusableHeroSection";
// @ts-expect-error Vite transforms query-string image imports at build time
import handsJpg from "../../assets/images/hands-different-skin-color-ethnicities-coming-together-sign-diversity.jpg?w=1920"
// @ts-expect-error Vite transforms query-string image imports at build time
import handsJpgSrcSet from "../../assets/images/hands-different-skin-color-ethnicities-coming-together-sign-diversity.jpg?w=640&w=960&w=1280&w=1600&w=1920&as=srcset"
// @ts-expect-error Vite transforms query-string image imports at build time
import handsWebpSrcSet from "../../assets/images/hands-different-skin-color-ethnicities-coming-together-sign-diversity.jpg?format=webp&w=640&w=960&w=1280&w=1600&w=1920&as=srcset"
import DonationOptions from "./DonationOptions";
import DonatingCause from "./DonatingCause";
import Footer from "../../components/footer";

const Donate = () => {
    return(
        <div>
            <ReusableHeroSection 
            backgroundImage={{
                src: handsJpg,
                srcSet: handsJpgSrcSet,
                webpSrcSet: handsWebpSrcSet,
                sizes: '100vw',
                alt: 'Hands together',
            }}
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