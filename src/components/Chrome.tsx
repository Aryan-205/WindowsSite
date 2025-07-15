import React, { useState } from 'react';
import { motion, useDragControls } from 'motion/react'; // Ensure motion and useDragControls are imported
import useStore from '../store/feature'; // Ensure useStore is imported

export default function Chrome() { // Renamed from Chrome to match the immersive title
  const clearActiveComponent = useStore((state: any) => state.clearActiveComponent); // Added type for state
  const [fullScreen, setFullScreen] = useState<boolean>(false); // Added type for boolean state

  const controls = useDragControls();

  const [searchQuery, setSearchQuery] = useState<string>('');
  const [searchResults, setSearchResults] = useState<any[] | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  // Function to handle the search operation
  const handleSearch = async () => {
    if (!searchQuery.trim()) {
      setError("Please enter a search query.");
      setSearchResults(null);
      return;
    }

    setLoading(true);
    setError(null);
    setSearchResults(null); // Clear previous results

    try {
      // Call the google_search tool
      // The actual tool call will be handled by the environment.
      // In a real application, this would be an API call to your backend
      // which then calls the Google Search API or a similar service.
      const response = await fetch('/api/google-search', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ queries: [searchQuery] }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      // Assuming the response structure matches what google_search tool would return
      // For a single query, data.results[0] would contain the results for that query.
      if (data && data.results && data.results.length > 0) {
        setSearchResults(data.results[0].results); // Assuming data.results[0] is the SearchResults object
      } else {
        setSearchResults([]); // No results found
      }

    } catch (err: any) {
      console.error("Error during search:", err);
      setError(`Failed to fetch search results: ${err.message || 'Unknown error'}. Please try again.`);
    } finally {
      setLoading(false);
    }
  };

  // Handle Enter key press
  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

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
          <p className="text-sm font-medium text-gray-100">Chrome</p> {/* Adjusted text color */}
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
        <h1 className="text-3xl font-bold mb-6 text-blue-400">Google Search</h1>

        {/* Search Input */}
        <div className="w-full max-w-2xl flex items-center bg-gray-800 rounded-full shadow-lg overflow-hidden border border-gray-700">
          <input
            type="text"
            className="flex-grow p-3 px-5 text-lg bg-transparent focus:outline-none placeholder-gray-500"
            placeholder="Search Google..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyPress={handleKeyPress}
          />
          <button
            onClick={handleSearch}
            className="p-3 bg-blue-600 hover:bg-blue-700 transition-colors duration-200 rounded-r-full flex items-center justify-center"
            disabled={loading}
          >
            {loading ? (
              <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path>
              </svg>
            )}
          </button>
        </div>

        {/* Search Results */}
        <div className="w-full max-w-2xl mt-8">
          {error && (
            <div className="bg-red-800 p-4 rounded-lg text-red-100 mb-4">
              <p className="font-semibold">Error:</p>
              <p>{error}</p>
            </div>
          )}

          {searchResults && searchResults.length > 0 ? (
            <div className="space-y-4">
              {searchResults.map((result, index) => (
                <div key={index} className="bg-gray-800 p-4 rounded-lg shadow-md border border-gray-700">
                  <a
                    href={result.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline text-xl font-medium block mb-1"
                  >
                    {result.source_title || result.query || 'Untitled Result'}
                  </a>
                  <p className="text-gray-400 text-sm mb-2">{result.url}</p>
                  <p className="text-gray-300 text-base">{result.snippet}</p>
                </div>
              ))}
            </div>
          ) : searchResults && searchResults.length === 0 && !loading && !error ? (
            <div className="text-center text-gray-500 py-10">
              No results found for "{searchQuery}".
            </div>
          ) : null}
        </div>
      </div>
    </motion.div>
  );
}
