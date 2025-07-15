import React from "react";

import Settings from "./Settings/Settings";
import Spotify from "./Spotify";
import Chrome from "./Chrome";
import WindowsTab from "./WindowsTab";
import FileExplorer from "./FileExplorer";
import Search from "./Search";
import useStore from "../store/feature";
import Wifi from "./Wifi";
import Volume from "./Volume";
import Battery from "./Battery";

const ActiveComponentRenderer: React.FC = () => {
  const activeComponent = useStore((state)=>state.activeComponent
)

  const renderComponent = () => {
    switch (activeComponent) {
      case "WindowsTab":
        return <WindowsTab />;
      case "Search":
        return <Search />;
      case "FileExplorer":
        return <FileExplorer />;
      case "Chrome":
        return <Chrome />;
      case "Settings":
        return <Settings />;
      case "Spotify":
        return <Spotify />;
      case "Wifi":
        return <Wifi />;
      case "Volume":
        return <Volume />;
      case "Battery":
        return <Battery />;
    }
  };

  return <>{renderComponent()}</>;
};

export default ActiveComponentRenderer;
