const initialState = {
  TokenPriceArr: [],
  TokenPriceList: {
    BTCTokenPrice: 0,
    ETHTokenPrice: 0,
    SOLTokenPrice: 0,
    SRMTokenPrice: 0,
    USDCTokenPrice: 0,
    USDTTokenPrice: 0,
    MSOLTokenPrice: 0,
    USTTokenPrice: 0,
    STSOLTokenPrice: 0,
    SCNSOLTokenPrice: 0,
  },
};

const getTokenPriceReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_TOKEN_PRICE_LIST":
      const { TokenPriceArr, TokenPriceList } = action.payload;
      return {
        ...state,
        TokenPriceArr: TokenPriceArr,
        TokenPriceList: TokenPriceList,
      };

    default:
      return state;
  }
};

export default getTokenPriceReducer;
