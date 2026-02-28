import { motion } from 'motion/react';
import { Briefcase } from 'lucide-react';

const readinessMetrics = [
  { label: 'Technical Skills', score: 78, color: 'blue' },
  { label: 'System Design', score: 52, color: 'purple' },
  { label: 'Communication', score: 85, color: 'green' },
  { label: 'Leadership', score: 65, color: 'orange' },
];

const jobMatches = [
  { title: 'Senior Frontend Developer', company: 'TechCorp', match: 92, salary: '$120K - $150K' },
  { title: 'Full Stack Engineer', company: 'StartupXYZ', match: 85, salary: '$110K - $140K' },
  { title: 'React Developer', company: 'Innovation Labs', match: 88, salary: '$100K - $130K' },
];

export function JobReadiness() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.6 }}
      className="relative"
    >
      {/* Card */}
      <div className="relative bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow duration-200">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-lg font-semibold text-black mb-2">Job Readiness Score</h3>
            <p className="text-sm text-gray-600">How ready are you for your target roles?</p>
          </div>
        </div>

        {/* Overall score */}
        <div className="relative mb-8">
          <div className="flex items-center justify-center">
            <div className="relative w-40 h-40">
              {/* Background circle */}
              <svg className="w-full h-full transform -rotate-90">
                <circle
                  cx="80"
                  cy="80"
                  r="70"
                  stroke="rgba(0,0,0,0.1)"
                  strokeWidth="12"
                  fill="none"
                />
                <motion.circle
                  cx="80"
                  cy="80"
                  r="70"
                  stroke="#000000"
                  strokeWidth="12"
                  fill="none"
                  strokeLinecap="round"
                  initial={{ strokeDasharray: "0 440" }}
                  animate={{ strokeDasharray: "308 440" }}
                  transition={{ duration: 2, ease: "easeOut", delay: 0.8 }}
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <motion.span
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 1 }}
                  className="text-4xl font-bold text-black"
                >
                  70%
                </motion.span>
                <span className="text-xs text-gray-600 mt-1">Ready</span>
              </div>
            </div>
          </div>
        </div>

        {/* Metrics breakdown */}
        <div className="space-y-3 mb-6">
          {readinessMetrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.9 + index * 0.1 }}
            >
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-sm text-gray-700">{metric.label}</span>
                <span className="text-sm font-semibold text-black">{metric.score}%</span>
              </div>
              <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${metric.score}%` }}
                  transition={{ duration: 1, delay: 1 + index * 0.1 }}
                  className={`h-full ${
                    metric.color === 'blue' ? 'bg-blue-500' :
                    metric.color === 'purple' ? 'bg-purple-500' :
                    metric.color === 'green' ? 'bg-green-500' :
                    'bg-orange-500'
                  }`}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Job matches */}
        <div className="border-t border-gray-200 pt-6">
          <h4 className="text-sm font-semibold text-black mb-4 flex items-center gap-2">
            <Briefcase className="w-4 h-4 text-black" />
            Top Job Matches
          </h4>
          <div className="space-y-3">
            {jobMatches.map((job, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 1.3 + index * 0.1 }}
                className="p-3 rounded-lg bg-gray-50 border border-gray-200 hover:bg-gray-100 hover:border-gray-300 transition-all duration-200 cursor-pointer group"
              >
                <div className="flex items-start justify-between mb-2">
                  <div className="flex-1">
                    <h5 className="text-sm font-semibold text-black group-hover:underline">
                      {job.title}
                    </h5>
                    <p className="text-xs text-gray-600">{job.company}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-bold text-green-600">{job.match}% Match</div>
                    <div className="text-xs text-gray-500">{job.salary}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <button className="w-full mt-6 px-4 py-3 rounded-lg bg-black hover:bg-gray-800 text-white font-medium transition-all duration-200">
          Apply to Matched Jobs
        </button>
      </div>
    </motion.div>
  );
}
