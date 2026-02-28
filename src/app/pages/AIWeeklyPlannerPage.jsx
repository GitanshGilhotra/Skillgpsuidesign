import { useState } from "react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import {
  Calendar,
  Clock,
  CheckCircle2,
  Circle,
  Play,
  ChevronRight,
  Sparkles,
} from "lucide-react";

const weekDays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

const weeklyPlan = {
  Mon: [
    { time: "9:00 AM", task: "TypeScript Advanced Types", duration: "2h", status: "completed", category: "learning" },
    { time: "2:00 PM", task: "Practice System Design", duration: "1.5h", status: "completed", category: "practice" },
  ],
  Tue: [
    { time: "9:00 AM", task: "AWS Lambda Deep Dive", duration: "2h", status: "completed", category: "learning" },
    { time: "3:00 PM", task: "Build Serverless API", duration: "2h", status: "in-progress", category: "project" },
  ],
};

export default function AIWeeklyPlannerPage() {
  const [selectedDay, setSelectedDay] = useState("Tue");
  const currentTasks = weeklyPlan[selectedDay] || [];

  const getStatusIcon = (status) => {
    if (status === "completed") return <CheckCircle2 className="text-green-600" />;
    if (status === "in-progress") return <Play className="text-blue-600" />;
    return <Circle className="text-gray-400" />;
  };

  return (
    <div className="p-6 space-y-8">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <p className="text-sm text-blue-600 flex items-center gap-1">
            <Sparkles className="h-4 w-4" /> AI Generated
          </p>
          <h1 className="text-2xl font-bold">Weekly Planner</h1>
          <p className="text-gray-500">
            Personalized schedule for skill development.
          </p>
        </div>
      </div>

      {/* Day selector */}
      <div className="flex gap-3 overflow-x-auto">
        {weekDays.map((day) => {
          const dayTasks = weeklyPlan[day] || [];
          const completed = dayTasks.filter((t) => t.status === "completed").length;

          return (
            <button
              key={day}
              onClick={() => setSelectedDay(day)}
              className={`px-5 py-3 rounded-lg border ${
                selectedDay === day
                  ? "bg-black text-white"
                  : "bg-white text-gray-700"
              }`}
            >
              <div className="font-medium">{day}</div>
              <div className="text-xs">{completed}/{dayTasks.length} done</div>
            </button>
          );
        })}
      </div>

      {/* Tasks */}
      <div className="space-y-4">
        <h2 className="font-semibold">{selectedDay} Schedule</h2>

        {currentTasks.length ? (
          currentTasks.map((task, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.02 }}
              className="p-4 border rounded-lg bg-white flex justify-between"
            >
              <div className="flex gap-3">
                {getStatusIcon(task.status)}

                <div>
                  <h3 className="font-medium">{task.task}</h3>
                  <div className="text-sm text-gray-500 flex gap-3">
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" /> {task.time}
                    </span>
                    <span>{task.duration}</span>
                  </div>
                </div>
              </div>

              <span className="text-sm text-blue-600 capitalize">
                {task.category}
              </span>
            </motion.div>
          ))
        ) : (
          <div className="text-center text-gray-500">
            No tasks scheduled.
          </div>
        )}
      </div>

      {/* Quick actions */}
      <div className="grid md:grid-cols-2 gap-4">
        <Link
          to="/app/progress-analytics"
          className="p-5 border rounded-lg bg-white hover:border-black flex justify-between"
        >
          <div>
            <h3 className="font-medium">Track Progress</h3>
            <p className="text-sm text-gray-500">
              View analytics and insights.
            </p>
          </div>
          <ChevronRight />
        </Link>

        <div className="p-5 border rounded-lg bg-white hover:border-black flex justify-between">
          <div>
            <h3 className="font-medium">Regenerate Plan</h3>
            <p className="text-sm text-gray-500">
              AI will create a new weekly schedule.
            </p>
          </div>
          <ChevronRight />
        </div>
      </div>
    </div>
  );
}