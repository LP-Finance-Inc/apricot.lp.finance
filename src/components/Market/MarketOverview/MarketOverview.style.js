import styled from "styled-components";

const MarketOverviewWrapper = styled.div`
  .MarketOverview {
    .MarketOverview_card {
      background: hsla(0, 0%, 100%, 0.05);
      height: 100%;
      padding: 0.8rem 2rem;
      border-radius: 5px;

      .MarketOverview_card_left {
        border-right: 1px solid hsla(0, 0%, 100%, 0.1);
      }

      .MarketOverview_card_left,
      .MarketOverview_card_right {
        .title {
          span {
            font-style: normal;
            font-weight: 500;
            font-size: 16px;
            line-height: 19px;
            color: ${(props) => props.theme.body.BodyPrimary};
            text-align: center;
            white-space: nowrap;
          }
        }

        .value {
          p {
            font-style: normal;
            font-weight: 700;
            font-size: 18px;
            line-height: 25px;
            letter-spacing: 0.02em;
            color: ${(props) => props.theme.body.BodyPrimary};
            text-align: left;
          }
        }
      }
    }
  }

  @media only screen and (max-width: 765px) {
    .MarketOverview {
      .MarketOverview_card {
        .MarketOverview_card_left {
          border-right: 0px solid hsla(0, 0%, 100%, 0.1);
        }
      }
    }
  }
`;

export default MarketOverviewWrapper;
