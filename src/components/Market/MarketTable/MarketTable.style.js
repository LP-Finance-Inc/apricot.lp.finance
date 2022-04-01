import styled from "styled-components";

const MarketTableWrapper = styled.div`
  .assets {
    .title {
      span {
        color: ${(props) => props.theme.body.BodyPrimary};
        font-size: 16px;
        font-weight: 500;
        line-height: 1.5715;
      }
    }

    .assets_table {
      .Table_card {
        border-top: 1px solid ${(props) => props.theme.body.BodyLine};

        .table td,
        .table th {
          border-top: 0px solid #dee2e6;
        }

        table {
          width: 100%;

          thead {
            tr {
              th {
                border-bottom: 0px solid white;
                vertical-align: middle !important;
                color: ${(props) => props.theme.body.BodySecondary};
                font-size: 13px;
                font-weight: 400;
                line-height: 16px;
              }
            }
          }

          tbody {
            tr {
              cursor: pointer;
              height: 4.5rem;
              vertical-align: middle;
              transition: all 200ms;

              td {
                vertical-align: middle !important;
                font-size: 0.98rem;

                .table_list {
                  img {
                    height: auto;
                    width: 1.8rem;
                  }

                  p {
                    color: ${(props) => props.theme.body.BodyPrimary};
                    font-size: 14px;
                    font-weight: 400;
                    line-height: 24px;
                  }

                  .token_name {
                    span {
                      color: ${(props) => props.theme.body.BodySecondary};
                      font-size: 12px;
                      font-weight: 500;
                      line-height: 16px;
                    }
                  }
                }
              }

              &:hover {
                background: ${(props) => props.theme.body.BodyNeutralAlt};
              }
            }
          }
        }
      }
    }
  }
`;

export default MarketTableWrapper;
