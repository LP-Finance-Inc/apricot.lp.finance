import { getPoolAssetsInfo } from "../../../utils/getPoolAssetsInfo";
import { TableTokenList } from "../../../assets/api/Home";

export const getPoolAssetsInfoFun = () => {
  return async (dispatch) => {
    try {
      dispatch({
        type: "SEND_POOL_ASSETS_PROGRESS",
      });

      const CreatePoolAssetsList = [];

      for (var i = 0; i < TableTokenList.length; i++) {
        const PoolAssetsObj = await getPoolAssetsInfo(
          TableTokenList[i].AssetsName
        );
        CreatePoolAssetsList.push(PoolAssetsObj);
      }

      dispatch({
        type: "SEND_POOL_ASSETS_INFO",
        payload: CreatePoolAssetsList,
      });
    } catch (error) {
      dispatch({
        type: "SEND_POOL_ASSETS_ERROR",
      });
    }
  };
};
