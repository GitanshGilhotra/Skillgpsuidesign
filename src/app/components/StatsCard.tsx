import { LucideIcon } from 'lucide-react';
import { motion } from 'motion/react';

interface StatsCardProps {
  title: string;
  value: string;
  change: string;
  icon: LucideIcon;
  trend: 'up' | 'down' | 'neutral';
  delay?: number;
}

export function StatsCard({ title, value, change, icon: Icon, trend, delay = 0 }: StatsCardProps) {
  const trendColor = trend === 'up' ? 'text-green-600' : trend === 'down' ? 'text-red-600' : 'text-gray-600';
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="relative group"
    >
      {/* Card */}
      <div className="relative bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:border-gray-300 transition-all duration-200">
        <div className="flex items-start justify-between mb-4">
          <div className="p-3 rounded-lg bg-gray-100">
            <Icon className="w-6 h-6 text-black" />
          </div>
          <span className={`text-sm font-medium ${trendColor}`}>{change}</span>
        </div>
        
        <h3 className="text-2xl font-bold text-black mb-1">{value}</h3>
        <p className="text-sm text-gray-600">{title}</p>
      </div>
    </motion.div>
  );
}
