import React from "react";
import { useSelector } from "react-redux";

import Settings from "./Settings/Settings";
import Spotify from "./Spotify";
import Store from "./Store";
import WindowsTab from "./WindowsTab";
import FileExplorer from "./FileExplorer";
import Search from "./Search";

const ActiveComponentRenderer: React.FC = () => {
  const activeComponent = useSelector((state) => state.feature.activeComponent);

  const renderComponent = () => {
    switch (activeComponent) {
      case "WindowsTab":
        return <WindowsTab />;
      case "Search":
        return <Search />;
      case "FileExplorer":
        return <FileExplorer />;
      case "Store":
        return <Store />;
      case "Settings":
        return <Settings />;
      case "Spotify":
        return <Spotify />;
    }
  };

  return <>{renderComponent()}</>;
};

export default ActiveComponentRenderer;
