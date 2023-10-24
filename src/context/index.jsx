import { createContext, useState, useEffect } from "react";

export const ThisContext = createContext("")
// eslint-disable-next-line react/prop-types
const DataContext = ({ children }) => {

    const [data, setData] = useState([])

    useEffect(() => {
        console.log(data)
    }, [data])
    return (
        <ThisContext.Provider value={{data, setData}}>
            {children}
        </ThisContext.Provider>
    )
}

export default DataContext