import volunteer from "../../assets/images/volunteering-activism-eco-aware-african-girl-is-cleaning-park-she-is-putting-trash-into-bag.jpg"

const items = [
    {image: volunteer, heading: "Volunteer in cleanups", Description:"Join a cleanup, plant a tree, uplift a community. Show up where it matters.", link:"", linkText:"Volunteer"},
    {image:volunteer, heading: "Donate Supplies", Description:"Got gloves, bins, or seedlings? We’ll put them to good use. Every tool fuels a cleaner, greener Nairobi.", linkText:"Donate Supplies"},
    {image: volunteer, heading: "Partner with us as a faith group, business, or school", Description:"Team up with us churches, NGOs, businesses welcome!", link:"", linkText:"Partner"},
    {image: volunteer, heading: "Become a Waste Ambassador",Description:"Lead change in your estate school, or church. We’ll equip you.", link:"", linkText:"Become an Ambassador"}
    
]

const WaysInvolved = () => {
    return (
        <div className="bg-[#F5FAF6] px-20 py-30 flex flex-col items-center justify-center">
            <h2 className="lg:text-[3.125rem] md:text-[2.5rem] text-[2rem] pb-40 text-[#184E35]">Ways to get involved</h2>
            <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-20">
                {items.map((items, index) => (
                    <div key={index} className="space-y-8">
                        <img className="w-50 h-66.5" src={items.image} alt="" />
                        <h3 className="max-w-58 font-bold lg:text-xl md:text[1.125rem] text-[1rem]">{items.heading}</h3>
                        <p className="max-w-55 lg:text-lg  md:text-base text-sm">{items.Description}</p>
                        <a className="font-semibold text-[1rem] hover:text-[#A3B18A] text-[#818F39]" href={items.link}>{items.linkText}</a>

                </div>
                ))}
                

            </div>
            
        </div>
    )
}
export default WaysInvolved;