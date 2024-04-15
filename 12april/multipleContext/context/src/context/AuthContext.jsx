import { createContext, useState } from "react";
// here we created authcontext.
export const AuthContext = createContext();

// here we are creating provider function for authcontext.
export function AuthContextProvider({children}){
    const[isAuth, setIsAuth] = useState(false);
    const[userInfo, setUserInfo] = useState({userName:"",email:""})
    function authenticate(e){
        e.preventDefault();
        console.log('xyz');
        if(userInfo.userName && userInfo.email){
            setIsAuth(true);
        }
    }
    function userDetails(val,name){
        
        setUserInfo({...userInfo, [name] : val})
    }
    console.log(userInfo);
    return(
        <AuthContext.Provider value={{isAuth,userInfo,userDetails,authenticate}}>
            {children}
        </AuthContext.Provider>
    );
}