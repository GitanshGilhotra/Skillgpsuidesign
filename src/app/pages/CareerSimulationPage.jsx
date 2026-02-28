import { useState } from "react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import {
  DollarSign,
  TrendingUp,
  CheckCircle,
  Plus,
  Minus,
  ArrowRight,
} from "lucide-react";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const availableSkills = [
  "React",
  "Node.js",
  "TypeScript",
  "AWS",
  "Docker",
  "Kubernetes",
  "GraphQL",
  "System Design",
  "MongoDB",
  "PostgreSQL",
];

const careerPaths = [
  {
    title: "Senior Full-Stack Engineer",
    salary: "$140k - $180k",
    timeline: "12-18 months",
    requiredSkills: ["React", "Node.js", "TypeScript", "AWS"],
  },
  {
    title: "Tech Lead",
    salary: "$160k - $220k",
    timeline: "18-24 months",
    requiredSkills: ["System Design", "AWS", "Kubernetes"],
  },
];

export default function CareerSimulationPage() {
  const [selectedSkills, setSelectedSkills] = useState(["React", "Node.js"]);
  const [experienceYears, setExperienceYears] = useState(3);

  const toggleSkill = (skill) => {
    setSelectedSkills((prev) =>
      prev.includes(skill)
        ? prev.filter((s) => s !== skill)
        : [...prev, skill]
    );
  };

  const baseSalary = 85000;
  const projectedSalary = Math.round(
    baseSalary *
      (1 + selectedSkills.length * 0.08 + experienceYears * 0.05)
  );

  const projectionData = Array.from({ length: 12 }, (_, i) => ({
    month: `M${i + 1}`,
    salary:
      baseSalary *
      (1 +
        (selectedSkills.length + i * 0.3) * 0.08 +
        (experienceYears + i / 12) * 0.05),
  }));

  return (
    <div className="p-6 space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold">Career Simulation</h1>
        <p className="text-gray-500">
          Simulate career growth and salary projections.
        </p>
      </div>

      {/* Salary */}
      <div className="grid md:grid-cols-3 gap-4">
        <div className="border rounded-lg p-4 bg-white">
          <DollarSign className="text-green-600" />
          <h2 className="text-lg font-semibold">
            ${(projectedSalary / 1000).toFixed(0)}k
          </h2>
          <p className="text-sm text-gray-500">Projected salary</p>
        </div>

        <div className="border rounded-lg p-4 bg-white">
          <TrendingUp className="text-blue-600" />
          <h2 className="text-lg font-semibold">
            {selectedSkills.length * 10 + 40}%
          </h2>
          <p className="text-sm text-gray-500">Job readiness</p>
        </div>

        <div className="border rounded-lg p-4 bg-white">
          <h2 className="text-lg font-semibold">
            {experienceYears} years
          </h2>
          <p className="text-sm text-gray-500">Experience</p>
        </div>
      </div>

      {/* Skill selector */}
      <div>
        <div className="flex justify-between mb-2">
          <h2 className="font-semibold">Select Skills</h2>
          <button
            onClick={() => setSelectedSkills([])}
            className="text-sm text-gray-500"
          >
            Clear
          </button>
        </div>

        <div className="flex flex-wrap gap-2">
          {availableSkills.map((skill) => {
            const active = selectedSkills.includes(skill);
            return (
              <button
                key={skill}
                onClick={() => toggleSkill(skill)}
                className={`px-4 py-2 rounded-lg border ${
                  active
                    ? "bg-black text-white"
                    : "bg-white"
                }`}
              >
                {active ? <Minus className="inline w-4" /> : <Plus className="inline w-4" />}
                {skill}
              </button>
            );
          })}
        </div>
      </div>

      {/* Experience */}
      <div>
        <h2 className="font-semibold mb-2">
          Experience: {experienceYears} years
        </h2>
        <input
          type="range"
          min="0"
          max="10"
          value={experienceYears}
          onChange={(e) => setExperienceYears(Number(e.target.value))}
          className="w-full"
        />
      </div>

      {/* Chart */}
      <div className="border rounded-lg p-4 bg-white">
        <h2 className="font-semibold mb-3">12 Month Projection</h2>

        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={projectionData}>
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Line dataKey="salary" stroke="#2563eb" />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Career paths */}
      <div className="space-y-4">
        <h2 className="font-semibold">Career Paths</h2>

        {careerPaths.map((path, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.02 }}
            className="border rounded-lg p-4 bg-white"
          >
            <h3 className="font-medium">{path.title}</h3>
            <p className="text-sm text-gray-500">
              {path.salary} • {path.timeline}
            </p>

            <div className="flex gap-2 flex-wrap mt-2">
              {path.requiredSkills.map((skill) => (
                <span
                  key={skill}
                  className={`px-2 py-1 rounded text-xs ${
                    selectedSkills.includes(skill)
                      ? "bg-green-100 text-green-700"
                      : "bg-gray-100"
                  }`}
                >
                  {selectedSkills.includes(skill) && (
                    <CheckCircle className="inline w-3 mr-1" />
                  )}
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}