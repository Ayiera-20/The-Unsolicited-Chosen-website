const Projects = () => {
  return (
    <div className="md:px-20 md:py-30 px-10 py-15">
      <h1 className="text-3xl font-bold text-center text-[#184E35] mb-8">Our Projects</h1>
      <p className="italic font-bold pb-12 text-[#184E35] lg:text-lg md:text-base text-sm text-center">
        Transforming our communities, one action at a time.
      </p>
      {/* Center this text */}
      <div className="flex items-center justify-center h-full mb-12">
        <p className="lg:text-lg md:text-base text-sm md:w-120.5 w-auto text-center">
          From cleaning up public spaces to teaching sustainable waste practices and planting trees, our programmes are practical, people-powered, and built to scale.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-12">
          <img
            className="w-full h-64 object-cover rounded-xl"
            src="https://images.pexels.com/photos/9090747/pexels-photo-9090747.jpeg" // Replace with actual image path
            alt="Community Cleanups"
          />
          <h3 className="text-lg font-bold text-[#184E35]">Community Cleanups</h3>
          <p className="text-sm text-gray-700">
            Organizing community-driven cleanups to restore public spaces and promote environmental awareness.
          </p>
        </div>
        <div className="space-y-12">
          <img
            className="w-full h-64 object-cover rounded-xl"
            src="https://images.pexels.com/photos/5029923/pexels-photo-5029923.jpeg" // Replace with actual image path
            alt="Affordable Waste Solutions"
          />
          <h3 className="text-lg font-bold text-[#184E35]">Affordable Waste Solutions</h3>
          <p className="text-sm text-gray-700">
            Providing innovative and affordable waste management solutions to underserved communities.
          </p>
        </div>
        {/* Add more project cards as needed */}
      </div>
    </div>
  );
};

export default Projects;