import { useState } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router';
import { 
  Target,
  DollarSign,
  TrendingUp,
  Briefcase,
  Award,
  Plus,
  Minus,
  Sparkles,
  ArrowRight,
  CheckCircle
} from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area, AreaChart } from 'recharts';
import { SalaryProjection } from '../components/SalaryProjection';

const availableSkills = [
  'React', 'Node.js', 'TypeScript', 'AWS', 'Docker', 
  'Kubernetes', 'GraphQL', 'System Design', 'MongoDB', 
  'PostgreSQL', 'Redis', 'CI/CD'
];

const careerPaths = [
  {
    title: 'Senior Full-Stack Engineer',
    salary: '$140k - $180k',
    timeline: '12-18 months',
    requiredSkills: ['React', 'Node.js', 'TypeScript', 'AWS', 'System Design'],
    description: 'Lead complex projects and mentor junior developers'
  },
  {
    title: 'Tech Lead',
    salary: '$160k - $220k',
    timeline: '18-24 months',
    requiredSkills: ['System Design', 'TypeScript', 'AWS', 'Kubernetes', 'CI/CD'],
    description: 'Guide technical decisions and architecture'
  },
  {
    title: 'Engineering Manager',
    salary: '$170k - $240k',
    timeline: '24-36 months',
    requiredSkills: ['System Design', 'Leadership', 'Agile', 'Stakeholder Management'],
    description: 'Manage team and drive product initiatives'
  }
];

export default function CareerSimulationPage() {
  const [selectedSkills, setSelectedSkills] = useState<string[]>(['React', 'Node.js']);
  const [experienceYears, setExperienceYears] = useState(3);

  const toggleSkill = (skill: string) => {
    if (selectedSkills.includes(skill)) {
      setSelectedSkills(selectedSkills.filter(s => s !== skill));
    } else {
      setSelectedSkills([...selectedSkills, skill]);
    }
  };

  // Calculate projections based on selected skills
  const baseSalary = 85000;
  const skillMultiplier = selectedSkills.length * 0.08;
  const expMultiplier = experienceYears * 0.05;
  const projectedSalary = Math.round(baseSalary * (1 + skillMultiplier + expMultiplier));
  const jobReadiness = Math.min(95, 45 + selectedSkills.length * 8);

  // Generate projection data
  const projectionData = Array.from({ length: 12 }, (_, i) => {
    const currentSkills = Math.min(selectedSkills.length + Math.floor(i / 2), availableSkills.length);
    const salary = Math.round(baseSalary * (1 + currentSkills * 0.08 + (experienceYears + i / 12) * 0.05));
    return {
      month: `M${i + 1}`,
      salary,
      readiness: Math.min(95, 45 + currentSkills * 8)
    };
  });

  return (
    <div className="space-y-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-4"
      >
        <h1 className="text-3xl font-medium text-gray-900">Career Simulation</h1>
        <p className="text-gray-600">Simulate different career paths and see projected salary outcomes based on your skill development</p>
      </motion.div>

      {/* Current Projections */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-4"
      >
        <div className="p-6 border border-gray-200 rounded-lg">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-lg bg-green-50 flex items-center justify-center">
              <DollarSign className="w-5 h-5 text-green-600" />
            </div>
            <span className="text-sm text-gray-600">Projected Salary</span>
          </div>
          <p className="text-2xl font-medium text-gray-900">${(projectedSalary / 1000).toFixed(0)}k</p>
          <p className="text-sm text-gray-600 mt-1">Based on {selectedSkills.length} skills</p>
        </div>

        <div className="p-6 border border-gray-200 rounded-lg">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center">
              <TrendingUp className="w-5 h-5 text-blue-600" />
            </div>
            <span className="text-sm text-gray-600">Job Readiness</span>
          </div>
          <p className="text-2xl font-medium text-gray-900">{jobReadiness}%</p>
          <p className="text-sm text-gray-600 mt-1">For senior roles</p>
        </div>

        <div className="p-6 border border-gray-200 rounded-lg">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-lg bg-purple-50 flex items-center justify-center">
              <Award className="w-5 h-5 text-purple-600" />
            </div>
            <span className="text-sm text-gray-600">Experience</span>
          </div>
          <p className="text-2xl font-medium text-gray-900">{experienceYears} years</p>
          <p className="text-sm text-gray-600 mt-1">Current level</p>
        </div>
      </motion.div>

      {/* Interactive Skill Selector */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="p-6 border border-gray-200 rounded-lg space-y-4"
      >
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-medium text-gray-900">Customize Your Skills</h2>
          <button
            onClick={() => setSelectedSkills([])}
            className="text-sm text-gray-600 hover:text-gray-900"
          >
            Clear All
          </button>
        </div>
        
        <div className="flex flex-wrap gap-2">
          {availableSkills.map((skill) => (
            <button
              key={skill}
              onClick={() => toggleSkill(skill)}
              className={`px-4 py-2 rounded-lg border transition-all ${
                selectedSkills.includes(skill)
                  ? 'bg-gray-900 text-white border-gray-900'
                  : 'bg-white text-gray-700 border-gray-200 hover:border-gray-900'
              }`}
            >
              <div className="flex items-center gap-2">
                {selectedSkills.includes(skill) ? (
                  <Minus className="w-4 h-4" />
                ) : (
                  <Plus className="w-4 h-4" />
                )}
                {skill}
              </div>
            </button>
          ))}
        </div>

        {/* Experience Slider */}
        <div className="pt-4 border-t border-gray-200">
          <div className="flex items-center justify-between mb-2">
            <label className="text-sm font-medium text-gray-900">Years of Experience</label>
            <span className="text-sm text-gray-600">{experienceYears} years</span>
          </div>
          <input
            type="range"
            min="0"
            max="15"
            value={experienceYears}
            onChange={(e) => setExperienceYears(Number(e.target.value))}
            className="w-full"
          />
        </div>
      </motion.div>

      {/* Salary Projection Component */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <SalaryProjection />
      </motion.div>

      {/* 12-Month Projection Chart */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="p-6 border border-gray-200 rounded-lg space-y-4"
      >
        <h2 className="text-xl font-medium text-gray-900">12-Month Projection</h2>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={projectionData}>
              <defs>
                <linearGradient id="salaryGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#000000" stopOpacity={0.1}/>
                  <stop offset="95%" stopColor="#000000" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis dataKey="month" stroke="#6b7280" />
              <YAxis stroke="#6b7280" tickFormatter={(value) => `$${(value / 1000).toFixed(0)}k`} />
              <Tooltip 
                formatter={(value: number) => [`$${value.toLocaleString()}`, 'Salary']}
                contentStyle={{ backgroundColor: '#fff', border: '1px solid #e5e7eb', borderRadius: '8px' }}
              />
              <Area 
                type="monotone" 
                dataKey="salary" 
                stroke="#000000" 
                strokeWidth={2}
                fill="url(#salaryGradient)" 
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </motion.div>

      {/* Career Path Options */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="space-y-4"
      >
        <h2 className="text-xl font-medium text-gray-900">Potential Career Paths</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {careerPaths.map((path, index) => (
            <div
              key={path.title}
              className="p-6 border border-gray-200 rounded-lg hover:border-gray-900 hover:shadow-sm transition-all space-y-4"
            >
              <div>
                <h3 className="font-medium text-gray-900 mb-1">{path.title}</h3>
                <p className="text-sm text-gray-600">{path.description}</p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm">
                  <DollarSign className="w-4 h-4 text-gray-400" />
                  <span className="text-gray-900 font-medium">{path.salary}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Target className="w-4 h-4 text-gray-400" />
                  <span className="text-gray-600">{path.timeline}</span>
                </div>
              </div>

              <div className="pt-4 border-t border-gray-200">
                <p className="text-xs text-gray-600 mb-2">Required Skills:</p>
                <div className="flex flex-wrap gap-1">
                  {path.requiredSkills.map((skill) => (
                    <span
                      key={skill}
                      className={`px-2 py-1 rounded text-xs ${
                        selectedSkills.includes(skill)
                          ? 'bg-green-50 text-green-700 border border-green-200'
                          : 'bg-gray-50 text-gray-600 border border-gray-200'
                      }`}
                    >
                      {selectedSkills.includes(skill) && <CheckCircle className="w-3 h-3 inline mr-1" />}
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
