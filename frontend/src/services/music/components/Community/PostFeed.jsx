import React, { useEffect, useRef, useState } from 'react';
import { FaHeart, FaComment, FaUpload, FaUserCircle, FaPlay, FaPause, FaMusic } from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css';

const PostFeed = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out-cubic'
    });
  }, []);

  const posts = [
    {
      id: 1,
      user: "Ali Khan",
      title: "My Guitar Solo 🎸",
      video: "https://cdn.pixabay.com/video/2020/04/13/35862-408654167_tiny.mp4",
      likes: 152,
      comments: 18,
      type: "instrumental",
      duration: "3:45"
    },
    {
      id: 2,
      user: "Sara Malik",
      title: "Vocal Warm-up Session 🎤",
      video: "https://media.istockphoto.com/id/2152202856/video/female-student-engages-in-singing-under-guidance-of-tutor.mp4?s=mp4-640x640-is&k=20&c=LHQh2K9Rr747HzWEnMJPNY2nyXpUJQyjDiQD4d7InyQ=",
      likes: 220,
      comments: 25,
      type: "vocal",
      duration: "2:30"
    },
    {
      id: 3,
      user: "Rohit Sharma",
      title: "Remix Beat Experiment 🎧",
      video: "https://media.istockphoto.com/id/2231794504/video/fans-cheering-hands-before-concert-stage-lights-flickering.mp4?s=mp4-640x640-is&k=20&c=jDnGJeAmTYzdjmz1Bbe55NQEtEHhCSlnlB6Vy2w5Tgs=",
      likes: 97,
      comments: 9,
      type: "electronic",
      duration: "4:15"
    },
    {
      id: 4,
      user: "Ayesha Noor",
      title: "Piano Classics Collection 🎹",
      video: "https://cdn.pixabay.com/video/2017/11/22/13042-244747053_tiny.mp4",
      likes: 189,
      comments: 32,
      type: "classical",
      duration: "5:20"
    },
    {
      id: 5,
      user: "David Chen",
      title: "Jazz Improvisation 🎷",
      video: "https://cdn.pixabay.com/video/2016/06/09/3427-170235981_tiny.mp4",
      likes: 275,
      comments: 41,
      type: "jazz",
      duration: "6:10"
    },
    {
      id: 6,
      user: "Maya Patel",
      title: "Bollywood Fusion Mix 🪘",
      video: "https://cdn.pixabay.com/video/2022/09/11/130911-748586188_tiny.mp4",
      likes: 312,
      comments: 56,
      type: "fusion",
      duration: "3:55"
    }
  ];

  const VideoCard = ({ post, index }) => {
    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const [showControls, setShowControls] = useState(false);

    const togglePlayPause = () => {
      if (videoRef.current) {
        if (isPlaying) {
          videoRef.current.pause();
        } else {
          videoRef.current.play();
        }
        setIsPlaying(!isPlaying);
      }
    };

    const handleVideoClick = () => {
      togglePlayPause();
      setShowControls(true);
      
      // Hide controls after 3 seconds if video is playing
      if (!isPlaying) {
        setTimeout(() => {
          if (videoRef.current && !videoRef.current.paused) {
            setShowControls(false);
          }
        }, 3000);
      }
    };

    const handleMouseEnter = () => {
      setIsHovered(true);
      setShowControls(true);
    };

    const handleMouseLeave = () => {
      setIsHovered(false);
      if (isPlaying) {
        setTimeout(() => {
          if (!isHovered) {
            setShowControls(false);
          }
        }, 2000);
      }
    };

    return (
      <div
        className="group bg-slate-800/80 backdrop-blur-sm border border-slate-700/50 rounded-2xl overflow-hidden hover:border-slate-500/50 transform hover:scale-105 transition-all duration-300"
        data-aos="fade-up"
        data-aos-delay={index * 100}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* VIDEO CONTAINER */}
        <div className="relative overflow-hidden">
          <video
            ref={videoRef}
            className="w-full h-64 object-cover cursor-pointer"
            onClick={handleVideoClick}
            muted
            loop
            poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='256' viewBox='0 0 400 256'%3E%3Crect width='400' height='256' fill='%231e293b'/%3E%3Cpath d='M150 100 L250 150 L150 200 Z' fill='%234f46e5'/%3E%3C/svg%3E"
          >
            <source src={post.video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          
          {/* GRADIENT OVERLAY */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-60"></div>
          
          {/* PLAY/PAUSE BUTTON */}
          {(isHovered || showControls) && (
            <div className="absolute inset-0 flex items-center justify-center">
              <button
                onClick={togglePlayPause}
                className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center transform hover:scale-110 transition-transform duration-300 shadow-2xl backdrop-blur-sm"
              >
                {isPlaying ? (
                  <FaPause className="text-white text-lg" />
                ) : (
                  <FaPlay className="text-white ml-1 text-lg" />
                )}
              </button>
            </div>
          )}
          
          {/* VIDEO CONTROLS */}
          {(isHovered || showControls) && (
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
              {/* PROGRESS BAR */}
              <div className="flex-1 bg-slate-600/50 rounded-full h-1 mr-4">
                <div 
                  className="bg-gradient-to-r from-cyan-400 to-purple-500 h-1 rounded-full transition-all duration-100"
                  style={{ 
                    width: videoRef.current ? 
                      `${(videoRef.current.currentTime / videoRef.current.duration) * 100}%` : '0%' 
                  }}
                ></div>
              </div>
              
              {/* TIME DISPLAY */}
              <span className="text-white text-sm bg-slate-900/80 px-2 py-1 rounded backdrop-blur-sm">
                {videoRef.current ? 
                  `${Math.floor(videoRef.current.currentTime / 60)}:${Math.floor(videoRef.current.currentTime % 60).toString().padStart(2, '0')} / ${post.duration}` 
                  : `0:00 / ${post.duration}`
                }
              </span>
            </div>
          )}
          
          {/* BADGE & DURATION */}
          <div className="absolute top-4 left-4">
            <span className="bg-gradient-to-r from-cyan-500 to-purple-600 px-3 py-1 rounded-full text-sm font-semibold text-white shadow-lg backdrop-blur-sm">
              {post.type}
            </span>
          </div>
          <div className="absolute top-4 right-4">
            <span className="bg-slate-900/90 px-2 py-1 rounded text-sm text-slate-300 backdrop-blur-sm">
              {post.duration}
            </span>
          </div>
        </div>

        {/* CARD CONTENT */}
        <div className="p-6">
          {/* USER INFO */}
          <div className="flex items-center gap-3 mb-4">
            <div className="relative">
              <FaUserCircle className="text-3xl bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full" />
              <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-slate-800"></div>
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">{post.user}</h3>
              <p className="text-slate-400 text-sm">Musician</p>
            </div>
          </div>

          {/* POST TITLE */}
          <h4 className="text-xl font-bold text-white mb-3 leading-tight">
            {post.title}
          </h4>

          {/* ENGAGEMENT STATS */}
          <div className="flex justify-between items-center pt-4 border-t border-slate-700/50">
            <div className="flex gap-6">
              {/* LIKES */}
              <button className="flex items-center gap-2 group/like transform hover:scale-110 transition-all duration-300">
                <div className="relative">
                  <FaHeart className="text-slate-400 group-hover/like:text-pink-500 text-lg transition-colors duration-300" />
                  <div className="absolute inset-0 scale-0 group-hover/like:scale-125 transition-transform duration-300">
                    <FaHeart className="text-pink-500 opacity-70" />
                  </div>
                </div>
                <span className="text-slate-300 group-hover/like:text-white font-semibold">
                  {post.likes}
                </span>
              </button>

              {/* COMMENTS */}
              <button className="flex items-center gap-2 group/comment transform hover:scale-110 transition-all duration-300">
                <FaComment className="text-slate-400 group-hover/comment:text-cyan-400 text-lg transition-colors duration-300" />
                <span className="text-slate-300 group-hover/comment:text-white font-semibold">
                  {post.comments}
                </span>
              </button>
            </div>

            {/* SHARE BUTTON */}
            <button className="flex items-center gap-2 group/share bg-gradient-to-r from-cyan-500/20 to-purple-600/20 hover:from-cyan-500/30 hover:to-purple-600/30 px-4 py-2 rounded-full transform hover:scale-105 transition-all duration-300 border border-slate-700/50 hover:border-cyan-500/30">
              <FaUpload className="text-cyan-400 group-hover/share:text-cyan-300 text-sm transition-colors duration-300" />
              <span className="text-slate-300 group-hover/share:text-white text-sm font-semibold">
                Share
              </span>
            </button>
          </div>
        </div>

        {/* HOVER GLOW EFFECT */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
      </div>
    );
  };

  return (
    <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 py-20">
        {/* SECTION HEADER */}
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500">
              Latest Performances
            </span>
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Discover amazing music from our talented community members
          </p>
        </div>

        {/* POSTS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {posts.map((post, index) => (
            <VideoCard key={post.id} post={post} index={index} />
          ))}
        </div>

        {/* CUSTOM ANIMATION STYLES */}
        <style jsx>{`
          @keyframes shine {
            0% { transform: translateX(-100%) rotate(45deg); }
            100% { transform: translateX(400%) rotate(45deg); }
          }
          .animate-shine {
            animation: shine 2s infinite;
          }
        `}</style>
      </div>
    </div>
  );
}

export default PostFeed;