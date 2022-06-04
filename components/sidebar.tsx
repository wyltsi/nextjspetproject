import * as React from "react";

const sidebarVisibleStyle: any = {
  width: "100vw",
  height: "100vh",
  position: "fixed",
  top: 0,
  left: 0,
  transition: "transform .1s ease-out",
  zIndex: 1000,
  transform: "translate3d(0vw, 0, 0)",
};

const sidebarHiddenStyle: any = {
  width: "100vw",
  height: "100vh",
  position: "fixed",
  top: 0,
  left: 0,
  transition: "transform .3s ease-out",
  zIndex: 1000,
  transform: "translate3d(-100vw, 0, 0)",
};

const sidebarContentStyle: any = {
  backgroundColor: "#FFE600",
  maxWidth: "400px",
  height: "100%",
};

function Sidebar({ hideSidebar, sidebarVisible }: any) {
  return (
    <div
      style={sidebarVisible ? sidebarVisibleStyle : sidebarHiddenStyle}
      onMouseDown={hideSidebar}
    >
      <div className="sidebar-content" style={sidebarContentStyle}>
        SIDEBAR HERE WOOOOT
      </div>
    </div>
  );
}

export default Sidebar;
