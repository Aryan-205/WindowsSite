import React, { useState } from 'react';
import { motion, useDragControls } from 'motion/react'; // Ensure motion and useDragControls are imported
import useStore from '../store/feature'; // Ensure useStore is imported

export default function Chrome() { // Renamed from Chrome to match the immersive title
  const clearActiveComponent = useStore((state: any) => state.clearActiveComponent); // Added type for state
  const [fullScreen, setFullScreen] = useState<boolean>(false); // Added type for boolean state

  const controls = useDragControls();

  return (
    <motion.div
      drag
      dragControls={controls}
      dragListener={false}
      dragMomentum={false}
      dragElastic={0}
      className={`z-10 ${
        fullScreen ? "w-full h-full absolute inset-0" : "w-[60%] h-[70%]"
      } flex flex-col rounded-lg overflow-hidden shadow-xl bg-gray-800`}
    >
      {/* Title Bar */}
      <div onPointerDown={event => controls.start(event)} className="h-[5%] flex items-center justify-between px-4 shrink-0 border-b border-gray-700 bg-gray-700"> {/* Adjusted border and bg color */}
        <div className="flex items-center gap-3">
          <button className="w-4 h-4 flex items-center justify-center text-gray-300"> {/* Adjusted text color */}
            <img src="/leftArrow.png" alt="Back" />
          </button>
          <p className="text-sm font-medium text-gray-100">Aryan Bola</p> {/* Adjusted text color */}
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={clearActiveComponent}
            className="w-4 h-4"
            title="Minimize"
          >
            <img src="/minus.png" alt="Minimize" />
          </button>
          <button
            onClick={() => setFullScreen((prev) => !prev)}
            className="w-3 h-3"
            title={fullScreen ? "Restore Down" : "Maximize"}
          >
            <img src="/square.png" alt="Maximize/Restore" />
          </button>
          <button
            onClick={clearActiveComponent}
            className="w-4 h-4 hover:bg-red-500 rounded-sm" // Added rounded-sm for better hover effect
            title="Close"
          >
            <img src="/close.png" alt="Close" />
          </button>
        </div>
      </div>

      {/* Content Area - Now styled for search */}
      <div className="flex-1 p-4 bg-gray-900 text-white font-sans flex flex-col items-center overflow-y-auto"> {/* Adjusted padding, bg, and added overflow-y-auto */}
        
        
      </div>
    </motion.div>
  );
}
