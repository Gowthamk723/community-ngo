"use client";

import { useRouter } from "next/navigation";
import { signOut, useSession } from "next-auth/react";
import { Lightbulb, HeartHandshake, Users, Zap, BookOpen, ChevronRight, ArrowRight, Globe, Leaf, GraduationCap } from 'lucide-react';
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";

export default function EnhancedDashboard() {
  const router = useRouter();
  const { data: session } = useSession();

  const handleLogout = async () => {
    await signOut({ redirect: false });
    router.push("/");
  };

  const handleIdeaSubmission = () => router.push("/IdeaSubmission");
  const handleExploreProjects = () => router.push("/ideas");
  const handleDonate = () => router.push("/funding-portal");
  const handleViewAllStories = () => router.push("/success-stories");

  const roles = [
    { 
      title: "NGO", 
      desc: "Non-profit organizations seeking innovative solutions.",
      icon: <HeartHandshake className="w-8 h-8 text-blue-500" />,
      color: "bg-blue-50 hover:bg-blue-100"
    },
    { 
      title: "Innovator", 
      desc: "Individuals or teams with innovative ideas for social impact.",
      icon: <Lightbulb className="w-8 h-8 text-yellow-500" />,
      color: "bg-yellow-50 hover:bg-yellow-100"
    },
    { 
      title: "Donor", 
      desc: "Philanthropic individuals or organizations looking to fund impactful projects.",
      icon: <HeartHandshake className="w-8 h-8 text-red-500" />,
      color: "bg-red-50 hover:bg-red-100"
    },
    { 
      title: "Mentor", 
      desc: "Experienced professionals offering guidance and support.",
      icon: <Users className="w-8 h-8 text-purple-500" />,
      color: "bg-purple-50 hover:bg-purple-100"
    },
    { 
      title: "Community", 
      desc: "A space for collaboration, discussion, and shared learning.",
      icon: <Globe className="w-8 h-8 text-green-500" />,
      color: "bg-green-50 hover:bg-green-100"
    },
  ];

  const successStories = [
    {
      title: "Empowering Communities Through Sustainable Agriculture",
      desc: "A local NGO partnered with innovators to implement a community garden project, providing fresh produce and economic opportunities for residents.",
      img: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80",
      category: "Agriculture",
      icon: <Leaf className="w-5 h-5 text-green-500" />
    },
    {
      title: "Clean Energy for Rural Villages",
      desc: "An innovator developed a cost-effective solar panel system, bringing electricity to a remote village and improving quality of life.",
      img: "https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2072&q=80",
      category: "Clean Energy",
      icon: <Zap className="w-5 h-5 text-yellow-500" />
    },
    {
      title: "Innovative Learning Tools for Education",
      desc: "A mentor guided educators in creating an interactive learning platform, enhancing student engagement and academic performance.",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8fvXQp96e5Q6kBwILQCDyetHVwWrwYds_jg&s",
      category: "Education",
      icon: <GraduationCap className="w-5 h-5 text-blue-500" />
    },
  ];

  const impactHighlights = [
    { label: "Ideas Submitted", count: 1500, percentage: 75, icon: <Lightbulb className="w-5 h-5 text-blue-500" />, color: "bg-blue-500" },
    { label: "Pilots Launched", count: 750, percentage: 50, icon: <Zap className="w-5 h-5 text-yellow-500" />, color: "bg-yellow-500" },
    { label: "Projects Scaled", count: 375, percentage: 25, icon: <BookOpen className="w-5 h-5 text-green-500" />, color: "bg-green-500" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />

      {/* Hero Section */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block">Turning Ideas into</span>
            <span className="block text-indigo-600">Scalable Social Impact</span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Connect with innovators, funders, and mentors to create meaningful change in communities around the world.
          </p>
          <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
            <button
              onClick={handleIdeaSubmission}
              className="w-full sm:w-auto flex items-center justify-center px-8 py-3 mb-3 sm:mb-0 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 transition"
            >
              Submit Your Idea
            </button>
            <button
              onClick={handleExploreProjects}
              className="w-full sm:w-auto flex items-center justify-center px-8 py-3 sm:ml-3 border border-gray-300 text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-gray-100 transition"
            >
              Explore Projects
            </button>
          </div>
        </div>
      </div>

      {/* Roles Section */}
      <div className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Your Role in the Ecosystem</h2>
            <p className="mt-3 text-xl text-gray-500">Choose your path to making an impact</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-5">
            {roles.map((role, i) => (
              <div key={i} className={`${role.color} p-6 rounded-xl shadow hover:shadow-lg transition cursor-pointer`}>
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-white shadow-sm">
                  {role.icon}
                </div>
                <h3 className="mt-4 text-lg font-medium text-gray-900">{role.title}</h3>
                <p className="mt-2 text-sm text-gray-600">{role.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Impact Highlights */}
      <div className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-8">Our Impact</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {impactHighlights.map((item, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 shadow hover:shadow-lg transition">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex-shrink-0 p-3 rounded-md bg-white shadow-sm">{item.icon}</div>
                  <div className="text-2xl font-semibold text-gray-900">{item.count.toLocaleString()}</div>
                </div>
                <p className="text-gray-500 text-sm mb-2">{item.label}</p>
                <div className="w-full h-2 bg-gray-200 rounded-full">
                  <div className={`${item.color} h-2 rounded-full`} style={{ width: `${item.percentage}%` }}></div>
                </div>
                <p className="text-right text-gray-400 text-xs mt-1">{item.percentage}% of target</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Success Stories */}
      <div className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Success Stories</h2>
              <p className="mt-2 text-gray-500">See how we're making a difference together</p>
            </div>
            <button onClick={handleViewAllStories} className="text-indigo-600 hover:text-indigo-800 font-medium flex items-center">
              View all stories <ChevronRight className="ml-1 h-5 w-5" />
            </button>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {successStories.map((story, i) => (
              <div key={i} className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden">
                <img src={story.img} alt={story.title} className="h-48 w-full object-cover hover:scale-105 transition-transform duration-500" />
                <div className="p-6">
                  <div className="flex items-center mb-2">
                    <div className="p-1.5 bg-gray-100 rounded-md">{story.icon}</div>
                    <span className="ml-2 text-indigo-600 text-sm font-medium">{story.category}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">{story.title}</h3>
                  <p className="text-gray-500 mt-2">{story.desc}</p>
                  <button className="mt-4 text-indigo-600 hover:text-indigo-800 font-medium flex items-center">
                    Read full story <ArrowRight className="ml-1 h-4 w-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-indigo-600">
        <div className="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">Ready to make an impact?</h2>
          <p className="mt-4 text-lg text-indigo-100">Join our community of change-makers today and start turning your ideas into reality.</p>
          <button onClick={handleDonate} className="mt-8 px-8 py-3 rounded-md bg-white text-indigo-600 font-medium hover:bg-gray-100 transition">
            Donate Now
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
}
