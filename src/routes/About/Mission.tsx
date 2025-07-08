import { useState } from "react";
import clean from "../../assets/images/Happy volunteers cleaning city park from garbage.jpg"
import AnimatedText from "../../components/AnimatedText";
const buttonColors = [
  { bg: "bg-[#184E35]", text: "text-white", border: "border-[#184E35]" }, // Who we are
  { bg: "bg-[#A3B18A]", text: "text-black", border: "border-[#A3B18A]" }, // Mission
  { bg: "bg-[#799434]", text: "text-white", border: "border-[#818F39]" }, // Vision
  { bg: "bg-[#F5F1E3]", text: "text-black", border: "border-[#F5F1E3]" }, // Values
];

const slides  = [
    {heading:"Who we are", 
        text: "We are a grassroots, faith-inspired NGO on a mission to make Nairobi and eventually all of Kenya cleaner, healthier, and more dignified place to live. Rooted in service and compassion, we bring communities together to take practical steps toward environmental restoration."},
    {heading: "Our Mission", text: "To mobilize communities through education, clean-up activities, strategic partnerships, and waste management solutions that promote sustainability and shared responsibility."},
    {heading: "Our Vision", text: "To mobilize communities through education, clean-up activities, strategic partnerships, and waste management solutions that promote sustainability and shared responsibility."},
    {heading: "Our Values", text: 
    <ul className="list-disc text-left space-y-2 ml-5">
        <li>Faith</li>
        <li>Willingness</li>
        <li>Serenity</li>
  </ul>,},
]





const Mission = () => {
    const [selectedIndex, setSelectedIndex] = useState(0)
    return (
        <div id="mission-section" className="w-full md:px-20 px-10 md:py-30 py-15 flex flex-col lg:flex-row">
            <div>
                <div className="flex flex-wrap gap-4">
                {slides.map((slide, index) => {
                    const isActive = selectedIndex === index;
                    const color = buttonColors[index];

                    return (
                    <button
                        key={index}
                        onClick={() => setSelectedIndex(index)}
                        className={`font-bold lg:text-lg  md:text-base text-sm py-2 md:px-4 px-2 rounded-full border-2 transition-all duration-300
                        ${isActive 
                            ? `${color.bg} ${color.text} ${color.border}`
                            : `bg-transparent text-black ${color.border} hover:${color.bg} hover:${color.text}`
                        }`}
                    >
                        {slide.heading}
                    </button>
                    );
                })}
            </div>
            
            <div className="md:mt-20 mt-10 ml-3.5">
                <AnimatedText>
                    <h2 className="lg:text-[3.125rem] md:text-[2.5rem] text-[2rem] lg:text-2xl mb-8 text-[#184E35]">{slides[selectedIndex].heading}</h2>
                </AnimatedText>
                <AnimatedText>
                    <div className="lg:text-lg  md:text-base text-sm font-medium max-w-142">
                    {slides[selectedIndex].text}
                </div>
                </AnimatedText>
                
            </div>
                
            </div>
            
            <img className="max-w-2xl md:h-150 h-auto md:pt-20 pt-10" src={clean} alt="" />
        </div>
    )
}

export default Mission;