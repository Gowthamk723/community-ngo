'use client';

import Header from "@/components/common/Header";

import { useState } from 'react';
import { Plus, MoreVertical, ArrowLeft, ArrowRight, Check, X, GitPullRequest, Clock, CheckCircle, AlertTriangle } from 'lucide-react';

export default function PipelinePage() {
  const [cards, setCards] = useState({
    backlog: [
      {
        id: 1,
        title: 'Community Garden Project',
        description: 'Establish urban gardens in 5 city locations',
        priority: 'high',
        category: 'Environment',
        assignee: null,
        dueDate: '2023-12-15',
      },
      {
        id: 2,
        title: 'Digital Literacy Workshop',
        description: 'Basic computer skills training for seniors',
        priority: 'medium',
        category: 'Education',
        assignee: null,
        dueDate: '2023-11-30',
      },
    ],
    todo: [
      {
        id: 3,
        title: 'Clean Water Initiative',
        description: 'Install water filtration systems in rural areas',
        priority: 'high',
        category: 'Health',
        assignee: 'Sarah Johnson',
        dueDate: '2023-11-20',
      },
    ],
    inProgress: [
      {
        id: 4,
        title: 'Youth Mentorship Program',
        description: 'Matching at-risk youth with professional mentors',
        priority: 'high',
        category: 'Education',
        assignee: 'Michael Chen',
        dueDate: '2023-11-25',
      },
    ],
    review: [
      {
        id: 5,
        title: 'Food Bank Expansion',
        description: 'Expand food bank services to 3 new neighborhoods',
        priority: 'medium',
        category: 'Community',
        assignee: 'Priya Patel',
        dueDate: '2023-11-18',
      },
    ],
    done: [
      {
        id: 6,
        title: 'School Supplies Drive',
        description: 'Collect and distribute school supplies to 500 students',
        priority: 'low',
        category: 'Education',
        assignee: 'Alex Kim',
        dueDate: '2023-09-30',
      },
    ],
  });

  const [newCard, setNewCard] = useState({
    title: '',
    description: '',
    priority: 'medium',
    category: '',
    dueDate: '',
  });
  const [showAddCard, setShowAddCard] = useState(false);
  const [activeColumn, setActiveColumn] = useState('backlog');

  const columns = [
    { id: 'backlog', title: 'Backlog', color: 'bg-gray-200', count: cards.backlog.length },
    { id: 'todo', title: 'To Do', color: 'bg-blue-200', count: cards.todo.length },
    { id: 'inProgress', title: 'In Progress', color: 'bg-yellow-200', count: cards.inProgress.length },
    { id: 'review', title: 'Review', color: 'bg-purple-200', count: cards.review.length },
    { id: 'done', title: 'Done', color: 'bg-green-200', count: cards.done.length },
  ];

  const moveCard = (cardId, fromColumn, toColumn) => {
    if (fromColumn === toColumn) return;

    const cardToMove = cards[fromColumn].find(card => card.id === cardId);
    if (!cardToMove) return;

    setCards(prev => ({
      ...prev,
      [fromColumn]: prev[fromColumn].filter(card => card.id !== cardId),
      [toColumn]: [...prev[toColumn], cardToMove],
    }));
  };

  const addNewCard = (e) => {
    e.preventDefault();
    if (!newCard.title.trim()) return;

    const newId = Math.max(0, ...Object.values(cards).flat().map(card => card.id)) + 1;
    
    setCards(prev => ({
      ...prev,
      [activeColumn]: [
        ...prev[activeColumn],
        {
          id: newId,
          ...newCard,
          assignee: null,
        },
      ],
    }));

    // Reset form
    setNewCard({
      title: '',
      description: '',
      priority: 'medium',
      category: '',
      dueDate: '',
    });
    setShowAddCard(false);
  };

  const getPriorityBadge = (priority) => {
    const styles = {
      high: 'bg-red-100 text-red-800',
      medium: 'bg-yellow-100 text-yellow-800',
      low: 'bg-green-100 text-green-800',
    };
    
    const labels = {
      high: 'High',
      medium: 'Medium',
      low: 'Low',
    };
    
    return (
      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${styles[priority] || 'bg-gray-100 text-gray-800'}`}>
        {labels[priority] || priority}
      </span>
    );
  };

  const getDaysUntilDue = (dueDate) => {
    if (!dueDate) return null;
    
    const today = new Date();
    const due = new Date(dueDate);
    const diffTime = due - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays < 0) {
      return (
        <span className="inline-flex items-center text-xs text-red-600">
          <AlertTriangle className="h-3 w-3 mr-1" />
          {Math.abs(diffDays)} days overdue
        </span>
      );
    } else if (diffDays === 0) {
      return (
        <span className="inline-flex items-center text-xs text-yellow-600">
          <Clock className="h-3 w-3 mr-1" />
          Due today
        </span>
      );
    } else if (diffDays <= 7) {
      return (
        <span className="inline-flex items-center text-xs text-yellow-600">
          <Clock className="h-3 w-3 mr-1" />
          Due in {diffDays} days
        </span>
      );
    } else {
      return (
        <span className="inline-flex items-center text-xs text-gray-500">
          <CheckCircle className="h-3 w-3 mr-1" />
          Due in {diffDays} days
        </span>
      );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
          {/* ✅ Header visible on top */}
          <Header />
      <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-full">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900">Innovation Pipeline</h1>
            <p className="mt-1 text-gray-600">Track and manage projects through different stages</p>
          </div>

          <div className="flex space-x-4 overflow-x-auto pb-4">
            {columns.map((column) => (
              <div 
                key={column.id} 
                className={`flex-1 min-w-[300px] max-w-[350px] ${column.id === activeColumn ? 'ring-2 ring-indigo-500' : ''}`}
                onDragOver={(e) => {
                  e.preventDefault();
                }}
                onDrop={(e) => {
                  e.preventDefault();
                  const { cardId, fromColumn } = JSON.parse(e.dataTransfer.getData('text/plain'));
                  moveCard(parseInt(cardId, 10), fromColumn, column.id);
                }}
              >
                <div className={`${column.color} rounded-t-lg p-3 flex justify-between items-center`}>
                  <h2 className="font-medium text-gray-900">{column.title}</h2>
                  <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-white bg-opacity-30 text-sm font-medium text-gray-700">
                    {column.count}
                  </span>
                </div>
                
                <div className="bg-white p-4 border-l border-r border-b border-gray-200 rounded-b-lg min-h-[150px]">
                  {column.id === activeColumn && !showAddCard && (
                    <button
                      type="button"
                      onClick={() => setShowAddCard(true)}
                      className="w-full flex items-center justify-center p-2 border-2 border-dashed border-gray-300 rounded-md text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-400 mb-4"
                    >
                      <Plus className="h-4 w-4 mr-1" />
                      Add Card
                    </button>
                  )}

                  {showAddCard && column.id === activeColumn && (
                    <form onSubmit={addNewCard} className="mb-4 p-3 bg-gray-50 rounded-md">
                      <div className="mb-3">
                        <input
                          type="text"
                          placeholder="Title"
                          className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                          value={newCard.title}
                          onChange={(e) => setNewCard({...newCard, title: e.target.value})}
                          required
                        />
                      </div>
                      <div className="mb-3">
                        <textarea
                          placeholder="Description"
                          rows="2"
                          className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                          value={newCard.description}
                          onChange={(e) => setNewCard({...newCard, description: e.target.value})}
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-2 mb-3">
                        <div>
                          <select
                            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-sm"
                            value={newCard.priority}
                            onChange={(e) => setNewCard({...newCard, priority: e.target.value})}
                          >
                            <option value="high">High Priority</option>
                            <option value="medium">Medium Priority</option>
                            <option value="low">Low Priority</option>
                          </select>
                        </div>
                        <div>
                          <input
                            type="date"
                            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-sm"
                            value={newCard.dueDate}
                            onChange={(e) => setNewCard({...newCard, dueDate: e.target.value})}
                          />
                        </div>
                      </div>
                      <div className="flex justify-end space-x-2">
                        <button
                          type="button"
                          onClick={() => setShowAddCard(false)}
                          className="inline-flex items-center px-3 py-1.5 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                          <X className="h-4 w-4 mr-1" />
                          Cancel
                        </button>
                        <button
                          type="submit"
                          className="inline-flex items-center px-3 py-1.5 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                          <Check className="h-4 w-4 mr-1" />
                          Add
                        </button>
                      </div>
                    </form>
                  )}

                  <div className="space-y-3">
                    {cards[column.id].map((card) => (
                      <div 
                        key={card.id}
                        draggable
                        onDragStart={(e) => {
                          e.dataTransfer.setData('text/plain', JSON.stringify({
                            cardId: card.id,
                            fromColumn: column.id,
                          }));
                        }}
                        className="p-3 bg-white border border-gray-200 rounded-md shadow-sm hover:shadow-md transition-shadow cursor-move"
                      >
                        <div className="flex justify-between items-start">
                          <h3 className="font-medium text-gray-900 text-sm">{card.title}</h3>
                          <button
                            type="button"
                            className="text-gray-400 hover:text-gray-500"
                          >
                            <MoreVertical className="h-4 w-4" />
                          </button>
                        </div>
                        
                        {card.description && (
                          <p className="mt-1 text-xs text-gray-500 line-clamp-2">
                            {card.description}
                          </p>
                        )}
                        
                        <div className="mt-3 flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            {getPriorityBadge(card.priority)}
                            {card.category && (
                              <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-blue-100 text-blue-800">
                                {card.category}
                              </span>
                            )}
                          </div>
                          
                          {card.dueDate && getDaysUntilDue(card.dueDate)}
                        </div>
                        
                        <div className="mt-3 flex items-center justify-between">
                          <div className="flex items-center">
                            {card.assignee ? (
                              <div className="flex-shrink-0 h-6 w-6 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-700 text-xs font-medium">
                                {card.assignee.split(' ').map(n => n[0]).join('')}
                              </div>
                            ) : (
                              <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-gray-100 text-gray-800">
                                Unassigned
                              </span>
                            )}
                          </div>
                          
                          <div className="flex space-x-1">
                            {column.id !== 'backlog' && (
                              <button
                                type="button"
                                className="text-gray-400 hover:text-gray-500"
                                onClick={() => {
                                  const currentIndex = columns.findIndex(col => col.id === column.id);
                                  if (currentIndex > 0) {
                                    moveCard(card.id, column.id, columns[currentIndex - 1].id);
                                  }
                                }}
                                title="Move left"
                              >
                                <ArrowLeft className="h-4 w-4" />
                              </button>
                            )}
                            
                            {column.id !== 'done' && (
                              <button
                                type="button"
                                className="text-gray-400 hover:text-gray-500"
                                onClick={() => {
                                  const currentIndex = columns.findIndex(col => col.id === column.id);
                                  if (currentIndex < columns.length - 1) {
                                    moveCard(card.id, column.id, columns[currentIndex + 1].id);
                                  }
                                }}
                                title="Move right"
                              >
                                <ArrowRight className="h-4 w-4" />
                              </button>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
