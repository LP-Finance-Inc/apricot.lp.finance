import { createGlobalStyle } from "styled-components";

export const lightTheme = {
  body: {
    // BodyPrimary: "#fff",
    // BodySecondary: "#64676d",
    // BodyLine: "#22252e",
    // BodyNeutralAlt: "#1b1d23",
    // BodyNeutral: "#0e1118",
    // BodyOverlay: "#0e1118",
    // BodyBrandAlt: "#0da098",
    // BodyBrand: "#ff5c28",
    // colorScheme: "dark",

    BodyMain: "#42f0db",
    BodyPrimary: "#fff",
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
    font-family: Gilroy,-apple-system,BlinkMacSystemFont,"Segoe UI","PingFang SC","Hiragino Sans GB","Microsoft YaHei","Helvetica Neue",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
    padding-right: 0px;
    padding-left: 0px;
    margin-right: auto;
    margin-left: auto;
    position: relative;
    background-image:url("/images/HomeBackground.png");
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
}

h1,
h2,
h3,
h4,
h5,
h6 {
    letter-spacing: 1.5px;
    font-weight: 1000;
    color: black;
    font-style: normal;
    font-size: 1.9rem;
    background-image:  ${(props) => props.theme.body.BodyHeadingColor};
    background-repeat: repeat;
    background-size: 100%;
    background-clip: text;
    text-fill-color: transparent;
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
    -webkit-text-stroke-width: 0.18px;
    -moz-text-fill-color: transparent;
    -moz-background-clip: text;
    -moz-text-stroke-width: 0.18px;
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
