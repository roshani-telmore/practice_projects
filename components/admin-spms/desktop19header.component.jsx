import React from "react";
import ForwordIcon from "./forword-icon";
import SearchIcon from "./searchicon";
import Wallet from "./wallet";

function Desktop19Header() {
//   const [showSidebar, setShowSidebar] = useState(true);
  return (
    <div className="header-wrapper">
      <div className="side-bar-btn">
        <button
          className="shop-account-box"
          onClick={() => setShowSidebar(!showSidebar)}
        >
          <Wallet />

          <div className="shop-account">Shop Account</div>

          <ForwordIcon />
        </button>
      </div>
      <div className="heading-section">
        <div className="text">
          <div className="text-1">Get started with Spms, Shop 1 </div>
          <div className="text-2">Here's your report overview by today. </div>
        </div>
        <div className="search">
          <form>
            <div className="search-icon">
              <SearchIcon />
              <input type="text" id="text" name="text" placeholder="Search" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Desktop19Header;
