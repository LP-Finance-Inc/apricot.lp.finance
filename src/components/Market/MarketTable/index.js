import React from "react";
import MarketTableWrapper from "./MarketTable.style";
import { AssetsHeaderList } from "../../../assets/api/Home";
import Loader from "../../Loader";
import { numFormatter, calc } from "../../../helper";

const MarketTable = ({ progress, AssetsMarketList }) => {
  return (
    <MarketTableWrapper>
      <div className="container assets mt-lg-3 mt-md-3 mt-2 pt-lg-5 pt-md-5 pt-3 pb-5">
        <div className="assets_card">
          <div className="row pl-lg-2 pr-lg-2">
            <div className="col-12">
              <div className="title">
                <span>Markets</span>
              </div>
            </div>
          </div>

          <div className="row pl-lg-2 pr-lg-2 mt-3 assets_table">
            <div className="col-12">
              <div className="Table_card table-responsive-sm">
                {progress ? (
                  <Loader />
                ) : (
                  <table className="table mt-4">
                    <thead>
                      <tr>
                        {AssetsHeaderList.map((list) => {
                          return (
                            <th scope="col" key={list.id}>
                              {list.name}
                            </th>
                          );
                        })}
                      </tr>
                    </thead>
                    <tbody>
                      {AssetsMarketList &&
                        AssetsMarketList.map((list) => {
                          return (
                            <tr key={list.id}>
                              <td>
                                <div className="d-flex align-items-center table_list">
                                  <img src={list.img} alt="Loading..." />
                                  <div className="token_name pl-3">
                                    <p>{list.AssetsName}</p>
                                  </div>
                                </div>
                              </td>
                              <td>
                                <div className="table_list">
                                  <p>{numFormatter(list.MarketDeposited)}</p>
                                </div>
                              </td>
                              <td>
                                <div className="table_list">
                                  <p>{numFormatter(list.MarketBorrowed)}</p>
                                </div>
                              </td>
                              <td>
                                <div className="table_list">
                                  <p>{calc(list.DepositAPR)}%</p>
                                </div>
                              </td>
                              {/* <td>
                                <div className="table_list">
                                  <p>{calc(list.BorrowedAPR)}%</p>
                                </div>
                              </td> */}
                            </tr>
                          );
                        })}
                    </tbody>
                  </table>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </MarketTableWrapper>
  );
};

export default MarketTable;
