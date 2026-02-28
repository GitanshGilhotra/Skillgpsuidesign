import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "motion/react";

import {
  Upload,
  FileText,
  Github,
  Linkedin,
  CheckCircle,
  Sparkles,
  ArrowRight,
  X,
} from "lucide-react";

export default function ResumeUploadPage() {
  const navigate = useNavigate();

  const [dragActive, setDragActive] = useState(false);
  const [uploadedFile, setUploadedFile] = useState(null);
  const [githubConnected, setGithubConnected] = useState(false);
  const [linkedinConnected, setLinkedinConnected] = useState(false);

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setUploadedFile(e.dataTransfer.files[0]);
    }
  };

  const handleFileInput = (e) => {
    if (e.target.files && e.target.files[0]) {
      setUploadedFile(e.target.files[0]);
    }
  };

  const handleAnalyze = () => {
    if (uploadedFile) {
      navigate("/app/analysis");
    }
  };

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center p-6">
      <div className="max-w-3xl w-full space-y-8">
        {/* Header */}
        <div className="text-center">
          <p className="text-blue-400 flex justify-center gap-2">
            <Sparkles className="w-4" />
            Step 1: Upload Profile
          </p>

          <h1 className="text-3xl font-bold mt-2">
            Let’s Analyze Your Skills
          </h1>
        </div>

        {/* Upload */}
        <div
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
          className={`border-2 border-dashed rounded-xl p-10 text-center transition ${
            dragActive ? "border-blue-500 bg-blue-500/10" : "border-gray-700"
          }`}
        >
          {uploadedFile ? (
            <div className="flex justify-between items-center">
              <div className="flex gap-3 items-center">
                <FileText />
                <div>
                  <p>{uploadedFile.name}</p>
                  <p className="text-sm text-gray-400">
                    {(uploadedFile.size / 1024).toFixed(1)} KB
                  </p>
                </div>
              </div>

              <button
                onClick={() => setUploadedFile(null)}
                className="p-2 hover:bg-white/10 rounded"
              >
                <X />
              </button>
            </div>
          ) : (
            <>
              <Upload className="mx-auto mb-3" />
              <p>Drop resume here or click</p>

              <input
                type="file"
                className="hidden"
                id="resume"
                onChange={handleFileInput}
              />

              <label
                htmlFor="resume"
                className="cursor-pointer inline-block mt-3 bg-blue-600 px-4 py-2 rounded"
              >
                Choose File
              </label>
            </>
          )}
        </div>

        {/* Connections */}
        <div className="grid md:grid-cols-2 gap-4">
          {/* GitHub */}
          <button
            onClick={() => setGithubConnected(!githubConnected)}
            className="border rounded-lg p-4 text-left"
          >
            <div className="flex gap-2 items-center">
              <Github />
              <span>GitHub</span>
            </div>

            {githubConnected && (
              <span className="text-green-400 text-sm flex gap-1">
                <CheckCircle /> Connected
              </span>
            )}
          </button>

          {/* LinkedIn */}
          <button
            onClick={() => setLinkedinConnected(!linkedinConnected)}
            className="border rounded-lg p-4 text-left"
          >
            <div className="flex gap-2 items-center">
              <Linkedin />
              <span>LinkedIn</span>
            </div>

            {linkedinConnected && (
              <span className="text-green-400 text-sm flex gap-1">
                <CheckCircle /> Connected
              </span>
            )}
          </button>
        </div>

        {/* CTA */}
        <motion.button
          whileHover={{ scale: 1.03 }}
          disabled={!uploadedFile}
          onClick={handleAnalyze}
          className="w-full bg-blue-600 py-3 rounded flex justify-center gap-2 items-center disabled:opacity-50"
        >
          Analyze My Skills <ArrowRight />
        </motion.button>
      </div>
    </div>
  );
}