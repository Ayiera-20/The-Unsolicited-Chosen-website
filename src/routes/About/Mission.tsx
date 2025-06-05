import { useState } from "react";
import clean from "../../assets/images/Happy volunteers cleaning city park from garbage.jpg"
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
        <div className="h-screen w-full px-20 py-30 flex flex-col lg:flex-row gap-8">
            <div>
                <div className="flex gap-4 flex-wrap">
                {slides.map((slide, index) => {
                    const isActive = selectedIndex === index;
                    const color = buttonColors[index];

                    return (
                    <button
                        key={index}
                        onClick={() => setSelectedIndex(index)}
                        className={`font-bold lg:text-[18px] py-2 px-4 rounded-full border-2 transition-all duration-300
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
            
            <div className="mt-20 ml-3.5">
                <h2 className="font-bold lg:text-2xl mb-8 text-[#184E35]">{slides[selectedIndex].heading}</h2>
                <div className="lg:text-lg font-medium max-w-142">
                    {slides[selectedIndex].text}
                </div>
            </div>
                
            </div>
            
            <img className="max-w-2xl h-150 pt-20" src={clean} alt="" />
        </div>
    )
}

export default Mission;