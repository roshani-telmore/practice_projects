import React from "react";
import CashierMachineIcon from "./cashiermachine-icon";
import DotIcon from "./dot-icon";
import GraphIcon from "./graph-icon";
import HouseIcon from "./house-icon";

function ContentActivity() {
  return (
    <div className="content-activity-wrapper d-none">
      <div className="content-activity-leftside">
        <div className="all-activity">
          <span>All Activity</span>

          <div className="day"> Yesterday</div>

          <div className="group">
            <div className="group-1">
              <CashierMachineIcon />
              <div className="inside-gr-1">
                <div className="bursar">
                  <span>Bursar 1</span>
                  <div>20,000,000 Tshs </div>
                </div>
                <div className="added-balance">
                  <p>Added balance</p>
                  <p>39,000 Tshs </p>
                </div>
              </div>
            </div>

            <div className="group-2">
              <HouseIcon />
              <div className="inside-gr-1">
                <div className="bursar">
                  <span>Shopper 3</span>
                  <div>32,000,000 Tshs </div>
                </div>
                <div className="added-balance">
                  <p>Added balance</p>
                  <p>3,000 Tshs </p>
                </div>
              </div>
            </div>
          </div>

          <div className="day"> 23 March 21</div>

          <div className="days">22 March 21</div>
        </div>
      </div>


      <div className="content-activity-rightside">
        <div className="analytic-reports-wrapper ">
          <div className="analytic-report">
            <div className="report">Analytic Reports</div>
            <GraphIcon />
            <div className="total">
              <div className="total-income">
                <div>Total Income</div>
                <div>Total Outcome </div>
                <div>Total Save </div>
              </div>
              <div className="amount">
                <div>34,000,000 Tshs</div>
                <div className="amount-black">30,000,000 Tshs</div>
                <div>4,000,000 Tshs</div>
              </div>
            </div>
          </div>
        </div>
        <div className="balance-sheet-wrapper">
          <div className="balance-sheet">
            <div className="balance">Balance</div>
            <div className="debit">
              <div className="debit-text">Debit</div>
              <div className="debit-num">23,983,900 TZS</div>
            </div>
            <div className="credit">
              <div className="credit-text">Credit</div>
              <div className="credit-num">43,900 TZS</div>
            </div>
            <div className="view-account"> View All Account </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContentActivity;
