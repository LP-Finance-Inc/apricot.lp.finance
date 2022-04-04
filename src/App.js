import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";
import Market from "./components/Market";
import Layout from "./components/Layout";
import SnackbarProviderMessage from "./components/SnackbarProviderMessage";
import Snackbar from "./helper/Snackbar";
import {
  getAssetsPoolMarketFun,
  getTokenPriceListFun,
} from "./redux/actions/lp_function";
import { connection } from "./lib/constants/connection";
import { getTokensPriceList } from "./utils/getTokensPriceList";

const App = () => {
  const dispatch = useDispatch();
  const [TokenPriceList, setTokenPriceList] = useState();

  useEffect(() => {
    async function getTokenPrice() {
      try {
        const List = await getTokensPriceList(connection);

        const getTokensPriceListInfo = {
          BTCTokenPrice: List[0].Price ? List[0].Price : 0,
          ETHTokenPrice: List[1].Price ? List[1].Price : 0,
          SOLTokenPrice: List[2].Price ? List[2].Price : 0,
          SRMTokenPrice: List[3].Price ? List[3].Price : 0,
          USDCTokenPrice: List[4].Price ? List[4].Price : 0,
          USDTTokenPrice: List[5].Price ? List[5].Price : 0,
          MSOLTokenPrice: List[6].Price ? List[6].Price : 0,
          USTTokenPrice: List[7].Price ? List[7].Price : 0,
          STSOLTokenPrice: List[8].Price ? List[8].Price : 0,
          SCNSOLTokenPrice: 0,
        };

        setTokenPriceList(getTokensPriceListInfo);
      } catch (error) {}
    }

    getTokenPrice();

    return () => {
      setTokenPriceList();
    };
  }, []);
  useEffect(() => {
    if (TokenPriceList) {
      dispatch(getTokenPriceListFun(TokenPriceList));
    }

    return () => {
      setTokenPriceList();
    };
  }, [TokenPriceList]);

  useEffect(() => {
    dispatch(getAssetsPoolMarketFun());
  }, []);

  return (
    <>
      <SnackbarProviderMessage>
        <Snackbar />
        <Layout>
          <Routes>
            <Route path="/" element={<Market />} />
          </Routes>
        </Layout>
      </SnackbarProviderMessage>
    </>
  );
};

export default App;
