import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";
import Market from "./components/Market";
import Layout from "./components/Layout";
import SnackbarProviderMessage from "./components/SnackbarProviderMessage";
import Snackbar from "./helper/Snackbar";
import { getPoolAssetsInfoFun } from "./redux/actions/lp_function";

import {
  TokenID,
  createAssetPoolLoader,
  getConnection,
  getPriceInfo,
  ActionWrapper,
  MINTS,
  normalizePool,
  Addresses,
  PUBLIC_CONFIG,
} from "@apricot-lend/sdk-ts";

const App = () => {
  const dispatch = useDispatch();

  const getInfo = async () => {
    // get shared connection object
    let connection = getConnection();

    // pool info
    let tokenId = TokenID.USDC;
    let assetPoolLoader = await createAssetPoolLoader(connection);
    console.log(await assetPoolLoader.getAssetPool(tokenId));
  };

  getInfo();
  useEffect(() => {
    dispatch(getPoolAssetsInfoFun());
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
