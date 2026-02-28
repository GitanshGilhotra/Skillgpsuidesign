import { StatsCard } from '../components/StatsCard';
import { AIInsights } from '../components/AIInsights';
import { ActivityFeed } from '../components/ActivityFeed';
import { Target, TrendingUp, Award, Zap, ArrowRight } from 'lucide-react';
import { Link } from 'react-router';
import { motion } from 'motion/react';

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      {/* Welcome Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-2"
      >
        <h1 className="text-3xl font-medium text-gray-900">Welcome back</h1>
        <p className="text-gray-600">Track your skill development and career progress</p>
      </motion.div>

      {/* Stats cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatsCard
          title="Skill Score"
          value="78/100"
          change="+12% this month"
          icon={Target}
          trend="up"
          delay={0}
        />
        <StatsCard
          title="Career Progress"
          value="65%"
          change="On track"
          icon={TrendingUp}
          trend="up"
          delay={0.1}
        />
        <StatsCard
          title="Completed Skills"
          value="24"
          change="+6 this month"
          icon={Award}
          trend="up"
          delay={0.2}
        />
        <StatsCard
          title="Learning Velocity"
          value="3.2x"
          change="Above average"
          icon={Zap}
          trend="up"
          delay={0.3}
        />
      </div>

      {/* Quick Actions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
      >
        <Link
          to="/upload"
          className="p-6 border border-gray-200 rounded-lg hover:border-gray-900 hover:shadow-sm transition-all group"
        >
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-medium text-gray-900 mb-1">Upload Resume</h3>
              <p className="text-sm text-gray-600">Analyze your skills</p>
            </div>
            <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-gray-900 group-hover:translate-x-1 transition-all" />
          </div>
        </Link>

        <Link
          to="/skill-gaps"
          className="p-6 border border-gray-200 rounded-lg hover:border-gray-900 hover:shadow-sm transition-all group"
        >
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-medium text-gray-900 mb-1">Skill Gaps</h3>
              <p className="text-sm text-gray-600">Identify areas to improve</p>
            </div>
            <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-gray-900 group-hover:translate-x-1 transition-all" />
          </div>
        </Link>

        <Link
          to="/navigator"
          className="p-6 border border-gray-200 rounded-lg hover:border-gray-900 hover:shadow-sm transition-all group"
        >
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-medium text-gray-900 mb-1">Learning Path</h3>
              <p className="text-sm text-gray-600">View your roadmap</p>
            </div>
            <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-gray-900 group-hover:translate-x-1 transition-all" />
          </div>
        </Link>
      </motion.div>

      {/* Main dashboard grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left column - AI Insights */}
        <div className="lg:col-span-2">
          <AIInsights />
        </div>

        {/* Right column - Activity */}
        <div>
          <ActivityFeed />
        </div>
      </div>
    </div>
  );
}
