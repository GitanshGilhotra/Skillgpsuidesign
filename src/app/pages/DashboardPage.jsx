import { StatsCard } from "../components/StatsCard";
import { AIInsights } from "../components/AIInsights";
import { ActivityFeed } from "../components/ActivityFeed";

import { Target, TrendingUp, Award, Zap, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";

export default function DashboardPage() {
  return (
    <div className="p-6 space-y-8">
      {/* Welcome */}
      <div>
        <h1 className="text-2xl font-bold">Welcome back 👋</h1>
        <p className="text-gray-500">
          Track your skill development and career growth.
        </p>
      </div>

      {/* Stats */}
      <div className="grid md:grid-cols-4 gap-4">
        <StatsCard
          title="Skill Score"
          value="78%"
          icon={Target}
          trend="+8%"
        />
        <StatsCard
          title="Progress"
          value="62%"
          icon={TrendingUp}
          trend="+5%"
        />
        <StatsCard
          title="Achievements"
          value="12"
          icon={Award}
          trend="+2"
        />
        <StatsCard
          title="Streak"
          value="15 days"
          icon={Zap}
          trend="🔥"
        />
      </div>

      {/* Quick actions */}
      <div className="grid md:grid-cols-3 gap-4">
        {[
          {
            title: "Upload Resume",
            desc: "Analyze your skills",
            link: "/app/resume-upload",
          },
          {
            title: "Skill Gaps",
            desc: "Identify areas to improve",
            link: "/app/skill-gap",
          },
          {
            title: "Learning Path",
            desc: "View your roadmap",
            link: "/app/learning-navigator",
          },
        ].map((item, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.03 }}
            className="border rounded-lg p-5 bg-white hover:border-black transition"
          >
            <h3 className="font-semibold">{item.title}</h3>
            <p className="text-sm text-gray-500 mb-3">{item.desc}</p>

            <Link
              to={item.link}
              className="inline-flex items-center gap-2 text-blue-600"
            >
              Go <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        ))}
      </div>

      {/* Main grid */}
      <div className="grid lg:grid-cols-3 gap-6">
        {/* AI Insights */}
        <div className="lg:col-span-2">
          <AIInsights />
        </div>

        {/* Activity */}
        <div>
          <ActivityFeed />
        </div>
      </div>
    </div>
  );
}