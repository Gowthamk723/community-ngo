'use client';

import Header from '@/components/common/Header';
import { useState } from 'react';
import { Bell, MessageSquare, CheckCircle, AlertTriangle, Info, X, Search } from 'lucide-react';

const NotificationsPage = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedMessage, setSelectedMessage] = useState(null);

  const notifications = [
    {
      id: 1,
      type: 'success',
      title: 'Idea Approved',
      message: 'Your project "Clean Water Initiative" has been approved and is now live!',
      time: '2 hours ago',
      read: false,
      sender: 'System',
      category: 'project'
    },
    {
      id: 2,
      type: 'message',
      title: 'New Message',
      message: 'You have a new message from Sarah Johnson regarding your mentorship application.',
      time: '5 hours ago',
      read: false,
      sender: 'Sarah Johnson',
      category: 'mentorship'
    },
    {
      id: 3,
      type: 'warning',
      title: 'Action Required',
      message: 'Your project "Education for All" needs additional information to proceed.',
      time: '1 day ago',
      read: true,
      sender: 'Review Team',
      category: 'project'
    },
    {
      id: 4,
      type: 'info',
      title: 'New Feature',
      message: 'Check out our new mentorship matching feature to find the perfect mentor!',
      time: '2 days ago',
      read: true,
      sender: 'NGO FutureProof Team',
      category: 'announcement'
    },
  ];

  const messages = [
    {
      id: 1,
      sender: 'Sarah Johnson',
      avatar: '/avatars/sarah.jpg',
      preview: 'Hi there! I\'d love to discuss your project idea in more detail...',
      time: '2:30 PM',
      unread: true,
      category: 'mentor'
    },
    {
      id: 2,
      sender: 'Project Review Team',
      avatar: '/avatars/team.jpg',
      preview: 'Your project "Clean Water Initiative" has been reviewed...',
      time: 'Yesterday',
      unread: false,
      category: 'system'
    },
    {
      id: 3,
      sender: 'Michael Chen',
      avatar: '/avatars/michael.jpg',
      preview: 'Thanks for your interest in our mentorship program...',
      time: 'Mar 15',
      unread: false,
      category: 'mentor'
    },
  ];

  const filteredNotifications = notifications.filter(notification => {
    const matchesSearch = notification.message.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         notification.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeTab === 'all' || notification.category === activeTab;
    return matchesSearch && matchesCategory;
  });

  const filteredMessages = messages.filter(message => {
    const matchesSearch = message.preview.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         message.sender.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeTab === 'all' || message.category === activeTab;
    return matchesSearch && matchesCategory;
  });

  const unreadCount = notifications.filter(n => !n.read).length;
  const unreadMessages = messages.filter(m => m.unread).length;

  const renderIcon = (type) => {
    switch (type) {
      case 'success':
        return <CheckCircle className="h-5 w-5 text-green-500" />;
      case 'warning':
        return <AlertTriangle className="h-5 w-5 text-yellow-500" />;
      case 'message':
        return <MessageSquare className="h-5 w-5 text-blue-500" />;
      default:
        return <Info className="h-5 w-5 text-gray-500" />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
              {/* ✅ Header visible on top */}
              <Header />
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Notifications & Messages</h1>
              <p className="mt-1 text-gray-600">Stay updated with your activities and conversations</p>
            </div>
            <div className="mt-4 md:mt-0
            ">
              <div className="relative rounded-md shadow-sm w-64">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-4 w-4 text-gray-400" />
                </div>
                <input
                  type="text"
                  className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md py-2 border"
                  placeholder="Search notifications..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
          </div>

          <div className="bg-white shadow overflow-hidden rounded-lg">
            <div className="border-b border-gray-200">
              <nav className="flex -mb-px">
                <button
                  onClick={() => setActiveTab('all')}
                  className={`${activeTab === 'all' ? 'border-indigo-500 text-indigo-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'} whitespace-nowrap py-4 px-6 border-b-2 font-medium text-sm`}
                >
                  All
                </button>
                <button
                  onClick={() => setActiveTab('mentor')}
                  className={`${activeTab === 'mentor' ? 'border-indigo-500 text-indigo-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'} whitespace-nowrap py-4 px-6 border-b-2 font-medium text-sm`}
                >
                  Mentorship
                </button>
                <button
                  onClick={() => setActiveTab('project')}
                  className={`${activeTab === 'project' ? 'border-indigo-500 text-indigo-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'} whitespace-nowrap py-4 px-6 border-b-2 font-medium text-sm`}
                >
                  Projects
                </button>
                <button
                  onClick={() => setActiveTab('announcement')}
                  className={`${activeTab === 'announcement' ? 'border-indigo-500 text-indigo-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'} whitespace-nowrap py-4 px-6 border-b-2 font-medium text-sm`}
                >
                  Announcements
                </button>
                <div className="ml-auto flex items-center pr-6">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800 mr-2">
                    {unreadCount} unread notifications
                  </span>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                    {unreadMessages} unread messages
                  </span>
                </div>
              </nav>
            </div>

            <div className="bg-white overflow-hidden">
              <div className="divide-y divide-gray-200">
                <div className="grid grid-cols-1 md:grid-cols-3">
                  {/* Notifications List */}
                  <div className="border-r border-gray-200 md:col-span-1 h-[600px] overflow-y-auto">
                    <div className="p-4 border-b border-gray-200 bg-gray-50">
                      <h3 className="text-lg font-medium text-gray-900">Notifications</h3>
                    </div>
                    <div className="divide-y divide-gray-200">
                      {filteredNotifications.length > 0 ? (
                        filteredNotifications.map((notification) => (
                          <div 
                            key={notification.id} 
                            className={`p-4 hover:bg-gray-50 cursor-pointer ${!notification.read ? 'bg-blue-50' : ''}`}
                            onClick={() => setSelectedMessage(notification)}
                          >
                            <div className="flex items-start">
                              <div className="flex-shrink-0 pt-0.5">
                                {renderIcon(notification.type)}
                              </div>
                              <div className="ml-3 flex-1">
                                <div className="flex items-center justify-between">
                                  <p className="text-sm font-medium text-gray-900">
                                    {notification.title}
                                  </p>
                                  <p className="text-xs text-gray-500">{notification.time}</p>
                                </div>
                                <p className="text-sm text-gray-600 line-clamp-2">
                                  {notification.message}
                                </p>
                                {!notification.read && (
                                  <span className="inline-flex items-center mt-1 text-xs text-blue-600">
                                    New
                                  </span>
                                )}
                              </div>
                            </div>
                          </div>
                        ))
                      ) : (
                        <div className="p-4 text-center text-gray-500">
                          No notifications found
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Messages List */}
                  <div className="border-r border-gray-200 md:col-span-1 h-[600px] overflow-y-auto">
                    <div className="p-4 border-b border-gray-200 bg-gray-50">
                      <h3 className="text-lg font-medium text-gray-900">Messages</h3>
                    </div>
                    <div className="divide-y divide-gray-200">
                      {filteredMessages.length > 0 ? (
                        filteredMessages.map((message) => (
                          <div 
                            key={message.id} 
                            className={`p-4 hover:bg-gray-50 cursor-pointer ${message.unread ? 'bg-blue-50' : ''}`}
                            onClick={() => setSelectedMessage(message)}
                          >
                            <div className="flex items-start">
                              <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center">
                                <span className="text-gray-600">{message.sender.charAt(0)}</span>
                              </div>
                              <div className="ml-3 flex-1 min-w-0">
                                <div className="flex items-center justify-between">
                                  <p className="text-sm font-medium text-gray-900 truncate">
                                    {message.sender}
                                  </p>
                                  <p className="text-xs text-gray-500">{message.time}</p>
                                </div>
                                <p className="text-sm text-gray-600 truncate">
                                  {message.preview}
                                </p>
                                {message.unread && (
                                  <span className="inline-flex items-center mt-1 text-xs text-blue-600">
                                    New message
                                  </span>
                                )}
                              </div>
                            </div>
                          </div>
                        ))
                      ) : (
                        <div className="p-4 text-center text-gray-500">
                          No messages found
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Message Detail View */}
                  <div className="md:col-span-1 h-[600px] overflow-y-auto">
                    {selectedMessage ? (
                      <div className="h-full flex flex-col">
                        <div className="p-4 border-b border-gray-200 bg-gray-50 flex justify-between items-center">
                          <h3 className="text-lg font-medium text-gray-900">
                            {selectedMessage.sender || 'Notification'}
                          </h3>
                          <button 
                            onClick={() => setSelectedMessage(null)}
                            className="text-gray-400 hover:text-gray-500"
                          >
                            <X className="h-5 w-5" />
                          </button>
                        </div>
                        <div className="flex-1 p-4 overflow-y-auto">
                          <div className="mb-4">
                            <div className="flex items-center justify-between mb-2">
                              <h4 className="text-sm font-medium text-gray-900">
                                {selectedMessage.title || 'Message'}
                              </h4>
                              <p className="text-xs text-gray-500">
                                {selectedMessage.time || 'Recently'}
                              </p>
                            </div>
                            <div className="prose prose-sm max-w-none text-gray-700">
                              {selectedMessage.message || selectedMessage.preview}
                            </div>
                          </div>
                          {selectedMessage.category === 'mentor' && (
                            <div className="mt-6 pt-6 border-t border-gray-200">
                              <h4 className="text-sm font-medium text-gray-900 mb-3">Reply</h4>
                              <form className="space-y-4">
                                <div>
                                  <label htmlFor="message" className="sr-only">Message</label>
                                  <textarea
                                    id="message"
                                    name="message"
                                    rows={4}
                                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-300 rounded-md"
                                    placeholder="Type your message here..."
                                    defaultValue={''}
                                  />
                                </div>
                                <div className="flex justify-end">
                                  <button
                                    type="submit"
                                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                  >
                                    Send Message
                                  </button>
                                </div>
                              </form>
                            </div>
                          )}
                        </div>
                      </div>
                    ) : (
                      <div className="h-full flex items-center justify-center text-gray-500">
                        <div className="text-center">
                          <MessageSquare className="mx-auto h-12 w-12 text-gray-400" />
                          <h3 className="mt-2 text-sm font-medium text-gray-900">No message selected</h3>
                          <p className="mt-1 text-sm text-gray-500">Select a notification or message to view details</p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 flex justify-end">
            <button
              type="button"
              className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Mark all as read
            </button>
            <button
              type="button"
              className="ml-3 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <MessageSquare className="-ml-1 mr-2 h-5 w-5" />
              New Message
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotificationsPage;
