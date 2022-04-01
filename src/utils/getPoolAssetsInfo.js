import * as anchor from "@project-serum/anchor";
import { SolendMarket } from "@solendprotocol/solend-sdk";
import { NETWORK } from "../lib/constants/common";

const { Connection } = anchor.web3;

const getFullPercent = (percent_str) => {
  return parseFloat(percent_str) * 100;
};

const getParsedAmount = (amount_str) => {
  return new anchor.BN(amount_str)
    .div(new anchor.BN("1000000000000000000000000"))
    .toString();
};

export const getPoolAssetsInfo = async (Token) => {
  try {
    const connection = new Connection(NETWORK, "processed");

    const market = await SolendMarket.initialize(connection);

    await market.loadReserves();

    var usdcReserve = market.reserves.find(
      (res) => res.config.symbol === Token
    );

    const TokenPoolAssetsInfoObjet = {
      AssetName: usdcReserve.stats.symbol,
      LTV: getFullPercent(usdcReserve.stats.loanToValueRatio.toString()),
      TotalSupply: getParsedAmount(
        usdcReserve.stats.totalDepositsWads.toString()
      ),
      SupplyAPY: getFullPercent(usdcReserve.stats.supplyInterestAPY.toString()),
      TotalBorrowed: getParsedAmount(
        usdcReserve.stats.totalBorrowsWads.toString()
      ),
    };

    await market.loadRewards();

    return TokenPoolAssetsInfoObjet;
  } catch (err) {
    const TokenPoolAssetsInfoObjet = {
      AssetName: "",
      LTV: 0,
      TotalSupply: 0,
      SupplyAPY: 0,
      TotalBorrowed: 0,
    };

    return TokenPoolAssetsInfoObjet;
  }
};
