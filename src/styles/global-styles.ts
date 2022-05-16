import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
    @font-face {
                font-family: "IRANYekan";
                src: url(/fonts/Yekan/eot/IRANYekanWebLight.eot);
                src: url(/fonts/Yekan/woff2/IRANYekanWebLight.woff2) format('woff2'),
                    url(/fonts/Yekan/woff/IRANYekanWebLight.woff) format('woff'),
                    url(/fonts/Yekan/ttf/IRANYekanWebLight.ttf) format('truetype');
                font-weight: 300;
                font-display: fallback;
    }

    @font-face {
                font-family: "IRANYekan";
                src: url(/fonts/Yekan/eot/IRANYekanWebRegular.eot);
                src: url(/fonts/Yekan/woff2/IRANYekanWebRegular.woff2) format('woff2'),
                    url(/fonts/Yekan/woff/IRANYekanWebRegular.woff) format('woff'),
                    url(/fonts/Yekan/ttf/IRANYekanWebRegular.ttf) format('truetype');
                font-weight: 400;
                font-display: fallback;
    }

    @font-face {
                font-family:"IRANYekan";
                src: url(/fonts/Yekan/eot/IRANYekanWebBold.eot);
                src: url(/fonts/Yekan/woff2/IRANYekanWebBold.woff2) format('woff2'),
                    url(/fonts/Yekan/woff/IRANYekanWebBold.woff) format('woff'),
                    url(/fonts/Yekan/ttf/IRANYekanWebBold.ttf) format('truetype');
                font-weight: 600;
                font-display: fallback;
    }
    #__next{
        height:100%;
    }

    *{
      padding: 0;
      margin: 0;
      list-style-type:none;
      outline:none;
      box-sizing:border-box;
   }
   

   html{
    height: 100%;
    font-size:${({theme}) => theme.pxToRem(theme.typography.htmlFontSize)};
   }

   

   body{
      min-height: 100%;
      height: 100%;
      font-family: "IRANYekan",sans-serif;
      background-color: ${({theme}) => theme.colors.backgroundVariant2.origin};
   }

   input{
      font-family: ${({theme}) => theme.typography.fontFamily.rtl};
      font-weight:bold;
   }


   button{
      border:none;
      background:none;
      appearance: none;
      font-family: ${({theme}) => theme.typography.fontFamily.rtl};
   }


/* stylelint-disable property-no-vendor-prefix */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type=number] {
  -moz-appearance: textfield;
}           
`;

export default GlobalStyle;
