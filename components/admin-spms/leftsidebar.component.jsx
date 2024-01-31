import Profile from "pages/admin/profil";
import React from "react";
import ActivityIcon from "./activity-icon";
import CIcon from "./c-icon";
import ForwordIcon from "./forword-icon";
import Home from "./home-icon";
import TimeCircleIcon from "./timecircle-icon";
import Wallet from "./wallet";

// function LeftSide() {
//   return (
//     <div className="left-side-wrapper">
//       <div className="left-side">
//         <div className="school-account">
//           <div className="s-a-account">
//             <Wallet />
//             <span>School Account</span>
//             <ForwordIcon />
//           </div>

//           <div className="home">
//             <Home />
//             <p>Home</p>
//           </div>

//           <div className="activity">
//             <ActivityIcon />
//             <p>Activity</p>
//           </div>

//           <div className="accounts">
//             <Profile />
//             <p>Accounts</p>
//           </div>
//           <div className="history">
//             <TimeCircleIcon />
//             <p>History</p>
//           </div>
//         </div>

//         <div className="leftside-footer">
//           <div className="c-footer">
//             <CIcon />
//             <span>Spms. 2022 </span>
//           </div>
//           <p>
//             Digital management software <br />
//             designed for Schools
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }
// export default LeftSide;

const MeunItem = ({ icon, name, active = false }) => {
  const menuItemClassName = active ? "menu-item active" : "menu-item";
  return (
    <div className={menuItemClassName}>
      {icon} <div className="label">{name}</div>
    </div>
  );
};

function LeftSideBar() {
  const menuItems = [
    {
      name: "Home",
      icon: <Home />,
      active: true,
    },
    {
      name: "Activity",
      icon: <ActivityIcon />,
      active: false,
    },
    {
      name: "Accounts",
      icon: <Profile />,
      active: false,
    },
    {
      name: "History",
      icon: <TimeCircleIcon />,
      active: false,
    },
  ];
  return (
    <div className="sidebar-menu">
      <>
        {menuItems.map((item, index) => {
          if (index === 1) {
            return (
              <React.Fragment key={index.toString()}>
                <MeunItem
                  name={item.name}
                  icon={item.icon}
                  active={item.active}
                />
                <div className="menu-divider" />
              </React.Fragment>
            );
          }
          return (
            <MeunItem
              name={item.name}
              icon={item.icon}
              active={item.active}
              key={index.toString()}
            />
          );
        })}
      </>

      <div className="footer-text">
        <div className="copyright-text">
          <CIcon />
          <div className="spmstext">Spms. 2022</div>
        </div>
        <div className="digitalmang">
          Digital management software <br />
          designed for Schools
        </div>
      </div>
    </div>
  );
}

export default LeftSideBar;
