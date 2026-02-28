import { useState } from 'react';
import { useNavigate } from 'react-router';
import { motion } from 'motion/react';
import { 
  Upload, 
  FileText, 
  Github, 
  Linkedin,
  CheckCircle,
  Sparkles,
  ArrowRight,
  X
} from 'lucide-react';

export default function ResumeUploadPage() {
  const navigate = useNavigate();
  const [dragActive, setDragActive] = useState(false);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [githubConnected, setGithubConnected] = useState(false);
  const [linkedinConnected, setLinkedinConnected] = useState(false);

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setUploadedFile(e.dataTransfer.files[0]);
    }
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setUploadedFile(e.target.files[0]);
    }
  };

  const handleAnalyze = () => {
    if (uploadedFile) {
      navigate('/analysis');
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0f] dark relative overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-6 py-12">
        <div className="max-w-4xl w-full">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 mb-6">
              <Sparkles className="w-4 h-4 text-purple-400" />
              <span className="text-sm text-white/80">Step 1: Upload Your Profile</span>
            </div>
            <h1 className="text-5xl md:text-6xl mb-4 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
              Let's Analyze Your Skills
            </h1>
            <p className="text-xl text-white/60">
              Upload your resume and connect your profiles to get started
            </p>
          </motion.div>

          {/* Upload Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-8"
          >
            <div
              onDragEnter={handleDrag}
              onDragLeave={handleDrag}
              onDragOver={handleDrag}
              onDrop={handleDrop}
              className={`relative p-12 rounded-2xl backdrop-blur-xl border-2 border-dashed transition-all ${
                dragActive
                  ? 'border-blue-500 bg-blue-500/10'
                  : 'border-white/20 bg-white/5 hover:bg-white/10'
              }`}
            >
              {uploadedFile ? (
                <div className="text-center">
                  <div className="inline-flex items-center gap-4 p-6 rounded-xl bg-green-500/10 border border-green-500/30">
                    <CheckCircle className="w-8 h-8 text-green-400" />
                    <div className="text-left">
                      <p className="text-white">{uploadedFile.name}</p>
                      <p className="text-sm text-white/60">
                        {(uploadedFile.size / 1024).toFixed(2)} KB
                      </p>
                    </div>
                    <button
                      onClick={() => setUploadedFile(null)}
                      className="p-2 rounded-lg hover:bg-white/10 transition-colors"
                    >
                      <X className="w-5 h-5 text-white/60" />
                    </button>
                  </div>
                </div>
              ) : (
                <>
                  <div className="flex flex-col items-center">
                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-600/20 border border-blue-500/20 flex items-center justify-center mb-6">
                      <Upload className="w-10 h-10 text-blue-400" />
                    </div>
                    <h3 className="text-2xl text-white mb-2">
                      Drop your resume here
                    </h3>
                    <p className="text-white/60 mb-6">
                      or click to browse your files
                    </p>
                    <input
                      type="file"
                      id="file-upload"
                      className="hidden"
                      accept=".pdf,.doc,.docx"
                      onChange={handleFileInput}
                    />
                    <label
                      htmlFor="file-upload"
                      className="px-8 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white cursor-pointer transition-all shadow-lg shadow-blue-500/25 hover:scale-105"
                    >
                      Choose File
                    </label>
                    <p className="text-sm text-white/40 mt-4">
                      Supports PDF, DOC, DOCX (Max 10MB)
                    </p>
                  </div>
                </>
              )}
            </div>
          </motion.div>

          {/* Connection Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8"
          >
            {/* GitHub Connection */}
            <div className="p-8 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 hover:bg-white/10 transition-all">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center">
                  <Github className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl text-white mb-2">GitHub Profile</h3>
                  <p className="text-sm text-white/60">
                    Connect to analyze your repositories and contributions
                  </p>
                </div>
              </div>
              
              <button
                onClick={() => setGithubConnected(!githubConnected)}
                className={`w-full py-3 rounded-xl font-medium transition-all ${
                  githubConnected
                    ? 'bg-green-500/20 border border-green-500/40 text-green-400'
                    : 'bg-white/5 border border-white/10 hover:bg-white/10 text-white'
                }`}
              >
                {githubConnected ? (
                  <span className="flex items-center justify-center gap-2">
                    <CheckCircle className="w-5 h-5" />
                    Connected
                  </span>
                ) : (
                  'Connect GitHub'
                )}
              </button>
            </div>

            {/* LinkedIn Connection */}
            <div className="p-8 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 hover:bg-white/10 transition-all">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center">
                  <Linkedin className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl text-white mb-2">LinkedIn Profile</h3>
                  <p className="text-sm text-white/60">
                    Import your experience and endorsements
                  </p>
                </div>
              </div>
              
              <button
                onClick={() => setLinkedinConnected(!linkedinConnected)}
                className={`w-full py-3 rounded-xl font-medium transition-all ${
                  linkedinConnected
                    ? 'bg-green-500/20 border border-green-500/40 text-green-400'
                    : 'bg-white/5 border border-white/10 hover:bg-white/10 text-white'
                }`}
              >
                {linkedinConnected ? (
                  <span className="flex items-center justify-center gap-2">
                    <CheckCircle className="w-5 h-5" />
                    Connected
                  </span>
                ) : (
                  'Connect LinkedIn'
                )}
              </button>
            </div>
          </motion.div>

          {/* Analyze Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col items-center gap-4"
          >
            <button
              onClick={handleAnalyze}
              disabled={!uploadedFile}
              className={`group px-12 py-5 rounded-xl text-lg font-medium transition-all flex items-center gap-3 ${
                uploadedFile
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white shadow-2xl shadow-blue-500/50 hover:shadow-purple-500/50 hover:scale-105'
                  : 'bg-white/5 border border-white/10 text-white/40 cursor-not-allowed'
              }`}
            >
              {uploadedFile ? (
                <>
                  <Sparkles className="w-5 h-5" />
                  Analyze My Skills
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </>
              ) : (
                <>
                  <FileText className="w-5 h-5" />
                  Upload Resume to Continue
                </>
              )}
            </button>

            <p className="text-sm text-white/40 text-center">
              Your data is encrypted and secure. We never share your information.
            </p>
          </motion.div>

          {/* Features */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="grid grid-cols-3 gap-4 mt-12"
          >
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <feature.icon className="w-6 h-6 text-blue-400 mx-auto mb-2" />
                <p className="text-sm text-white/60">{feature.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}

const features = [
  { icon: Sparkles, label: "AI-Powered Analysis" },
  { icon: CheckCircle, label: "Instant Results" },
  { icon: FileText, label: "Detailed Reports" }
];
