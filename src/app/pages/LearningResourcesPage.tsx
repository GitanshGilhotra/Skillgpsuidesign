import { useState } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router';
import { 
  Target, 
  Video,
  BookOpen,
  FileText,
  Star,
  Clock,
  TrendingUp,
  Filter,
  Search,
  ExternalLink,
  Play,
  Award
} from 'lucide-react';
import { LearningResources } from '../components/LearningResources';

const resources = [
  {
    id: 1,
    title: 'Advanced TypeScript Patterns',
    type: 'video',
    platform: 'YouTube',
    duration: '2h 15m',
    rating: 4.8,
    difficulty: 'advanced',
    skill: 'TypeScript',
    url: '#'
  },
  {
    id: 2,
    title: 'System Design Interview Guide',
    type: 'course',
    platform: 'Udemy',
    duration: '12h 30m',
    rating: 4.9,
    difficulty: 'advanced',
    skill: 'System Design',
    url: '#'
  },
  {
    id: 3,
    title: 'AWS Solutions Architect',
    type: 'course',
    platform: 'Coursera',
    duration: '40h',
    rating: 4.7,
    difficulty: 'intermediate',
    skill: 'AWS',
    url: '#'
  },
  {
    id: 4,
    title: 'GraphQL Complete Guide',
    type: 'article',
    platform: 'Medium',
    duration: '45m',
    rating: 4.6,
    difficulty: 'intermediate',
    skill: 'GraphQL',
    url: '#'
  },
  {
    id: 5,
    title: 'React Testing Library',
    type: 'documentation',
    platform: 'Official Docs',
    duration: '3h',
    rating: 4.9,
    difficulty: 'beginner',
    skill: 'Testing',
    url: '#'
  },
  {
    id: 6,
    title: 'Docker & Kubernetes',
    type: 'course',
    platform: 'Udemy',
    duration: '18h',
    rating: 4.8,
    difficulty: 'intermediate',
    skill: 'DevOps',
    url: '#'
  }
];

export default function LearningResourcesPage() {
  const [selectedType, setSelectedType] = useState<string>('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredResources = resources.filter(resource => {
    if (selectedType !== 'all' && resource.type !== selectedType) return false;
    if (selectedDifficulty !== 'all' && resource.difficulty !== selectedDifficulty) return false;
    if (searchQuery && !resource.title.toLowerCase().includes(searchQuery.toLowerCase())) return false;
    return true;
  });

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'video': return Video;
      case 'course': return Play;
      case 'article': return FileText;
      case 'documentation': return BookOpen;
      default: return BookOpen;
    }
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-4"
      >
        <h1 className="text-3xl font-medium text-gray-900">Learning Resources</h1>
        <p className="text-gray-600">Curated learning materials tailored to your skill gaps and career goals</p>
      </motion.div>

      {/* Stats Overview */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="grid grid-cols-1 md:grid-cols-4 gap-4"
      >
        <div className="p-6 border border-gray-200 rounded-lg">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center">
              <BookOpen className="w-5 h-5 text-blue-600" />
            </div>
            <span className="text-sm text-gray-600">Total Resources</span>
          </div>
          <p className="text-2xl font-medium text-gray-900">{resources.length}</p>
        </div>

        <div className="p-6 border border-gray-200 rounded-lg">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-lg bg-green-50 flex items-center justify-center">
              <Award className="w-5 h-5 text-green-600" />
            </div>
            <span className="text-sm text-gray-600">Completed</span>
          </div>
          <p className="text-2xl font-medium text-gray-900">8</p>
        </div>

        <div className="p-6 border border-gray-200 rounded-lg">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-lg bg-orange-50 flex items-center justify-center">
              <Clock className="w-5 h-5 text-orange-600" />
            </div>
            <span className="text-sm text-gray-600">In Progress</span>
          </div>
          <p className="text-2xl font-medium text-gray-900">3</p>
        </div>

        <div className="p-6 border border-gray-200 rounded-lg">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-lg bg-purple-50 flex items-center justify-center">
              <Star className="w-5 h-5 text-purple-600" />
            </div>
            <span className="text-sm text-gray-600">Avg. Rating</span>
          </div>
          <p className="text-2xl font-medium text-gray-900">4.8</p>
        </div>
      </motion.div>

      {/* Filters & Search */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="flex flex-col md:flex-row gap-4"
      >
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search resources..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-gray-900"
          />
        </div>

        <select
          value={selectedType}
          onChange={(e) => setSelectedType(e.target.value)}
          className="px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-gray-900"
        >
          <option value="all">All Types</option>
          <option value="video">Video</option>
          <option value="course">Course</option>
          <option value="article">Article</option>
          <option value="documentation">Documentation</option>
        </select>

        <select
          value={selectedDifficulty}
          onChange={(e) => setSelectedDifficulty(e.target.value)}
          className="px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-gray-900"
        >
          <option value="all">All Levels</option>
          <option value="beginner">Beginner</option>
          <option value="intermediate">Intermediate</option>
          <option value="advanced">Advanced</option>
        </select>
      </motion.div>

      {/* Learning Resources Component */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <LearningResources />
      </motion.div>

      {/* Resource Grid */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-4"
      >
        {filteredResources.map((resource, index) => {
          const Icon = getTypeIcon(resource.type);
          return (
            <motion.a
              key={resource.id}
              href={resource.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + index * 0.05 }}
              className="p-6 border border-gray-200 rounded-lg hover:border-gray-900 hover:shadow-sm transition-all group"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-start gap-3 flex-1">
                  <div className="w-10 h-10 rounded-lg bg-gray-50 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-gray-600" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-medium text-gray-900 mb-1 group-hover:text-gray-600 transition-colors">
                      {resource.title}
                    </h3>
                    <p className="text-sm text-gray-600">{resource.platform}</p>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-gray-900 transition-colors flex-shrink-0" />
              </div>

              <div className="flex items-center gap-4 text-sm text-gray-600">
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {resource.duration}
                </div>
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 text-yellow-500" />
                  {resource.rating}
                </div>
                <span className={`px-2 py-0.5 rounded text-xs ${
                  resource.difficulty === 'beginner'
                    ? 'bg-green-50 text-green-700 border border-green-200'
                    : resource.difficulty === 'intermediate'
                    ? 'bg-blue-50 text-blue-700 border border-blue-200'
                    : 'bg-red-50 text-red-700 border border-red-200'
                }`}>
                  {resource.difficulty}
                </span>
              </div>

              <div className="mt-4 pt-4 border-t border-gray-200">
                <span className="text-xs text-gray-600">Target Skill: </span>
                <span className="text-xs font-medium text-gray-900">{resource.skill}</span>
              </div>
            </motion.a>
          );
        })}
      </motion.div>

      {/* Empty State */}
      {filteredResources.length === 0 && (
        <div className="text-center py-12">
          <div className="w-16 h-16 rounded-full bg-gray-50 flex items-center justify-center mx-auto mb-4">
            <Search className="w-8 h-8 text-gray-400" />
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-1">No resources found</h3>
          <p className="text-gray-600">Try adjusting your filters or search query</p>
        </div>
      )}
    </div>
  );
}
