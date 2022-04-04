import { getAssetsMarketInfo } from "../../../utils/getAssetsMarketInfo";

export const getAssetsPoolMarketFun = () => {
  return async (dispatch) => {
    dispatch({
      type: "SET_ASSETS_MARKET_LIST_PROGRESS",
    });

    const TokenObj = await getAssetsMarketInfo();

    dispatch({
      type: "SET_ASSETS_MARKET_LIST",
      payload: TokenObj,
    });
  };
};

//Token price list function
export const getTokenPriceListFun = (TokenPriceList) => {
  return async (dispatch) => {
    const {
      BTCTokenPrice,
      ETHTokenPrice,
      SOLTokenPrice,
      SRMTokenPrice,
      USDCTokenPrice,
      USDTTokenPrice,
      MSOLTokenPrice,
      USTTokenPrice,
      STSOLTokenPrice,
      SCNSOLTokenPrice,
    } = TokenPriceList;

    const TokenPriceArray = [
      {
        id: new Date(),
        name: "SOL",
        TokenPrice: SOLTokenPrice,
      },
      {
        id: new Date(),
        name: "tmSOL",
        TokenPrice: MSOLTokenPrice,
      },
      {
        id: new Date(),
        name: "stSOL",
        TokenPrice: STSOLTokenPrice,
      },
      {
        id: new Date(),
        name: "scnSOL",
        TokenPrice: SCNSOLTokenPrice,
      },
      {
        id: new Date(),
        name: "tBTC",
        TokenPrice: BTCTokenPrice,
      },
      {
        id: new Date(),
        name: "ETH",
        TokenPrice: ETHTokenPrice,
      },
      {
        id: new Date(),
        name: "SRM",
        TokenPrice: SRMTokenPrice,
      },
      {
        id: new Date(),
        name: "USDT",
        TokenPrice: USDTTokenPrice,
      },
      {
        id: new Date(),
        name: "USDC",
        TokenPrice: USDCTokenPrice,
      },
      {
        id: new Date(),
        name: "UST",
        TokenPrice: USTTokenPrice,
      },
    ];

    dispatch({
      type: "GET_TOKEN_PRICE_LIST",
      payload: {
        TokenPriceArr: TokenPriceArray,
        TokenPriceList: TokenPriceList,
      },
    });
  };
};
