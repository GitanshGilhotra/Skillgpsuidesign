import { motion } from "motion/react";
import { Link } from "react-router-dom";
import {
  Brain,
  Code,
  Database,
  Cloud,
  ArrowRight,
  Award,
  Target,
  AlertCircle,
  TrendingUp,
} from "lucide-react";

import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  ResponsiveContainer,
} from "recharts";

const stats = [
  { label: "Overall Score", value: "78/100", change: "+12 pts", icon: Target },
  { label: "Skills", value: "24", change: "8 categories", icon: Brain },
  { label: "Strengths", value: "12", change: "Above avg", icon: Award },
  { label: "Skill Gaps", value: "5", change: "Needs work", icon: AlertCircle },
];

const skillCategories = [
  {
    category: "Frontend",
    icon: Code,
    skills: [
      { name: "React", level: 85 },
      { name: "TypeScript", level: 70 },
      { name: "CSS", level: 90 },
      { name: "Next.js", level: 65 },
    ],
  },
  {
    category: "Backend",
    icon: Brain,
    skills: [
      { name: "Node.js", level: 80 },
      { name: "Express", level: 75 },
      { name: "REST APIs", level: 85 },
      { name: "GraphQL", level: 45 },
    ],
  },
  {
    category: "Database",
    icon: Database,
    skills: [
      { name: "PostgreSQL", level: 70 },
      { name: "MongoDB", level: 60 },
      { name: "Redis", level: 40 },
      { name: "SQL", level: 75 },
    ],
  },
  {
    category: "Cloud",
    icon: Cloud,
    skills: [
      { name: "AWS", level: 55 },
      { name: "Docker", level: 50 },
      { name: "CI/CD", level: 60 },
      { name: "Kubernetes", level: 30 },
    ],
  },
];

const radarData = [
  { subject: "Frontend", value: 78 },
  { subject: "Backend", value: 72 },
  { subject: "Database", value: 61 },
  { subject: "Cloud", value: 49 },
  { subject: "System", value: 55 },
];

export default function AISkillAnalysisPage() {
  return (
    <div className="space-y-8 p-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold">AI Skill Analysis</h1>
        <p className="text-gray-500">
          Comprehensive analysis of your technical skills.
        </p>
      </div>

      {/* Stats */}
      <div className="grid md:grid-cols-4 gap-4">
        {stats.map((stat, i) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="p-4 border rounded-lg bg-white shadow-sm"
            >
              <div className="flex items-center justify-between">
                <Icon className="h-5 w-5 text-blue-600" />
                <span className="text-xs text-green-600 flex items-center gap-1">
                  <TrendingUp className="h-3 w-3" />
                  {stat.change}
                </span>
              </div>
              <h2 className="text-lg font-semibold mt-2">{stat.value}</h2>
              <p className="text-sm text-gray-500">{stat.label}</p>
            </motion.div>
          );
        })}
      </div>

      {/* Radar Chart */}
      <div className="grid lg:grid-cols-2 gap-6">
        <div className="border rounded-lg p-4 bg-white">
          <h2 className="font-semibold mb-3">Skill Distribution</h2>
          <ResponsiveContainer width="100%" height={300}>
            <RadarChart data={radarData}>
              <PolarGrid />
              <PolarAngleAxis dataKey="subject" />
              <PolarRadiusAxis />
              <Radar
                dataKey="value"
                stroke="#2563eb"
                fill="#2563eb"
                fillOpacity={0.5}
              />
            </RadarChart>
          </ResponsiveContainer>
        </div>

        {/* AI Insight */}
        <div className="border rounded-lg p-4 bg-white">
          <h2 className="font-semibold mb-3">AI Insights</h2>
          <ul className="space-y-3 text-sm">
            <li>
              <b>Strong Frontend:</b> React & CSS are above industry average.
            </li>
            <li>
              <b>Backend:</b> Node.js strong. Improve GraphQL.
            </li>
            <li>
              <b>Cloud:</b> Focus on AWS & DevOps.
            </li>
          </ul>
        </div>
      </div>

      {/* Skill Breakdown */}
      <div className="space-y-6">
        <h2 className="font-semibold text-lg">Detailed Breakdown</h2>

        {skillCategories.map((cat, i) => {
          const Icon = cat.icon;
          return (
            <div key={i} className="border rounded-lg p-4 bg-white">
              <div className="flex items-center gap-2 mb-3">
                <Icon className="h-4 w-4 text-blue-600" />
                <h3 className="font-medium">{cat.category}</h3>
              </div>

              {cat.skills.map((skill, j) => (
                <div key={j} className="mb-2">
                  <div className="flex justify-between text-sm">
                    <span>{skill.name}</span>
                    <span>{skill.level}%</span>
                  </div>

                  <div className="w-full h-2 bg-gray-200 rounded">
                    <div
                      className="h-2 bg-blue-600 rounded"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          );
        })}
      </div>

      {/* CTA */}
      <div className="border rounded-lg p-6 text-center bg-white">
        <h2 className="font-semibold mb-2">
          Ready to address your skill gaps?
        </h2>
        <Link
          to="/app/skill-gap"
          className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded"
        >
          View Skill Gaps <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}