'use client';
import Header from "@/components/common/Header";

export default function FundingPortal() {
  const projects = [
    {
      id: 1,
      title: 'Clean Water Initiative',
      description: 'Providing clean drinking water to rural communities',
      target: 50000,
      raised: 32500,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSR-xzEfViw0SrpMs2rmfbFLhkbL8nXBkQIVg&s',
      category: 'Health'
    },
    {
      id: 2,
      title: 'Education for All',
      description: 'Building schools and providing educational materials',
      target: 75000,
      raised: 45000,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8fvXQp96e5Q6kBwILQCDyetHVwWrwYds_jg&s',
      category: 'Education'
    },
    {
      id: 3,
      title: 'Sustainable Farming',
      description: 'Training farmers in sustainable agricultural practices',
      target: 30000,
      raised: 18000,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQT9QlgBYsCbeaK_BsvaLhBYM25WHR-nPU3IA&s',
      category: 'Environment'
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* ✅ Header visible on top */}
      <Header />
      
      <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
              Funding Portal
            </h1>
            <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
              Support innovative projects that create lasting impact in communities worldwide.
            </p>
          </div>

          {/* Project Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((project) => {
              const progress = Math.min(Math.round((project.raised / project.target) * 100), 100);

              return (
                <div key={project.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                  {/* Project Image */}
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />

                  <div className="p-6">
                    <div className="flex justify-between items-start">
                      <div>
                        <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800">
                          {project.category}
                        </span>
                      </div>
                      <div className="text-2xl font-bold text-gray-900">${project.raised.toLocaleString()}</div>
                    </div>
                    
                    <h3 className="mt-2 text-xl font-semibold text-gray-900">{project.title}</h3>
                    <p className="mt-2 text-gray-600">{project.description}</p>
                    
                    <div className="mt-4">
                      <div className="flex justify-between text-sm text-gray-500 mb-1">
                        <span>Raised: ${project.raised.toLocaleString()}</span>
                        <span>Goal: ${project.target.toLocaleString()}</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div 
                          className="bg-indigo-600 h-2.5 rounded-full" 
                          style={{ width: `${progress}%` }}
                        ></div>
                      </div>
                    </div>
                    
                    <button className="mt-6 w-full bg-indigo-600 border border-transparent rounded-md py-3 px-4 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                      Donate Now
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Corporate Sponsor Section */}
          <div className="mt-12 bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Become a Corporate Sponsor</h2>
            <p className="text-gray-600 mb-6">
              Partner with us to create meaningful change. Our corporate sponsorship program offers 
              opportunities for businesses to align with causes that matter.
            </p>
            <button className="bg-white border border-indigo-600 text-indigo-600 hover:bg-indigo-50 px-6 py-3 rounded-md text-base font-medium">
              Learn More About Sponsorship
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
