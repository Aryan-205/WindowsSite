import React, { useState, useEffect } from 'react';

// Lucide Icons (assuming they are available via a global script or similar)
// For local development, you'd typically install lucide-react and import specific icons.
// For this self-contained example, we'll use a placeholder for the icons.
// In a real scenario, you'd import:
// import { Folder, File } from 'lucide-react';
// For this example, we'll use simple inline SVGs or placeholders.

// Placeholder for Lucide-like icons
const FolderIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-folder">
    <path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"/>
  </svg>
);

const FileIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-file">
    <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/>
    <path d="M14 2v4a2 2 0 0 0 2 2h4"/>
  </svg>
);

const BackIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-left">
    <path d="m12 19-7-7 7-7"/><path d="M19 12H5"/>
  </svg>
);

const HomeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-home">
    <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>
  </svg>
);


// --- File System Data (In-memory representation) ---
const fileSystemData = {
  'This PC': {
    type: 'folder',
    children: {
      'Local Disk (C:)': {
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
      'Local Disk (D:)': {
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
      'Network Drive (Z:)': {
        type: 'folder',
        children: {
          'Shared Docs': { type: 'folder', children: {} },
        }
      }
    },
  },
};

// --- Main App Component ---
export default function FileExplorer() {
  // State to manage the current path, initialized to 'This PC'
  const [currentPath, setCurrentPath] = useState(['This PC']);

  /**
   * Navigates into a specified folder.
   * @param {string} folderName - The name of the folder to navigate into.
   */
  const navigateFolder = (folderName) => {
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
  const goToPath = (index) => {
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4 font-inter text-gray-800">
      <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-2xl overflow-hidden md:flex">
        {/* Sidebar - Can be expanded for quick access, drives, etc. */}
        <div className="w-full md:w-1/4 bg-gray-50 p-6 border-r border-gray-100 hidden md:block">
          <h2 className="text-xl font-semibold text-gray-700 mb-6 flex items-center">
            <HomeIcon className="w-6 h-6 mr-2 text-blue-500" />
            Quick Access
          </h2>
          <ul className="space-y-3">
            <li>
              <button
                onClick={goToHome}
                className="flex items-center w-full text-left p-2 rounded-lg hover:bg-blue-100 transition-colors duration-200 text-blue-600 font-medium"
              >
                <FolderIcon className="w-5 h-5 mr-3 text-blue-400" />
                This PC
              </button>
            </li>
            {/* Add more quick access links here if needed */}
          </ul>
        </div>

        {/* Main Content Area */}
        <div className="w-full md:w-3/4 p-6">
          {/* Top Bar: Path and Navigation Buttons */}
          <div className="flex items-center justify-between mb-6 bg-gray-50 p-3 rounded-lg shadow-sm border border-gray-100">
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
                <BackIcon className="w-5 h-5" />
              </button>
              <button
                onClick={goToHome}
                className="p-2 rounded-full hover:bg-blue-200 transition-colors duration-200 text-blue-600"
                title="Go to Home"
              >
                <HomeIcon className="w-5 h-5" />
              </button>
            </div>

            {/* Breadcrumbs */}
            <div className="flex-1 mx-4 p-2 bg-white rounded-lg shadow-inner border border-gray-200 overflow-x-auto whitespace-nowrap scrollbar-hide">
              {currentPath.map((segment, index) => (
                <React.Fragment key={index}>
                  <button
                    onClick={() => goToPath(index)}
                    className={`text-sm md:text-base font-medium ${
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
                  className="flex items-center p-3 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer border border-gray-100"
                  onClick={() => item.type === 'folder' && navigateFolder(name)}
                >
                  {item.type === 'folder' ? (
                    <FolderIcon className="w-8 h-8 text-blue-500 mr-3" />
                  ) : (
                    <FileIcon className="w-8 h-8 text-gray-500 mr-3" />
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
  );
}

