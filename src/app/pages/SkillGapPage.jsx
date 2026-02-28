import { motion } from "motion/react";
import { Link } from "react-router-dom";
import {
  TrendingUp,
  Target,
  AlertTriangle,
  ArrowRight,
} from "lucide-react";

import { SkillGapChart } from "../components/SkillGapChart";

export default function SkillGapPage() {
  const skillGaps = [
    {
      skill: "TypeScript",
      current: 60,
      target: 90,
      priority: "high",
      timeline: "2 months",
      impact: "High salary impact",
    },
    {
      skill: "System Design",
      current: 45,
      target: 85,
      priority: "high",
      timeline: "3 months",
      impact: "Senior role requirement",
    },
    {
      skill: "AWS",
      current: 55,
      target: 80,
      priority: "medium",
      timeline: "2 months",
      impact: "Cloud expertise",
    },
  ];

  const getPriorityColor = (p) => {
    switch (p) {
      case "high":
        return "bg-red-100 text-red-600";
      case "medium":
        return "bg-yellow-100 text-yellow-600";
      default:
        return "bg-gray-100 text-gray-600";
    }
  };

  return (
    <div className="p-6 space-y-8">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold">Skill Gap Analysis</h1>
          <p className="text-gray-500">
            Identify and close gaps in your skills.
          </p>
        </div>

        <Link
          to="/app/learning-navigator"
          className="bg-black text-white px-4 py-2 rounded"
        >
          View Learning Path
        </Link>
      </div>

      {/* Stats */}
      <div className="grid md:grid-cols-4 gap-4">
        {[
          { title: "Critical", value: "2", icon: AlertTriangle },
          { title: "High", value: "2", icon: TrendingUp },
          { title: "Timeline", value: "2 months", icon: Target },
          { title: "Score", value: "92", icon: TrendingUp },
        ].map((s, i) => {
          const Icon = s.icon;
          return (
            <div key={i} className="border p-4 rounded bg-white">
              <Icon className="text-blue-600" />
              <h3 className="font-semibold">{s.value}</h3>
              <p className="text-sm text-gray-500">{s.title}</p>
            </div>
          );
        })}
      </div>

      {/* Chart */}
      <div className="border p-4 rounded bg-white">
        <SkillGapChart />
      </div>

      {/* Detailed */}
      <div>
        <h2 className="font-semibold mb-4">Detailed Analysis</h2>

        <div className="grid gap-4">
          {skillGaps.map((gap, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.02 }}
              className="border rounded-lg p-4 bg-white"
            >
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-medium">{gap.skill}</h3>
                  <span
                    className={`text-xs px-2 py-1 rounded ${getPriorityColor(
                      gap.priority
                    )}`}
                  >
                    {gap.priority}
                  </span>
                </div>

                <Link
                  to="/app/learning-resources"
                  className="text-blue-600 flex items-center gap-1"
                >
                  Start <ArrowRight className="w-4" />
                </Link>
              </div>

              <p className="text-sm text-gray-500 mt-1">
                {gap.impact}
              </p>

              {/* Progress */}
              <div className="mt-3">
                <div className="flex justify-between text-sm">
                  <span>Current {gap.current}%</span>
                  <span>Target {gap.target}%</span>
                </div>

                <div className="h-2 bg-gray-200 rounded mt-1">
                  <div
                    className="h-2 bg-blue-600 rounded"
                    style={{ width: `${gap.current}%` }}
                  />
                </div>

                <div className="flex justify-between text-xs mt-1 text-gray-500">
                  <span>{gap.timeline}</span>
                  <span>{gap.target - gap.current}% gap</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="text-center border p-6 rounded bg-white">
        <h3 className="font-semibold">
          Ready to close these gaps?
        </h3>
        <Link
          to="/app/learning-navigator"
          className="inline-flex gap-2 bg-blue-600 text-white px-4 py-2 rounded mt-3"
        >
          Generate Roadmap <ArrowRight />
        </Link>
      </div>
    </div>
  );
}