import React, { useState } from "react";
import MarketOverviewWrapper from "./MarketOverview.style";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { CalcTwoDigit } from "../../../helper";

const MarketOverview = () => {
  const [TotalDeposited, setTotalDeposited] = useState(0);
  const [TotalBorrowed, setTotalBorrowed] = useState(0);

  const getTokenPriceState = useSelector(
    (state) => state.getTokenPriceReducer.TokenPriceArr
  );
  const getAssetsMarketState = useSelector(
    (state) => state.getAssetsMarketReducer.AssetsMarketList
  );

  useEffect(() => {
    if (getAssetsMarketState && getTokenPriceState) {
      let TotalDepositedCal = 0;
      let TotalBorrowedCal = 0;

      for (var i = 0; i < getAssetsMarketState.length; i++) {
        for (var j = 0; j < getTokenPriceState.length; j++) {
          if (
            getAssetsMarketState[i].AssetsName === getTokenPriceState[j].name
          ) {
            TotalDepositedCal =
              TotalDepositedCal +
              getAssetsMarketState[i].MarketDeposited *
                getTokenPriceState[j].TokenPrice;

            TotalBorrowedCal =
              TotalBorrowedCal +
              getAssetsMarketState[i].MarketBorrowed *
                getTokenPriceState[j].TokenPrice;
          }
        }
      }
      setTotalDeposited(TotalDepositedCal);
      setTotalBorrowed(TotalBorrowedCal);
    }
  }, [getTokenPriceState, getAssetsMarketState]);

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
                    <p>$ {CalcTwoDigit(TotalDeposited)} </p>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-12 MarketOverview_card_right d-flex align-items-center flex-column mt-lg-0 mt-md-0 mt-3">
                  <div className="title">
                    <span>Total Market Borrowed</span>
                  </div>
                  <div className="value">
                    <p>$ {CalcTwoDigit(TotalBorrowed)}</p>
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
