import paypal from "../../assets/images/transparent-hd-paypal-logo-701751694777788ilpzr3lary.png"

const payments =[
    {paymentLogo: paypal, title: "Donate via Paypal", description: "The fast and easy way to donate online", donateLink:"" },
    {paymentLogo: paypal, title: "Donate via MPesa", description: "The fast and easy way to donate online", donateLink:"" },
    {paymentLogo: paypal, title: "Donate via Paypal", description: "The fast and easy way to donate online", donateLink:"" },
    {paymentLogo: paypal, title: "Donate via Paypal", description: "The fast and easy way to donate online", donateLink:"" }
]
const DonationOptions = () => {
    return(
        <div className="px-20 py-30">
            <h2 className="lg:text-[3.125rem] md:text-[2.5rem] text-[2rem] mb-20 text-center text-[#184E35]">Your donation options</h2>
            <div className="grid gird-col md:grid-cols-2 lg:grid-cols-4 gap-10">
                {payments.map((payment, index) => (
                    <div key={index} className="text-center bg-white shadow-2xl gap-8 rounded-xl flex flex-col  justify-center items-center py-8">
                        <img className="w-39 h-auto" src={payment.paymentLogo} alt="" />
                        <p className="lg:text-xl md:text-[1.125rem] text-[1rem] font-semibold">{payment.title}</p>
                        <p className="max-w-41.5 lg:text-lg  md:text-base text-sm">{payment.description}</p>
                        <a className="lg:text-xl md:text-[1.125rem] text-[1rem] text-[#818F39] hover:text-[#A3B18A] font-bold" href={payment.donateLink} target="blank">Donate +</a>

                    </div>
                ))}
                

            </div>

        </div>
    )
}
export default DonationOptions;