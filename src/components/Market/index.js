import React from "react";
import { useSelector } from "react-redux";
import MarketOverview from "./MarketOverview";
import MarketTable from "./MarketTable";

const Market = () => {
  const PoolAssetsReducer = useSelector((state) => state.PoolAssetsReducer);

  return (
    <>
      <MarketOverview />
      <MarketTable {...PoolAssetsReducer} />
    </>
  );
};

export default Market;
