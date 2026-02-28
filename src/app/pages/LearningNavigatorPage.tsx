import { motion } from 'motion/react';
import { Link } from 'react-router';
import { 
  Target, 
  CheckCircle2,
  Circle,
  ArrowRight,
  Calendar,
  Clock,
  Award,
  TrendingUp,
  Zap,
  Play
} from 'lucide-react';
import { CareerRoadmap } from '../components/CareerRoadmap';

const milestones = [
  {
    id: 1,
    title: 'Master TypeScript Fundamentals',
    status: 'completed',
    skills: ['TypeScript Basics', 'Type Safety', 'Interfaces'],
    completedDate: '2 weeks ago',
    duration: '3 weeks'
  },
  {
    id: 2,
    title: 'Advanced React Patterns',
    status: 'in-progress',
    skills: ['Hooks', 'Context API', 'Performance Optimization'],
    progress: 65,
    estimatedCompletion: '2 weeks',
    duration: '4 weeks'
  },
  {
    id: 3,
    title: 'System Design Principles',
    status: 'upcoming',
    skills: ['Scalability', 'Load Balancing', 'Caching'],
    startDate: 'In 2 weeks',
    duration: '6 weeks'
  },
  {
    id: 4,
    title: 'AWS Cloud Services',
    status: 'upcoming',
    skills: ['EC2', 'S3', 'Lambda', 'RDS'],
    startDate: 'In 8 weeks',
    duration: '5 weeks'
  },
  {
    id: 5,
    title: 'GraphQL & API Design',
    status: 'upcoming',
    skills: ['Schema Design', 'Resolvers', 'Apollo'],
    startDate: 'In 13 weeks',
    duration: '3 weeks'
  }
];

export default function LearningNavigatorPage() {
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
            <h1 className="text-3xl font-medium text-gray-900">Learning Navigator</h1>
            <p className="text-gray-600 mt-2">Your personalized roadmap to achieve your career goals</p>
          </div>
          <Link
            to="/planner"
            className="px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors flex items-center gap-2"
          >
            <Calendar className="w-4 h-4" />
            Weekly Plan
          </Link>
        </div>
      </motion.div>

      {/* Progress Overview */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="grid grid-cols-1 md:grid-cols-4 gap-4"
      >
        <div className="p-6 border border-gray-200 rounded-lg">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-lg bg-green-50 flex items-center justify-center">
              <CheckCircle2 className="w-5 h-5 text-green-600" />
            </div>
            <span className="text-sm text-gray-600">Completed</span>
          </div>
          <p className="text-2xl font-medium text-gray-900">1/5</p>
          <p className="text-sm text-gray-600 mt-1">Milestones</p>
        </div>

        <div className="p-6 border border-gray-200 rounded-lg">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center">
              <Target className="w-5 h-5 text-blue-600" />
            </div>
            <span className="text-sm text-gray-600">In Progress</span>
          </div>
          <p className="text-2xl font-medium text-gray-900">65%</p>
          <p className="text-sm text-gray-600 mt-1">Current milestone</p>
        </div>

        <div className="p-6 border border-gray-200 rounded-lg">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-lg bg-orange-50 flex items-center justify-center">
              <Clock className="w-5 h-5 text-orange-600" />
            </div>
            <span className="text-sm text-gray-600">Time Remaining</span>
          </div>
          <p className="text-2xl font-medium text-gray-900">14 weeks</p>
          <p className="text-sm text-gray-600 mt-1">To completion</p>
        </div>

        <div className="p-6 border border-gray-200 rounded-lg">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-lg bg-purple-50 flex items-center justify-center">
              <Zap className="w-5 h-5 text-purple-600" />
            </div>
            <span className="text-sm text-gray-600">Weekly Hours</span>
          </div>
          <p className="text-2xl font-medium text-gray-900">12h</p>
          <p className="text-sm text-gray-600 mt-1">Average commitment</p>
        </div>
      </motion.div>

      {/* Career Roadmap Component */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <CareerRoadmap />
      </motion.div>

      {/* Milestone Timeline */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="space-y-4"
      >
        <h2 className="text-xl font-medium text-gray-900">Your Learning Milestones</h2>
        
        <div className="space-y-0">
          {milestones.map((milestone, index) => (
            <motion.div
              key={milestone.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 + index * 0.1 }}
              className="relative"
            >
              {/* Timeline connector */}
              {index < milestones.length - 1 && (
                <div className="absolute left-[19px] top-10 w-0.5 h-full bg-gray-200" />
              )}

              <div className="flex gap-4 pb-8">
                {/* Status Icon */}
                <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 border-2 ${
                  milestone.status === 'completed'
                    ? 'bg-green-50 border-green-500'
                    : milestone.status === 'in-progress'
                    ? 'bg-blue-50 border-blue-500'
                    : 'bg-gray-50 border-gray-300'
                }`}>
                  {milestone.status === 'completed' ? (
                    <CheckCircle2 className="w-5 h-5 text-green-600" />
                  ) : milestone.status === 'in-progress' ? (
                    <Play className="w-5 h-5 text-blue-600" />
                  ) : (
                    <Circle className="w-5 h-5 text-gray-400" />
                  )}
                </div>

                {/* Content */}
                <div className="flex-1 p-6 border border-gray-200 rounded-lg hover:border-gray-900 hover:shadow-sm transition-all">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="font-medium text-gray-900">{milestone.title}</h3>
                        <span className={`px-2 py-0.5 rounded text-xs ${
                          milestone.status === 'completed'
                            ? 'bg-green-50 text-green-700 border border-green-200'
                            : milestone.status === 'in-progress'
                            ? 'bg-blue-50 text-blue-700 border border-blue-200'
                            : 'bg-gray-50 text-gray-600 border border-gray-200'
                        }`}>
                          {milestone.status === 'completed' ? 'Completed' : milestone.status === 'in-progress' ? 'In Progress' : 'Upcoming'}
                        </span>
                      </div>
                      
                      {/* Skills */}
                      <div className="flex flex-wrap gap-2 mb-3">
                        {milestone.skills.map((skill) => (
                          <span
                            key={skill}
                            className="px-2 py-1 bg-gray-50 text-gray-700 rounded text-xs border border-gray-200"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>

                      {/* Progress bar for in-progress */}
                      {milestone.status === 'in-progress' && milestone.progress !== undefined && (
                        <div className="mb-3">
                          <div className="flex justify-between text-sm mb-1">
                            <span className="text-gray-600">Progress</span>
                            <span className="text-gray-900 font-medium">{milestone.progress}%</span>
                          </div>
                          <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                            <div 
                              className="h-full bg-gray-900 rounded-full transition-all"
                              style={{ width: `${milestone.progress}%` }}
                            />
                          </div>
                        </div>
                      )}

                      {/* Timeline info */}
                      <div className="flex items-center gap-4 text-sm text-gray-600">
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          <span>{milestone.duration}</span>
                        </div>
                        {milestone.status === 'completed' && milestone.completedDate && (
                          <span>Completed {milestone.completedDate}</span>
                        )}
                        {milestone.status === 'in-progress' && milestone.estimatedCompletion && (
                          <span>Est. completion: {milestone.estimatedCompletion}</span>
                        )}
                        {milestone.status === 'upcoming' && milestone.startDate && (
                          <span>Starts {milestone.startDate}</span>
                        )}
                      </div>
                    </div>

                    {milestone.status === 'in-progress' && (
                      <Link
                        to="/resources"
                        className="ml-4 text-sm text-gray-900 hover:text-gray-600 flex items-center gap-1 whitespace-nowrap"
                      >
                        Continue
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Action CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9 }}
        className="p-8 bg-gray-50 border border-gray-200 rounded-lg"
      >
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-xl font-medium text-gray-900 mb-2">Need to adjust your roadmap?</h3>
            <p className="text-gray-600">Update your goals and get a refreshed learning path</p>
          </div>
          <Link
            to="/analysis"
            className="px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors flex items-center gap-2 whitespace-nowrap"
          >
            <Award className="w-4 h-4" />
            Refresh Analysis
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
