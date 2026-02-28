import { useState } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router';
import { 
  Target,
  Calendar,
  Clock,
  CheckCircle2,
  Circle,
  Play,
  Pause,
  ChevronRight,
  Plus,
  MoreHorizontal,
  Sparkles
} from 'lucide-react';

const weekDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

const weeklyPlan = {
  Mon: [
    { time: '9:00 AM', task: 'TypeScript Advanced Types', duration: '2h', status: 'completed', category: 'learning' },
    { time: '2:00 PM', task: 'Practice System Design', duration: '1.5h', status: 'completed', category: 'practice' }
  ],
  Tue: [
    { time: '9:00 AM', task: 'AWS Lambda Deep Dive', duration: '2h', status: 'completed', category: 'learning' },
    { time: '3:00 PM', task: 'Build Serverless API', duration: '2h', status: 'in-progress', category: 'project' }
  ],
  Wed: [
    { time: '10:00 AM', task: 'GraphQL Schema Design', duration: '1.5h', status: 'pending', category: 'learning' },
    { time: '2:00 PM', task: 'Code Review Practice', duration: '1h', status: 'pending', category: 'practice' }
  ],
  Thu: [
    { time: '9:00 AM', task: 'Docker Containers Workshop', duration: '2h', status: 'pending', category: 'learning' },
    { time: '1:00 PM', task: 'Deploy to AWS', duration: '1.5h', status: 'pending', category: 'project' }
  ],
  Fri: [
    { time: '10:00 AM', task: 'Testing Best Practices', duration: '1.5h', status: 'pending', category: 'learning' },
    { time: '3:00 PM', task: 'Weekend Project Planning', duration: '1h', status: 'pending', category: 'planning' }
  ],
  Sat: [
    { time: '10:00 AM', task: 'Build Portfolio Project', duration: '3h', status: 'pending', category: 'project' }
  ],
  Sun: [
    { time: '11:00 AM', task: 'Weekly Review & Planning', duration: '1h', status: 'pending', category: 'planning' }
  ]
};

export default function AIWeeklyPlannerPage() {
  const [selectedDay, setSelectedDay] = useState('Tue');
  const currentTasks = weeklyPlan[selectedDay as keyof typeof weeklyPlan] || [];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'text-green-600 bg-green-50 border-green-200';
      case 'in-progress': return 'text-blue-600 bg-blue-50 border-blue-200';
      default: return 'text-gray-600 bg-gray-50 border-gray-200';
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'learning': return 'bg-blue-100 text-blue-700';
      case 'practice': return 'bg-purple-100 text-purple-700';
      case 'project': return 'bg-green-100 text-green-700';
      case 'planning': return 'bg-orange-100 text-orange-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

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
            <div className="flex items-center gap-2 mb-2">
              <Sparkles className="w-5 h-5 text-gray-900" />
              <span className="text-sm font-medium text-gray-600">AI-Generated Plan</span>
            </div>
            <h1 className="text-3xl font-medium text-gray-900">Weekly Learning Planner</h1>
            <p className="text-gray-600 mt-2">Your personalized weekly schedule optimized for skill development</p>
          </div>
          <button className="px-4 py-2 border border-gray-200 rounded-lg hover:border-gray-900 transition-colors flex items-center gap-2">
            <Plus className="w-4 h-4" />
            Add Task
          </button>
        </div>
      </motion.div>

      {/* Weekly Stats */}
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
          <p className="text-2xl font-medium text-gray-900">5 / 15</p>
          <p className="text-sm text-gray-600">Tasks this week</p>
        </div>

        <div className="p-6 border border-gray-200 rounded-lg">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center">
              <Clock className="w-5 h-5 text-blue-600" />
            </div>
            <span className="text-sm text-gray-600">Planned Hours</span>
          </div>
          <p className="text-2xl font-medium text-gray-900">22.5h</p>
          <p className="text-sm text-gray-600">This week</p>
        </div>

        <div className="p-6 border border-gray-200 rounded-lg">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-lg bg-purple-50 flex items-center justify-center">
              <Target className="w-5 h-5 text-purple-600" />
            </div>
            <span className="text-sm text-gray-600">Focus Areas</span>
          </div>
          <p className="text-2xl font-medium text-gray-900">4</p>
          <p className="text-sm text-gray-600">Key skills</p>
        </div>

        <div className="p-6 border border-gray-200 rounded-lg">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-lg bg-orange-50 flex items-center justify-center">
              <Play className="w-5 h-5 text-orange-600" />
            </div>
            <span className="text-sm text-gray-600">In Progress</span>
          </div>
          <p className="text-2xl font-medium text-gray-900">1</p>
          <p className="text-sm text-gray-600">Active task</p>
        </div>
      </motion.div>

      {/* Day Selector */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="flex gap-2 overflow-x-auto pb-2"
      >
        {weekDays.map((day) => {
          const dayTasks = weeklyPlan[day as keyof typeof weeklyPlan] || [];
          const completedCount = dayTasks.filter(t => t.status === 'completed').length;
          const totalCount = dayTasks.length;
          
          return (
            <button
              key={day}
              onClick={() => setSelectedDay(day)}
              className={`flex-shrink-0 px-6 py-4 rounded-lg border transition-all ${
                selectedDay === day
                  ? 'bg-gray-900 text-white border-gray-900'
                  : 'bg-white text-gray-700 border-gray-200 hover:border-gray-900'
              }`}
            >
              <div className="text-center">
                <div className="font-medium mb-1">{day}</div>
                <div className={`text-xs ${selectedDay === day ? 'text-gray-300' : 'text-gray-600'}`}>
                  {completedCount}/{totalCount} done
                </div>
              </div>
            </button>
          );
        })}
      </motion.div>

      {/* Task List for Selected Day */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="space-y-4"
      >
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-medium text-gray-900">{selectedDay}'s Schedule</h2>
          <span className="text-sm text-gray-600">
            {currentTasks.reduce((sum, task) => {
              const hours = parseFloat(task.duration.replace('h', ''));
              return sum + hours;
            }, 0)}h total
          </span>
        </div>

        <div className="space-y-3">
          {currentTasks.length > 0 ? (
            currentTasks.map((task, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + index * 0.05 }}
                className={`p-6 border rounded-lg hover:shadow-sm transition-all ${
                  task.status === 'in-progress' 
                    ? 'border-blue-500 bg-blue-50' 
                    : 'border-gray-200 bg-white'
                }`}
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-4 flex-1">
                    {/* Status Icon */}
                    <div className="mt-1">
                      {task.status === 'completed' ? (
                        <div className="w-6 h-6 rounded-full bg-green-50 border-2 border-green-500 flex items-center justify-center">
                          <CheckCircle2 className="w-4 h-4 text-green-600" />
                        </div>
                      ) : task.status === 'in-progress' ? (
                        <div className="w-6 h-6 rounded-full bg-blue-50 border-2 border-blue-500 flex items-center justify-center">
                          <Play className="w-4 h-4 text-blue-600" />
                        </div>
                      ) : (
                        <div className="w-6 h-6 rounded-full bg-gray-50 border-2 border-gray-300 flex items-center justify-center">
                          <Circle className="w-4 h-4 text-gray-400" />
                        </div>
                      )}
                    </div>

                    {/* Task Details */}
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="font-medium text-gray-900">{task.task}</h3>
                        <span className={`px-2 py-0.5 rounded text-xs ${getCategoryColor(task.category)}`}>
                          {task.category}
                        </span>
                      </div>

                      <div className="flex items-center gap-4 text-sm text-gray-600">
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {task.time}
                        </div>
                        <div>Duration: {task.duration}</div>
                      </div>
                    </div>
                  </div>

                  {/* Action Button */}
                  <button className="ml-4 p-2 hover:bg-gray-100 rounded-lg transition-colors">
                    <MoreHorizontal className="w-5 h-5 text-gray-400" />
                  </button>
                </div>
              </motion.div>
            ))
          ) : (
            <div className="text-center py-12 border border-gray-200 rounded-lg">
              <Calendar className="w-12 h-12 text-gray-400 mx-auto mb-3" />
              <h3 className="text-lg font-medium text-gray-900 mb-1">No tasks scheduled</h3>
              <p className="text-gray-600">Add tasks to plan your day</p>
            </div>
          )}
        </div>
      </motion.div>

      {/* Quick Actions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-4"
      >
        <div className="p-6 bg-gray-50 border border-gray-200 rounded-lg">
          <h3 className="font-medium text-gray-900 mb-2">Need a different plan?</h3>
          <p className="text-sm text-gray-600 mb-4">
            Let AI regenerate your weekly schedule based on updated goals
          </p>
          <button className="px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors flex items-center gap-2 text-sm">
            <Sparkles className="w-4 h-4" />
            Regenerate Plan
          </button>
        </div>

        <div className="p-6 bg-gray-50 border border-gray-200 rounded-lg">
          <h3 className="font-medium text-gray-900 mb-2">Track your progress</h3>
          <p className="text-sm text-gray-600 mb-4">
            View detailed analytics on your learning journey
          </p>
          <Link
            to="/analytics"
            className="inline-flex items-center gap-2 px-4 py-2 border border-gray-900 text-gray-900 rounded-lg hover:bg-gray-900 hover:text-white transition-colors text-sm"
          >
            View Analytics
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
