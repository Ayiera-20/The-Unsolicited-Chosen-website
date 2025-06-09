import tree from "../../assets/images/tree-planting-initiative.svg"
const items = [
    {icon: tree, title: "Title", description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},
    {icon: tree, title: "Title", description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},
    {icon: tree, title: "Title", description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},
    {icon: tree, title: "Title", description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}
]

const DonatingCause = () =>{
    return(
        <div className="bg-[#F5FAF6] md:px-20 px-10 py-30">
            <h2 className="lg:text-[3.125rem] md:text-[2.5rem] text-[2rem] text-center pb-20 text-[#184E35]">Why donating to our cause?</h2>
            <div className=" grid grid-cols-1 md:grid-cols-2 gap-y-20 items-center justify-center lg:px-20 gap-8">
                {items.map((item, index) =>(
                    <div key={index} className="bg-white rounded-2xl flex gap-3 shadow-md py-8 max-w-md">
                        <div className="px-4">
                            <img className="bg-[#F5F1E3] rounded-full p-2 w-15 h-auto" src={item.icon} alt="" />
                        </div>
                        
                        <div>
                            <p className="font-bold lg:text-xl md:text-[1.125rem] text-[1rem] pb-4">{item.title}</p>
                            <p className="max-w-79 lg:text-lg  md:text-base text-sm">{item.description}</p>

                        </div>
                        
                    </div>
                ))}
            </div>

        </div>
    )
}

export default DonatingCause;