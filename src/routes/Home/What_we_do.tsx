import binIcon from "../../assets/images/bin.svg"
import cleanUpIcon from "../../assets/images/service.png"
import educationIcon from "../../assets/images/education.svg"
import treePlantingIcon from "../../assets/images/tree-planting-initiative.svg"
import partnershipIcon from "../../assets/images/partnership.svg"
import faithIcon from "../../assets/images/cross.svg"



const items = [
    {icon: binIcon, title:"Affordable Waste Solutions" , description:"We make waste management simple and affordable, especially in undeserved Nairobi neighborhoods with limited access to formal collection."},
    {icon: cleanUpIcon, title:"Community clean ups", description:" We believe clean surroundings are key to healthy, thriving communities. Our cleanups unite volunteers, youth, and faith groups to restore dignity and beauty to shared spaces."},
    {icon: educationIcon, title:"Community Education", description:"We promote sustainable habits by teaching communities how to reduce waste, recycle properly, and care for the environment through simple, practical steps."},
    {icon: treePlantingIcon, title:"Tree Planting", description:"Tree planting helps fight pollution and climate change. Our events engage communities to green Nairobi one seedling at a time."},
    {icon: partnershipIcon, title:"Strategic Partnerships", description: "Real change takes teamwork. We partner with governments, NGOs, and communities to share resources and grow our impact."},
    {icon: faithIcon, title:"Spreading faith and hope", description:"We uplift both spaces and spirits through gentle faith-based messages, wellness reflections, and moments of encouragement."},
    {icon: "", title: "Empowering through eco-friendly commerce", description: "" }
    
]




const WhatWeDo = () => {
    return (
        <div className="px-20 py-30">
            <div className="flex gap-100 justify-end items-center pl-30 pb-18 ">
                <h2 className=" lg:text-[50px] text-[#184E35]">What we do</h2>
                <button className="btn-primary">Our Services</button>
            </div>
            <div className=" grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1  space-y-10 justify-center  items-stretch h-full">
                {items.map((item, index) => (
                    <div key={index} className="flex flex-col justify-center items-center text-center gap-4 h-full">
                        <img className="w-12 h-12 t-10" src={item.icon} alt={item.title} />
                        <p className="text-2xl sub-sub-headings text-[#184E35]">{item.title}</p>
                        <p className="text-lg w-71 ]">{item.description}</p>

                    </div>
                ))}
            </div>

        </div>
    )
}

export default WhatWeDo;