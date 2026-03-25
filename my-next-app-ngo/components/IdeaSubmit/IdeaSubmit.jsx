"use client";
import Header from "../common/Header";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function IdeaSubmit() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    attachment: null,
  });

  const router = useRouter();

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "attachment" && files) {
      setFormData({ ...formData, attachment: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Idea Submitted:", formData);
    alert(`Your idea "${formData.title}" has been submitted successfully!`);
    // TODO: Connect to backend API here
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header on top */}
      <Header />

      <main className="flex-grow py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          {/* Page Title */}
          <div className="text-center mb-10">
            <h1 className="text-4xl font-extrabold text-gray-900">
              Submit Your Idea
            </h1>
            <p className="mt-3 text-lg text-gray-600">
              Share your innovative ideas and make an impact in your community.
            </p>
          </div>

          {/* Form Card */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Title */}
              <div>
                <label
                  htmlFor="title"
                  className="block text-sm font-medium text-gray-700"
                >
                  Idea Title
                </label>
                <input
                  id="title"
                  name="title"
                  type="text"
                  placeholder="e.g., Clean Water Initiative"
                  value={formData.title}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm"
                />
              </div>

              {/* Description */}
              <div>
                <label
                  htmlFor="description"
                  className="block text-sm font-medium text-gray-700"
                >
                  Description
                </label>
                <textarea
                  id="description"
                  name="description"
                  rows="5"
                  placeholder="Describe your idea in detail. What problem does it solve? How does it work?"
                  value={formData.description}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm"
                ></textarea>
                <p className="mt-2 text-sm text-gray-500">
                  Be clear and concise. You can use markdown for formatting.
                </p>
              </div>

              {/* Category */}
              <div>
                <label
                  htmlFor="category"
                  className="block text-sm font-medium text-gray-700"
                >
                  Category
                </label>
                <select
                  id="category"
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm"
                >
                  <option value="">Select a category</option>
                  <option>Environment</option>
                  <option>Education</option>
                  <option>Health</option>
                  <option>Agriculture</option>
                  <option>Technology</option>
                  <option>Other</option>
                </select>
              </div>

              {/* Attachment Upload */}
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Attachments
                </label>
                <div className="mt-2 flex justify-center px-6 pt-5 pb-6 border-2 border-dashed border-gray-300 rounded-md bg-gray-50 hover:bg-gray-100 transition">
                  <div className="text-center">
                    <svg
                      className="mx-auto h-12 w-12 text-gray-400"
                      stroke="currentColor"
                      fill="none"
                      viewBox="0 0 48 48"
                      aria-hidden="true"
                    >
                      <path
                        d="M28 8H12a4 4 0 00-4 4v24a4 4 0 004 4h24a4 4 0 004-4V20l-12-12z"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <div className="mt-2 text-sm text-gray-600">
                      <label
                        htmlFor="attachment"
                        className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-800 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-600"
                      >
                        <span>Upload a file</span>
                        <input
                          id="attachment"
                          name="attachment"
                          type="file"
                          className="sr-only"
                          onChange={handleChange}
                        />
                      </label>
                      <p className="pl-1 inline">or drag and drop</p>
                    </div>
                    <p className="text-xs text-gray-500">
                      PNG, JPG, PDF up to 10MB
                    </p>
                    {formData.attachment && (
                      <p className="mt-2 text-sm text-green-600">
                        Selected: {formData.attachment.name}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              {/* Buttons */}
              <div className="pt-4 flex justify-end space-x-4">
                <button
                  type="button"
                  onClick={() => router.push("/")}
                  className="px-5 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-100 transition"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition"
                >
                  Submit Idea
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}
