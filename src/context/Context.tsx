import { createContext, useState } from "react";
import { ContextProps, ChildrenProps } from "../global/interface";

export const contextGlobal = createContext<ContextProps | null>(null)


export const ContextGlobal = ({children}: ChildrenProps) =>{
    const [modalGetUser, setModalGetUser] = useState<boolean>(false)
    const [modalCreatetUser, setCreateGetUser] = useState<boolean>(false)
    const [modalDeletetUser, setDeleteGetUser] = useState<boolean>(false)
    const [modalUpdatetUser, setUpdateGetUser] = useState<boolean>(false)
    return(
        <contextGlobal.Provider value={{modalGetUser, setModalGetUser, modalCreatetUser, setCreateGetUser, modalDeletetUser, setDeleteGetUser, modalUpdatetUser, setUpdateGetUser}}>
            {children}
        </contextGlobal.Provider>
    )
}
