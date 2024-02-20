/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react";

const SidebarContext = createContext();

export const SidebarProvider = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [msgbarOpen, setMsgbarOpen] = useState(false);
  const [isQuestModalOpen, setIsQuestModalOpen] = useState(false);

  const openQuestModal = () => {
    setIsQuestModalOpen(true);
  };

  const closeQuestModal = () => {
    setIsQuestModalOpen(false);
  };

  return (
    <SidebarContext.Provider value={{ sidebarOpen, setSidebarOpen,msgbarOpen,setMsgbarOpen, isQuestModalOpen, openQuestModal, closeQuestModal }}>
      {children}
    </SidebarContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useSidebar = () => useContext(SidebarContext);
