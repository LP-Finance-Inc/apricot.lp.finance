import { useSelector } from "react-redux";

const point = "/images/tokens";

export const TableTokenList = [
  {
    id: 1,
    img: point + "/SOL.png",
    AssetsName: "SOL",
  },
  {
    id: 2,
    img: point + "/mSOL.png",
    AssetsName: "mSOL",
  },
  {
    id: 3,
    img: point + "/stSOL.png",
    AssetsName: "stSOL",
  },
  {
    id: 4,
    img: point + "/scnSOL.png",
    AssetsName: "scnSOL",
  },
  {
    id: 5,
    img: point + "/BTC.png",
    AssetsName: "BTC",
  },
  {
    id: 6,
    img: point + "/ETH.png",
    AssetsName: "ETH",
  },
  {
    id: 7,
    img: point + "/SRM.png",
    AssetsName: "SRM",
  },
  {
    id: 8,
    img: point + "/USDT.png",
    AssetsName: "USDT",
  },
  {
    id: 9,
    img: point + "/USDC.png",
    AssetsName: "USDC",
  },
  {
    id: 10,
    img: point + "/UST.png",
    AssetsName: "UST",
  },
];

export const AssetsHeaderList = [
  {
    id: 1,
    name: "Asset name",
  },
  {
    id: 2,
    name: "LTV",
  },
  {
    id: 3,
    name: "Total supply",
  },
  {
    id: 4,
    name: "Supply APY",
  },
  {
    id: 5,
    name: "Total borrow",
  },
];

export const TableTokenListApi = () => {
  const PoolAssetsState = useSelector((state) => state.PoolAssetsReducer);

  const { PoolAssetsList } = PoolAssetsState;

  console.log(PoolAssetsList);
  console.log(PoolAssetsList.length);

  var PoolAssetsListApi = [];

  for (var i = 0; i < PoolAssetsList.length; i++) {
    for (var j = 0; j < TableTokenList.length; j++) {
      if (PoolAssetsList[i].AssetName === TableTokenList[j].AssetsName) {
        PoolAssetsListApi.push({
          ...TableTokenList[j],
          LTV: PoolAssetsList[i].LTV,
          TotalSupply: PoolAssetsList[i].TotalSupply,
          SupplyAPY: PoolAssetsList[i].SupplyAPY,
          TotalBorrowed: PoolAssetsList[i].TotalBorrowed,
        });
      }
    }
  }
  return PoolAssetsListApi;
};
