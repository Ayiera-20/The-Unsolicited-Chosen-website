import { Link } from 'react-router-dom';
import AnimatedText from '../../components/AnimatedText';

const HelpClean = () =>{
    return (
        <div className=" flex flex-col justify-center items-center text-center md:px-20 px-10 md:py-30 py-15">
            <h2 className="md:mb-20 mb-10 font-bold text-[#184E35] lg:text-[2rem] md:text-[1.75rem] text-2xl slide">Help clean a street. Plant a tree. Spark a movement.</h2>
            <AnimatedText>
            <p className="md:mb-15 mb-10 max-w-202 lg:text-lg  md:text-base text-xs">Your contribution goes directly to waste bins, cleanup gear, seedlings, and community education in Nairobi’s most undeserved areas. No amount is too small together, we can restore dignity and hope where it's needed most.</p>
            <p className="md:mb-20 mb-10 lg:text-lg  md:text-base text-sm">Give today. Be the difference.</p>
            </AnimatedText>
            <Link to ="/donate">
            <button className="btn-primary ">Donate Today</button>
            </Link>
            
        </div>
    )
}
export default HelpClean;