'use client';

import { useState } from 'react';
import { Search, MessageSquare, Video, Calendar, BookOpen, Users, BarChart2, Bell, Clock } from 'lucide-react';
import Header from "@/components/common/Header";

export default function MentorshipDashboard() {
  const [activeTab, setActiveTab] = useState('my-mentors');
  const [searchQuery, setSearchQuery] = useState('');

  const mentors = [
    {
      id: 1,
      name: 'Dr. Sarah Johnson',
      role: 'Education Specialist',
      expertise: ['Curriculum Development', 'Teacher Training'],
      available: true,
      rating: 4.8,
      sessions: 124,
      avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmySXTMMSiFWHAyzGy9Y8xlHNNIpX3E7JblA&s'
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'Nonprofit Management',
      expertise: ['Fundraising', 'Strategic Planning'],
      available: false,
      rating: 4.9,
      sessions: 89,
      avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmySXTMMSiFWHAyzGy9Y8xlHNNIpX3E7JblA&s'
    },
    {
      id: 3,
      name: 'Priya Patel',
      role: 'Social Entrepreneur',
      expertise: ['Startup Funding', 'Scaling Impact'],
      available: true,
      rating: 4.7,
      sessions: 67,
      avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmySXTMMSiFWHAyzGy9Y8xlHNNIpX3E7JblA&s'
    },
  ];

  const upcomingSessions = [
    {
      id: 1,
      mentor: 'Dr. Sarah Johnson',
      date: '2023-11-15',
      time: '14:00',
      duration: '60 min',
      type: 'Video Call'
    },
    {
      id: 2,
      mentor: 'Michael Chen',
      date: '2023-11-18',
      time: '11:30',
      duration: '45 min',
      type: 'In-Person'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <Header />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Mentorship Hub</h1>
            <p className="mt-1 text-gray-600">Connect with experienced mentors to grow your impact</p>
          </div>
          <div className="mt-4 md:mt-0 flex space-x-3">
            <button className="px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Find a Mentor
            </button>
            <button className="px-4 py-2 border border-gray-300 bg-white text-sm font-medium rounded-md text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              <MessageSquare className="h-5 w-5 text-gray-500 inline-block mr-1" />
              Messages
            </button>
          </div>
        </div>

        <div className="bg-white shadow rounded-lg overflow-hidden mb-8">
          <div className="border-b border-gray-200">
            <nav className="flex -mb-px">
              <button
                onClick={() => setActiveTab('my-mentors')}
                className={`${activeTab === 'my-mentors' ? 'border-indigo-500 text-indigo-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'} whitespace-nowrap py-4 px-6 border-b-2 font-medium text-sm`}
              >
                My Mentors
              </button>
              <button
                onClick={() => setActiveTab('upcoming')}
                className={`${activeTab === 'upcoming' ? 'border-indigo-500 text-indigo-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'} whitespace-nowrap py-4 px-6 border-b-2 font-medium text-sm`}
              >
                Upcoming Sessions
              </button>
              <button
                onClick={() => setActiveTab('resources')}
                className={`${activeTab === 'resources' ? 'border-indigo-500 text-indigo-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'} whitespace-nowrap py-4 px-6 border-b-2 font-medium text-sm`}
              >
                Learning Resources
              </button>
            </nav>
          </div>

          <div className="p-6">
            {/* My Mentors Tab */}
            {activeTab === 'my-mentors' && (
              <div>
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-lg font-medium text-gray-900">My Mentors</h2>
                  <div className="relative rounded-md shadow-sm w-64">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Search className="h-4 w-4 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md py-2 border"
                      placeholder="Search mentors..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {mentors
                    .filter(mentor =>
                      mentor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                      mentor.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
                      mentor.expertise.some(e => e.toLowerCase().includes(searchQuery.toLowerCase()))
                    )
                    .map((mentor) => (
                      <div key={mentor.id} className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200">
                        <div className="p-6">
                          <div className="flex items-center">
                            <img
                              src={mentor.avatar}
                              alt={mentor.name}
                              className="h-16 w-16 rounded-full object-cover flex-shrink-0"
                            />
                            <div className="ml-4">
                              <h3 className="text-lg font-medium text-gray-900">{mentor.name}</h3>
                              <p className="text-sm text-gray-500">{mentor.role}</p>
                              <div className="flex items-center mt-1">
                                <span className="text-yellow-400">★</span>
                                <span className="ml-1 text-sm text-gray-600">{mentor.rating} ({mentor.sessions} sessions)</span>
                              </div>
                            </div>
                          </div>

                          <div className="mt-4">
                            <h4 className="text-sm font-medium text-gray-900">Expertise</h4>
                            <div className="mt-2 flex flex-wrap gap-2">
                              {mentor.expertise.map((skill, i) => (
                                <span key={i} className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">
                                  {skill}
                                </span>
                              ))}
                            </div>
                          </div>

                          <div className="mt-6 flex space-x-3">
                            <button className="flex-1 bg-indigo-600 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                              <MessageSquare className="h-4 w-4 inline-block mr-1" /> Message
                            </button>
                            <button className="flex-1 bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                              <Calendar className="h-4 w-4 inline-block mr-1" /> Schedule
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            )}

            {/* Upcoming Sessions Tab */}
            {activeTab === 'upcoming' && (
              <div>
                <h2 className="text-lg font-medium text-gray-900 mb-6">Upcoming Sessions</h2>
                <div className="bg-white shadow overflow-hidden sm:rounded-md">
                  <ul className="divide-y divide-gray-200">
                    {upcomingSessions.map((session) => (
                      <li key={session.id}>
                        <div className="px-4 py-4 sm:px-6">
                          <div className="flex items-center justify-between">
                            <p className="text-sm font-medium text-indigo-600 truncate">{session.mentor}</p>
                            <div className="ml-2 flex-shrink-0 flex">
                              <p className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                {session.type}
                              </p>
                            </div>
                          </div>
                          <div className="mt-2 sm:flex sm:justify-between">
                            <div className="sm:flex">
                              <p className="flex items-center text-sm text-gray-500">
                                <Calendar className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" />
                                {session.date} at {session.time}
                              </p>
                              <p className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0 sm:ml-6">
                                <Clock className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" />
                                {session.duration}
                              </p>
                            </div>
                            <div className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">
                              <button className="text-indigo-600 hover:text-indigo-900 mr-4">Reschedule</button>
                              <button className="text-red-600 hover:text-red-900">Cancel</button>
                            </div>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {/* Learning Resources Tab */}
            {activeTab === 'resources' && (
              <div>
                <h2 className="text-lg font-medium text-gray-900 mb-6">Learning Resources</h2>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {[{
                    title: 'Nonprofit Management 101',
                    type: 'Course',
                    duration: '2h 30m',
                    progress: 65
                  }, {
                    title: 'Fundraising Strategies',
                    type: 'E-book',
                    duration: '45m',
                    progress: 0
                  }, {
                    title: 'Measuring Social Impact',
                    type: 'Webinar',
                    duration: '1h 15m',
                    progress: 0
                  }].map((resource, index) => (
                    <div key={index} className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                      <div className="p-6">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 bg-indigo-100 rounded-md p-3">
                            <BookOpen className="h-6 w-6 text-indigo-600" />
                          </div>
                          <div className="ml-4">
                            <h3 className="text-lg font-medium text-gray-900">{resource.title}</h3>
                            <p className="text-sm text-gray-500">{resource.type} • {resource.duration}</p>
                          </div>
                        </div>
                        {resource.progress > 0 ? (
                          <div className="mt-4">
                            <div className="flex justify-between text-sm text-gray-600 mb-1">
                              <span>Progress</span>
                              <span>{resource.progress}%</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2">
                              <div className="bg-indigo-600 h-2 rounded-full" style={{ width: `${resource.progress}%` }}></div>
                            </div>
                            <button className="mt-4 w-full bg-indigo-600 border border-transparent rounded-md py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                              Continue
                            </button>
                          </div>
                        ) : (
                          <button className="mt-4 w-full bg-white border border-gray-300 rounded-md py-2 px-4 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                            Start Learning
                          </button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
