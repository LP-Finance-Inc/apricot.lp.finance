import styled from "styled-components";

const MarketOverviewWrapper = styled.div`
  .MarketOverview {
    .MarketOverview_card {
      .MarketOverview_card_left,
      .MarketOverview_card_right {
        .title {
          span {
            font-style: normal;
            font-weight: 500;
            font-size: 16px;
            line-height: 19px;
            color: #fff;
            text-align: center;
            white-space: nowrap;
          }
        }
      }
    }

    .MarketOverview_details {
      border-top: 1px solid ${(props) => props.theme.body.BodyLine};

      .MarketOverview_card {
        padding: 1rem 1rem;
        display: flex;
        align-items: center;
        flex-direction: column;

        span {
          color: ${(props) => props.theme.body.BodySecondary};
          font-size: 12px;
          font-weight: 400;
          line-height: 16px;
        }
        p {
          font-size: 14px;
          font-weight: 400;
          line-height: 24px;
          color: ${(props) => props.theme.body.BodyPrimary};
        }
      }
    }
  }

  @media only screen and (max-width: 769px) {
    .MarketOverview {
      .MarketOverview_details {
        border-top: none;
        .MarketOverview_card {
          border: 1px solid ${(props) => props.theme.body.BodyLine};
        }
      }
    }
  }
`;

export default MarketOverviewWrapper;
