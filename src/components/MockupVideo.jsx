import { motion } from 'framer-motion';
import './Mockups.css';

export default function MockupVideo() {
  return (
    <div className="mockup-container mockup-video-container">
      <motion.div
        className="video-3d"
        initial={{ rotateY: 10, rotateX: 5 }}
        animate={{ 
          rotateY: [10, -5, 10],
          rotateX: [5, 10, 5]
        }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="video-player-frame">
          <div className="player-top">
            <div className="player-title">Creative_Motion.mp4</div>
            <div className="player-controls-top">
               <span className="p-dot"></span>
               <span className="p-dot"></span>
            </div>
          </div>
          
          <div className="player-main">
            <div className="video-screen-mock">
               {/* Animated colorful background for video */}
               <div className="video-colorful-bg"></div>
               <div className="video-overlay-play">
                  <div className="play-triangle"></div>
               </div>
               {/* Waveform indicator */}
               <div className="video-waveform">
                  <span></span><span></span><span></span><span></span><span></span>
                  <span></span><span></span><span></span><span></span><span></span>
               </div>
            </div>
          </div>

          <div className="player-bottom">
            <div className="timeline-bar">
               <div className="timeline-progress-gradient"></div>
               <div className="timeline-handle"></div>
            </div>
            <div className="player-icons-row">
               <div className="p-icon color-blue"></div>
               <div className="p-icon color-purple"></div>
               <div className="p-icon color-pink"></div>
               <div className="p-icon right color-green"></div>
            </div>
          </div>
        </div>
        <div className="video-glow-colorful"></div>
      </motion.div>
    </div>
  );
}
