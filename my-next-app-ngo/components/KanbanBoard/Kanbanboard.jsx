"use client";
import React from "react";

const sampleIdeas = [
  { id: 1, title: "Low-cost Water Filters", status: "submitted" },
  { id: 2, title: "Solar Study Lamps", status: "submitted" },
  { id: 3, title: "Community Library", status: "under_review" },
  { id: 4, title: "Skill Training Program", status: "in_progress" },
  { id: 5, title: "Waste Recycling Drive", status: "in_progress" },
  { id: 6, title: "Mobile Health Camp", status: "completed" },
];

const columns = [
  { key: "submitted", title: "Submitted" },
  { key: "under_review", title: "Under Review" },
  { key: "in_progress", title: "In Progress" },
  { key: "completed", title: "Completed" },
];

export default function InnovationPipeline() {
  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Innovation Pipeline
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {columns.map((col) => (
          <div key={col.key} className="bg-white rounded-xl shadow-md p-4">
            <h2 className="text-xl font-semibold mb-4 text-gray-700">
              {col.title}
            </h2>
            <div className="space-y-4">
              {sampleIdeas
                .filter((idea) => idea.status === col.key)
                .map((idea) => (
                  <div
                    key={idea.id}
                    className="bg-blue-50 border border-blue-200 rounded-lg p-3 shadow-sm hover:shadow-md transition"
                  >
                    <h3 className="font-medium text-gray-800">{idea.title}</h3>
                    <p className="text-sm text-gray-500">ID: {idea.id}</p>
                  </div>
                ))}
              {sampleIdeas.filter((idea) => idea.status === col.key).length ===
                0 && (
                <p className="text-gray-400 text-sm text-center">
                  No ideas here yet
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
