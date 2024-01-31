import Header from "components/admin-spms/header.component";
import LeftSideBar from "components/admin-spms/leftsidebar.component";
import LeftSide from "components/admin-spms/leftsidebar.component";
import React, { useState } from "react";

function AdminSpmsMainLayout({ children }) {
  const [showSidebar, setShowSidebar] = useState(true);

  return (
    <div className="admin-page-wrapper">
      <div className="admin-page">
        <Header showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
        <div className="section-start">
          {showSidebar && (
            <div className="sidebar">
              <div className="sidebar-inner">
                <LeftSideBar />
              </div>
            </div>
          )}

          <div className="main-content">{children}</div>
        </div>
      </div>
    </div>
  );
}

export default AdminSpmsMainLayout;
