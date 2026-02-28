import { motion } from 'motion/react';
import { Brain, Lightbulb, AlertCircle, TrendingUp } from 'lucide-react';

const insights = [
  {
    type: 'recommendation',
    icon: Lightbulb,
    color: 'yellow',
    title: 'High-Impact Skill',
    message: 'Learning System Design could increase your salary potential by 28% in the next 6 months.',
    priority: 'high',
  },
  {
    type: 'warning',
    icon: AlertCircle,
    color: 'orange',
    title: 'Skill Gap Alert',
    message: 'AWS/Cloud skills are in high demand for your target roles. Consider prioritizing this.',
    priority: 'medium',
  },
  {
    type: 'trend',
    icon: TrendingUp,
    color: 'green',
    title: 'Market Trend',
    message: 'TypeScript adoption is growing 45% YoY. Your current skill level puts you ahead of 73% of developers.',
    priority: 'low',
  },
];

export function AIInsights() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.7 }}
      className="relative"
    >
      {/* Card */}
      <div className="relative bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow duration-200">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 rounded-lg bg-gray-100">
            <Brain className="w-6 h-6 text-black" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-black">AI Insights</h3>
            <p className="text-sm text-gray-600">Personalized recommendations</p>
          </div>
        </div>

        <div className="space-y-4">
          {insights.map((insight, index) => {
            const Icon = insight.icon;
            const priorityColors = {
              high: 'border-red-200 bg-red-50',
              medium: 'border-yellow-200 bg-yellow-50',
              low: 'border-blue-200 bg-blue-50',
            };

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                className={`relative p-4 rounded-lg border transition-all duration-200 hover:shadow-md cursor-pointer ${priorityColors[insight.priority as keyof typeof priorityColors]}`}
              >
                <div className="flex gap-3">
                  <div className={`flex-shrink-0 p-2 rounded-lg ${
                    insight.color === 'yellow' ? 'bg-yellow-100' :
                    insight.color === 'orange' ? 'bg-orange-100' :
                    'bg-green-100'
                  }`}>
                    <Icon className={`w-5 h-5 ${
                      insight.color === 'yellow' ? 'text-yellow-600' :
                      insight.color === 'orange' ? 'text-orange-600' :
                      'text-green-600'
                    }`} />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-sm font-semibold text-black mb-1">{insight.title}</h4>
                    <p className="text-xs text-gray-700 leading-relaxed">{insight.message}</p>
                  </div>
                </div>

                {/* Priority indicator */}
                <div className="absolute top-2 right-2">
                  <span className={`text-[10px] px-2 py-0.5 rounded-full font-medium ${
                    insight.priority === 'high' ? 'bg-red-100 text-red-700' :
                    insight.priority === 'medium' ? 'bg-yellow-100 text-yellow-700' :
                    'bg-blue-100 text-blue-700'
                  }`}>
                    {insight.priority.toUpperCase()}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* AI Status */}
        <div className="mt-6 p-3 rounded-lg bg-gray-50 border border-gray-200">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-xs text-gray-700 font-medium">AI Engine Active</span>
            </div>
            <span className="text-xs text-gray-500">Last updated: 2 min ago</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
