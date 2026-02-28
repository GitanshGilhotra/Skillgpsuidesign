import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { motion } from 'motion/react';
import { TrendingUp, DollarSign, Target } from 'lucide-react';

const salaryData = [
  { month: 'Now', current: 85, projected: 85 },
  { month: '3M', current: 85, projected: 92 },
  { month: '6M', current: 85, projected: 98 },
  { month: '9M', current: 85, projected: 105 },
  { month: '12M', current: 85, projected: 115 },
  { month: '18M', current: 85, projected: 125 },
  { month: '24M', current: 85, projected: 140 },
];

export function SalaryProjection() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className="relative"
    >
      {/* Card */}
      <div className="relative bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow duration-200">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-lg font-semibold text-black mb-2">Career Growth Simulation</h3>
            <p className="text-sm text-gray-600">Estimated salary impact from skill development</p>
          </div>
          <div className="p-3 rounded-lg bg-gray-100">
            <TrendingUp className="w-6 h-6 text-black" />
          </div>
        </div>

        {/* Key metrics */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="p-4 rounded-lg bg-gray-50 border border-gray-200">
            <DollarSign className="w-5 h-5 text-black mb-2" />
            <p className="text-xs text-gray-600 mb-1">Current</p>
            <p className="text-xl font-bold text-black">$85K</p>
          </div>
          <div className="p-4 rounded-lg bg-gray-50 border border-gray-200">
            <Target className="w-5 h-5 text-black mb-2" />
            <p className="text-xs text-gray-600 mb-1">Target (24M)</p>
            <p className="text-xl font-bold text-black">$140K</p>
          </div>
          <div className="p-4 rounded-lg bg-green-50 border border-green-200">
            <TrendingUp className="w-5 h-5 text-green-600 mb-2" />
            <p className="text-xs text-gray-600 mb-1">Growth</p>
            <p className="text-xl font-bold text-green-600">+65%</p>
          </div>
        </div>

        {/* Chart */}
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={salaryData}>
              <defs>
                <linearGradient id="currentGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#6b7280" stopOpacity={0.3} />
                  <stop offset="100%" stopColor="#6b7280" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="projectedGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#000000" stopOpacity={0.2} />
                  <stop offset="100%" stopColor="#000000" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(0,0,0,0.1)" />
              <XAxis 
                dataKey="month" 
                stroke="#6b7280"
                tick={{ fill: '#6b7280', fontSize: 12 }}
              />
              <YAxis 
                stroke="#6b7280"
                tick={{ fill: '#6b7280', fontSize: 12 }}
                tickFormatter={(value) => `$${value}K`}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: 'white',
                  border: '1px solid #e5e7eb',
                  borderRadius: '8px',
                }}
                labelStyle={{ color: '#374151' }}
                itemStyle={{ color: '#000000' }}
              />
              <Area
                type="monotone"
                dataKey="current"
                stroke="#6b7280"
                strokeWidth={2}
                fill="url(#currentGradient)"
                strokeDasharray="5 5"
              />
              <Area
                type="monotone"
                dataKey="projected"
                stroke="#000000"
                strokeWidth={3}
                fill="url(#projectedGradient)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Info */}
        <div className="mt-4 p-3 rounded-lg bg-gray-50 border border-gray-200">
          <p className="text-xs text-gray-700">
            <span className="text-black font-semibold">AI Insight:</span> Completing your roadmap can increase your market value by 65% within 24 months based on current industry trends.
          </p>
        </div>
      </div>
    </motion.div>
  );
}
