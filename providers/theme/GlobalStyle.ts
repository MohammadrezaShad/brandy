import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
      @font-face {
      font-family: "Dana";
        src: url("/font/dana/dana-fanum-regular.eot");
        src: url("/font/dana/dana-fanum-regular.woff2") format('woff2'),
              url("/font/dana/dana-fanum-regular.woff") format('woff'),
              url("/font/dana/dana-fanum-regular.ttf") format('truetype');
        font-weight: normal;
        font-display:fallback;
      }


      @font-face {
      font-family: "Dana";
        src: url("/font/dana/dana-fanum-medium.eot");
        src: url("/font/dana/dana-fanum-medium.woff2") format('woff2'),
              url("/font/dana/dana-fanum-medium.woff") format('woff'),
              url("/font/dana/dana-fanum-medium.ttf") format('truetype');
        font-weight: bold;
        font-display:fallback;
      }

   *{
      padding: 0;
      margin: 0;
      list-style-type:none;
      outline:none;
      &::-webkit-scrollbar{width:6px;height:6px}
      &::-webkit-scrollbar-thumb{border-radius:16px;}
      &::-webkit-scrollbar-track{background-color:transparent}
      box-sizing:border-box;
   }

   html{
    height: 100%;
    font-size: 10px;
   }

   body{
      height: 100%;
      font-family: "Dana";
      background-color: #fff;
      &::-webkit-scrollbar{width:10px;height:10px}
      &::-webkit-scrollbar-thumb{background-color:#666}
      &::-webkit-scrollbar-track{background-color:#e0e0e0}
      &:hover::-webkit-scrollbar-thumb{background-color:#555}
   }

   input{
      font-family: "Dana";
      font-weight:bold;
   }

   ::-webkit-input-placeholder{color:#bbb}

   button{
      border:none;
      background:none;
      appearance: none;
      font-family: "Dana";
   }
      #root{height: 100%;}

`;
