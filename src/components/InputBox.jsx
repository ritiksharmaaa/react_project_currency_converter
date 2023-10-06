import React , {useId} from 'react'
function InputBox({
    label,
    amount,
    onAmountchange,
    onCurrencychange,
    currencyOption = [],
    selectCurrency = "usd",
    amountDisable = false ,
    currencyDisable ,
    
    className = "",

})


{
    
    const amountInputId = useId() /* this can use to give uniquie id which element repeact itself many time like label this is not use in loop for keys  */

    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className} `}>
            <div className="w-1/2">
                <label  htmlFor={amountInputId} className="text-black/40 mb-2 inline-block">
                    {label
                    }
                </label>
                <input
                    id={amountInputId}
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                    disabled={amountDisable}
                    value={amount}
                    onChange={(e) => onAmountchange && onAmountchange(Number(e.target.value))}
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    value={selectCurrency}
                    onChange={(e) => onCurrencychange && onCurrencychange(e.target.value )}
                    disabled={currencyDisable}

                    
                >
{/*                     
                        <option value="usd">
                            usd
                        </option> option came from map function because we get an array 


                        in map you have to give key in key you give index , id , even value can be used as key 

                 */}

                 {currencyOption.map((currency)=>(
                    <option  keys={currency} value={currency}>{currency}</option>
                 )
                 )}
                </select>
            </div>
        </div>
    );
}

export default InputBox; 

// is use for mini project in big project we make a index.js where we impoert all component and export to app.jsk 


// problem because you have import one by one component in app jsx is headac so use indeex methods .
