import tree from "../../assets/images/tree-planting-initiative.svg"
const items = [
    {icon: tree, title: "Title", description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},
    {icon: tree, title: "Title", description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},
    {icon: tree, title: "Title", description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},
    {icon: tree, title: "Title", description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}
]

const DonatingCause = () =>{
    return(
        <div className="bg-[#F5FAF6] px-20 py-30">
            <h2 className="font-bold text-[32px] text-center pb-20">Why donating to our cause?</h2>
            <div className=" grid grid-cols-1 md:grid-cols-2 gap-y-20 items-center justify-center px-20">
                {items.map((item, index) =>(
                    <div key={index} className="bg-white rounded-2xl flex gap-3 shadow-md py-8 max-w-md">
                        <div className="px-4">
                            <img className="bg-[#F5F1E3] rounded-full p-2 w-15 h-auto" src={item.icon} alt="" />
                        </div>
                        
                        <div>
                            <p className="font-bold lg:text-xl pb-4">{item.title}</p>
                            <p className="max-w-79 text-[16px]">{item.description}</p>

                        </div>
                        
                    </div>
                ))}
            </div>

        </div>
    )
}

export default DonatingCause;