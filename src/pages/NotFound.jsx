import React from "react";
import { Link } from "react-router-dom";
// import { Code2 } from "lucide-react"; // optional tech icon

function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-[100vh] bg-gray-50 text-center px-6">
      <div className="flex items-center justify-center mb-4">
        <Code2 className="text-blue-600 w-10 h-10 mr-2" />
        <h1 className="text-4xl font-bold text-gray-900">404</h1>
      </div>
      <p className="text-lg text-gray-600 mb-6">
        Oops! The page you’re looking for doesn’t exist.
      </p>
      <Link
        to="/"
        className="px-5 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition font-medium shadow-sm"
      >
        Go Home
      </Link>
    </div>
  );
}

export default NotFound;
