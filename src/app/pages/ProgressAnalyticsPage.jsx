import { motion } from "motion/react";
import { Link } from "react-router-dom";
import {
  Target,
  TrendingUp,
  Award,
  Zap,
  Activity,
  ArrowRight,
} from "lucide-react";

import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";

const progressData = [
  { month: "Jan", score: 62, hours: 8 },
  { month: "Feb", score: 65, hours: 10 },
  { month: "Mar", score: 68, hours: 12 },
  { month: "Apr", score: 72, hours: 15 },
  { month: "May", score: 75, hours: 14 },
  { month: "Jun", score: 78, hours: 12 },
];

const skillProgress = [
  { name: "TypeScript", progress: 70 },
  { name: "System Design", progress: 45 },
  { name: "AWS", progress: 55 },
];

const timeDistribution = [
  { name: "Frontend", value: 35, color: "#000000" },
  { name: "Backend", value: 25, color: "#404040" },
  { name: "DevOps", value: 20, color: "#808080" },
];

export default function ProgressAnalyticsPage() {
  return (
    <div className="p-6 space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold">Progress Analytics</h1>
        <p className="text-gray-500">
          Track your skill growth and productivity.
        </p>
      </div>

      {/* Stats */}
      <div className="grid md:grid-cols-4 gap-4">
        {[
          { title: "Score", value: "+16", icon: TrendingUp },
          { title: "Hours", value: "71h", icon: Target },
          { title: "Skills", value: "12", icon: Award },
          { title: "Streak", value: "24", icon: Zap },
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

      {/* Charts */}
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Line */}
        <div className="border p-4 rounded bg-white">
          <h2 className="font-semibold mb-2">Skill Score</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={progressData}>
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Line dataKey="score" stroke="#2563eb" />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Bar */}
        <div className="border p-4 rounded bg-white">
          <h2 className="font-semibold mb-2">Learning Hours</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={progressData}>
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="hours" fill="#000" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Pie + Skills */}
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Pie */}
        <div className="border p-4 rounded bg-white">
          <h2 className="font-semibold">Time Distribution</h2>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={timeDistribution}
                dataKey="value"
                nameKey="name"
                outerRadius={90}
              >
                {timeDistribution.map((entry, i) => (
                  <Cell key={i} fill={entry.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Skill bars */}
        <div className="border p-4 rounded bg-white">
          <h2 className="font-semibold mb-3">Skill Progress</h2>

          {skillProgress.map((s) => (
            <div key={s.name} className="mb-3">
              <div className="flex justify-between text-sm">
                <span>{s.name}</span>
                <span>{s.progress}%</span>
              </div>

              <div className="h-2 bg-gray-200 rounded">
                <div
                  className={`h-2 rounded ${
                    s.progress >= 70
                      ? "bg-green-600"
                      : s.progress >= 50
                      ? "bg-blue-600"
                      : "bg-orange-600"
                  }`}
                  style={{ width: `${s.progress}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Activity */}
      <div className="border p-4 rounded bg-white">
        <h2 className="font-semibold mb-3">Recent Activity</h2>

        {[
          { text: "Completed TypeScript course", icon: Award },
          { text: "Practiced System Design", icon: Target },
          { text: "Started AWS path", icon: Zap },
        ].map((a, i) => {
          const Icon = a.icon;
          return (
            <div key={i} className="flex items-center gap-3 mb-2">
              <Icon className="text-blue-600" />
              <span>{a.text}</span>
            </div>
          );
        })}
      </div>

      {/* CTA */}
      <div className="text-center border p-6 rounded bg-white">
        <h3 className="font-semibold">Keep the momentum</h3>
        <Link
          to="/app/weekly-planner"
          className="inline-flex gap-2 bg-blue-600 text-white px-4 py-2 rounded mt-3"
        >
          View Planner <ArrowRight />
        </Link>
      </div>
    </div>
  );
}