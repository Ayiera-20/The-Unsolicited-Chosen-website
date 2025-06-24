import sustainable from "../../assets/images/sustainable-development-goals-still-life.jpg"
import person from "../../assets/images/pexels-safari-consoler-3290243-12411818.jpg"
import AnimatedText from "../../components/AnimatedText"

const OurStory = () => {
    return (
        <div className="bg-[#F5FAF6] md:px-20 px-10 md:py-30 py-15">
            <h2 className="lg:text-[3.125rem] md:text-[2.5rem] text-[2rem] text-[#184E35] mb-20 text-center slide">Our Story</h2>
            <div className="flex flex-col lg:flex-row gap-20">
                <img className="md:w-120 md:h-100" src={sustainable} alt="" />
                <AnimatedText>
                    <div className="gap-y-8 lg:px-10 flex flex-col items-center justify-center">
                    <p className="lg:text-[1.25rem] md:text-[1.125rem] text-[1rem]">The Unsolicited Chosen was born from a simple realization: if we don’t take action to care for our environment, who will? </p>
                    <p className="lg:text-[1.25rem] md:text-[1.125rem] text-[1rem]">What started as a conversation among a few friends quickly grew into a shared vision to become part of the solution through faith, service, and community. </p>
                </div>
                </AnimatedText>
                
                

            </div>
            <div className="flex flex-col lg:flex-row pt-10 gap-20">
                <AnimatedText>
                <div className="gap-y-8 md:pr-10 flex flex-col items-center justify-center">
                    <p className="lg:text-[1.25rem] md:text-[1.125rem] text-[1rem]">We didn’t wait for permission. We weren’t experts. We just started, and now, we’re inviting others to do the same.</p>
                    <p className="hidden md:block lg:text-[1.25rem] md:text-[1.125rem] text-[1rem]">At The Unsolicited Chosen, we act not for recognition but out of purpose. We believe cleaner, healthier communities don’t need to wait for perfect systems they need people who care. </p>
                    <p className="hidden md:block lg:text-[1.25rem] md:text-[1.125rem] text-[1rem]">That’s why we go where the need is greatest, bringing practical solutions, compassion, and faith-driven service to underserved spaces in Nairobi and beyond. </p>
                </div>
                </AnimatedText>
                
                <img className="md:w-78 md:h-117" src={person} alt="" />

            </div>

        </div>
    )
}
export default OurStory;