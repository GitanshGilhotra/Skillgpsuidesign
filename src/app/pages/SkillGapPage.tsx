import { motion } from 'motion/react';
import { Link } from 'react-router';
import { 
  TrendingUp, 
  Target, 
  AlertTriangle,
  ArrowRight,
  Flame,
  Award,
  Clock,
  Zap,
  ChevronRight
} from 'lucide-react';
import { SkillGapChart } from '../components/SkillGapChart';

export default function SkillGapPage() {
  const skillGaps = [
    {
      skill: 'TypeScript',
      current: 60,
      target: 90,
      priority: 'high',
      timeline: '2 months',
      impact: 'High salary impact'
    },
    {
      skill: 'System Design',
      current: 45,
      target: 85,
      priority: 'high',
      timeline: '3 months',
      impact: 'Senior role requirement'
    },
    {
      skill: 'AWS Services',
      current: 55,
      target: 80,
      priority: 'medium',
      timeline: '2 months',
      impact: 'Cloud expertise'
    },
    {
      skill: 'GraphQL',
      current: 40,
      target: 75,
      priority: 'medium',
      timeline: '1.5 months',
      impact: 'Modern API development'
    },
    {
      skill: 'Testing (Jest/RTL)',
      current: 50,
      target: 80,
      priority: 'low',
      timeline: '1 month',
      impact: 'Code quality'
    }
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-4"
      >
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-medium text-gray-900">Skill Gap Analysis</h1>
            <p className="text-gray-600 mt-2">Identify and close the gaps between your current and target skill levels</p>
          </div>
          <Link
            to="/navigator"
            className="px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors flex items-center gap-2"
          >
            View Learning Path
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
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
            <div className="w-10 h-10 rounded-lg bg-red-50 flex items-center justify-center">
              <AlertTriangle className="w-5 h-5 text-red-600" />
            </div>
            <span className="text-sm text-gray-600">Critical Gaps</span>
          </div>
          <p className="text-2xl font-medium text-gray-900">2</p>
        </div>

        <div className="p-6 border border-gray-200 rounded-lg">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-lg bg-orange-50 flex items-center justify-center">
              <Flame className="w-5 h-5 text-orange-600" />
            </div>
            <span className="text-sm text-gray-600">High Priority</span>
          </div>
          <p className="text-2xl font-medium text-gray-900">2</p>
        </div>

        <div className="p-6 border border-gray-200 rounded-lg">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center">
              <Clock className="w-5 h-5 text-blue-600" />
            </div>
            <span className="text-sm text-gray-600">Avg. Timeline</span>
          </div>
          <p className="text-2xl font-medium text-gray-900">2 months</p>
        </div>

        <div className="p-6 border border-gray-200 rounded-lg">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-lg bg-green-50 flex items-center justify-center">
              <Award className="w-5 h-5 text-green-600" />
            </div>
            <span className="text-sm text-gray-600">Potential Score</span>
          </div>
          <p className="text-2xl font-medium text-gray-900">92/100</p>
        </div>
      </motion.div>

      {/* Skill Gap Chart */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <SkillGapChart />
      </motion.div>

      {/* Detailed Skill Gaps */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="space-y-4"
      >
        <h2 className="text-xl font-medium text-gray-900">Detailed Analysis</h2>
        <div className="space-y-3">
          {skillGaps.map((gap, index) => (
            <motion.div
              key={gap.skill}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 + index * 0.1 }}
              className="p-6 border border-gray-200 rounded-lg hover:border-gray-900 hover:shadow-sm transition-all"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="font-medium text-gray-900">{gap.skill}</h3>
                    <span className={`px-2 py-0.5 rounded text-xs ${
                      gap.priority === 'high' 
                        ? 'bg-red-50 text-red-700 border border-red-200' 
                        : gap.priority === 'medium'
                        ? 'bg-orange-50 text-orange-700 border border-orange-200'
                        : 'bg-gray-50 text-gray-700 border border-gray-200'
                    }`}>
                      {gap.priority} priority
                    </span>
                  </div>
                  <p className="text-sm text-gray-600">{gap.impact}</p>
                </div>
                <Link
                  to="/navigator"
                  className="text-sm text-gray-900 hover:text-gray-600 flex items-center gap-1"
                >
                  Start Learning
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Progress Bar */}
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Current: {gap.current}%</span>
                  <span className="text-gray-600">Target: {gap.target}%</span>
                </div>
                <div className="relative h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div 
                    className="absolute top-0 left-0 h-full bg-gray-300 rounded-full"
                    style={{ width: `${gap.current}%` }}
                  ></div>
                  <div 
                    className="absolute top-0 right-0 h-full border-r-2 border-gray-900"
                    style={{ right: `${100 - gap.target}%` }}
                  ></div>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <div className="flex items-center gap-2 text-gray-600">
                    <Clock className="w-4 h-4" />
                    <span>{gap.timeline}</span>
                  </div>
                  <span className="text-gray-900 font-medium">
                    {gap.target - gap.current}% gap
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="p-8 bg-gray-50 border border-gray-200 rounded-lg"
      >
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-xl font-medium text-gray-900 mb-2">Ready to close these gaps?</h3>
            <p className="text-gray-600">Get a personalized learning roadmap with curated resources</p>
          </div>
          <Link
            to="/navigator"
            className="px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors flex items-center gap-2 whitespace-nowrap"
          >
            <Zap className="w-4 h-4" />
            Generate Roadmap
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
