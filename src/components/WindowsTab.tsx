export default function WindowsTab(){
  const pinnedApps = [
    { name: 'Edge', icon: '' },
    { name: 'Word', icon: '' },
    { name: 'Excel', icon: '' },
    { name: 'PowerPoint', icon: '' },
    { name: 'Microsoft 365 Copilot', icon: '' },
    { name: 'Outlook (new)', icon: '' },
    { name: 'Microsoft Store', icon: '' },
    { name: 'Photos', icon: '' },
    { name: 'OneNote', icon: '' },
    { name: 'Microsoft Defender', icon: '' },
    { name: 'Paint', icon: '' },
    { name: 'Surface', icon: '' },
    { name: 'Settings', icon: '' },
    { name: 'Xbox', icon: '' },
    { name: 'Spotify', icon: '' },
    { name: 'Clock', icon: '' },
  ];

  const appCategories = [
    {
      title: 'Productivity',
      apps: [
        { name: 'Chrome', icon: '' },
        { name: 'File Explorer', icon: '' },
        { name: 'CommandPost', icon: '' },
        { name: 'Microsoft Teams', icon: '' },
        { name: 'Settings', icon: '' },
        { name: 'Remote Desktop', icon: '' },
        { name: 'Money in Excel', icon: '' },
        { name: 'Xbox Game Bar', icon: '' },
        { name: 'Commander One', icon: '' },
        { name: 'CotEditor', icon: '' },
        { name: 'WhatsApp', icon: '' },
        { name: 'Klokki Slim - Time Tracking', icon: '' },
        { name: 'Under My Roof', icon: '' },
        { name: 'BootCamp Assistant', icon: '' },
        { name: 'Solitaire Collection', icon: '' },
      ]
    },
    {
      title: 'Other',
      apps: []
    },
    {
      title: 'Utilities & Tools',
      apps: []
    },
    {
      title: 'Games',
      apps: []
    },
    {
      title: 'Information & Reading',
      apps: [
        { name: 'CotEditor', icon: '' },
        { name: 'MindNode – Mind Map & Outline', icon: '' },
        { name: 'Paw', icon: '' },
        { name: 'Frenzic- Overtime', icon: '' },
      ]
    },
    {
      title: 'Creativity',
      apps: []
    },
    {
      title: 'Entertainment',
      apps: [
        { name: 'Prompto', icon: '' },
        { name: 'Spotify', icon: '' },
      ]
    }
  ];

  return (
    <div className="w-[60%] h-[60%] bg-gray-800 text-white rounded-lg shadow-2xl overflow-hidden">
      {/* Search Bar */}
      <div className="p-4 bg-gray-900">
        <div className="relative">
          <input
            type="text"
            placeholder="Search for apps, settings, and documents"
            className="w-full bg-gray-700 text-white pl-10 pr-4 py-2 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      {/* Pinned Section */}
      <div className="p-4">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-sm font-medium">Pinned</h2>
          <button className="flex items-center text-xs text-gray-400 hover:text-white">
            Show all
          </button>
        </div>
        
        <div className="grid grid-cols-8 gap-2 mb-6">
          {pinnedApps.map((app, index) => (
            <div key={index} className="flex flex-col items-center p-2 hover:bg-gray-700 rounded cursor-pointer">
              <div className="w-8 h-8 bg-gray-600 rounded mb-1 flex items-center justify-center">
                {/* PNG icon placeholder */}
                <div className="w-6 h-6 bg-gray-500 rounded"></div>
              </div>
              <span className="text-xs text-center leading-tight">{app.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* All Apps Section */}
      <div className="px-4 pb-4 flex-1 overflow-y-auto">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-sm font-medium">All</h2>
          <button className="flex items-center text-xs text-gray-400 hover:text-white">
            View: Category
          </button>
        </div>

        <div className="grid grid-cols-4 gap-4">
          {appCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="space-y-2">
              <h3 className="text-xs font-medium text-gray-300 mb-2">{category.title}</h3>
              <div className="space-y-1">
                {category.apps.length > 0 ? (
                  category.apps.slice(0, 4).map((app, appIndex) => (
                    <div key={appIndex} className="flex items-center p-1 hover:bg-gray-700 rounded cursor-pointer">
                      <div className="w-6 h-6 bg-gray-600 rounded mr-2 flex items-center justify-center">
                        {/* PNG icon placeholder */}
                        <div className="w-4 h-4 bg-gray-500 rounded"></div>
                      </div>
                      <span className="text-xs truncate">{app.name}</span>
                    </div>
                  ))
                ) : (
                  <div className="grid grid-cols-2 gap-1">
                    {[...Array(4)].map((_, i) => (
                      <div key={i} className="w-8 h-8 bg-gray-600 rounded flex items-center justify-center">
                        <div className="w-6 h-6 bg-gray-500 rounded"></div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom User Section */}
      <div className="p-4 bg-gray-900 flex items-center justify-between">
        <div className="flex items-center">
          <div className="w-8 h-8 bg-gray-600 rounded-full mr-3 flex items-center justify-center">
            <div className="w-6 h-6 bg-gray-500 rounded-full"></div>
          </div>
          <span className="text-sm">Tom Warren</span>
        </div>
        <button className="p-2 hover:bg-gray-700 rounded">
        </button>
      </div>
    </div>
  );
};
