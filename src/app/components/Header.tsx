import { Target, Settings, Bell, User } from 'lucide-react';
import { Link } from 'react-router';

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-gray-200 bg-white">
      <div className="flex items-center justify-between h-16 px-6">
        {/* Logo */}
        <Link to="/dashboard" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
          <div className="bg-black p-2 rounded-lg">
            <Target className="w-5 h-5 text-white" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-black">
              SkillGPS
            </h1>
            <p className="text-[10px] text-gray-500 -mt-1">AI Career Navigator</p>
          </div>
        </Link>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <button className="relative p-2 rounded-lg hover:bg-gray-100 transition-colors">
            <Bell className="w-5 h-5 text-gray-600" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-black rounded-full"></span>
          </button>
          <button className="p-2 rounded-lg hover:bg-gray-100 transition-colors">
            <Settings className="w-5 h-5 text-gray-600" />
          </button>
          <button className="flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors border border-gray-200">
            <div className="w-7 h-7 rounded-full bg-black flex items-center justify-center">
              <User className="w-4 h-4 text-white" />
            </div>
            <span className="text-sm text-gray-700 font-medium">Alex Chen</span>
          </button>
        </div>
      </div>
    </header>
  );
}
