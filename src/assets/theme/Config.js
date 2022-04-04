import { createGlobalStyle } from "styled-components";

export const lightTheme = {
  body: {
    BodyMain: "#42f0db",
    BodyPrimary: "#ffff",
    BodySecondary: "#8c8c8c",
    BodyMainLine: "#42f0db",
    BodyPrimaryLine: "hsla(0,0%,89.8%,.4)",
    BodyNeutralAlt: "#1b1d23",
    BodyNeutral: "#0e1118",
    BodyOverlay: "#0e1118",
    BodyBrandAlt: "#0da098",
    BodyBrand: "#ff5c28",
    colorScheme: "dark",
  },
};

export const darkTheme = {};

export const GlobalStyle = createGlobalStyle`

*,
*:before,
*:after {
    box-sizing: inherit;
}

* {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
}

body,
html {
    margin: 0;
    height: 100%;
    width: 100%;
    letter-spacing: .02em;
}

html {
    margin: 0;
    padding: 0;
    text-size-adjust: 100%;
    overflow-x: hidden;
    overflow-y: scroll;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-size-adjust: 100%;
    -moz-text-size-adjust: 100%;
}

::-webkit-scrollbar {
    height: 10px;
    width: 10px;
    background: ${(props) => props.theme.body.BodySecondary};;
}

::-webkit-scrollbar-corner {
    background: ${(props) => props.theme.body.BodySecondary};
}

::-webkit-scrollbar-thumb {
    background: #a8a8a8;
    border-radius: 10px;
    -webkit-border-radius: 1ex;
}

body {
    margin: 0;
    padding-right: 0px;
    padding-left: 0px;
    margin-right: auto;
    margin-left: auto;
    position: relative;
    font-style: normal;
    background-image:url("/images/HomeBackground.png");
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
}

body, h1, h2, h3, h4, h5 {
  font-family: Gilroy,-apple-system,BlinkMacSystemFont,"Segoe UI","PingFang SC","Hiragino Sans GB","Microsoft YaHei","Helvetica Neue",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
}

p {
  margin-bottom: 0 !important;
}


.container {
  max-width: 1352px !important;
  padding-left:200px;
  padding-right:200px;
}

.dropdown-menu {
    z-index: 400;
}

@media only screen and (max-width: 1100px) { 
  .container {
    padding-left:100px;
    padding-right:100px;
  }
  
}


@media only screen and (max-width: 900px) { 
  .container {
    padding-left:15px;
    padding-right:15px;
  }
  
}

@media only screen and (max-width: 600px) {

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        font-size: 28px;
    }
}
`;
