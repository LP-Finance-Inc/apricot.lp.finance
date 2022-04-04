import React from "react";
import { useSelector } from "react-redux";
import MarketOverview from "./MarketOverview";
import MarketTable from "./MarketTable";

const Market = () => {
  const getAssetsMarketReducer = useSelector(
    (state) => state.getAssetsMarketReducer
  );

  return (
    <>
      <MarketOverview />
      <MarketTable {...getAssetsMarketReducer} />
    </>
  );
};

export default Market;
