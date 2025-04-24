import React from 'react';
import { Home, Settings, User, Mail, Bell, Book, Users, BarChart2, Globe } from 'lucide-react';
import { Link } from "react-router-dom";

export default function DesktopPage() {
  const navItems = [
    { icon: <Home size={20} />, label: "Home", path: "/home" },
    { icon: <Globe size={20} />, label: "Live Data", path: "/live-data" },
    { icon: <Mail size={20} />, label: "Report Pollution", path: "/report" },
    { icon: <Users size={20} />, label: "Community", path: "/community" },
    { icon: <Book size={20} />, label: "Education", path: "/education" },
    { icon: <User size={20} />, label: "Profile", path: "/profile" },
  ];

  return (
    <div className="flex h-screen w-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-md">
        <div className="p-6">
          <div className="flex items-center">
            <div className="h-8 w-8 bg-blue-600 rounded-lg flex items-center justify-center text-white mr-2">
              <span className="font-bold">ST</span>
            </div>
            <h1 className="text-xl font-bold text-gray-800">Sea The Truth</h1>
          </div>
          <p className="text-xs text-gray-500 mt-1">Marine pollution awareness platform</p>
        </div>
        <nav className="mt-2">
  {navItems.map((item, i) => (
    <Link
      key={i}
      to={item.path}
      className="px-6 py-3 flex items-center text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200 cursor-pointer"
    >
      <div className="mr-3 text-gray-500">{item.icon}</div>
      <span>{item.label}</span>
    </Link>
  ))}
</nav>

{/* Add this new code block right here */}
<div className="flex justify-center mt-8 mb-16">
  <img 
    src="/images/logo2.gif" 
    alt="Sea The Truth Logo" 
    className="h-100 w-60 rounded-lg object-cover" 
  />
</div>

<div className="absolute bottom-0 left-0 w-64 p-4 border-t border-gray-200">
  <div className="flex items-center">
    <img 
      src="/images/photo.jpg" 
      alt="Profile" 
      className="w-10 h-10 rounded-full mr-3" 
    />
    <div>
      <p className="text-sm font-medium text-gray-800">Zaynab Ali</p>
      <p className="text-xs text-gray-500">Environmental Activist</p>
    </div>
  </div>
</div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col flex-1 overflow-hidden">
        {/* Header */}
        <header className="bg-white shadow-sm">
          <div className="flex items-center justify-between px-8 py-4">
            <div>
              <h2 className="text-lg font-semibold text-gray-800">Dashboard Overview</h2>
              <p className="text-sm text-gray-500">Welcome to Sea The Truth platform</p>
            </div>
            <div className="flex items-center space-x-4">
  <button className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg">
    <Bell size={20} />
  </button>
  <button className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg">
    <Settings size={20} />
  </button>
  <Link to="/profile" className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-semibold">
    ZA
  </Link>
  <img 
    src="/images/logo.png" 
    alt="Sea The Truth Logo" 
    className="h-8 w-8 rounded-lg object-cover ml-2" 
  />
</div>
          </div>
        </header>

        {/* Main content area */}
        <main className="flex-1 p-8 overflow-auto bg-gray-50">
  <div className="mb-8 flex items-start">
    <div>
      <h1 className="text-4xl font-bold text-gray-800 leading-tight">
        Welcome <br/>
        to Sea <br/>
        The <br/>
        Truth
      </h1>
      <p className="text-gray-600 mt-2">
        Explore our marine pollution tracking and conservation platform
      </p>
    </div>
    <div className="ml-2 flex-shrink-0">
      <img 
        src="/images/logo1.gif" 
        alt="Sea The Truth Logo" 
        className="h-58 w-auto object-contain" 
      />
    </div>

 







  </div>
          
          
          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <div className="flex items-center">
                <div className="p-3 bg-blue-100 rounded-lg">
                  <Globe className="h-6 w-6 text-blue-600" />
                </div>
                <div className="ml-4">
                  <h2 className="text-lg font-semibold text-gray-700">Active Reports</h2>
                  <p className="text-2xl font-bold text-blue-600">217</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <div className="flex items-center">
                <div className="p-3 bg-green-100 rounded-lg">
                  <Users className="h-6 w-6 text-green-600" />
                </div>
                <div className="ml-4">
                  <h2 className="text-lg font-semibold text-gray-700">Community Members</h2>
                  <p className="text-2xl font-bold text-green-600">1,248</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <div className="flex items-center">
                <div className="p-3 bg-purple-100 rounded-lg">
                  <BarChart2 className="h-6 w-6 text-purple-600" />
                </div>
                <div className="ml-4">
                  <h2 className="text-lg font-semibold text-gray-700">Cleanup Events</h2>
                  <p className="text-2xl font-bold text-purple-600">32</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <div className="flex items-center">
                <div className="p-3 bg-yellow-100 rounded-lg">
                  <Trash2 className="h-6 w-6 text-yellow-600" />
                </div>
                <div className="ml-4">
                  <h2 className="text-lg font-semibold text-gray-700">Waste Collected</h2>
                  <p className="text-2xl font-bold text-yellow-600">4.2 Tons</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Link to="/live-data" className="bg-gradient-to-br from-blue-500 to-blue-700 p-6 rounded-xl shadow-md text-white hover:shadow-lg transition-shadow">
              <div className="flex flex-col h-full">
                <div className="mb-4">
                  <Globe className="h-8 w-8" />
                </div>
                <h2 className="text-xl font-bold mb-2">Live Data & Maps</h2>
                <p className="mb-4 text-blue-100">
                  Explore real-time pollution data with interactive heatmaps and visualizations
                </p>
                <div className="mt-auto">
                  <button className="px-4 py-2 bg-white bg-opacity-20 rounded-lg hover:bg-opacity-30 transition-colors text-sm font-medium">
                    Explore Maps
                  </button>
                </div>
              </div>
            </Link>
            
            <Link to="/report" className="bg-gradient-to-br from-green-500 to-green-700 p-6 rounded-xl shadow-md text-white hover:shadow-lg transition-shadow">
              <div className="flex flex-col h-full">
                <div className="mb-4">
                  <Mail className="h-8 w-8" />
                </div>
                <h2 className="text-xl font-bold mb-2">Report Pollution</h2>
                <p className="mb-4 text-green-100">
                  Submit detailed reports about marine pollution you've observed
                </p>
                <div className="mt-auto">
                  <button className="px-4 py-2 bg-white bg-opacity-20 rounded-lg hover:bg-opacity-30 transition-colors text-sm font-medium">
                    Submit Report
                  </button>
                </div>
              </div>
            </Link>
            
            <Link to="/community" className="bg-gradient-to-br from-purple-500 to-purple-700 p-6 rounded-xl shadow-md text-white hover:shadow-lg transition-shadow">
              <div className="flex flex-col h-full">
                <div className="mb-4">
                  <Users className="h-8 w-8" />
                </div>
                <h2 className="text-xl font-bold mb-2">Join Community</h2>
                <p className="mb-4 text-purple-100">
                  Connect with other activists, join events, and participate in cleanup activities
                </p>
                <div className="mt-auto">
                  <button className="px-4 py-2 bg-white bg-opacity-20 rounded-lg hover:bg-opacity-30 transition-colors text-sm font-medium">
                    View Community
                  </button>
                </div>
              </div>
            </Link>
          </div>
          
          {/* Recent Activity */}
          <div className="bg-white rounded-xl shadow-sm p-6 mb-8 border border-gray-200">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Recent Platform Activity</h2>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="p-2 bg-blue-100 rounded-lg mr-4">
                  <Users className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <p className="text-gray-800"><span className="font-medium">Maya Levi</span> organized a new cleanup event in Haifa</p>
                  <p className="text-sm text-gray-500">Today, 10:45 AM</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="p-2 bg-green-100 rounded-lg mr-4">
                  <Mail className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <p className="text-gray-800"><span className="font-medium">Omar Yousef</span> reported industrial discharge in Haifa Bay</p>
                  <p className="text-sm text-gray-500">Yesterday, 3:22 PM</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="p-2 bg-purple-100 rounded-lg mr-4">
                  <Book className="h-5 w-5 text-purple-600" />
                </div>
                <div>
                  <p className="text-gray-800"><span className="font-medium">Education Team</span> published new teaching materials</p>
                  <p className="text-sm text-gray-500">April 12, 2025</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="p-2 bg-yellow-100 rounded-lg mr-4">
                  <Trash2 className="h-5 w-5 text-yellow-600" />
                </div>
                <div>
                  <p className="text-gray-800"><span className="font-medium">Tel Aviv Beach Cleanup</span> collected 320kg of waste</p>
                  <p className="text-sm text-gray-500">April 10, 2025</p>
                </div>
              </div>
            </div>
            
            <div className="mt-4 text-center">
              <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                View All Activity
              </button>
            </div>
          </div>
        </main>


        {/* Footer */}
        <footer className="bg-white p-4 border-t text-center text-sm text-gray-500">
          © 2025 Sea The Truth. All rights reserved. | <a href="#" className="text-blue-600 hover:text-blue-800">Privacy Policy</a> | <a href="#" className="text-blue-600 hover:text-blue-800">Terms of Service</a>
        </footer>
      </div>
    </div>
  );
}

// Add this missing component
const Trash2 = ({ className, size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size || 24}
      height={size || 24}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M3 6h18M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
      <line x1="10" y1="11" x2="10" y2="17" />
      <line x1="14" y1="11" x2="14" y2="17" />
    </svg>
  );
};