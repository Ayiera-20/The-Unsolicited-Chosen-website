import {
  FaTwitter,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";
import profile from "../../assets/images/woman-floral-shirt-smiling.jpg"


const teamMembers = [

    {image:profile, role: "Founder", name: "Jenny Otinda", 
        description: "Team volunteering not only allows for greater impact but also fosters camaraderie and teamwork among participants.",
        socialLinks:{
        twitter: "https://twitter.com",
        instagram: "https://instagram.com",
        linkedin: "https://linkedin.com"
    } },
    {image:profile,role: "Software Developer", name: "Miriam Ayiera", 
        description: "Team volunteering not only allows for greater impact but also fosters camaraderie and teamwork among participants.",
        socialLinks:{
        twitter: "https://twitter.com",
        instagram: "https://instagram.com",
        linkedin: "https://linkedin.com"
    } },
     {image:profile, role: "PR", name: "Hope", 
        description: "Team volunteering not only allows for greater impact but also fosters camaraderie and teamwork among participants.",
        socialLinks:{
        twitter: "https://twitter.com",
        instagram: "https://instagram.com",
        linkedin: "https://linkedin.com"
    } },
     {image:profile, role: "Finance", name: "John", 
        description: "Team volunteering not only allows for greater impact but also fosters camaraderie and teamwork among participants.",
        socialLinks:{
        twitter: "https://twitter.com",
        instagram: "https://instagram.com",
        linkedin: "https://linkedin.com"
    } },
     {image:profile, role: "Graphic Designer", name: "Jackline", 
        description: "Team volunteering not only allows for greater impact but also fosters camaraderie and teamwork among participants.",
        socialLinks:{
        twitter: "https://twitter.com",
        instagram: "https://instagram.com",
        linkedin: "https://linkedin.com"
    } },
    
]
const Team = () => {
    return(
        <div className="px-20 py-30 flex flex-col items-center justify-center">
            <h1 className="text-[64px] mb-20 text-[#184E35]">Meet Our Team</h1>
            <div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-15">
                    {teamMembers.map((member, index) => (
                        <div key={index} className="flex flex-col md:flex-row gap-6">
                            <img className="w-45 h-auto" src ={member.image} alt={member.name} />
                            <div className="space-y-4">
                                <h3 className="text-[#A3B18A] lg:text-lg">{member.role}</h3>
                                <p className="text-2xl">{member.name}</p>
                                <div className="w-96 h-[1px] bg-[#AFDFAA]"></div>
                                <p className="text-[18px]">{member.description}</p>
                                <div className="flex  gap-4 mt-8">
                                    {member.socialLinks.twitter && (
                                        <a
                                            href={member.socialLinks.twitter}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="bg-[#184E35] p-2 rounded-full text-white hover:bg-[#818F39]"
                                        >
                                            <FaTwitter />
                                        </a>
                                    )}
                                    {member.socialLinks.linkedin && (
                                        <a
                                            href={member.socialLinks.linkedin}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="bg-[#184E35] p-2 rounded-full text-white hover:bg-[#818F39]"
                                        >
                                        <FaLinkedin />
                                    </a>
                                    )}
                                        {member.socialLinks.instagram && (
                                        <a
                                            href={member.socialLinks.instagram}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="bg-[#184E35] p-2 rounded-full text-white hover:bg-[#818F39]"
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