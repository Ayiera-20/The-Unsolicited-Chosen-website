import green from "../../assets/images/beautiful-japanese-forest-landscape.jpg"
const SendMessage = () => {
    return(
        <div className="bg-[#F5FAF6] py-20">
            <h2 className="font-bold text-[32px] pb-30 text-center">Send Your Message</h2>
            <div className="relative w-full h-[60vh] flex items-end justify-center bg-fixed bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${green})`}}>
              
                    <form action="" className="flex flex-col gap-10 w-150 bg-[#384B38] px-10 py-10 mb-30">
                        <input className="placeholder:font-semibold bg-white p-2" id="name" type="name" placeholder="Your Name" />
                        <input className="placeholder:font-bold bg-white p-2" id="email" type="email" placeholder="Your Email" />
                        <textarea className="placeholder:font-bold bg-white p-2" id="message" name="tmessage" rows={4} placeholder="Your Message" />
                        <button className="mx-30 py-4 px-8 rounded-full bg-[#afdfaa] text-black border-transparent hover:bg-transparent hover:text-[#afdfaa] border-2 hover:border-[#afdfaa] font-bold" >Submit</button>
                    </form>
               
                {/* <div className="absolute h-[70vh] w-full bg-cover bg-center bg-no-repeat px-20 py-30 "
                style={{backgroundImage: `url(${green})`}}
                >    
                </div> */}

            </div>
            
           

        </div>
    )
}
export default SendMessage;