import { Link } from 'react-router';
import { motion } from 'motion/react';
import { 
  ArrowRight, 
  Target, 
  Brain, 
  TrendingUp, 
  Sparkles, 
  Zap,
  Globe,
  GitBranch,
  Award,
  ChevronRight
} from 'lucide-react';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="relative z-50 px-6 py-6 border-b border-gray-200">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3"
          >
            <div className="w-10 h-10 rounded-lg bg-black flex items-center justify-center">
              <Target className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold text-black">
              SkillGPS
            </span>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-4"
          >
            <Link to="/dashboard" className="px-6 py-2.5 rounded-lg border border-gray-300 hover:bg-gray-50 text-gray-700 font-medium transition-all">
              Sign In
            </Link>
            <Link to="/upload" className="px-6 py-2.5 rounded-lg bg-black hover:bg-gray-800 text-white font-medium transition-all flex items-center gap-2">
              Get Started
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 px-6 pt-20 pb-32">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 border border-gray-200 mb-8"
            >
              <Sparkles className="w-4 h-4 text-black" />
              <span className="text-sm text-gray-700 font-medium">AI-Powered Career Navigation</span>
            </motion.div>

            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 text-black leading-tight">
              Navigate Your Career with AI
            </h1>
            
            <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
              Like Google Maps for your skills. Analyze your resume, detect skill gaps, and get AI-powered roadmaps to reach your career goals faster.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link 
                to="/upload"
                className="group px-8 py-4 rounded-lg bg-black hover:bg-gray-800 text-white text-lg font-medium transition-all flex items-center gap-3"
              >
                Start Your Journey
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <button className="px-8 py-4 rounded-lg bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 text-lg font-medium transition-all flex items-center gap-2">
                Watch Demo
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </motion.div>

          {/* Feature Cards Grid */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-24"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + index * 0.1 }}
                className="group p-8 rounded-xl bg-white border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all"
              >
                <div className="w-14 h-14 rounded-lg bg-gray-100 flex items-center justify-center mb-6 group-hover:bg-black group-hover:text-white transition-all">
                  <feature.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-semibold text-black mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative z-10 px-6 py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="p-12 rounded-2xl bg-white border border-gray-200">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-4xl md:text-5xl font-bold text-black mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="relative z-10 px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold mb-4 text-black">
              How It Works
            </h2>
            <p className="text-xl text-gray-600">
              Get AI-powered career guidance in three simple steps
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative"
              >
                <div className="p-8 rounded-xl bg-white border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all">
                  <div className="absolute -top-4 -left-4 w-12 h-12 rounded-lg bg-black flex items-center justify-center text-white text-xl font-bold">
                    {index + 1}
                  </div>
                  <div className="w-16 h-16 rounded-lg bg-gray-100 flex items-center justify-center mb-6 mx-auto">
                    <step.icon className="w-8 h-8 text-black" />
                  </div>
                  <h3 className="text-2xl font-semibold text-black mb-3 text-center">{step.title}</h3>
                  <p className="text-gray-600 text-center leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 px-6 py-20 bg-black">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-5xl font-bold mb-6 text-white">
              Ready to Navigate Your Career?
            </h2>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              Join thousands of professionals using AI to accelerate their career growth
            </p>
            <Link
              to="/upload"
              className="inline-flex items-center gap-3 px-10 py-5 rounded-lg bg-white hover:bg-gray-100 text-black text-lg font-medium transition-all"
            >
              Get Started Now
              <Zap className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 px-6 py-12 border-t border-gray-200">
        <div className="max-w-7xl mx-auto text-center text-gray-500">
          <p>© 2026 SkillGPS. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

const features = [
  {
    icon: Brain,
    title: "AI Skill Analysis",
    description: "Upload your resume and let AI analyze your skills, experience, and career trajectory in seconds."
  },
  {
    icon: Target,
    title: "Gap Detection",
    description: "Identify missing skills based on real-time market demand and your career goals."
  },
  {
    icon: TrendingUp,
    title: "Smart Roadmaps",
    description: "Get personalized learning paths that update weekly based on industry trends."
  },
  {
    icon: Globe,
    title: "Market Insights",
    description: "Access real-time data on trending skills, salaries, and job opportunities."
  },
  {
    icon: GitBranch,
    title: "Career Simulation",
    description: "See how learning new skills impacts your salary and career opportunities."
  },
  {
    icon: Award,
    title: "Job Readiness",
    description: "Track your progress and get a real-time score on your job market readiness."
  }
];

const stats = [
  { value: "50K+", label: "Active Users" },
  { value: "95%", label: "Success Rate" },
  { value: "1M+", label: "Skills Analyzed" },
  { value: "4.9/5", label: "User Rating" }
];

const steps = [
  {
    icon: Target,
    title: "Upload & Connect",
    description: "Upload your resume and connect your GitHub and LinkedIn profiles"
  },
  {
    icon: Brain,
    title: "AI Analysis",
    description: "Our AI analyzes your skills, experience, and identifies gaps"
  },
  {
    icon: TrendingUp,
    title: "Get Your Roadmap",
    description: "Receive a personalized learning roadmap with curated resources"
  }
];
