import { BrowserRouter, Routes, Route, Navigate } from 'react-router';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import LandingPage from './pages/LandingPage';
import DashboardPage from './pages/DashboardPage';
import ResumeUploadPage from './pages/ResumeUploadPage';
import AISkillAnalysisPage from './pages/AISkillAnalysisPage';
import SkillGapPage from './pages/SkillGapPage';
import LearningNavigatorPage from './pages/LearningNavigatorPage';
import LearningResourcesPage from './pages/LearningResourcesPage';
import CareerSimulationPage from './pages/CareerSimulationPage';
import ProgressAnalyticsPage from './pages/ProgressAnalyticsPage';
import CompetitiveBenchmarkPage from './pages/CompetitiveBenchmarkPage';
import AIWeeklyPlannerPage from './pages/AIWeeklyPlannerPage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Landing Page - no sidebar or header */}
        <Route path="/" element={<LandingPage />} />
        
        {/* Main App Routes - with sidebar and header */}
        <Route path="/*" element={<MainLayout />} />
      </Routes>
    </BrowserRouter>
  );
}

function MainLayout() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Header />

      {/* Sidebar */}
      <Sidebar />

      {/* Main content */}
      <main className="pt-16 pb-12 pl-6 lg:pl-[296px] pr-6 max-w-[1920px] mx-auto">
        <div className="py-8">
          <Routes>
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/upload" element={<ResumeUploadPage />} />
            <Route path="/analysis" element={<AISkillAnalysisPage />} />
            <Route path="/skill-gaps" element={<SkillGapPage />} />
            <Route path="/navigator" element={<LearningNavigatorPage />} />
            <Route path="/resources" element={<LearningResourcesPage />} />
            <Route path="/simulation" element={<CareerSimulationPage />} />
            <Route path="/analytics" element={<ProgressAnalyticsPage />} />
            <Route path="/benchmark" element={<CompetitiveBenchmarkPage />} />
            <Route path="/planner" element={<AIWeeklyPlannerPage />} />
            
            {/* Redirect any unknown route to dashboard */}
            <Route path="*" element={<Navigate to="/dashboard" replace />} />
          </Routes>
        </div>
      </main>
    </div>
  );
}
