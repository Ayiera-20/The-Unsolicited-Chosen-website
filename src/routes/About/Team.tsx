import {
  FaTwitter,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";
import profile from "../../assets/images/woman-floral-shirt-smiling.jpg"


const teamMembers = [

    {image:profile, role: "Founder", name: "Jenny Otinda", 
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        socialLinks:{
        twitter: "https://twitter.com/devbob",
        instagram: "https://instagram.com/devbob",
        linkedin: "https://linkedin.com/in/bob"
    } },
    {image:profile,role: "Software Developer", name: "Miriam Ayiera", 
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        socialLinks:{
        twitter: "https://twitter.com/devbob",
        instagram: "https://instagram.com/devbob",
        linkedin: "https://linkedin.com/in/bob"
    } },
     {image:profile, role: "PR", name: "Hope", 
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        socialLinks:{
        twitter: "https://twitter.com/devbob",
        instagram: "https://instagram.com/devbob",
        linkedin: "https://linkedin.com/in/bob"
    } },
     {image:profile, role: "Finance", name: "John", 
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        socialLinks:{
        twitter: "https://twitter.com/devbob",
        instagram: "https://instagram.com/devbob",
        linkedin: "https://linkedin.com/in/bob"
    } },
     {image:profile, role: "Graphic Designer", name: "Jackline", 
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        socialLinks:{
        twitter: "https://twitter.com/devbob",
        instagram: "https://instagram.com/devbob",
        linkedin: "https://linkedin.com/in/bob"
    } },
    
]
const Team = () => {
    return(
        <div className="px-20 py-30 flex flex-col items-center justify-center">
            <h1 className="text-[64px] mb-20 ">Meet Our Team</h1>
            <div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {teamMembers.map((member, index) => (
                        <div key={index} className="flex flex-col md:flex-row gap-6">
                            <img className="w-50 h-auto" src ={member.image} alt={member.name} />
                            <div className="space-y-4">
                                <h3 className="text-[#AFDFAA] lg:text-lg">{member.role}</h3>
                                <p className="text-2xl">{member.name}</p>
                                <div className="w-60 h-[1px] bg-[#AFDFAA]"></div>
                                <p className="text-[18px]">{member.description}</p>
                                <div className="flex  gap-4 mt-8">
                                    {member.socialLinks.twitter && (
                                        <a
                                            href={member.socialLinks.twitter}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="bg-[#546a45] p-2 rounded-full text-white hover:bg-[#afdfaa]"
                                        >
                                            <FaTwitter />
                                        </a>
                                    )}
                                    {member.socialLinks.linkedin && (
                                        <a
                                            href={member.socialLinks.linkedin}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="bg-[#546a45] p-2 rounded-full text-white hover:bg-[#afdfaa]"
                                        >
                                        <FaLinkedin />
                                    </a>
                                    )}
                                        {member.socialLinks.instagram && (
                                        <a
                                            href={member.socialLinks.instagram}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="bg-[#546a45] p-2 rounded-full text-white hover:bg-[#afdfaa]"
                                        >
                                        <FaInstagram />
                                    </a>
                                    )}
            
                            </div>

                            </div>
                            
                        </div>
                        

                    ))}
                    
                </div>
            </div>

        </div>

    )
    
    
 }


export default Team;