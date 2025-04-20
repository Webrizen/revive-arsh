import React from "react";

export default function page() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          🚧 Under Construction 🚧
        </h1>
        <p className="text-xl text-gray-600 mb-6">
          My blog section is currently being built. Please check back soon!
        </p>
        <div className="animate-pulse">
          <div className="w-16 h-16 mx-auto mb-4">
            <svg
              className="w-full h-full text-yellow-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
