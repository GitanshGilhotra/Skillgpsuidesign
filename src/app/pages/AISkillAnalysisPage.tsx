import { motion } from 'motion/react';
import { Link } from 'react-router';
import { 
  Brain, 
  Code, 
  Database, 
  Palette, 
  Server, 
  Cloud,
  ArrowRight,
  TrendingUp,
  Award,
  Target,
  AlertCircle,
  CheckCircle2,
  Sparkles
} from 'lucide-react';
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, ResponsiveContainer } from 'recharts';

const stats = [
  { label: 'Overall Score', value: '78/100', change: '+12 pts this month', trend: 'up', icon: Target },
  { label: 'Skills Analyzed', value: '24', change: '8 categories', trend: 'up', icon: Brain },
  { label: 'Strengths', value: '12', change: 'Above average', trend: 'up', icon: Award },
  { label: 'Skill Gaps', value: '5', change: 'Need attention', trend: 'down', icon: AlertCircle }
];

const skillCategories = [
  {
    category: 'Frontend',
    icon: Code,
    skills: [
      { name: 'React', level: 85, trend: 'up' },
      { name: 'TypeScript', level: 70, trend: 'up' },
      { name: 'CSS/Tailwind', level: 90, trend: 'stable' },
      { name: 'Next.js', level: 65, trend: 'up' }
    ]
  },
  {
    category: 'Backend',
    icon: Server,
    skills: [
      { name: 'Node.js', level: 80, trend: 'stable' },
      { name: 'Express', level: 75, trend: 'stable' },
      { name: 'REST APIs', level: 85, trend: 'up' },
      { name: 'GraphQL', level: 45, trend: 'up' }
    ]
  },
  {
    category: 'Database',
    icon: Database,
    skills: [
      { name: 'PostgreSQL', level: 70, trend: 'stable' },
      { name: 'MongoDB', level: 60, trend: 'up' },
      { name: 'Redis', level: 40, trend: 'up' },
      { name: 'SQL', level: 75, trend: 'stable' }
    ]
  },
  {
    category: 'Cloud & DevOps',
    icon: Cloud,
    skills: [
      { name: 'AWS', level: 55, trend: 'up' },
      { name: 'Docker', level: 50, trend: 'up' },
      { name: 'CI/CD', level: 60, trend: 'stable' },
      { name: 'Kubernetes', level: 30, trend: 'up' }
    ]
  }
];

const radarData = [
  { subject: 'Frontend', value: 77.5, fullMark: 100 },
  { subject: 'Backend', value: 71.25, fullMark: 100 },
  { subject: 'Database', value: 61.25, fullMark: 100 },
  { subject: 'Cloud', value: 48.75, fullMark: 100 },
  { subject: 'System Design', value: 55, fullMark: 100 },
  { subject: 'Testing', value: 65, fullMark: 100 }
];

export default function AISkillAnalysisPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-4"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-green-50 border border-green-200 mb-2">
          <CheckCircle2 className="w-4 h-4 text-green-600" />
          <span className="text-sm text-green-700 font-medium">Analysis Complete</span>
        </div>
        <h1 className="text-3xl font-medium text-gray-900">AI Skill Analysis</h1>
        <p className="text-gray-600">Comprehensive analysis of your technical skills and competencies</p>
      </motion.div>

      {/* Stats Cards */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="grid grid-cols-1 md:grid-cols-4 gap-4"
      >
        {stats.map((stat, index) => (
          <div
            key={stat.label}
            className="p-6 border border-gray-200 rounded-lg"
          >
            <div className="flex items-center gap-3 mb-2">
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                stat.trend === 'up' ? 'bg-green-50' : 'bg-orange-50'
              }`}>
                <stat.icon className={`w-5 h-5 ${
                  stat.trend === 'up' ? 'text-green-600' : 'text-orange-600'
                }`} />
              </div>
              <span className="text-sm text-gray-600">{stat.label}</span>
            </div>
            <div className="text-2xl font-medium text-gray-900 mb-1">{stat.value}</div>
            <div className={`text-sm ${stat.trend === 'up' ? 'text-green-600' : 'text-orange-600'}`}>
              {stat.change}
            </div>
          </div>
        ))}
      </motion.div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Radar Chart */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="p-6 border border-gray-200 rounded-lg"
        >
          <h2 className="text-xl font-medium text-gray-900 mb-6">Skill Distribution</h2>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart data={radarData}>
                <PolarGrid stroke="#e5e7eb" />
                <PolarAngleAxis dataKey="subject" stroke="#6b7280" />
                <PolarRadiusAxis angle={90} domain={[0, 100]} stroke="#6b7280" />
                <Radar name="Skills" dataKey="value" stroke="#000000" fill="#000000" fillOpacity={0.1} strokeWidth={2} />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        {/* AI Insights */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="p-6 border border-gray-200 rounded-lg space-y-4"
        >
          <div className="flex items-center gap-2 mb-4">
            <Sparkles className="w-5 h-5 text-gray-900" />
            <h2 className="text-xl font-medium text-gray-900">AI Insights</h2>
          </div>

          <div className="space-y-4">
            <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-medium text-green-900 mb-1">Strong Frontend Skills</h3>
                  <p className="text-sm text-green-700">
                    Your React and CSS expertise is well above industry average. This positions you well for senior frontend roles.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
              <div className="flex items-start gap-3">
                <Brain className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-medium text-blue-900 mb-1">Backend Proficiency</h3>
                  <p className="text-sm text-blue-700">
                    Solid Node.js and API development skills. Consider deepening GraphQL knowledge for modern API architectures.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 bg-orange-50 border border-orange-200 rounded-lg">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-medium text-orange-900 mb-1">Cloud Skills Gap</h3>
                  <p className="text-sm text-orange-700">
                    Your cloud and DevOps skills need improvement. Focus on AWS and container orchestration for senior roles.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Detailed Skills */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="space-y-6"
      >
        <h2 className="text-xl font-medium text-gray-900">Detailed Breakdown</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + categoryIndex * 0.1 }}
              className="p-6 border border-gray-200 rounded-lg"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-gray-50 flex items-center justify-center">
                  <category.icon className="w-5 h-5 text-gray-900" />
                </div>
                <h3 className="text-lg font-medium text-gray-900">{category.category}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-900">{skill.name}</span>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-medium text-gray-900">{skill.level}%</span>
                        {skill.trend === 'up' && (
                          <TrendingUp className="w-4 h-4 text-green-600" />
                        )}
                      </div>
                    </div>
                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div 
                        className={`h-full rounded-full transition-all ${
                          skill.level >= 70 ? 'bg-green-600' : skill.level >= 50 ? 'bg-blue-600' : 'bg-orange-600'
                        }`}
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="p-8 bg-gray-50 border border-gray-200 rounded-lg"
      >
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-xl font-medium text-gray-900 mb-2">Ready to address your skill gaps?</h3>
            <p className="text-gray-600">Get a personalized plan to improve your weakest areas</p>
          </div>
          <Link
            to="/skill-gaps"
            className="px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors flex items-center gap-2 whitespace-nowrap"
          >
            View Skill Gaps
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
