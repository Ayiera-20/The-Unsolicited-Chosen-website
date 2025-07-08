import green from "../../assets/images/beautiful-japanese-forest-landscape.jpg"
import AnimatedText from "../../components/AnimatedText";
const SendMessage = () => {
    return(
        <div id="message-section" className="bg-[#F5FAF6] md:py-20 py-10">
            <AnimatedText>
            <h2 className=" md:text-[2rem] lg:text-[2.5rem] text-2xl pb-30 text-center text-[#184E35]">Send Your Message</h2>
            </AnimatedText>
            <div className="relative w-full h-[60vh] flex md:items-end  items-center justify-center bg-fixed bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${green})`}}>
              
                    <form action="" className="flex flex-col gap-10 md:w-150 lg:w-200 bg-[#184E35] px-10 py-10 lg:mb-20 md:mb-70 mb-45 lg:text-lg  md:text-base text-sm">
                        <input className="placeholder:font-semibold bg-white p-2" id="name" type="name" placeholder="Your Name" />
                        <input className="placeholder:font-bold bg-white p-2" id="email" type="email" placeholder="Your Email" />
                        <textarea className="placeholder:font-bold bg-white p-2" id="message" name="tmessage" rows={4} placeholder="Your Message" />
                        <button className="md:mx-30 mx-20 md:py-4 px-8 py-2 rounded-full bg-[#818F39] border-transparent hover:bg-transparent hover:text-[#A3B18A] border-2 hover:border-[#A3B18A] text-white font-bold transition duration-300" >Submit</button>
                    </form>

            </div>
            
           

        </div>
    )
}
export default SendMessage;