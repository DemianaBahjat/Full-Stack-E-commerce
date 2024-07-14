import { createContext, useState } from "react";



 export const authContext =createContext()

 export default function AuthContextProvider ({children}){
    
    const [userIsLoggedIn, setUserIsLoggedIn] = useState(!!localStorage.getItem('token'))
    const [cat, setCat] = useState('Electronics')
    const logout = () => {
      setUserIsLoggedIn(false);
      localStorage.clear();
    };
    return <authContext.Provider value={{userIsLoggedIn, setUserIsLoggedIn, logout , cat, setCat}}>
    
                      {children}
          </authContext.Provider>
    
 }