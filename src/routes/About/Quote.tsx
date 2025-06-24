import nature from "../../assets/images/pexels-stuffedbox-ng-513424808-16237520.jpg"
import AnimatedText from "../../components/AnimatedText";

const Quote = ()=> {
    return (
        <div className="relative  lg:h-[60vh] w-full bg-cover bg-center bg-no-repeat bg-fixed"
        style={{backgroundImage: `url(${nature})`}}
        >
            
            <div className="flex items-center justify-center md:px-20 md:py-35 py-20 px-4">
                <AnimatedText>
                <p className="lg:text-[2.8125rem] md:text-[2.5rem] text-[1.75rem] font-normal text-white sub-sub-headings text-center">The greatest threat to our planet is the belief that someone else will clean it.</p>
                </AnimatedText>

            </div>
            
            

        </div>
    )

} 
export default Quote;