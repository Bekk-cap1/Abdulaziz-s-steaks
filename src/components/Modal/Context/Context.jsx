import { createContext, useState } from "react";


const Context = createContext()
function Provider ({children}){
    const [number, setNumber] = useState(0)

    return(
        <Context.Provider value={{number, setNumber}}>
            {children}
        </Context.Provider>
    )
}
export {Context, Provider}