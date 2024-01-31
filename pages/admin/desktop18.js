import CashierMachineIcon from "components/admin-spms/cashiermachine-icon";
import ContentActivity from "components/admin-spms/contentactivity.component";
import Header from "components/admin-spms/header.component";
import LeftSideBar from "components/admin-spms/leftsidebar.component";
import AdminSpmsMainLayout from "layouts/admin-spms/main.layout";

import React, { useState } from "react";
import { groupBy } from "lodash";
const TransactionInfo = ({ transaction }) => {
  const typeClass =
    transaction.type === "credit" ? "credit-class" : "debit-class";
  return (
    <div className={`transaction-info-wrapper ${typeClass}`}>
      <div className="icon"> {transaction.icon}</div>
      <div className="group">
        <div className="person ">
          <h1>{transaction.name}</h1>

          <span className={typeClass}>{transaction.amount1}</span>
        </div>
        <div className={`add-balance`}>
          <p>{transaction.balance} </p>
          <h2>{transaction.amount2}</h2>
        </div>
      </div>
    </div>
  );
};

function Desktop18({ children }) {
  const [showSidebar, setShowSidebar] = useState(true);

  const transactionList = [
    {
      icon: <CashierMachineIcon />,
      name: "Bursar 1",
      amount1: "21,000,000 Tshs",
      balance: "Added balance",
      type: "credit",
      amount2: "39,000 Tshs",
      date: "Yesterday",
    },
    {
      icon: <CashierMachineIcon />,
      name: "Shopper 3 ",
      amount1: "32,000,000 Tshs",
      balance: "Added balance",
      type: "credit",
      amount2: "3,000 Tshs",
      date: "Yesterday",
    },

    {
      icon: <CashierMachineIcon />,
      name: "Bursar 3",
      amount1: "20,000,000 Tshs",
      balance: "Withdraw balance",
      type: "debit",
      amount2: "39,000 Tshs",
      date: "23 March 21",
    },
    {
      icon: <CashierMachineIcon />,
      name: "Shopper 1  ",
      amount1: "20,000,000 Tshs",
      balance: "Added balance",
      type: "credit",
      amount2: "39,000 Tshs",
      date: "23 March 21",
    },
    {
      icon: <CashierMachineIcon />,
      name: "Bursar 2  ",
      amount1: "20,000,000 Tshs",
      balance: "Withdraw balance",
      type: "debit",
      amount2: "39,000 Tshs",
      date: "23 March 21",
    },
    {
      icon: <CashierMachineIcon />,
      name: "Bursar 4  ",
      amount1: "20,000,000 Tshs",
      balance: "Withdraw balance",
      type: "debit",
      amount2: "39,000 Tshs",
      date: "23 March 21",
    },
    {
      icon: <CashierMachineIcon />,
      name: "Bursar 1  ",
      amount1: "20,000,000 Tshs",
      balance: "Added balance",
      type: "credit",
      amount2: "39,000 Tshs",
      date: "23 March 21",
    },
    {
      icon: <CashierMachineIcon />,
      name: "Bursar 2  ",
      amount1: "20,000,000 Tshs",
      balance: "Withdraw balance",
      type: "debit",
      amount2: "39,000 Tshs",
      date: "22 March 21",
    },
  ];

  const txGroup = groupBy(transactionList, "date");
  return (
    <AdminSpmsMainLayout>
      {/* <ContentActivity /> */}
      <div className="middle-content">
        <div className="left-content">
          <div className="activiy-list">
            <div className="notification-title">All Activity</div>
            {Object.keys(txGroup).map((txKey, index) => {
              return (
                <div className=" tx-group-by-date">
                  <span>{txKey}</span>
                  {txGroup[txKey].map((t, index) => {
                    return (
                      <TransactionInfo
                        transaction={t}
                        key={`ti-${index.toString()}`}
                      />
                    );
                  })}
                </div>
                // <transactionInfo transaction={t} key={`ti-${index.toString()}`} />
              );
            })}
          </div>
        </div>
        <div className="right-content">
          <div className="report-chart">
            <div className="text">
              <p>Total Income</p>
              <p>Total Outcome</p>
              <p>Total Save</p>
            </div>
            <div className="numbers">
              <span>34,000,000</span>
              <span>30,000,000 Tshs</span>
              <span>4,000,000 Tshs</span>
            </div>
          </div>

          <div className="balance-sheet-wrapper">
            <div className="balance-sheet">
              <div className="balance">Balance</div>
              <div className="debit-text">
                <p>Debit</p>
                <span>23,983,900 TZS</span>
              </div>
              <div className="credit-text">
                <p>Credit</p>
                <span>43,900 TZS</span>
              </div>
              <div className="view-account">
                <a href="#">View All Account</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AdminSpmsMainLayout>
  );
}

export default Desktop18;

// import React from "react";

// import LeftSide from "components/admin-spms/leftside.component";

// import HeaderBar from "components/admin-spms/header.component";
// import ContentActivity from "components/admin-spms/contentactivity.component";
// function Desktop18() {
//   return (
//     <div className="admin-wrapper">
//       <HeaderBar/>
//       <div className="admin">
//         <LeftSide/>
//         {/* <ContentActivity/> */}
//       </div>
//     </div>
//   );
// }

// export default Desktop18;
