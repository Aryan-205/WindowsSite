import { useState, useEffect } from "react";
import useStore from "../store/feature";

interface iToggleSwitch  {
  isOn: boolean;
  handleToggle: () => void;
  label: string;
}

const ToggleSwitch = ({ isOn, handleToggle, label }: iToggleSwitch) => {
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

interface iSignalStrengthIcon {
  strength: number;
}

const SignalStrengthIcon = ({ strength }: iSignalStrengthIcon) => {

  const getBars = (s: number) => {
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

interface iNetwork {
  ssid: string;
  strength: number;
  security: string;
  isHidden: boolean;
  isConnected?: boolean;
}

export default function Wifi() {

  const clearActiveComponent = useStore((state: any) => state.clearActiveComponent); // Added type for state

  const [wifiEnabled, setWifiEnabled] = useState<boolean>(true);
  const [availableNetworks, setAvailableNetworks] = useState<iNetwork[]>([]);
  const [connectedNetwork, setConnectedNetwork] = useState<string | null>(null);
  const [isConnecting, setIsConnecting] = useState<boolean>(false);
  const [showPasswordInput, setShowPasswordInput] = useState<boolean>(false);
  const [password, setPassword] = useState<string>("");
  const [selectedNetworkToConnect, setSelectedNetworkToConnect] = useState<iNetwork | null>(null);

  const simulateNetworks = (): iNetwork[] => { 
    return [
      { ssid: "Home_Fiber_5G", strength: 90, security: "WPA2", isHidden: false },
      { ssid: "Guest_Network", strength: 65, security: "Open", isHidden: false },
      { ssid: "CoffeeShop_WiFi", strength: 40, security: "Open", isHidden: false },
      { ssid: "Secure_Office", strength: 85, security: "WPA2-Enterprise", isHidden: false },
      { ssid: "Public_Hotspot", strength: 30, security: "Open", isHidden: false },
      { ssid: "My_Hidden_AP", strength: 70, security: "WPA2", isHidden: true },
    ].sort((a, b) => b.strength - a.strength); 
  };

  useEffect(() => {
    if (wifiEnabled) {
      setAvailableNetworks(simulateNetworks());
    } else {
      setAvailableNetworks([]);
      setConnectedNetwork(null);
    }
  }, [wifiEnabled, connectedNetwork, availableNetworks.length]); 

  const handleToggleWifi = () => {
    setWifiEnabled((prev) => !prev);

    if (wifiEnabled) {
      setConnectedNetwork(null);
      setIsConnecting(false);
    }
  };

  const handleConnect = (network: iNetwork) => { 
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
        // Replaced alert with a console log or a custom modal for better UX in an iframe
        console.error("Incorrect password!");
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

      setAvailableNetworks((prevNetworks) =>
        prevNetworks.map((n) =>
          n.ssid === network.ssid
            ? { ...n, isConnected: true }
            : { ...n, isConnected: false }
        )
      );
    }, 800); //connection delay
  };

  const handleDisconnect = () => {
    setIsConnecting(false);
    setConnectedNetwork(null);
    setAvailableNetworks((prevNetworks) =>
        prevNetworks.map((n) => ({ ...n, isConnected: false }))
    );
  };


  return (
    <>
    <div className="w-80 absolute bottom-0 right-8 bg-gray-800 rounded-lg shadow-xl text-white overflow-hidden font-sans">
      {/* Header */}
      <div className="bg-gray-700 px-4 py-3 flex justify-between items-center border-b border-gray-600">
        <h3 className="text-lg font-semibold">Wi-Fi</h3>
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
                  <SignalStrengthIcon strength={90} /> 
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
                        <span className="text-gray-400 text-xs ml-1 flex items-center">
                          <img src="/padlock.png" className="w-4 object-contain" alt="" />
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
