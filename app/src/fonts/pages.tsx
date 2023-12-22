import localFont from "next/dist/compiled/@next/font/dist/local";


     
const santoshi = localFont ({
     src: [
     {
     path: './Satoshi-Variable.woff2',
     weight: '400',
     style: 'normal',
   },  

   {
    path: './Satoshi-VariableItalic.woff2',
    weight: '900',
    style: 'normal',
  },


  {
    path: './Satoshi-Light.woff2',
    weight: '300',
    style: 'normal',
  },

  {
    path: './Satoshi-LightItalic.woff2',
    weight: '300',
    style: 'normal',
  },
  
 
  

       
  ],
})