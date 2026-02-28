import { Youtube, BookOpen, Code2, ExternalLink, Clock, Star } from 'lucide-react';
import { motion } from 'motion/react';

const resources = [
  {
    title: 'Advanced TypeScript Patterns',
    type: 'youtube',
    author: 'Matt Pocock',
    duration: '2h 15m',
    rating: 4.9,
    thumbnail: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=400&h=225&fit=crop',
  },
  {
    title: 'Node.js Microservices Architecture',
    type: 'course',
    author: 'Udemy',
    duration: '12h 30m',
    rating: 4.7,
    thumbnail: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=225&fit=crop',
  },
  {
    title: 'Build a Real-time Chat App',
    type: 'project',
    author: 'GitHub',
    duration: '4h',
    rating: 4.8,
    thumbnail: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=225&fit=crop',
  },
];

const typeConfig = {
  youtube: { icon: Youtube, color: 'red', label: 'Video' },
  course: { icon: BookOpen, color: 'blue', label: 'Course' },
  project: { icon: Code2, color: 'green', label: 'Project' },
};

export function LearningResources() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.5 }}
      className="relative"
    >
      {/* Card */}
      <div className="relative bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow duration-200">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-lg font-semibold text-black mb-2">Recommended Resources</h3>
            <p className="text-sm text-gray-600">Curated for your learning path</p>
          </div>
          <button className="text-sm text-black font-medium hover:underline transition-all">
            View All
          </button>
        </div>

        <div className="space-y-4">
          {resources.map((resource, index) => {
            const config = typeConfig[resource.type as keyof typeof typeConfig];
            const Icon = config.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                className="group relative overflow-hidden rounded-lg border border-gray-200 hover:border-gray-300 hover:shadow-md transition-all duration-200"
              >
                <div className="relative flex gap-4 p-4">
                  {/* Thumbnail */}
                  <div className="relative flex-shrink-0 w-32 h-20 rounded-lg overflow-hidden bg-gray-100">
                    <img
                      src={resource.thumbnail}
                      alt={resource.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className={`absolute top-2 left-2 p-1.5 rounded-md ${
                      config.color === 'red' ? 'bg-red-500' :
                      config.color === 'blue' ? 'bg-blue-500' :
                      'bg-green-500'
                    } backdrop-blur-sm`}>
                      <Icon className="w-3 h-3 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2 mb-1">
                      <h4 className="font-semibold text-black group-hover:text-gray-700 transition-colors line-clamp-1">
                        {resource.title}
                      </h4>
                      <ExternalLink className="w-4 h-4 text-gray-400 flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    
                    <p className="text-sm text-gray-600 mb-2">{resource.author}</p>
                    
                    <div className="flex items-center gap-4 text-xs text-gray-500">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {resource.duration}
                      </span>
                      <span className="flex items-center gap-1">
                        <Star className="w-3 h-3 fill-yellow-500 text-yellow-500" />
                        {resource.rating}
                      </span>
                      <span className="px-2 py-0.5 rounded-full bg-gray-100 text-gray-700 font-medium">
                        {config.label}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <button className="w-full mt-4 px-4 py-3 rounded-lg border border-gray-300 hover:bg-gray-50 text-gray-700 font-medium transition-all duration-200">
          Explore More Resources
        </button>
      </div>
    </motion.div>
  );
}
