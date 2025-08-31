import Projects from "./Projects"; // Import the reusable Projects component
import Footer from "../../components/footer";
import ReusableHeroSection from "../../components/ReusableHeroSection";
const ProjectsPage = () => {
  return (
    <div>
      <ReusableHeroSection 
        backgroundImage="/src/assets/images/beautiful-japanese-forest-landscape.jpg" 
        heading="Projects" 
        description="Explore our amazing projects" 
        description2="Learn more about what we do" 
        button="Get Involved" 
        buttonLink="/getinvolved" 
        height="h-[70vh]"
      />
      <Projects /> {/* Reuse the Projects component */}
      <Footer />
    </div>
  );
};

export default ProjectsPage;