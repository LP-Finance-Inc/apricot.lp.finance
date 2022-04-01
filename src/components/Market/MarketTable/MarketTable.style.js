import styled from "styled-components";

const MarketTableWrapper = styled.div`
  .assets {
    .assets_card {
      border: 1px solid ${(props) => props.theme.body.BodyMainLine};
      border-radius: 5px;
      backdrop: filer(20px);
      background-color: rgba(31, 24, 37, 0.5);
      padding: 40px 30px 16px;

      .title {
        span {
          font-weight: 700;
          background: linear-gradient(
            66.62deg,
            #c65cff -11.4%,
            #ba6bff -0.23%,
            #9991ff 21.09%,
            #6cf 49.22%,
            #42f0db 89.89%,
            #3fc 113.21%
          );
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          font-size: 20px;
          font-weight: 700;
          line-height: 1.5715;
        }
      }

      .assets_table {
        .Table_card {
          .table td,
          .table th {
            border-top: 0px solid #dee2e6;
          }

          table {
            width: 100%;

            thead {
              tr {
                th {
                  border-bottom: 1px solid
                    ${(props) => props.theme.body.BodyPrimaryLine};
                  vertical-align: middle !important;
                  color: ${(props) => props.theme.body.BodySecondary};
                  font-size: 13px;
                  font-weight: 400;
                  line-height: 16px;
                  padding-bottom: 30px;
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
                      font-size: 15px;
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
                  background: rgba(31, 24, 37, 0.8);
                }
              }
            }
          }
        }
      }
    }
  }
`;

export default MarketTableWrapper;
