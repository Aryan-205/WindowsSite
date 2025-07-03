import React from "react";

import Settings from "./Settings/Settings";
import Spotify from "./Spotify";
import Store from "./Store";
import WindowsTab from "./WindowsTab";
import FileExplorer from "./FileExplorer";
import Search from "./Search";
import useStore from "../store/feature";

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
