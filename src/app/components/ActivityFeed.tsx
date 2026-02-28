import { motion } from 'motion/react';
import { Clock, Check, Play, BookOpen } from 'lucide-react';

const activities = [
  {
    icon: Check,
    color: 'green',
    title: 'Completed TypeScript Advanced Patterns',
    time: '2 hours ago',
  },
  {
    icon: Play,
    color: 'blue',
    title: 'Started Node.js Project',
    time: '5 hours ago',
  },
  {
    icon: BookOpen,
    color: 'purple',
    title: 'Saved 3 new resources',
    time: '1 day ago',
  },
  {
    icon: Check,
    color: 'green',
    title: 'Skill assessment completed',
    time: '2 days ago',
  },
];

export function ActivityFeed() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.8 }}
      className="relative"
    >
      {/* Card */}
      <div className="relative bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow duration-200">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-lg font-semibold text-black mb-2">Recent Activity</h3>
            <p className="text-sm text-gray-600">Your learning journey</p>
          </div>
          <Clock className="w-5 h-5 text-gray-400" />
        </div>

        <div className="space-y-4">
          {activities.map((activity, index) => {
            const Icon = activity.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.9 + index * 0.1 }}
                className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-all duration-200"
              >
                <div className={`flex-shrink-0 p-2 rounded-lg ${
                  activity.color === 'green' ? 'bg-green-100' :
                  activity.color === 'blue' ? 'bg-blue-100' :
                  'bg-purple-100'
                }`}>
                  <Icon className={`w-4 h-4 ${
                    activity.color === 'green' ? 'text-green-600' :
                    activity.color === 'blue' ? 'text-blue-600' :
                    'text-purple-600'
                  }`} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-black mb-1">{activity.title}</p>
                  <p className="text-xs text-gray-500">{activity.time}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        <button className="w-full mt-4 text-sm text-black font-medium hover:underline transition-all">
          View All Activity
        </button>
      </div>
    </motion.div>
  );
}
