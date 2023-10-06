import { useState } from 'react'
import {InputBox} from './components/index'
import useCurrencyInfo  from './custom_hooks/useCurrencyinfo'
import './App.css'

function App() {
  const [amount, setAmount] = useState(0)
  const [from , setFrom ] = useState("usd")
  const [to , setTo ] = useState("inr")
  const [convertedAmount , setConvertedAmount] = useState(0)
  const currencyInfo = useCurrencyInfo(from)
  const option  = Object.keys(currencyInfo)

  //  swap functionality 
  const swap = () =>{
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }
const convert = () =>{
  setConvertedAmount(amount *  currencyInfo[to] )

}

  return (
    <>


     <h1 className="text-3xl  bg-red-100 font-serif  text-center  p-5 ml-2 mr-2"> Currency Coverter Center 🤑 </h1>

     <div
            className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat ml-2 mr-2"
            style={{
                backgroundImage: `url('https://images.pexels.com/photos/919179/pexels-photo-919179.jpeg?auto=compress&cs=tinysrgb&w=600')`,
            }}
        >
            <div className="w-full">
                <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            convert()
                           
                        }}
                    >
                        <div className="w-full mb-1">
                            <InputBox
                                label="From"
                                amount={amount}
                                currencyOption={option}
                                onCurrencychange={(currency) => {
                                  setFrom(currency)
                                }}
                                selectCurrency={from}
                                onAmountchange={(amount)=>{
                                  setAmount(amount)
                                 }}
                                
                            />
                        </div>
                        <div className="relative w-full h-0.5">
                            <button
                                type="button"
                                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                                onClick={swap}
                                
                            >
                                swap
                            </button>
                        </div>
                        <div className="w-full mt-1 mb-4">
                            <InputBox
                                label="To"
                                amount={convertedAmount}
                               onCurrencychange={(currency) =>{
                                setTo(currency)
                               }}
                              
                                currencyOption={option}
                                selectCurrency={to}
                                amountDisable
                                
                            />
                        </div>
                        <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                            Convert {from.toUpperCase()} to {to.toUpperCase()}
                        </button>
                    </form>
                </div>
            </div>
        </div>

     
    </>
  )
}

export default App;
