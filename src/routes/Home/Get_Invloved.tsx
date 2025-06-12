import { Link } from "react-router-dom";

const GetInvolved = () => {
    return (
        <div className="bg-[#184E35] border-1 border-b-[#818F39] md:py-16 py-10 justify-center items-center flex">
            <Link to ="/getinvolved">
             <button className="md:py-4 md:px-8 py-2 px-4 rounded-full bg-[#818F39]
              lg:text-lg md:text-base text-sm text-white shadow-2xl border-transparent
               hover:bg-transparent border-2 hover:border-[#A3B18A] hover:text-[#A3B18A] font-bold" >Get Involved</button>
            </Link>
            
        </div>
    )

}
export default GetInvolved;