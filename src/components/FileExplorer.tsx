import React, { useState } from 'react';
import { motion, useDragControls } from 'motion/react';
import useStore from '../store/feature';


// --- File System Data (In-memory representation) ---
const fileSystemData = {
  'This PC': {
    type: 'folder',
    children: {
      'Local Disk (C)': {
        type: 'folder',
        children: {
          'Program Files': {
            type: 'folder',
            children: {
              'Microsoft Office': { type: 'folder', children: {} },
              'Google': { type: 'folder', children: {} },
            },
          },
          'Users': {
            type: 'folder',
            children: {
              'Public': { type: 'folder', children: {} },
              'MyUser': {
                type: 'folder',
                children: {
                  'Documents': {
                    type: 'folder',
                    children: {
                      'Report.docx': { type: 'file', size: '1.2 MB' },
                      'Notes.txt': { type: 'file', size: '5 KB' },
                    },
                  },
                  'Pictures': {
                    type: 'folder',
                    children: {
                      'Vacation.jpg': { type: 'file', size: '3.5 MB' },
                      'Profile.png': { type: 'file', size: '800 KB' },
                    },
                  },
                  'Downloads': {
                    type: 'folder',
                    children: {
                      'setup.exe': { type: 'file', size: '25 MB' },
                    },
                  },
                  'Desktop': {
                    type: 'folder',
                    children: {
                      'MyProject': { type: 'folder', children: {} },
                      'README.md': { type: 'file', size: '10 KB' },
                    }
                  }
                },
              },
            },
          },
          'Windows': {
            type: 'folder',
            children: {
              'System32': { type: 'folder', children: {} },
              'Fonts': { type: 'folder', children: {} },
            },
          },
        },
      },
      'Local Disk (D)': {
        type: 'folder',
        children: {
          'Projects': {
            type: 'folder',
            children: {
              'MyWebApp': { type: 'folder', children: {} },
              'OldFiles': { type: 'folder', children: {} },
            },
          },
          'Games': { type: 'folder', children: {} },
        },
      },
      'Net Drive (Z)': {
        type: 'folder',
        children: {
          'Shared Docs': { type: 'folder', children: {} },
        }
      }
    },
  },
};

// Main App Component 
export default function FileExplorer() {

  const [currentPath, setCurrentPath] = useState(['This PC']);

  /**
   * Navigates into a specified folder.
   * @param {string} folderName - The name of the folder to navigate into.
   */
  const navigateFolder = (folderName: string) => {
    setCurrentPath((prevPath) => [...prevPath, folderName]);
  };

  /**
   * Navigates back up one level in the directory tree.
   */
  const goBack = () => {
    if (currentPath.length > 1) {
      setCurrentPath((prevPath) => prevPath.slice(0, prevPath.length - 1));
    }
  };

  /**
   * Navigates to a specific segment in the breadcrumb path.
   * @param {number} index - The index of the path segment to navigate to.
   */
  const goToPath = (index:number) => {
    setCurrentPath(currentPath.slice(0, index + 1));
  };

  /**
   * Resets the path to the root ('This PC').
   */
  const goToHome = () => {
    setCurrentPath(['This PC']);
  };

  /**
   * Retrieves the content (children) of the current directory.
   * @returns {object} - An object containing the files and folders in the current directory.
   */
  const getCurrentDirectoryContent = () => {
    let currentDir = fileSystemData;
    for (const segment of currentPath) {
      if (currentDir && currentDir[segment] && currentDir[segment].children) {
        currentDir = currentDir[segment].children;
      } else {
        // Path not found or not a folder, return empty
        return {};
      }
    }
    return currentDir;
  };

  const currentContent = getCurrentDirectoryContent();
  const sortedContent = Object.entries(currentContent).sort(([nameA, itemA], [nameB, itemB]) => {
    // Sort folders first, then files, then alphabetically
    if (itemA.type === 'folder' && itemB.type !== 'folder') {
      return -1;
    }
    if (itemA.type !== 'folder' && itemB.type === 'folder') {
      return 1;
    }
    return nameA.localeCompare(nameB);
  });

  const controls = useDragControls()
  const clearActiveComponent = useStore((state)=>state.clearActiveComponent)
  const [fullScreen, setFullScreen] = useState(false);

  return (
    <motion.div 
      drag
      dragControls={controls}
      dragListener={false}
      dragMomentum={false}
      dragElastic={0} 
      className={`z-10 ${
        fullScreen ? "w-full h-full absolute inset-0" : "w-[60%] h-[70%]"
      } flex flex-col rounded-lg overflow-hidden shadow-xl`}
      >
      <div className="w-full h-full bg-white shadow-2xl overflow-hidden md:flex flex-col">
          {/* Title Bar */}
        <div onPointerDown={event => controls.start(event)} className="h-[5%] flex items-center justify-between px-4 shrink-0 border-b border-gray-200 bg-gray-50">
          <div className="flex items-center gap-3">
            <button className="w-4 h-4 flex items-center justify-center text-gray-600">
              <img src="/leftArrow.png" alt="" />
            </button>
            <p className="text-sm font-medium text-gray-800">File Manager</p>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={clearActiveComponent}
              className="w-4 h-4"
            >
              <img src="/minus.png" alt="" />
            </button>
            <button
              onClick={() => setFullScreen((prev) => !prev)}
              className="w-3 h-3"
            >
              <img src="/square.png" alt="" />
            </button>
            <button
              onClick={clearActiveComponent}
              className="w-4 h-4 hover:bg-red-500"
            >
              <img src="/close.png" alt="" />
            </button>
          </div>
        </div>
        <div className='flex w-full h-full'>
          {/* Sidebar - Can be expanded for quick access, drives, etc. */}
          <div className="w-[22%] bg-gray-50 py-6 px-3 border-r border-gray-100">
            <h2 className="text-xl font-semibold text-gray-700 mb-6 flex items-center">
              <img src="/home.png" className="w-6 h-6 mr-2 " />
              Quick Access
            </h2>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={goToHome}
                  className="flex items-center w-full text-left p-2 rounded-lg hover:bg-blue-100 transition-colors duration-200 text-blue-600 font-medium"
                >
                  <img src='/folder.png' className="w-5 h-5 mr-3 text-blue-400" />
                  This PC
                </button>
              </li>
              {/* Add more quick access links here if needed */}
            </ul>
          </div>

          {/* Main Content Area */}
          <div className="flex-1 p-3">
            {/* Top Bar: Path and Navigation Buttons */}
            <div className="flex items-center justify-between mb-6 bg-gray-50 p-3 shadow-sm border border-gray-100">
              <div className="flex items-center space-x-2">
                <button
                  onClick={goBack}
                  disabled={currentPath.length <= 1}
                  className={`p-2 rounded-full transition-colors duration-200 ${
                    currentPath.length <= 1
                      ? 'text-gray-400 cursor-not-allowed'
                      : 'hover:bg-blue-200 text-blue-600'
                  }`}
                  title="Go back"
                >
                  <img src="/leftArrow.png" alt="" className='w-6' />
                </button>
                <button
                  onClick={goToHome}
                  className="p-2 rounded-full hover:bg-blue-200 transition-colors duration-200 text-blue-600"
                  title="Go to Home"
                >
                  <img src='/home.png' className="w-5 h-5" />
                </button>
              </div>
              
              {/* top file path */}
              <div className="flex-1 mx-4 p-2 bg-white rounded-lg shadow-inner border border-gray-200 overflow-x-auto whitespace-nowrap scrollbar-hide">
                {currentPath.map((segment, index) => (
                  <React.Fragment key={index}>
                    <button
                      onClick={() => goToPath(index)}
                      className={`text-base font-medium ${
                        index === currentPath.length - 1
                          ? 'text-blue-700'
                          : 'text-gray-600 hover:text-blue-500 hover:underline'
                      } transition-colors duration-200`}
                    >
                      {segment}
                    </button>
                    {index < currentPath.length - 1 && (
                      <span className="mx-1 text-gray-400">/</span>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>

            {/* File/Folder List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {sortedContent.length === 0 ? (
                <div className="col-span-full text-center text-gray-500 py-10">
                  This folder is empty.
                </div>
              ) : (
                sortedContent.map(([name, item]) => (
                  <div
                    key={name}
                    className="flex items-center p-3 w-fit gap-2 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer border border-gray-100"
                    onClick={() => item.type === 'folder' && navigateFolder(name)}
                  >
                    {item.type === 'folder' ? (
                      <img src='/folder.png' className="w-6 h-6 text-blue-500 " />
                    ) : (
                      <img src='/folder.png' className="w-6 h-6 text-gray-500 " />
                    )}
                    <div>
                      <p className="font-medium text-gray-800 text-base truncate">{name}</p>
                      {item.type === 'file' && item.size && (
                        <p className="text-sm text-gray-500">{item.size}</p>
                      )}
                      {item.type === 'folder' && (
                        <p className="text-sm text-gray-500">Folder</p>
                      )}
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

