import { Home, Map, BookOpen, Target, BarChart3, Settings, HelpCircle, ChevronRight, Upload, TrendingUp, Calendar } from 'lucide-react';
import { motion } from 'motion/react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router';

const navItems = [
  { icon: Home, label: 'Dashboard', path: '/dashboard' },
  { icon: Upload, label: 'Upload Resume', path: '/upload' },
  { icon: Target, label: 'Skill Analysis', path: '/analysis' },
  { icon: Map, label: 'Skill Gaps', path: '/skill-gaps' },
  { icon: BookOpen, label: 'Learning Navigator', path: '/navigator' },
  { icon: TrendingUp, label: 'Career Simulation', path: '/simulation' },
  { icon: BarChart3, label: 'Analytics', path: '/analytics' },
  { icon: Calendar, label: 'Weekly Planner', path: '/planner' },
];

const secondaryItems = [
  { icon: Settings, label: 'Settings', path: '/settings' },
  { icon: HelpCircle, label: 'Help & Support', path: '/help' },
];

export function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();

  return (
    <motion.aside
      initial={{ x: -300 }}
      animate={{ x: 0, width: collapsed ? 80 : 280 }}
      transition={{ duration: 0.3 }}
      className="hidden lg:fixed left-0 top-16 bottom-0 z-40 bg-white border-r border-gray-200 lg:block"
    >
      <div className="flex flex-col h-full p-4">
        {/* Toggle button */}
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="absolute -right-3 top-8 w-6 h-6 rounded-full bg-black flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
        >
          <ChevronRight className={`w-4 h-4 text-white transition-transform ${collapsed ? '' : 'rotate-180'}`} />
        </button>

        {/* Primary navigation */}
        <nav className="flex-1 space-y-1">
          {navItems.map((item, index) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                  isActive
                    ? 'bg-black text-white'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                <Icon className={`${collapsed ? 'w-6 h-6' : 'w-5 h-5'} flex-shrink-0`} />
                {!collapsed && <span className="text-sm font-medium">{item.label}</span>}
              </Link>
            );
          })}
        </nav>

        {/* Secondary navigation */}
        <div className="border-t border-gray-200 pt-4 space-y-1">
          {secondaryItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                  isActive
                    ? 'bg-black text-white'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                <Icon className={`${collapsed ? 'w-6 h-6' : 'w-5 h-5'} flex-shrink-0`} />
                {!collapsed && <span className="text-sm font-medium">{item.label}</span>}
              </Link>
            );
          })}
        </div>

        {/* Version info */}
        {!collapsed && (
          <div className="mt-4 pt-4 border-t border-gray-200">
            <div className="px-4 py-2 rounded-lg bg-gray-50">
              <p className="text-xs text-gray-600 font-medium">Version 2.0.1</p>
              <p className="text-xs text-gray-500 mt-1">AI Engine: GPT-4</p>
            </div>
          </div>
        )}
      </div>
    </motion.aside>
  );
}
