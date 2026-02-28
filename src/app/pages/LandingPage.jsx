import { Link } from "react-router-dom";
import { motion } from "motion/react";
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
} from "lucide-react";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-6 py-4 border-b">
        <h1 className="font-bold text-lg">SkillGPS</h1>

        <div className="flex gap-4">
          <Link to="/login" className="text-gray-600">
            Sign In
          </Link>

          <Link
            to="/app/dashboard"
            className="bg-black text-white px-4 py-2 rounded"
          >
            Get Started
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="px-6 py-20 text-center max-w-4xl mx-auto">
        <p className="text-blue-600 flex justify-center items-center gap-1">
          <Sparkles className="w-4" />
          AI Powered Career Navigation
        </p>

        <h1 className="text-4xl font-bold mt-4">
          Navigate Your Career with AI
        </h1>

        <p className="text-gray-500 mt-4">
          Like Google Maps for your skills. Analyze resume, detect gaps and
          get AI-powered roadmaps.
        </p>

        <div className="flex justify-center gap-4 mt-6">
          <Link
            to="/app/dashboard"
            className="bg-black text-white px-6 py-3 rounded flex items-center gap-2"
          >
            Start Journey <ArrowRight className="w-4" />
          </Link>

          <button className="border px-6 py-3 rounded">
            Watch Demo
          </button>
        </div>
      </section>

      {/* Features */}
      <section className="px-6 py-12 grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {features.map((f, i) => {
          const Icon = f.icon;
          return (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="border rounded-lg p-6"
            >
              <Icon className="text-blue-600 mb-3" />
              <h3 className="font-semibold">{f.title}</h3>
              <p className="text-sm text-gray-500">{f.description}</p>
            </motion.div>
          );
        })}
      </section>

      {/* Stats */}
      <section className="bg-gray-50 py-10">
        <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto text-center">
          {stats.map((s, i) => (
            <div key={i}>
              <h2 className="text-2xl font-bold">{s.value}</h2>
              <p className="text-gray-500">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Steps */}
      <section className="px-6 py-12 max-w-5xl mx-auto">
        <h2 className="text-center text-2xl font-bold mb-8">
          How It Works
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <div key={i} className="border rounded-lg p-6 text-center">
                <div className="w-10 h-10 bg-blue-600 text-white flex items-center justify-center rounded-full mx-auto mb-3">
                  {i + 1}
                </div>
                <Icon className="mx-auto mb-3 text-blue-600" />
                <h3 className="font-semibold">{step.title}</h3>
                <p className="text-sm text-gray-500">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-black text-white text-center py-16">
        <h2 className="text-2xl font-bold">
          Ready to Navigate Your Career?
        </h2>

        <Link
          to="/app/dashboard"
          className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 rounded mt-4"
        >
          Get Started <ArrowRight />
        </Link>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 text-gray-500 text-sm">
        © 2026 SkillGPS. All rights reserved.
      </footer>
    </div>
  );
}

const features = [
  { icon: Brain, title: "AI Skill Analysis", description: "Analyze resume instantly." },
  { icon: Target, title: "Gap Detection", description: "Find missing skills." },
  { icon: TrendingUp, title: "Smart Roadmaps", description: "Personalized learning." },
  { icon: Globe, title: "Market Insights", description: "Real-time data." },
  { icon: GitBranch, title: "Career Simulation", description: "Predict salary." },
  { icon: Award, title: "Job Readiness", description: "Track progress." },
];

const stats = [
  { value: "50K+", label: "Users" },
  { value: "95%", label: "Success" },
  { value: "1M+", label: "Skills" },
  { value: "4.9/5", label: "Rating" },
];

const steps = [
  { icon: Target, title: "Upload", description: "Upload resume." },
  { icon: Brain, title: "Analyze", description: "AI detects gaps." },
  { icon: Zap, title: "Roadmap", description: "Get career plan." },
];