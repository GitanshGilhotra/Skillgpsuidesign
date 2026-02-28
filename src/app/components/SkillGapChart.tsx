import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, ResponsiveContainer, Legend } from 'recharts';
import { motion } from 'motion/react';

const data = [
  { skill: 'React', current: 85, market: 95 },
  { skill: 'TypeScript', current: 75, market: 90 },
  { skill: 'Node.js', current: 60, market: 85 },
  { skill: 'System Design', current: 45, market: 80 },
  { skill: 'AI/ML', current: 40, market: 75 },
  { skill: 'Cloud (AWS)', current: 50, market: 85 },
];

export function SkillGapChart() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="relative group"
    >
      {/* Card */}
      <div className="relative bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow duration-200">
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-black mb-2">Skill Gap Analysis</h3>
          <p className="text-sm text-gray-600">Your skills vs. market demand</p>
        </div>

        <div className="h-[400px]">
          <ResponsiveContainer width="100%" height="100%">
            <RadarChart data={data}>
              <defs>
                <linearGradient id="currentGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#000000" stopOpacity={0.3} />
                  <stop offset="100%" stopColor="#000000" stopOpacity={0.05} />
                </linearGradient>
                <linearGradient id="marketGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#6b7280" stopOpacity={0.3} />
                  <stop offset="100%" stopColor="#6b7280" stopOpacity={0.05} />
                </linearGradient>
              </defs>
              <PolarGrid stroke="rgba(0,0,0,0.1)" />
              <PolarAngleAxis 
                dataKey="skill" 
                tick={{ fill: '#4b5563', fontSize: 12 }}
              />
              <PolarRadiusAxis 
                angle={90} 
                domain={[0, 100]} 
                tick={{ fill: '#6b7280', fontSize: 10 }}
              />
              <Radar
                name="Your Skills"
                dataKey="current"
                stroke="#000000"
                fill="url(#currentGradient)"
                strokeWidth={2}
              />
              <Radar
                name="Market Demand"
                dataKey="market"
                stroke="#6b7280"
                fill="url(#marketGradient)"
                strokeWidth={2}
              />
              <Legend 
                wrapperStyle={{ paddingTop: '20px' }}
                iconType="circle"
                formatter={(value) => <span style={{ color: '#4b5563', fontSize: '12px' }}>{value}</span>}
              />
            </RadarChart>
          </ResponsiveContainer>
        </div>

        {/* Key insights */}
        <div className="mt-6 grid grid-cols-2 gap-4">
          <div className="p-3 rounded-lg bg-gray-50 border border-gray-200">
            <p className="text-xs text-gray-600 mb-1">Avg. Gap</p>
            <p className="text-lg font-semibold text-black">-22%</p>
          </div>
          <div className="p-3 rounded-lg bg-gray-50 border border-gray-200">
            <p className="text-xs text-gray-600 mb-1">Priority Skills</p>
            <p className="text-lg font-semibold text-black">3</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
