
// @ts-expect-error Vite transforms query-string image imports at build time
import vegetation from "../../assets/images/abstract-creative-3d-sphere-with-vegetation.jpg?w=1400"
// @ts-expect-error Vite transforms query-string image imports at build time
import children from "../../assets/images/children.jpg?w=900"
// @ts-expect-error Vite transforms query-string image imports at build time
import garbageCollection from "../../assets/images/collectingGarbage.jpg?w=1200"
import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";




const items = [
    {title: "Health Benefits", description:"Clean surroundings reduce the spread of diseases caused by stagnant water, uncollected garbage, and pests."},
    {title: "Restored Dignity", description: "Clean spaces uplift the community’s morale and bring a sense of pride and ownership."},
    {title: "Environmental Protection", description: "Removing waste prevents pollution of rivers, air, and soil, supporting a healthier ecosystem."},
    {title: "Youth Engagement", description: "Clean-up drives provide meaningful, purpose-driven activities for youth, keeping them positively engaged."},
    {title:"Safety & Accessibility", description:"Clean streets and open spaces are safer and more usable for children, families, and the elderly."},
    {title:"Community Unity", description: "Joint cleanup efforts bring people together across faiths, ages, and backgrounds, building a stronger sense of community."}

]




const CleanEnvironment = () => {
  const textRef = useRef(null);
  const isInView = useInView(textRef, { once: false, margin: "-100px" });

    return (
    <motion.section
    ref={textRef}
    initial={{ backgroundColor: "#ffffff" }}
    animate={{ backgroundColor: isInView ? "#E6FFFA" : "#F5FAF6" }}
    transition={{ duration: 1.2 }}
    className="md:px-20 px-6 sm:px-10 py-20"
    style={{ backgroundColor: isInView ? "#E6FFFA" : "#F5FAF6" }} 
    >


            <h2 className="lg:text-[3.125rem] md:text-[2.5rem] text-[2rem] text-center md:pb-25 text-[#184E35] slide">Why clean environment matters</h2>
            <div className="flex flex-col lg:flex-row lg:gap-50 md:gap-30 justify-center items-center lg:items-start">
                
                <div className="lg:sticky lg:top-20 relative flex w-full max-w-[400px] h-[420px] sm:h-[500px] items-center md:items-start justify-center md:justify-items-start">
                    <div className="absolute bg-white lg:w-113 lg:h-182 md:w-100 md:h-100 w-60 h-80  bg-cover bg-center bg-no-repeat animate-zoom-out"
                        style={{backgroundImage: `url(${vegetation})`}}>
                    </div>
                        
                    <div className="md:top-70 lg:top-90 top-80 md:-left-40 left-10 bg-white  w-25 h-25 md:w-70 md:h-70  bg-cover bg-center bg-no-repeat  absolute animate-zoom-out"
                        style={{backgroundImage: `url(${children})`}}>
                    </div>
                    
                    <div className=" bottom-80 md:-right-40 right-10 bg-white md:w-58 md:h-58 w-20 h-20 bg-cover bg-center bg-no-repeat absolute animate-zoom-out"
                        style={{backgroundImage: `url(${garbageCollection})`}}>
                    </div>
                </div>
                <div ref={textRef} className="space-y-10 overflow-y-auto">
                    {items.map((item, index) =>(
                        
                        <div key = {index} className="flex gap-8 px-10 md:px-0">
                            <div className="w-0.5 h-20 bg-black"></div>
                            <div className="flex flex-col gap-2">
                                <p className="lg:text-2xl text-base md:text-lg font-semibold  sub-sub-headings text-[#184E35]">{item.title}</p>
                                <p className="lg:text-lg  md:text-base text-sm md:w-97 w-auto">{item.description}</p>
                            </div>
                            
                           
                        </div>
                    ))}
                    
                </div>

            </div>

        </motion.section>
    )
}

export default CleanEnvironment;