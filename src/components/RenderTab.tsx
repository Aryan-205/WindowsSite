import React from "react";

import Settings from "./Settings";
import Spotify from "./Spotify";
import Me from "./Me";
import WindowsTab from "./WindowsTab";
import FileExplorer from "./FileExplorer";
import useStore from "../store/feature";
import Wifi from "./Wifi";
import Volume from "./Volume";

const ActiveComponentRenderer: React.FC = () => {
  const activeComponent = useStore((state) => state.activeComponent);

  const renderComponent = () => {
    switch (activeComponent) {
      case "WindowsTab":
        return <WindowsTab />;
      case "FileExplorer":
        return <FileExplorer />;
      case "Me":
        return <Me />;
      case "Settings":
        return <Settings />;
      case "Spotify":
        return <Spotify />;
      case "Wifi":
        return <Wifi />;
      case "Volume":
        return <Volume />;
    }
  };

  return <>{renderComponent()}</>;
};

export default ActiveComponentRenderer;
