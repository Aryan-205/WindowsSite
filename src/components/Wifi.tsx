import React, { useState, useEffect } from "react";
import useStore from "../store/feature";

// Helper component for a toggle switch (can be replaced with a library if preferred)
const ToggleSwitch = ({ isOn, handleToggle, label }) => {
  return (
    <div className="flex items-center justify-between p-2">
      <span className="text-sm text-white">{label}</span>
      <div
        className={`w-10 h-5 flex items-center rounded-full p-0.5 cursor-pointer transition-colors duration-200 ease-in-out ${
          isOn ? "bg-blue-500" : "bg-gray-600"
        }`}
        onClick={handleToggle}
      >
        <div
          className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform duration-200 ease-in-out ${
            isOn ? "translate-x-full" : ""
          }`}
        ></div>
      </div>
    </div>
  );
};

// Helper component for network signal strength icon
const SignalStrengthIcon = ({ strength }) => {
  // Strength from 0 to 4 (simulated bars)
  const getBars = (s) => {
    if (s >= 80) return 4;
    if (s >= 60) return 3;
    if (s >= 40) return 2;
    if (s >= 20) return 1;
    return 0;
  };

  const bars = getBars(strength);

  return (
    <div className="flex items-end h-4 w-4 relative">
      {[1, 2, 3, 4].map((bar) => (
        <div
          key={bar}
          className={`absolute bottom-0 bg-gray-400 rounded-t-sm ${
            bars >= bar ? "bg-white" : "bg-gray-600"
          }`}
          style={{
            left: `${(bar - 1) * 25}%`,
            width: "20%",
            height: `${bar * 25}%`,
          }}
        ></div>
      ))}
    </div>
  );
};

export default function Wifi() {

  const clearActiveComponent = useStore((state)=>state.clearActiveComponent)

  const [wifiEnabled, setWifiEnabled] = useState(true);
  const [availableNetworks, setAvailableNetworks] = useState([]);
  const [connectedNetwork, setConnectedNetwork] = useState(null); // SSID of connected network
  const [isConnecting, setIsConnecting] = useState(false);
  const [showPasswordInput, setShowPasswordInput] = useState(false);
  const [password, setPassword] = useState("");
  const [selectedNetworkToConnect, setSelectedNetworkToConnect] = useState(null);

  // Simulate available networks
  const simulateNetworks = () => {
    return [
      { ssid: "Home_Fiber_5G", strength: 90, security: "WPA2", isHidden: false },
      { ssid: "Guest_Network", strength: 65, security: "Open", isHidden: false },
      { ssid: "CoffeeShop_WiFi", strength: 40, security: "Open", isHidden: false },
      { ssid: "Secure_Office", strength: 85, security: "WPA2-Enterprise", isHidden: false },
      { ssid: "Public_Hotspot", strength: 30, security: "Open", isHidden: false },
      { ssid: "My_Hidden_AP", strength: 70, security: "WPA2", isHidden: true },
    ].sort((a, b) => b.strength - a.strength); // Sort by strength
  };

  useEffect(() => {
    if (wifiEnabled) {
      setAvailableNetworks(simulateNetworks());
    } else {
      setAvailableNetworks([]);
      setConnectedNetwork(null);
    }
    // Simulate initial connection if it was previously connected and Wi-Fi re-enabled
    // This is a simple example; in a real app, you'd save/load preferred networks
    if (wifiEnabled && connectedNetwork === null && availableNetworks.length > 0) {
        // Optionally auto-connect to a preferred network here
    }
  }, [wifiEnabled]);

  const handleToggleWifi = () => {
    setWifiEnabled((prev) => !prev);
    // Reset connection status if turning off Wi-Fi
    if (wifiEnabled) {
      setConnectedNetwork(null);
      setIsConnecting(false);
    }
  };

  const handleConnect = (network) => {
    if (connectedNetwork === network.ssid) {
      // Already connected
      return;
    }

    if (network.security !== "Open" && !showPasswordInput) {
      setSelectedNetworkToConnect(network);
      setShowPasswordInput(true);
      setPassword(""); // Clear previous password
      return;
    }

    setIsConnecting(true);
    setConnectedNetwork(null); // Clear current connection display while connecting

    // Simulate connection delay
    setTimeout(() => {
      // In a real app, you'd validate password here
      if (network.security !== "Open" && password !== "password123") { // Simple password check
        alert("Incorrect password!");
        setIsConnecting(false);
        setShowPasswordInput(false);
        setPassword("");
        setSelectedNetworkToConnect(null);
        return;
      }

      setConnectedNetwork(network.ssid);
      setIsConnecting(false);
      setShowPasswordInput(false);
      setPassword("");
      setSelectedNetworkToConnect(null);

      // Update available networks to mark this one as connected
      setAvailableNetworks((prevNetworks) =>
        prevNetworks.map((n) =>
          n.ssid === network.ssid
            ? { ...n, isConnected: true }
            : { ...n, isConnected: false } // Ensure only one is connected
        )
      );
    }, 2000); // 2 second connection delay
  };

  const handleDisconnect = () => {
    setIsConnecting(false);
    setConnectedNetwork(null);
    setAvailableNetworks((prevNetworks) =>
        prevNetworks.map((n) => ({ ...n, isConnected: false }))
    );
  };

  const refreshNetworks = () => {
    if (wifiEnabled) {
      setIsConnecting(true); // Simulate scanning
      setTimeout(() => {
        setAvailableNetworks(simulateNetworks());
        setIsConnecting(false);
      }, 1500); // 1.5 second scan delay
    }
  };

  return (
    <>
    <div className="w-80 absolute bottom-0 right-8 bg-gray-800 rounded-lg shadow-xl text-white overflow-hidden font-sans">
      {/* Header */}
      <div className="bg-gray-700 px-4 py-3 flex justify-between items-center border-b border-gray-600">
        <h3 className="text-lg font-semibold">Wi-Fi</h3>
        <button
          onClick={refreshNetworks}
          className="text-gray-400 hover:text-white transition-colors duration-200"
          title="Refresh networks"
          disabled={isConnecting || !wifiEnabled}
        >
          {/* Simple refresh icon, you can use an SVG icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`h-5 w-5 ${isConnecting ? "animate-spin" : ""}`}
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M4.328 3.328a.75.75 0 011.06 0L8 5.94V3.5A.75.75 0 018.75 2h2.5A.75.75 0 0112 3.5v2.44l2.612-2.612a.75.75 0 011.06 1.06L13.06 7h3.69a.75.75 0 010 1.5H13.06l3.69 3.69a.75.75 0 01-1.06 1.06L12 9.06v2.44a.75.75 0 01-.75.75H8.75a.75.75 0 01-.75-.75V9.06L4.328 12.372a.75.75 0 01-1.06-1.06L5.94 8H2.25a.75.75 0 010-1.5h3.69L2.25 3.328a.75.75 0 010-1.06z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>

      {/* Wi-Fi Toggle */}
      <div className="p-3 border-b border-gray-600">
        <ToggleSwitch
          isOn={wifiEnabled}
          handleToggle={handleToggleWifi}
          label="Wi-Fi"
        />
      </div>

      {/* Connection Status / Available Networks */}
      <div className="p-3">
        {wifiEnabled ? (
          <>
            {isConnecting ? (
              <div className="text-center text-gray-400 py-4">
                Connecting...
                <div className="animate-pulse text-xl">...</div>
              </div>
            ) : connectedNetwork ? (
              <div className="mb-4">
                <p className="text-gray-400 text-sm mb-1">Connected to:</p>
                <div className="flex items-center gap-2 text-blue-400 font-medium">
                  <SignalStrengthIcon strength={90} /> {/* Assume strong signal for connected */}
                  <span>{connectedNetwork}</span>
                </div>
                <button
                  onClick={handleDisconnect}
                  className="mt-2 px-3 py-1 bg-red-600 hover:bg-red-700 text-white text-sm rounded-md transition-colors"
                >
                  Disconnect
                </button>
              </div>
            ) : (
              <p className="text-gray-400 text-sm mb-2">Available networks:</p>
            )}

            {/* Password Input for Secure Networks */}
            {showPasswordInput && selectedNetworkToConnect && (
              <div className="mb-4 p-3 bg-gray-700 rounded-md">
                <p className="text-sm mb-2">Enter password for {selectedNetworkToConnect.ssid}</p>
                <input
                  type="password"
                  className="w-full px-2 py-1 bg-gray-900 text-white text-sm rounded-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <div className="flex justify-end gap-2 mt-3">
                  <button
                    onClick={() => { setShowPasswordInput(false); setPassword(""); setSelectedNetworkToConnect(null); }}
                    className="px-3 py-1 bg-gray-600 hover:bg-gray-500 text-white text-sm rounded-md transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={() => handleConnect(selectedNetworkToConnect)}
                    className="px-3 py-1 bg-blue-600 hover:bg-blue-700 text-white text-sm rounded-md transition-colors"
                    disabled={isConnecting || password.length === 0}
                  >
                    Connect
                  </button>
                </div>
              </div>
            )}

            {/* List of Networks */}
            <div className="max-h-60 overflow-y-auto custom-scrollbar">
              {availableNetworks.length > 0 ? (
                availableNetworks.map((network) => (
                  <div
                    key={network.ssid}
                    className={`flex items-center justify-between p-2 rounded-md cursor-pointer mb-1 ${
                      connectedNetwork === network.ssid
                        ? "bg-blue-800"
                        : "hover:bg-gray-700"
                    }`}
                    onClick={() => !isConnecting && handleConnect(network)}
                  >
                    <div className="flex items-center gap-2">
                      <SignalStrengthIcon strength={network.strength} />
                      <span className="text-sm">{network.ssid}</span>
                      {network.security !== "Open" && (
                        <span className="text-gray-400 text-xs ml-1">
                          {/* Padlock icon - replace with an actual SVG if needed */}
                          &#x1F512;
                        </span>
                      )}
                    </div>
                    {connectedNetwork === network.ssid && (
                      <span className="text-blue-300 text-xs">Connected</span>
                    )}
                  </div>
                ))
              ) : (
                <p className="text-gray-400 text-center py-4">
                  {isConnecting ? "Scanning..." : "No networks found."}
                </p>
              )}
            </div>
          </>
        ) : (
          <p className="text-gray-400 text-center py-4">Wi-Fi is turned off.</p>
        )}
      </div>

      {/* Footer (Optional, for additional settings) */}
      <div className="px-4 py-2 border-t border-gray-600 text-right">
        <button className="text-blue-400 hover:text-blue-300 text-xs">
          Network & Internet settings
        </button>
      </div>
    </div>
    <div className="w-full h-full" onClick={clearActiveComponent}/>
    </>
  );
}