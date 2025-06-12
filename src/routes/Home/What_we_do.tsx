import binIcon from "../../assets/images/bin.svg"
import cleanUpIcon from "../../assets/images/service.png"
import educationIcon from "../../assets/images/education.svg"
import treePlantingIcon from "../../assets/images/tree-planting-initiative.svg"
import partnershipIcon from "../../assets/images/partnership.svg"
import faithIcon from "../../assets/images/cross.svg"
import { Link } from "react-router-dom";


const items = [
    {icon: binIcon, title:"Affordable Waste Solutions" , description:"We make waste management simple and affordable, especially in undeserved Nairobi neighborhoods with limited access to formal collection.,"},
    {icon: cleanUpIcon, title:"Community clean ups", description:" We believe clean surroundings are key to healthy, thriving communities. Our cleanups unite volunteers, youth, and faith groups to restore dignity and beauty to shared spaces."},
    {icon: educationIcon, title:"Community Education", description:"We promote sustainable habits by teaching communities how to reduce waste, recycle properly, and care for the environment through simple, practical steps."},
    {icon: treePlantingIcon, title:"Tree Planting", description:"Tree planting helps fight pollution and climate change. Our events engage communities to green Nairobi one seedling at a time."},
    {icon: partnershipIcon, title:"Strategic Partnerships", description: "Real change takes teamwork. We partner with governments, NGOs, and communities to share resources and grow our impact."},
    {icon: faithIcon, title:"Spreading faith and hope", description:"We uplift both spaces and spirits through gentle faith-based messages, wellness reflections, and moments of encouragement."},
    {icon: cleanUpIcon, title: "Eco-friendly commerce", description: "Empowering through eco-friendly commerce" }
    
]




const WhatWeDo = () => {
    return (
        <div className="lg:px-20 md:px-15  md:py-30 px-4 py-15">
            <div className="flex flex-col md:flex-row lg:gap-100 md:gap-40 gap-10 justify-end items-center md:pl-30 pb-18 ">
                <h2 className="lg:text-[3.125rem] md:text-[2.5rem] text-[2rem] text-[#184E35]">What we do</h2>
                <Link to="/whatwedo">
                <button className="btn-primary">Our Services</button>
                </Link>
                
            </div>
            <div className=" grid lg:grid-cols-3 grid-cols-2  items-center md:gap-10 gap-6 justify-center  lg:items-stretch h-full md:px-0 px-2">
                {items.map((item, index) => (
                    <div key={index} className="flex flex-col justify-center items-center text-center md:gap-4 gap-2 h-full px-4 lg:py-8 pt-6 md:pb-2 shadow-xl border-1 border-gray-300 rounded-xl">
                        <img className="w-6 h-6 lg:w-12 lg:h-12 t-10" src={item.icon} alt={item.title} />
                        <p className="lg:text-lg  md:text-base text-sm font-bold sub-sub-headings text-[#184E35]">{item.title}</p>
                        <p className="md:text-[1rem] text-sm w-71 hidden lg:block">{item.description}</p>
                        <a className="lg:hidden md:text-base text-sm font-bold pb-10" href="">Read More</a>

                    </div>
                ))}
            </div>

        </div>
    )
}

export default WhatWeDo;