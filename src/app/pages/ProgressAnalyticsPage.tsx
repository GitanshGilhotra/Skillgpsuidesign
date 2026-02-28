import { motion } from 'motion/react';
import { Link } from 'react-router';
import { 
  Target,
  TrendingUp,
  Clock,
  Award,
  Zap,
  Calendar,
  ArrowRight,
  Activity,
  BarChart3
} from 'lucide-react';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, AreaChart, Area } from 'recharts';

const progressData = [
  { month: 'Jan', score: 62, hours: 8 },
  { month: 'Feb', score: 65, hours: 10 },
  { month: 'Mar', score: 68, hours: 12 },
  { month: 'Apr', score: 72, hours: 15 },
  { month: 'May', score: 75, hours: 14 },
  { month: 'Jun', score: 78, hours: 12 }
];

const skillProgress = [
  { name: 'TypeScript', progress: 70 },
  { name: 'System Design', progress: 45 },
  { name: 'AWS', progress: 55 },
  { name: 'GraphQL', progress: 40 },
  { name: 'Docker', progress: 50 }
];

const timeDistribution = [
  { name: 'Frontend', value: 35, color: '#000000' },
  { name: 'Backend', value: 25, color: '#404040' },
  { name: 'Database', value: 15, color: '#808080' },
  { name: 'DevOps', value: 15, color: '#a0a0a0' },
  { name: 'Other', value: 10, color: '#c0c0c0' }
];

export default function ProgressAnalyticsPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-4"
      >
        <h1 className="text-3xl font-medium text-gray-900">Progress Analytics</h1>
        <p className="text-gray-600">Track your learning progress and skill development over time</p>
      </motion.div>

      {/* Stats Overview */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="grid grid-cols-1 md:grid-cols-4 gap-4"
      >
        <div className="p-6 border border-gray-200 rounded-lg">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-lg bg-green-50 flex items-center justify-center">
              <TrendingUp className="w-5 h-5 text-green-600" />
            </div>
            <span className="text-sm text-gray-600">Score Increase</span>
          </div>
          <p className="text-2xl font-medium text-gray-900">+16 pts</p>
          <p className="text-sm text-green-600">Last 6 months</p>
        </div>

        <div className="p-6 border border-gray-200 rounded-lg">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center">
              <Clock className="w-5 h-5 text-blue-600" />
            </div>
            <span className="text-sm text-gray-600">Learning Hours</span>
          </div>
          <p className="text-2xl font-medium text-gray-900">71h</p>
          <p className="text-sm text-blue-600">Total invested</p>
        </div>

        <div className="p-6 border border-gray-200 rounded-lg">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-lg bg-purple-50 flex items-center justify-center">
              <Award className="w-5 h-5 text-purple-600" />
            </div>
            <span className="text-sm text-gray-600">Skills Improved</span>
          </div>
          <p className="text-2xl font-medium text-gray-900">12</p>
          <p className="text-sm text-purple-600">This quarter</p>
        </div>

        <div className="p-6 border border-gray-200 rounded-lg">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-lg bg-orange-50 flex items-center justify-center">
              <Zap className="w-5 h-5 text-orange-600" />
            </div>
            <span className="text-sm text-gray-600">Streak</span>
          </div>
          <p className="text-2xl font-medium text-gray-900">24 days</p>
          <p className="text-sm text-orange-600">Current streak</p>
        </div>
      </motion.div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Skill Score Progress */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="p-6 border border-gray-200 rounded-lg"
        >
          <h2 className="text-xl font-medium text-gray-900 mb-6">Skill Score Progress</h2>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={progressData}>
                <defs>
                  <linearGradient id="scoreGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#000000" stopOpacity={0.1}/>
                    <stop offset="95%" stopColor="#000000" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="month" stroke="#6b7280" />
                <YAxis stroke="#6b7280" domain={[60, 80]} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#fff', border: '1px solid #e5e7eb', borderRadius: '8px' }}
                />
                <Area 
                  type="monotone" 
                  dataKey="score" 
                  stroke="#000000" 
                  strokeWidth={2}
                  fill="url(#scoreGradient)" 
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        {/* Learning Hours */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="p-6 border border-gray-200 rounded-lg"
        >
          <h2 className="text-xl font-medium text-gray-900 mb-6">Weekly Learning Hours</h2>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={progressData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="month" stroke="#6b7280" />
                <YAxis stroke="#6b7280" />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#fff', border: '1px solid #e5e7eb', borderRadius: '8px' }}
                />
                <Bar dataKey="hours" fill="#000000" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </motion.div>
      </div>

      {/* Time Distribution & Skill Progress */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Time Distribution Pie Chart */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="p-6 border border-gray-200 rounded-lg"
        >
          <h2 className="text-xl font-medium text-gray-900 mb-6">Time Distribution</h2>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={timeDistribution}
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                  dataKey="value"
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                >
                  {timeDistribution.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        {/* Individual Skill Progress */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="p-6 border border-gray-200 rounded-lg"
        >
          <h2 className="text-xl font-medium text-gray-900 mb-6">Skill Progress</h2>
          <div className="space-y-6">
            {skillProgress.map((skill, index) => (
              <div key={skill.name}>
                <div className="flex justify-between mb-2">
                  <span className="text-sm text-gray-900">{skill.name}</span>
                  <span className="text-sm font-medium text-gray-900">{skill.progress}%</span>
                </div>
                <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.progress}%` }}
                    transition={{ delay: 0.4 + index * 0.1, duration: 0.8 }}
                    className={`h-full rounded-full ${
                      skill.progress >= 70 ? 'bg-green-600' :
                      skill.progress >= 50 ? 'bg-blue-600' : 'bg-orange-600'
                    }`}
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Activity Feed */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="p-6 border border-gray-200 rounded-lg"
      >
        <h2 className="text-xl font-medium text-gray-900 mb-6">Recent Activity</h2>
        <div className="space-y-4">
          {[
            { action: 'Completed Advanced TypeScript course', time: '2 hours ago', icon: Award },
            { action: 'Practiced System Design problems', time: '1 day ago', icon: Target },
            { action: 'Started AWS Solutions Architect path', time: '3 days ago', icon: Zap },
            { action: 'Achieved 24-day learning streak', time: '5 days ago', icon: Activity }
          ].map((activity, index) => (
            <div key={index} className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
              <div className="w-10 h-10 rounded-lg bg-white border border-gray-200 flex items-center justify-center flex-shrink-0">
                <activity.icon className="w-5 h-5 text-gray-900" />
              </div>
              <div className="flex-1">
                <p className="text-gray-900">{activity.action}</p>
                <p className="text-sm text-gray-600 mt-1">{activity.time}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="p-8 bg-gray-50 border border-gray-200 rounded-lg"
      >
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-xl font-medium text-gray-900 mb-2">Keep the momentum going!</h3>
            <p className="text-gray-600">Check your weekly planner to stay on track</p>
          </div>
          <Link
            to="/planner"
            className="px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors flex items-center gap-2 whitespace-nowrap"
          >
            <Calendar className="w-4 h-4" />
            View Planner
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
