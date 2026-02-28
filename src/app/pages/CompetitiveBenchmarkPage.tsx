import { motion } from 'motion/react';
import { Link } from 'react-router';
import { 
  Target,
  Users,
  TrendingUp,
  Award,
  Trophy,
  ArrowRight,
  ArrowUp,
  ArrowDown,
  Minus,
  Briefcase,
  MapPin
} from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Legend } from 'recharts';

const benchmarkData = [
  { skill: 'React', you: 85, average: 72, topPerformer: 95 },
  { skill: 'TypeScript', you: 70, average: 68, topPerformer: 92 },
  { skill: 'Node.js', you: 80, average: 70, topPerformer: 90 },
  { skill: 'AWS', you: 55, average: 65, topPerformer: 88 },
  { skill: 'System Design', you: 55, average: 60, topPerformer: 85 }
];

const radarData = [
  { subject: 'Frontend', you: 78, market: 70 },
  { subject: 'Backend', you: 71, market: 68 },
  { subject: 'Database', you: 61, market: 65 },
  { subject: 'Cloud', you: 49, market: 63 },
  { subject: 'DevOps', you: 53, market: 58 },
  { subject: 'Testing', you: 65, market: 60 }
];

const peerComparison = [
  { name: 'Sarah Chen', score: 82, role: 'Senior Frontend Dev', location: 'San Francisco', trend: 'up' },
  { name: 'You', score: 78, role: 'Full Stack Dev', location: 'Remote', trend: 'up', isYou: true },
  { name: 'Mike Johnson', score: 76, role: 'Backend Engineer', location: 'Seattle', trend: 'stable' },
  { name: 'Emily Davis', score: 74, role: 'Full Stack Dev', location: 'Austin', trend: 'up' },
  { name: 'Alex Kumar', score: 72, role: 'Frontend Dev', location: 'Boston', trend: 'down' }
];

export default function CompetitiveBenchmarkPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-4"
      >
        <h1 className="text-3xl font-medium text-gray-900">Competitive Benchmark</h1>
        <p className="text-gray-600">Compare your skills against market averages and top performers in your field</p>
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
            <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center">
              <Trophy className="w-5 h-5 text-blue-600" />
            </div>
            <span className="text-sm text-gray-600">Your Rank</span>
          </div>
          <p className="text-2xl font-medium text-gray-900">Top 35%</p>
          <p className="text-sm text-gray-600">Among peers</p>
        </div>

        <div className="p-6 border border-gray-200 rounded-lg">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-lg bg-green-50 flex items-center justify-center">
              <TrendingUp className="w-5 h-5 text-green-600" />
            </div>
            <span className="text-sm text-gray-600">Above Average</span>
          </div>
          <p className="text-2xl font-medium text-gray-900">8 skills</p>
          <p className="text-sm text-green-600">+2 this month</p>
        </div>

        <div className="p-6 border border-gray-200 rounded-lg">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-lg bg-orange-50 flex items-center justify-center">
              <Target className="w-5 h-5 text-orange-600" />
            </div>
            <span className="text-sm text-gray-600">Below Average</span>
          </div>
          <p className="text-2xl font-medium text-gray-900">3 skills</p>
          <p className="text-sm text-orange-600">Need focus</p>
        </div>

        <div className="p-6 border border-gray-200 rounded-lg">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-lg bg-purple-50 flex items-center justify-center">
              <Users className="w-5 h-5 text-purple-600" />
            </div>
            <span className="text-sm text-gray-600">Peer Group</span>
          </div>
          <p className="text-2xl font-medium text-gray-900">1,247</p>
          <p className="text-sm text-gray-600">Similar profiles</p>
        </div>
      </motion.div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Skill Comparison Bar Chart */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="p-6 border border-gray-200 rounded-lg"
        >
          <h2 className="text-xl font-medium text-gray-900 mb-6">Skill Comparison</h2>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={benchmarkData} layout="horizontal">
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis type="number" domain={[0, 100]} stroke="#6b7280" />
                <YAxis dataKey="skill" type="category" stroke="#6b7280" width={100} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#fff', border: '1px solid #e5e7eb', borderRadius: '8px' }}
                />
                <Legend />
                <Bar dataKey="you" fill="#000000" name="You" radius={[0, 4, 4, 0]} />
                <Bar dataKey="average" fill="#9ca3af" name="Market Avg" radius={[0, 4, 4, 0]} />
                <Bar dataKey="topPerformer" fill="#d1d5db" name="Top 10%" radius={[0, 4, 4, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        {/* Radar Comparison */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="p-6 border border-gray-200 rounded-lg"
        >
          <h2 className="text-xl font-medium text-gray-900 mb-6">Category Comparison</h2>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart data={radarData}>
                <PolarGrid stroke="#e5e7eb" />
                <PolarAngleAxis dataKey="subject" stroke="#6b7280" />
                <PolarRadiusAxis angle={90} domain={[0, 100]} stroke="#6b7280" />
                <Radar name="You" dataKey="you" stroke="#000000" fill="#000000" fillOpacity={0.2} strokeWidth={2} />
                <Radar name="Market" dataKey="market" stroke="#9ca3af" fill="#9ca3af" fillOpacity={0.1} strokeWidth={2} />
                <Legend />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </motion.div>
      </div>

      {/* Peer Leaderboard */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="p-6 border border-gray-200 rounded-lg"
      >
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-medium text-gray-900">Peer Leaderboard</h2>
          <span className="text-sm text-gray-600">Based on similar roles and experience</span>
        </div>

        <div className="space-y-3">
          {peerComparison.map((peer, index) => (
            <div
              key={peer.name}
              className={`flex items-center justify-between p-4 rounded-lg border transition-all ${
                peer.isYou 
                  ? 'bg-gray-50 border-gray-900' 
                  : 'bg-white border-gray-200 hover:border-gray-900'
              }`}
            >
              <div className="flex items-center gap-4 flex-1">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-100 text-gray-700 font-medium text-sm">
                  {index + 1}
                </div>
                
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className={`font-medium ${peer.isYou ? 'text-gray-900' : 'text-gray-700'}`}>
                      {peer.name}
                    </h3>
                    {peer.isYou && (
                      <span className="px-2 py-0.5 bg-gray-900 text-white text-xs rounded">You</span>
                    )}
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-600">
                    <div className="flex items-center gap-1">
                      <Briefcase className="w-3 h-3" />
                      {peer.role}
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {peer.location}
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="text-right">
                  <div className="text-xl font-medium text-gray-900">{peer.score}</div>
                  <div className="text-xs text-gray-600">Score</div>
                </div>
                
                {peer.trend === 'up' && (
                  <div className="w-8 h-8 rounded-full bg-green-50 flex items-center justify-center">
                    <ArrowUp className="w-4 h-4 text-green-600" />
                  </div>
                )}
                {peer.trend === 'down' && (
                  <div className="w-8 h-8 rounded-full bg-red-50 flex items-center justify-center">
                    <ArrowDown className="w-4 h-4 text-red-600" />
                  </div>
                )}
                {peer.trend === 'stable' && (
                  <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center">
                    <Minus className="w-4 h-4 text-gray-600" />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Insights & CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        <div className="p-6 bg-green-50 border border-green-200 rounded-lg">
          <h3 className="font-medium text-green-900 mb-2">Your Strengths</h3>
          <p className="text-sm text-green-700 mb-4">
            Your React and frontend skills are significantly above market average. This is a strong competitive advantage.
          </p>
          <ul className="space-y-2 text-sm text-green-700">
            <li className="flex items-center gap-2">
              <Award className="w-4 h-4" />
              React: Top 25% nationally
            </li>
            <li className="flex items-center gap-2">
              <Award className="w-4 h-4" />
              Node.js: Above average
            </li>
          </ul>
        </div>

        <div className="p-6 bg-orange-50 border border-orange-200 rounded-lg">
          <h3 className="font-medium text-orange-900 mb-2">Areas to Improve</h3>
          <p className="text-sm text-orange-700 mb-4">
            Focus on cloud and system design skills to match market expectations and advance your career.
          </p>
          <Link
            to="/skill-gaps"
            className="inline-flex items-center gap-2 text-sm font-medium text-orange-900 hover:text-orange-700"
          >
            View Improvement Plan
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
