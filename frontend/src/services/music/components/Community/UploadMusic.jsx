import React, { useState, useRef } from 'react';
import { FaHeart, FaComment, FaUpload, FaUserCircle, FaTimes, FaPlay, FaPause, FaImage, FaVideo, FaMusic } from "react-icons/fa";
import { MdAudiotrack } from "react-icons/md";

const UploadMusic = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [fileType, setFileType] = useState('');
  const [isPlaying, setIsPlaying] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const fileInputRef = useRef(null);
  const audioRef = useRef(null);

  const handleFileSelect = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);
      setFileType(file.type.split('/')[0]);
      
      // Create preview URL
      const url = URL.createObjectURL(file);
      setPreviewUrl(url);
      
      // Simulate upload progress
      simulateUploadProgress();
    }
  };

  const simulateUploadProgress = () => {
    setUploadProgress(0);
    const interval = setInterval(() => {
      setUploadProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 10;
      });
    }, 200);
  };

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  const handleRemoveFile = () => {
    setSelectedFile(null);
    setPreviewUrl(null);
    setFileType('');
    setUploadProgress(0);
    if (audioRef.current) {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };

  const togglePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const getFileIcon = () => {
    switch (fileType) {
      case 'audio':
        return <FaMusic className="text-cyan-400 text-2xl" />;
      case 'video':
        return <FaVideo className="text-purple-400 text-2xl" />;
      case 'image':
        return <FaImage className="text-pink-400 text-2xl" />;
      default:
        return <MdAudiotrack className="text-cyan-400 text-2xl" />;
    }
  };

  const getFileTypeText = () => {
    switch (fileType) {
      case 'audio':
        return 'Audio File';
      case 'video':
        return 'Video File';
      case 'image':
        return 'Image File';
      default:
        return 'File';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12" data-aos="fade-down">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent mb-4">
            Share Your Creativity
          </h1>
          <p className="text-slate-300 text-lg">
            Upload your music, videos, or images and connect with the community
          </p>
        </div>

        {/* Upload Card */}
        <div
          className="bg-slate-800/80 border border-slate-700/50 p-4 md:p-8 rounded-2xl backdrop-blur-sm mb-8 hover:border-slate-500/50 transition-all duration-300 shadow-2xl"
          data-aos="zoom-in"
          data-aos-delay="200"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-6">
            <div className="flex items-center gap-4">
              <div className="relative">
                <FaUserCircle className="text-5xl text-cyan-400" />
                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-slate-800"></div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white">Upload Your Content</h3>
                <p className="text-slate-400 text-sm">
                  Share your performance, recording, or creative work with the community.
                </p>
              </div>
            </div>

            <button 
              onClick={handleUploadClick}
              className="group relative flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 font-semibold text-white hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-cyan-500/25 overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                <FaUpload className="group-hover:scale-110 transition-transform" /> 
                Upload Now
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute inset-0 shine-effect"></div>
            </button>

            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileSelect}
              accept="audio/*,video/*,image/*"
              className="hidden"
            />
          </div>

          {/* File Preview Section */}
          {selectedFile && (
            <div className="mt-6 p-6 bg-slate-900/50 rounded-xl border border-slate-600/50" data-aos="fade-up">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  {getFileIcon()}
                  <div>
                    <h4 className="text-white font-semibold">{selectedFile.name}</h4>
                    <p className="text-slate-400 text-sm">{getFileTypeText()} • {(selectedFile.size / (1024 * 1024)).toFixed(2)} MB</p>
                  </div>
                </div>
                <button
                  onClick={handleRemoveFile}
                  className="text-slate-400 hover:text-white transition-colors p-2 hover:bg-slate-700/50 rounded-lg"
                >
                  <FaTimes />
                </button>
              </div>

              {/* Progress Bar */}
              <div className="mb-4">
                <div className="flex justify-between text-sm text-slate-400 mb-2">
                  <span>Uploading...</span>
                  <span>{uploadProgress}%</span>
                </div>
                <div className="w-full bg-slate-700/50 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-cyan-500 to-purple-600 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${uploadProgress}%` }}
                  ></div>
                </div>
              </div>

              {/* Media Preview */}
              <div className="mt-4">
                {fileType === 'audio' && (
                  <div className="flex items-center gap-4 p-4 bg-slate-700/30 rounded-lg">
                    <button
                      onClick={togglePlayPause}
                      className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:scale-105 transition-transform"
                    >
                      {isPlaying ? <FaPause /> : <FaPlay />}
                    </button>
                    <div className="flex-1">
                      <audio
                        ref={audioRef}
                        src={previewUrl}
                        onEnded={() => setIsPlaying(false)}
                        className="w-full"
                      />
                      <p className="text-slate-300 text-sm">Click play to preview your audio</p>
                    </div>
                  </div>
                )}

                {fileType === 'video' && (
                  <div className="rounded-lg overflow-hidden bg-black">
                    <video
                      src={previewUrl}
                      controls
                      className="w-full max-h-64 object-contain"
                    />
                  </div>
                )}

                {fileType === 'image' && (
                  <div className="rounded-lg overflow-hidden bg-black flex justify-center">
                    <img
                      src={previewUrl}
                      alt="Preview"
                      className="max-h-64 object-contain rounded-lg"
                    />
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Upload Guidelines */}
          {!selectedFile && (
            <div className="text-center py-8" data-aos="fade-up" data-aos-delay="400">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="p-4 bg-slate-700/30 rounded-lg hover:bg-slate-700/50 transition-colors">
                  <FaMusic className="text-cyan-400 text-2xl mx-auto mb-2" />
                  <h4 className="text-white font-semibold text-sm">Audio Files</h4>
                  <p className="text-slate-400 text-xs">MP3, WAV, FLAC</p>
                </div>
                <div className="p-4 bg-slate-700/30 rounded-lg hover:bg-slate-700/50 transition-colors">
                  <FaVideo className="text-purple-400 text-2xl mx-auto mb-2" />
                  <h4 className="text-white font-semibold text-sm">Video Files</h4>
                  <p className="text-slate-400 text-xs">MP4, MOV, AVI</p>
                </div>
                <div className="p-4 bg-slate-700/30 rounded-lg hover:bg-slate-700/50 transition-colors">
                  <FaImage className="text-pink-400 text-2xl mx-auto mb-2" />
                  <h4 className="text-white font-semibold text-sm">Image Files</h4>
                  <p className="text-slate-400 text-xs">JPG, PNG, GIF</p>
                </div>
              </div>
              <p className="text-slate-400 text-sm">
                Supported formats: MP3, WAV, MP4, MOV, JPG, PNG, GIF • Max file size: 100MB
              </p>
            </div>
          )}
        </div>

        {/* Floating Elements for Decoration */}
        <div className="absolute top-20 left-10 w-4 h-4 bg-cyan-400 rounded-full opacity-60 animate-pulse" data-aos="fade-right"></div>
        <div className="absolute bottom-40 right-10 w-6 h-6 bg-purple-400 rounded-full opacity-40 animate-bounce" data-aos="fade-left"></div>
        <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-pink-400 rounded-full opacity-70 animate-ping" data-aos="zoom-in"></div>
      </div>

      {/* Custom Styles for Shine Effect */}
      <style jsx>{`
        .shine-effect {
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.2),
            transparent
          );
          transform: skewX(-20deg);
          animation: shine 3s infinite;
        }

        @keyframes shine {
          0% {
            left: -100%;
          }
          100% {
            left: 100%;
          }
        }
      `}</style>
    </div>
  );
};

export default UploadMusic;