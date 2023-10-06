//  when your function doest not return jsx so alway use .js file or ts file . 

// function hello(){
//     return []
// } this is also a hooks or impo you can use builtin hooks inside this function . 

import { useEffect , useState  } from "react";


//  here use can be convention just alll buit in hooks write just like that so we have to also make custom hooks like usecurrencyinfo 

function useCurrencyInfo(currency){
    const [data ,  setdata ] = useState({})
    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`).then((res)=>res.json()).then((res)=> setdata(res[currency]) )
    } , [currency])
    console.log(data)
    return data 

}


export default useCurrencyInfo; /* here we return whole function  oe actual data retuen by function . */


//  here custom hooks complete 
