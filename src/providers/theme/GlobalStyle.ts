import {createGlobalStyle} from 'styled-components';

export default createGlobalStyle`
   *{
      padding: 0;
      margin: 0;
      list-style-type:none;
      outline:none;
      box-sizing:border-box;
   }

   html{
    height: 100%;
    font-size: 10px;
    scroll-behavior:smooth;
   }

   body{
      height: 100%;
      font-family: "Dana", Arial, Verdana, Tahoma, sans-serif;
      background-color: #fff;
      overflow-x:hidden;
   }

   input{
      font-family: "Dana", Arial, Verdana, Tahoma, sans-serif;
      font-weight:bold;
   }

   ::-webkit-input-placeholder{color:#bbb}

   button{
      border:none;
      background:none;
      appearance: none;
      font-family: "Dana", Arial, Verdana, Tahoma, sans-serif;
   }
      #__next{height: 100%;}

`;
