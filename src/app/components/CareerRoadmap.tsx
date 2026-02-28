import { CheckCircle2, Circle, Clock, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

const roadmapSteps = [
  {
    title: 'Master TypeScript Advanced Patterns',
    status: 'completed',
    duration: '2 weeks',
    skills: ['Generics', 'Utility Types', 'Decorators'],
    resources: 3,
  },
  {
    title: 'Build Full-Stack Project with Node.js',
    status: 'in-progress',
    duration: '4 weeks',
    skills: ['Express', 'PostgreSQL', 'Authentication'],
    resources: 5,
    progress: 65,
  },
  {
    title: 'Learn System Design Fundamentals',
    status: 'upcoming',
    duration: '6 weeks',
    skills: ['Scalability', 'Load Balancing', 'Caching'],
    resources: 8,
  },
  {
    title: 'AWS Certification Prep',
    status: 'upcoming',
    duration: '8 weeks',
    skills: ['EC2', 'S3', 'Lambda', 'RDS'],
    resources: 12,
  },
];

export function CareerRoadmap() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="relative"
    >
      {/* Card */}
      <div className="relative bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow duration-200">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-lg font-semibold text-black mb-2">AI-Generated Career Roadmap</h3>
            <p className="text-sm text-gray-600">Personalized learning path to Senior Developer</p>
          </div>
          <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-100 border border-gray-200">
            <Sparkles className="w-4 h-4 text-black" />
            <span className="text-xs text-gray-700 font-medium">AI Optimized</span>
          </div>
        </div>

        <div className="space-y-4">
          {roadmapSteps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
              className="relative"
            >
              {/* Connector line */}
              {index < roadmapSteps.length - 1 && (
                <div className="absolute left-5 top-12 w-0.5 h-12 bg-gray-200"></div>
              )}

              <div className={`flex gap-4 p-4 rounded-lg border transition-all duration-200 ${
                step.status === 'completed' 
                  ? 'bg-green-50 border-green-200 hover:border-green-300' 
                  : step.status === 'in-progress'
                  ? 'bg-blue-50 border-blue-200 hover:border-blue-300'
                  : 'bg-gray-50 border-gray-200 hover:border-gray-300'
              }`}>
                {/* Icon */}
                <div className="flex-shrink-0">
                  {step.status === 'completed' ? (
                    <CheckCircle2 className="w-10 h-10 text-green-600" />
                  ) : step.status === 'in-progress' ? (
                    <Clock className="w-10 h-10 text-blue-600" />
                  ) : (
                    <Circle className="w-10 h-10 text-gray-400" />
                  )}
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="font-semibold text-black">{step.title}</h4>
                    <span className="text-xs text-gray-600 flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {step.duration}
                    </span>
                  </div>

                  {/* Progress bar for in-progress */}
                  {step.status === 'in-progress' && step.progress && (
                    <div className="mb-3">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-xs text-gray-600">Progress</span>
                        <span className="text-xs text-black font-medium">{step.progress}%</span>
                      </div>
                      <div className="h-1.5 bg-gray-200 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${step.progress}%` }}
                          transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                          className="h-full bg-black"
                        />
                      </div>
                    </div>
                  )}

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2 mb-2">
                    {step.skills.map((skill, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 text-xs rounded-md bg-white text-gray-700 border border-gray-200"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  <p className="text-xs text-gray-500">{step.resources} curated resources</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Action button */}
        <button className="w-full mt-6 px-4 py-3 rounded-lg bg-black hover:bg-gray-800 text-white font-medium transition-all duration-200">
          View Full Roadmap
        </button>
      </div>
    </motion.div>
  );
}
