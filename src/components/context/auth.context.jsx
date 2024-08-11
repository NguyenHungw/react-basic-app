import { createContext, useState } from "react";

 
//
export const AuthContext = createContext({
    email: "",
    phone: "",
    fullName: "",
    role: "",
    avatar: "",
    id: ""
});

//AuthWarrper component
//bat ki cac component nam trong authwarrpert deu co the truy cap vao [user,setuser] thong qua 
export const AuthWarrper = (props) => {
    const [user,setUser] = useState({
        email: "",
        phone: "",
        fullName: "",
        role: "",
        avatar: "",
        id: ""
    })

    const [isAppLoading, setIsAppLoading] = useState(true)
    return(

        <AuthContext.Provider value={{
            user,setUser,
            isAppLoading, setIsAppLoading
            }}>
        {props.children}
        </AuthContext.Provider>
    )
}

