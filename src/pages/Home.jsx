import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold">Welcome to Personal Finance Manager</h1>
      <Link to="/dashboard" className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-lg">
        Go to Dashboard
      </Link>
    </div>
  );
}
