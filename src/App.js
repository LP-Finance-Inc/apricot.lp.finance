import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";
import Market from "./components/Market";
import Layout from "./components/Layout";
import SnackbarProviderMessage from "./components/SnackbarProviderMessage";
import Snackbar from "./helper/Snackbar";
import { getPoolAssetsInfoFun } from "./redux/actions/lp_function";

const App = () => {
  const dispatch = useDispatch();

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
