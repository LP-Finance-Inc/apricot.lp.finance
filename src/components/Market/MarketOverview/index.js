import React from "react";
import MarketOverviewWrapper from "./MarketOverview.style";

const MarketOverview = () => {
  return (
    <MarketOverviewWrapper>
      <div className="container MarketOverview mt-2 pt-1">
        <div className="row">
          <div className="col-lg-6 col-md-10 col-12 mt-2">
            <div className="MarketOverview_card">
              <div className="row">
                <div className="col-lg-6 col-md-6 col-12 MarketOverview_card_left d-flex align-items-center flex-column">
                  <div className="title">
                    <span>Total Market Deposited</span>
                  </div>
                  <div className="value">
                    <p>$149,398,312.15</p>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-12 MarketOverview_card_right d-flex align-items-center flex-column mt-lg-0 mt-md-0 mt-3">
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
