import { motion } from 'motion/react';
import { Sparkles, Upload, Github } from 'lucide-react';
import { Link } from 'react-router';

export function HeroSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="relative overflow-hidden rounded-2xl border border-gray-200 bg-gray-50 p-8 mb-8"
    >
      <div className="relative z-10">
        <div className="flex items-center gap-2 mb-4">
          <Sparkles className="w-6 h-6 text-black" />
          <span className="text-sm font-semibold text-gray-700">AI-Powered Career Navigation</span>
        </div>

        <h2 className="text-3xl font-bold text-black mb-4 leading-tight">
          Navigate Your Career Like <br />
          <span className="text-gray-600">
            Google Maps for Skills
          </span>
        </h2>

        <p className="text-gray-600 mb-6 max-w-2xl">
          Upload your resume or connect your GitHub to get AI-powered insights on skill gaps, 
          personalized learning roadmaps, and career growth predictions based on real-time market data.
        </p>

        <div className="flex flex-wrap gap-4">
          <Link
            to="/upload"
            className="flex items-center gap-2 px-6 py-3 rounded-lg bg-black hover:bg-gray-800 text-white font-medium transition-all duration-200"
          >
            <Upload className="w-5 h-5" />
            Upload Resume
          </Link>

          <button className="flex items-center gap-2 px-6 py-3 rounded-lg border border-gray-300 bg-white hover:bg-gray-50 text-gray-700 font-medium transition-all duration-200">
            <Github className="w-5 h-5" />
            Connect GitHub
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-6 mt-8 pt-8 border-t border-gray-200">
          <div>
            <p className="text-2xl font-bold text-black mb-1">10K+</p>
            <p className="text-sm text-gray-600">Skills Analyzed</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-black mb-1">95%</p>
            <p className="text-sm text-gray-600">Career Match Rate</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-black mb-1">2.5x</p>
            <p className="text-sm text-gray-600">Avg. Salary Growth</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
