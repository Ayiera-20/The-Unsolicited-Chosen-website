
import vegetation from "../../assets/images/abstract-creative-3d-sphere-with-vegetation.jpg"
import children from "../../assets/images/children.jpg"
import garbageCollection from "../../assets/images/collectingGarbage.jpg"


const items = [
    {title: "Health Benefits", description:"Clean surroundings reduce the spread of diseases caused by stagnant water, uncollected garbage, and pests."},
    {title: "Restored Dignity", description: "Clean spaces uplift the community’s morale and bring a sense of pride and ownership."},
    {title: "Environmental Protection", description: "Removing waste prevents pollution of rivers, air, and soil, supporting a healthier ecosystem."},
    {title: "Youth Engagement", description: "Clean-up drives provide meaningful, purpose-driven activities for youth, keeping them positively engaged."},
    {title:"Safety & Accessibility", description:"Clean streets and open spaces are safer and more usable for children, families, and the elderly."},
    {title:"Community Unity", description: "Joint cleanup efforts bring people together across faiths, ages, and backgrounds, building a stronger sense of community."}

]




const CleanEnvironment = () => {
    return (
        <div className="px-20 py-30 bg-[#F5FAF6] ">
            <h2 className="text-[50px] text-center pb-25 text-black">Why clean environment matters</h2>
            <div className="flex flex-col lg:flex-row gap-50 justify-center">
                
                <div className="flex relative w-[400px] h-[500px]">
                <div className="absolute bg-white w-113 h-182  bg-cover bg-center bg-no-repeat"
                        style={{backgroundImage: `url(${vegetation})`}}>
                    </div>
                    <div className=" top-90 -left-40 bg-white  w-67 h-79   bg-cover bg-center bg-no-repeat  absolute"
                        style={{backgroundImage: `url(${children})`}}>
                    </div>
                    
                    <div className=" bottom-50 -right-40 bg-white w-58 h-58  bg-cover bg-center bg-no-repeat absolute"
                        style={{backgroundImage: `url(${garbageCollection})`}}>
                    </div>
                </div>
                <div className="space-y-10">
                    {items.map((item, index) =>(
                        
                        <div key = {index} className="flex gap-8">
                            <div className="w-0.5 h-20 bg-black"></div>
                            <div className="flex flex-col gap-2">
                                <p className="text-2xl font-semibold  sub-sub-headings">{item.title}</p>
                                <p className="text-lg w-97">{item.description}</p>
                            </div>
                            
                           
                        </div>
                    ))}
                    
                </div>

            </div>
        </div>
    )
}

export default CleanEnvironment;