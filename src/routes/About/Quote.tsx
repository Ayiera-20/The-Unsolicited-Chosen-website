import nature from "../../assets/images/pexels-stuffedbox-ng-513424808-16237520.jpg"

const Quote = ()=> {
    return (
        <div className="relative  lg:h-[60vh] w-full bg-cover bg-center bg-no-repeat bg-fixed"
        style={{backgroundImage: `url(${nature})`}}
        >
            <div className="flex items-center justify-center px-20 py-35">
                <p className="lg:text-[2.8125rem] md:text-[2.5rem] text-[2.25rem] font-normal text-white sub-sub-headings text-center">The greatest threat to our planet is the belief that someone else will clean it.</p>

            </div>
            

        </div>
    )

} 
export default Quote;