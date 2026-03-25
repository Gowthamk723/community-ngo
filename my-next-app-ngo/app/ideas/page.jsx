'use client';

import Header from '@/components/common/Header';
import { useState } from 'react';
import Link from 'next/link';
import { Search, Filter, Plus, Lightbulb, Users, BarChart2 } from 'lucide-react';

export default function IdeasPage() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const ideas = [
    {
      id: 1,
      title: 'Clean Water Initiative',
      description: 'A project to provide clean drinking water to rural communities using sustainable filtration systems.',
      category: 'Environment',
      status: 'Under Review',
      votes: 124,
      comments: 23,
      author: 'Sarah Johnson',
      date: '2023-10-10',
      isFeatured: true
    },
    {
      id: 2,
      title: 'Digital Literacy Program',
      description: 'Teaching digital skills to underprivileged youth to improve their employment opportunities.',
      category: 'Education',
      status: 'In Progress',
      votes: 89,
      comments: 15,
      author: 'Michael Chen',
      date: '2023-10-05',
      isFeatured: false
    },
    {
      id: 3,
      title: 'Urban Farming Initiative',
      description: 'Creating community gardens in urban areas to promote sustainable living and food security.',
      category: 'Agriculture',
      status: 'Planning',
      votes: 67,
      comments: 8,
      author: 'Priya Patel',
      date: '2023-09-28',
      isFeatured: true
    },
    {
    id: 4,
    title: 'Blood Donation',
    description: 'Organizing blood donation camps in rural areas to support local healthcare needs.',
    category: 'Health',
    status: 'Planning',
    votes: 45,
    comments: 5,
    author: 'Amit Kumar',
    date: '2023-10-12',
    isFeatured: false
  }
  ];

  const filters = [
    { id: 'all', name: 'All Ideas' },
    { id: 'featured', name: 'Featured' },
    { id: 'popular', name: 'Most Popular' },
    { id: 'recent', name: 'Recently Added' },
    { id: 'under-review', name: 'Under Review' },
    { id: 'in-progress', name: 'In Progress' },
  ];

  const categories = [
    { id: 'all', name: 'All Categories', count: ideas.length },
    { id: 'environment', name: 'Environment', count: 12 },
    { id: 'education', name: 'Education', count: 8 },
    { id: 'health', name: 'Health', count: 5 },
    { id: 'agriculture', name: 'Agriculture', count: 7 },
    { id: 'technology', name: 'Technology', count: 9 },
  ];

  const filteredIdeas = ideas.filter(idea => {
    const matchesSearch = idea.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                        idea.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    let matchesFilter = true;
    if (activeFilter === 'featured') {
      matchesFilter = idea.isFeatured;
    } else if (activeFilter === 'popular') {
      matchesFilter = idea.votes > 50;
    } else if (activeFilter === 'recent') {
      // Filter for recent items (last 7 days)
      const weekAgo = new Date();
      weekAgo.setDate(weekAgo.getDate() - 7);
      matchesFilter = new Date(idea.date) > weekAgo;
    } else if (activeFilter === 'under-review') {
      matchesFilter = idea.status === 'Under Review';
    } else if (activeFilter === 'in-progress') {
      matchesFilter = idea.status === 'In Progress';
    }
    
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="min-h-screen bg-gray-50">
          {/* ✅ Header visible on top */}
          <Header />
      <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="sm:flex sm:items-center sm:justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Ideas</h1>
              <p className="mt-1 text-gray-600">Browse and contribute to innovative ideas</p>
            </div>
            <div className="mt-4 sm:mt-0">
              <Link
                href="/IdeaSubmission"
                className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <Plus className="-ml-1 mr-2 h-5 w-5" />
                Submit Idea
              </Link>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-6">
            {/* Sidebar */}
            <div className="lg:w-1/4 space-y-6">
              {/* Search */}
              <div className="bg-white p-4 rounded-lg shadow">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Search className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    placeholder="Search ideas..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
              </div>

              {/* Categories */}
              <div className="bg-white p-4 rounded-lg shadow">
                <h3 className="text-lg font-medium text-gray-900 mb-4">Categories</h3>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      className={`w-full flex items-center justify-between px-3 py-2 text-sm font-medium rounded-md ${
                        activeFilter === category.id
                          ? 'bg-indigo-50 text-indigo-700'
                          : 'text-gray-600 hover:bg-gray-50'
                      }`}
                      onClick={() => setActiveFilter(category.id)}
                    >
                      <span>{category.name}</span>
                      <span className="bg-gray-100 text-gray-600 text-xs font-medium px-2.5 py-0.5 rounded-full">
                        {category.count}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Filters */}
              <div className="bg-white p-4 rounded-lg shadow">
                <h3 className="text-lg font-medium text-gray-900 mb-4">Filters</h3>
                <div className="space-y-2">
                  {filters.map((filter) => (
                    <button
                      key={filter.id}
                      className={`w-full flex items-center px-3 py-2 text-sm font-medium rounded-md ${
                        activeFilter === filter.id
                          ? 'bg-indigo-50 text-indigo-700'
                          : 'text-gray-600 hover:bg-gray-50'
                      }`}
                      onClick={() => setActiveFilter(filter.id)}
                    >
                      <span>{filter.name}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:w-3/4">
              {/* Filter Tabs */}
              <div className="bg-white rounded-lg shadow overflow-hidden mb-6">
                <div className="border-b border-gray-200">
                  <nav className="-mb-px flex">
                    {filters.map((filter) => (
                      <button
                        key={filter.id}
                        onClick={() => setActiveFilter(filter.id)}
                        className={`${
                          activeFilter === filter.id
                            ? 'border-indigo-500 text-indigo-600'
                            : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                        } whitespace-nowrap py-4 px-6 border-b-2 font-medium text-sm`}
                      >
                        {filter.name}
                      </button>
                    ))}
                  </nav>
                </div>
              </div>

              {/* Ideas Grid */}
              <div className="space-y-6">
                {filteredIdeas.length > 0 ? (
                  filteredIdeas.map((idea) => (
                    <div key={idea.id} className="bg-white overflow-hidden shadow rounded-lg">
                      <div className="p-6">
                        <div className="flex items-start justify-between">
                          <div>
                            <div className="flex items-center">
                              <h3 className="text-lg font-medium text-gray-900">{idea.title}</h3>
                              {idea.isFeatured && (
                                <span className="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                                  Featured
                                </span>
                              )}
                              <span className="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                                {idea.category}
                              </span>
                            </div>
                            <p className="mt-2 text-gray-600">{idea.description}</p>
                            <div className="mt-4 flex items-center text-sm text-gray-500">
                              <span>Posted by {idea.author} on {new Date(idea.date).toLocaleDateString()}</span>
                              <span className="mx-2">•</span>
                              <span>{idea.comments} comments</span>
                            </div>
                          </div>
                          <div className="ml-4 flex-shrink-0 flex flex-col items-center">
                            <button
                              type="button"
                              className="inline-flex items-center px-3 py-1.5 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                              <Lightbulb className="-ml-0.5 mr-2 h-4 w-4 text-yellow-500" />
                              {idea.votes}
                            </button>
                            <span className="mt-1 text-xs text-gray-500">Votes</span>
                          </div>
                        </div>
                        <div className="mt-4 flex justify-between items-center">
                          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                            idea.status === 'Under Review' 
                              ? 'bg-blue-100 text-blue-800' 
                              : idea.status === 'In Progress'
                              ? 'bg-yellow-100 text-yellow-800'
                              : 'bg-green-100 text-green-800'
                          }`}>
                            {idea.status}
                          </span>
                          <Link
                            href={`/ideas`}
                            className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
                          >
                            View details →
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="bg-white overflow-hidden shadow rounded-lg p-8 text-center">
                    <Lightbulb className="mx-auto h-12 w-12 text-gray-400" />
                    <h3 className="mt-2 text-lg font-medium text-gray-900">No ideas found</h3>
                    <p className="mt-1 text-sm text-gray-500">
                      {searchQuery 
                        ? 'Try adjusting your search or filter to find what you\'re looking for.'
                        : 'There are no ideas matching the selected filters.'}
                    </p>
                    <div className="mt-6">
                      <Link
                        href="/IdeaSubmit"
                        className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      >
                        <Plus className="-ml-1 mr-2 h-5 w-5" />
                        Submit New Idea
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
  );
}
