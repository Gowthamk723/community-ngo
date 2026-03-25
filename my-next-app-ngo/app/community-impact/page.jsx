'use client';

import Header from "@/components/common/Header";

export default function CommunityImpactPage() {
  const successStories = [
    {
      title: "Clean Water Initiative",
      description:
        "Provided clean drinking water to over 2,000 families in rural areas, improving health and hygiene.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSR-xzEfViw0SrpMs2rmfbFLhkbL8nXBkQIVg&s"
      },
    {
      title: "Education for All",
      description:
        "Built and supported schools, ensuring quality education for underprivileged children in our community.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8fvXQp96e5Q6kBwILQCDyetHVwWrwYds_jg&s",
    },
    {
      title: "Tree Plantation Drive",
      description:
        "Planted over 5,000 trees, promoting sustainability and raising awareness about environmental conservation.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZetejpXZKGPLuJTAZVpNYhxK6RT93u3s_tg&s",
    },
  ];

  const testimonials = [
    {
      name: "John Doe",
      role: "Community Member",
      quote:
        "This organization has made a real difference in our community. Their programs are well-structured and impactful.",
      avatar: "data:image/jpeg;base64,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",
    },
    {
      name: "Jane Smith",
      role: "Volunteer",
      quote:
        "Volunteering here has been a life-changing experience. The team is passionate and supportive.",
      avatar: "data:image/jpeg;base64,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",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <Header />

      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Community Impact</h1>

          {/* Impact Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {[
              { title: 'Lives Impacted', value: '10,000+', description: 'Beneficiaries reached through our programs' },
              { title: 'Projects Completed', value: '250+', description: 'Successful projects implemented' },
              { title: 'Volunteers', value: '500+', description: 'Active volunteers in our network' },
            ].map((metric, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold text-indigo-600 mb-2">{metric.value}</h3>
                <h4 className="text-lg font-semibold text-gray-900">{metric.title}</h4>
                <p className="text-gray-600 mt-2">{metric.description}</p>
              </div>
            ))}
          </div>

          {/* Success Stories */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Success Stories</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {successStories.map((story, index) => (
                <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md">
                  <img
                    src={story.image}
                    alt={story.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{story.title}</h3>
                    <p className="text-gray-600 mb-4">{story.description}</p>
                    <button className="text-indigo-600 font-medium hover:text-indigo-800">
                      Read more →
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Testimonials */}
          <div className="bg-indigo-50 p-8 rounded-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">What People Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                  <p className="text-gray-700 italic mb-4">"{testimonial.quote}"</p>
                  <div className="flex items-center">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full mr-4 object-cover"
                    />
                    <div>
                      <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                      <p className="text-sm text-gray-600">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
