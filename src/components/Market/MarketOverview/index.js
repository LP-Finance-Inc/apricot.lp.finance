import React from "react";
import MarketOverviewWrapper from "./MarketOverview.style";

const MarketOverview = () => {
  return (
    <MarketOverviewWrapper>
      <div className="container MarketOverview mt-4 pt-1">
        <div className="row pl-lg-2 pr-lg-2">
          <div className="col-12 mt-3">
            <div className="MarketOverview_card">
              <div className="row">
                <div className="col-6 MarketOverview_card_left d-flex align-items-center">
                  <div className="title">
                    <span>Total Market Deposited</span>
                  </div>
                  <div className="value">
                    <p>$149,398,312.15</p>
                  </div>
                </div>
                <div className="col-6 MarketOverview_card_right d-flex align-items-center">
                  <div className="title">
                    <span>Total Market Borrowed</span>
                  </div>
                  <div className="value">
                    <p>$149,398,312.15</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MarketOverviewWrapper>
  );
};

export default MarketOverview;
