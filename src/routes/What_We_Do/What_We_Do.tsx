import Footer from "../../components/footer";
import waste from "../../assets/images/volunteering-activism-eco-aware-african-girl-is-cleaning-park-she-is-putting-trash-into-bag.jpg"
import partnership from "../../assets/images/pexels-shvetsa-5029853.jpg"
import waste2 from "../../assets/images/freepik__the-style-is-candid-image-photography-with-natural__58390.jpeg"
import { Link } from 'react-router-dom';
import AnimatedText from "../../components/AnimatedText";

const items = [
    {Image: waste, text:"Affordable Waste Solutions", link:"/affordablewaste", readMore:"Lorem ipsum dolor sit amet, consectetur adipiscing elit"},
    {Image: waste2, text:"eco-friendly commerce", link:"", readMore:"Lorem ipsum dolor sit amet, consectetur adipiscing elit"},
    {Image:  waste, text:"Community Cleanups", link:"", readMore:"Lorem ipsum dolor sit amet, consectetur adipiscing elit"},
    {Image: waste2, text:"Community Education", link:"", readMore:"Lorem ipsum dolor sit amet, consectetur adipiscing elit"},
    {Image: partnership, text:"Strategic Partnerships", link:"", readMore:"Lorem ipsum dolor sit amet, consectetur adipiscing elit"},
    {Image: partnership, text:"Spreading Faith & Hope", link:"", readMore:"Lorem ipsum dolor sit amet, consectetur adipiscing elit"},
    
]

const WhatWeDo = () => {
    return (
        <div>
            


            
            <div className="md:py-30 py-15 flex flex-col items-center justify-center head-fade">
                 <h1 className="px-10 text-[2.5rem] md:text-[3.125rem] lg:text-[4rem] text-[#184E35] text-center md:pb-15 pb-10">What we do</h1>
                <p className="px-10 lg:text-lg  md:text-base text-sm  md:max-w-270 w-auto pb-10">At The Unsolicited Chosen, we are committed to restoring dignity to our communities through environmental action. 
                    Our work includes organizing regular community cleanups, offering affordable waste management solutions for underserved areas, 
                    forming strategic partnerships with local and national stakeholders, educating residents on best cleanliness practices, and 
                    initiating tree-planting campaigns to green our neighborhoods. 
                </p>
                <p className="px-10 lg:text-lg  md:text-base text-sm  md:max-w-270 w-auto pb-15">As a faith-inspired initiative, we also believe in nurturing the spirit spreading hope and encouragement through faith-based messages and community fellowship as we serve together.</p>
                
                


            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-10 lg:mb-20 px-6 md:px-10 lg:px-2">
                {items.map((item, index) => (
                    <div key={index} className="relative h-80 w-full max-w-[20rem] sm:max-w-[24rem] md:max-w-none md:h-96 bg-cover bg-center bg-no-repeat text-center flex justify-center items-center text-white group transition duration-300 flex-col mx-auto"
                        style={{backgroundImage: `url(${item.Image})`}}>
                            <div className="absolute inset-0 bg-black/70 transition duration-300"></div>
                            <p className="relative lg:text-[2rem] text-[1.25rem] md:font-medium group-hover:opacity-0">{item.text}</p>

                            <div className="lg:hidden relative flex flex-col justify-center items-center">
                                <p className="lg:text-lg pt-8  md:text-base text-sm pb-4 ">{item.readMore}</p>
                                <Link to ={item.link} className="lg:text-lg pt-8  md:text-base text-sm font-semibold mb-4 hover:text-[#818F39] ">Read More  →</Link>
                            </div>


                            {/* Hover content */}
                            <div className="bg-[#184E35] hidden absolute inset-0 lg:flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 slide-up transition duration-300">
                                <p className="relative lg:text-[2rem] md:text-[1.75rem] text-2xl font-medium pb-20 transition-transform duration-300 transform translate-y-4 group-hover:translate-y-0">{item.text}</p>
                                <p className="lg:text-lg  md:text-base text-sm pb-4 transition-transform duration-300 transform translate-y-4 group-hover:translate-y-0">{item.readMore}</p>
                                <Link to ={item.link} className="text-lg font-semibold mb-4 hover:text-[#818F39] transition-transform duration-300 transform translate-y-4 group-hover:translate-y-0">Read More  →</Link>
                            </div>

                    </div>
                ))} 
            </div>
            </div>
            <div className="bg-[#F5FAF6] pb-20 md:pt-30 pt-15">
                  <div className="border border-[#818F39] md:px-8 md:py-30 p-6 lg:mx-60 md:mx-20 mx-8 text-center">
                    <AnimatedText>
                        <p className="lg:text-2xl text-base md:text-lg">We clean, educate, plant, partner and serve. The Unsolicited Chosen is on a mission to make Nairobi and beyond cleaner, greener, and more hopeful through action and faith.</p>
                    </AnimatedText>
                
            </div>
             
             </div>

          
            
            <Footer />
           


        </div>

    );
}

export default WhatWeDo;