import React, { useState, useContext, useEffect } from "react";

const SidebarContext = React.createContext()

export const SidebarProvider = ({ children }) => {

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [height, setHeight] = React.useState(0);


  const openSidebar = () => {
    //dispatch({ type: SIDEBAR_OPEN })
    setIsSidebarOpen(true);
  }
  const closeSidebar = () => {
    //dispatch({ type: SIDEBAR_CLOSE })
    setIsSidebarOpen(false);
  }
  React.useEffect(() => {
        window.addEventListener("scroll", () => {
           setHeight(window.pageYOffset);
        });
        return () => window.removeEventListener("scroll", () => {});
    });


  return (
    <SidebarContext.Provider
      value={{
        // ...state,
        isSidebarOpen,
        openSidebar,
        closeSidebar,
        height,
      }}
    >
      {children}
    </SidebarContext.Provider>
  )
}
// make sure use
export const useSidebarContext = () => {
  return useContext(SidebarContext)
}