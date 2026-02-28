import { motion } from "motion/react";
import { Link } from "react-router-dom";
import {
  CheckCircle2,
  Circle,
  ArrowRight,
  Award,
  TrendingUp,
  Zap,
  Play,
} from "lucide-react";

import { CareerRoadmap } from "../components/CareerRoadmap";

const milestones = [
  {
    id: 1,
    title: "Master TypeScript Fundamentals",
    status: "completed",
    skills: ["TypeScript", "Type Safety"],
    completedDate: "2 weeks ago",
    duration: "3 weeks",
  },
  {
    id: 2,
    title: "Advanced React Patterns",
    status: "in-progress",
    skills: ["Hooks", "Context"],
    progress: 65,
    estimatedCompletion: "2 weeks",
    duration: "4 weeks",
  },
  {
    id: 3,
    title: "System Design",
    status: "upcoming",
    skills: ["Scalability", "Caching"],
    startDate: "In 2 weeks",
    duration: "6 weeks",
  },
];

export default function LearningNavigatorPage() {
  return (
    <div className="p-6 space-y-8">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold">Learning Navigator</h1>
          <p className="text-gray-500">
            Your personalized roadmap to reach your goals.
          </p>
        </div>

        <Link
          to="/app/weekly-planner"
          className="bg-black text-white px-4 py-2 rounded"
        >
          Weekly Plan
        </Link>
      </div>

      {/* Progress */}
      <div className="grid md:grid-cols-4 gap-4">
        {[
          { title: "Completed", value: "1/5", icon: Award },
          { title: "Progress", value: "65%", icon: TrendingUp },
          { title: "Time", value: "14 weeks", icon: Zap },
          { title: "Hours", value: "12h", icon: Play },
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

      {/* Roadmap */}
      <CareerRoadmap />

      {/* Timeline */}
      <div>
        <h2 className="font-semibold mb-4">Milestones</h2>

        <div className="space-y-4">
          {milestones.map((m, i) => (
            <motion.div
              key={m.id}
              whileHover={{ scale: 1.02 }}
              className="border rounded-lg p-4 bg-white"
            >
              <div className="flex justify-between">
                <div className="flex gap-3">
                  {m.status === "completed" ? (
                    <CheckCircle2 className="text-green-600" />
                  ) : m.status === "in-progress" ? (
                    <Play className="text-blue-600" />
                  ) : (
                    <Circle className="text-gray-400" />
                  )}

                  <div>
                    <h3 className="font-medium">{m.title}</h3>

                    <div className="flex flex-wrap gap-2 mt-1">
                      {m.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-2 py-1 bg-gray-100 text-xs rounded"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <span className="text-sm text-gray-500 capitalize">
                  {m.status}
                </span>
              </div>

              {/* Progress */}
              {m.status === "in-progress" && (
                <div className="mt-3">
                  <div className="flex justify-between text-sm">
                    <span>Progress</span>
                    <span>{m.progress}%</span>
                  </div>

                  <div className="h-2 bg-gray-200 rounded">
                    <div
                      className="h-2 bg-blue-600 rounded"
                      style={{ width: `${m.progress}%` }}
                    />
                  </div>
                </div>
              )}

              {/* Footer */}
              <div className="flex justify-between mt-3 text-sm text-gray-500">
                <span>{m.duration}</span>

                {m.status === "completed" && (
                  <span>Completed {m.completedDate}</span>
                )}
                {m.status === "in-progress" && (
                  <span>Est. {m.estimatedCompletion}</span>
                )}
                {m.status === "upcoming" && (
                  <span>Starts {m.startDate}</span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="border rounded p-6 bg-white text-center">
        <h3 className="font-semibold mb-2">
          Need to update your roadmap?
        </h3>
        <Link
          to="/app/skill-gap"
          className="inline-flex gap-2 bg-blue-600 text-white px-4 py-2 rounded"
        >
          Refresh Analysis <ArrowRight />
        </Link>
      </div>
    </div>
  );
}