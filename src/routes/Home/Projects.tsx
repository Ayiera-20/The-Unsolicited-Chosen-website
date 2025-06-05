import veg from "../../assets/images/hero.jpg"
import children from "../../assets/images/children.jpg"
import recyc from "../../assets/images/Intro-background.jpg"

const Projects = () =>{
    return (
        <div className="px-20 py-30">
            <div className="flex justify-between pb-8 justify-items-stretch">
                <h2 className="text-[50px] text-center text-[#184E35]">Our Projects</h2>
                <button className="btn-primary">Discover More →</button>
            </div>
            <p className="italic font-bold pb-12 text-[#184E35]">Transforming our communities, one action at a time.</p>
            <p className="text-lg w-120.5 pb-20">From cleaning up public spaces to teaching sustainable waste practices and planting trees, our programmes are practical, people-powered, and built to scale.</p>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 auto-rows-min space-y-8">
                <div className="space-y-4 w-full h-auto">
                    <img className="w-116.5 h-74.5 rounded-xl" src={veg} alt="" />
                    <p className="text-lg font-bold">Community Cleanups</p>
                </div>
                <div className="flex flex-col space-y-4 w-full h-auto">
                    <img className="w-159.5 h-191.5 rounded-xl object-cover" src={recyc} alt="" />
                    <p className="text-lg font-bold">Affordable Waste Solutions</p>
                </div>
                <div className="flex flex-col space-y-4 w-full h-auto lg:-mt-100">
                    <img className="w-116.5 h-74.5 rounded-xl" src={children} alt="" />
                    <p className="text-lg font-bold">Faith & Hope</p>
                </div>
                
               
            </div>
        </div>
    )
}
export default Projects;