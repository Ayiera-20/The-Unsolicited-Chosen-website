import Footer from "../../components/footer";
import waste from "../../assets/images/volunteering-activism-eco-aware-african-girl-is-cleaning-park-she-is-putting-trash-into-bag.jpg"
import partnership from "../../assets/images/pexels-shvetsa-5029853.jpg"
import waste2 from "../../assets/images/freepik__the-style-is-candid-image-photography-with-natural__58390.jpeg"
import NavBar from "../../components/navbar";

const items = [
    {Image: waste, text:"Affordable Waste Solutions", link:"", readMore:"Lorem ipsum dolor sit amet, consectetur adipiscing elit"},
    {Image: waste2, text:"eco-friendly commerce", link:"", readMore:"Lorem ipsum dolor sit amet, consectetur adipiscing elit"},
    {Image:  waste, text:"Community Cleanups", link:"", readMore:"Lorem ipsum dolor sit amet, consectetur adipiscing elit"},
    {Image: waste2, text:"Community Education", link:"", readMore:"Lorem ipsum dolor sit amet, consectetur adipiscing elit"},
    {Image: partnership, text:"Strategic Partnerships", link:"", readMore:"Lorem ipsum dolor sit amet, consectetur adipiscing elit"},
    {Image: partnership, text:"Spreading Faith & Hope", link:"", readMore:"Lorem ipsum dolor sit amet, consectetur adipiscing elit"},
    
]

const WhatWeDo = () => {
    return (
        <div>
            <div className="bg-[#184E35]">
                <NavBar />
            </div>
            
            <div className="px-20 py-30 flex flex-col items-center justify-center">
                 <h1 className="lg:text-[64px] text-[#184E35] text-center pb-15">What we do</h1>
            <p className="lg:text-[20px] max-w-270 pb-10">At The Unsolicited Chosen, we are committed to restoring dignity to our communities through environmental action. Our work includes organizing regular community cleanups, offering affordable waste management solutions for underserved areas, forming strategic partnerships with local and national stakeholders, educating residents on best cleanliness practices, and initiating tree-planting campaigns to green our neighborhoods. </p>
            <p className="lg:text-[20px] max-w-270 pb-25">As a faith-inspired initiative, we also believe in nurturing the spirit spreading hope and encouragement through faith-based messages and community fellowship as we serve together.</p>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-20">
                {items.map((item, index) => (
                    <div key={index} className="relative h-120 w-141 bg-cover bg-center bg-no-repeat text-center flex justify-center  items-center text-white
                    group transition duration-300"
                        style={{backgroundImage: `url(${item.Image})`}}>
                            <div className="absolute inset-0 bg-black/70 transition duration-300"></div>
                            <p className="relative text-[32px] font-medium group-hover:opacity-0">{item.text}</p>
                            {/* Hover content */}
                            <div className="bg-[#184E35] absolute inset-0 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 slide-up transition duration-300">
                                <p className="relative text-[32px] font-medium pb-20 transition-transform duration-300 transform translate-y-4 group-hover:translate-y-0">{item.text}</p>
                                <p className="pb-4 transition-transform duration-300 transform translate-y-4 group-hover:translate-y-0">{item.readMore}</p>
                                <p className="text-lg font-semibold mb-4 hover:text-[#818F39] transition-transform duration-300 transform translate-y-4 group-hover:translate-y-0">Read more →</p>
                            
                            </div>

                    </div>
                ))} 
            </div>
            </div>
            <div className="bg-[#F5FAF6] pb-20 pt-30">
                  <div className="border border-[#818F39] px-8 py-30 mx-60 text-center">
                <p className="text-2xl">We clean, educate, plant, partner and serve. The Unsolicited Chosen is on a mission to make Nairobi and beyond cleaner, greener, and more hopeful through action and faith.</p>
            </div>
             
             </div>

          
            
            <Footer />
           


        </div>

    );
}

export default WhatWeDo;