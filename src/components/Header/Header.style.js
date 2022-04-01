import styled from "styled-components";

const HeaderWrapper = styled.div`
  .first_navbar {
    background: inherit !important;

    nav {
      padding: 15px 4px 15px 16px;
      justify-content: inherit !important;
      border-bottom: 1px solid ${(props) => props.theme.body.BodyMain};

      .navbar-brand {
        flex-grow: 0 !important;

        img {
          height: 56px;
          width: auto;
        }
      }

      .left_ui_block_hide {
        li {
          padding-right: 80px;
        }
      }
    }
  }

  .second_navbar {
    nav {
      padding: 18px 0px 0px 0px;
      justify-content: inherit !important;

      .second_navbar_block {
        .second_navbar_list {
          display: flex !important;

          li {
            .nav-link {
              position: relative;
              color: ${(props) => props.theme.body.BodyPrimary};
              font-style: normal;
              font-weight: 700;
              font-size: 18px;
              line-height: 25px;
              text-align: center;
              padding-bottom: 10px;
              transition: 450ms all;
            }

            .active {
              position: relative;
              color: ${(props) => props.theme.body.BodyMain};
              transition: 450ms all;
              padding-bottom: 10px;
              text-decoration: none;
            }
          }
        }
      }
    }
  }

  @media only screen and (max-width: 1130px) {
    .first_navbar {
      nav {
        padding: 15px 9px 15px 9px;

        .navbar-brand {
          img {
            height: 50px;
            width: auto;
          }
        }

        .left_ui_block_hide {
          li {
            padding-right: 10px;
          }
        }
      }
    }
  }
`;

export default HeaderWrapper;
