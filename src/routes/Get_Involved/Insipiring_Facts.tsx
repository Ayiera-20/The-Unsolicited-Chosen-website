import trash from "../../assets/images/freepik__the-style-is-candid-image-photography-with-natural__58390.jpeg"
import AnimatedText from "../../components/AnimatedText";

const InspiringFacts = () => {
    return (
        <div className="md:px-20 md:py-20 lg:py-30  pt-4 bg-[#F5FAF6] ">
           
           <div className="flex flex-col md:flex-row items-center justify-center">
                 <img
                src={trash}
                alt="Nairobi clean-up"
                className="lg:w-170 lg:h-131 md:h-148 h-80 w-full object-cover"
                loading="lazy"
                decoding="async"
                />
            
                <div className="bg-[#184E35] w-full lg:w-1/3 space-y-4 text-white px-10  py-6  md:text-base text-sm lg:h-131 lg:max-h-131">
                <AnimatedText>
                    <p className="pt-8">Every great city breathes through its people, and Nairobi is no different. When you step in to help, you’re not just picking litter or planting trees; you're sowing seeds of dignity, health, and hope. </p>
                    <p>Did you know a single mature tree can absorb over 20kg of carbon dioxide each year? That’s the quiet power of small acts. </p>
                    <p>When communities come together, shoulder to shoulder, faith in hand, we don’t just clean streets; we uplift souls, we revive forgotten corners, and we lay the foundation for a cleaner, greener future not just for Nairobi, but for communities across Kenya and beyond. Join us. Be the heartbeat behind a cleaner, kinder world.</p>
                </AnimatedText>
                </div>
            
           </div>

                

            

        </div>
    )
}
export default InspiringFacts;