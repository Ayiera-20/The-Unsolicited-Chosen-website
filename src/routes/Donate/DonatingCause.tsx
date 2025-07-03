import tree from "../../assets/images/tree-planting-initiative.svg"
import AnimatedText from "../../components/AnimatedText"
const items = [
    {icon: tree, title: "Title", description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},
    {icon: tree, title: "Title", description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},
    {icon: tree, title: "Title", description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},
    {icon: tree, title: "Title", description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}
]

const DonatingCause = () =>{
    return(
        <div className="bg-[#F5FAF6] md:px-20 px-10 lg:py-30 py-15">
            <h2 className="lg:text-[3.125rem] md:text-[2.5rem] text-[2rem] text-center pb-20 text-[#184E35] slide">Why donating to our cause?</h2>
            
            <div className=" grid grid-cols-1 md:grid-cols-2 gap-y-20 items-center justify-center lg:px-20 gap-8">
                {items.map((item, index) =>(
                    <AnimatedText>
                    <div key={index} className="bg-white rounded-2xl flex md:gap-3 shadow-md py-8 max-w-md transition-all duration-300 ease-in-out hover:-translate-y-1">
                        <div className="px-4">
                            <img className="bg-[#F5F1E3] rounded-full p-2 w-15 h-auto" src={item.icon} alt="" />
                        </div>
                        
                        <div className="px-2 lg:px-0">
                            <p className="font-bold lg:text-xl md:text-[1.125rem] text-[1rem] pb-4">{item.title}</p>
                            <p className="max-w-79 lg:text-lg  md:text-base text-sm">{item.description}</p>

                        </div>
                        
                    </div>
                    </AnimatedText>
                ))}
            </div>
            

        </div>
    )
}

export default DonatingCause;