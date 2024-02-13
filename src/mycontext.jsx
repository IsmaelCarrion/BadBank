import React, { useContext, createContext, useState } from 'react';

export const UserContext = createContext();

export const BankContext = ({ children }) => {

    const [bContext, setbContext] = useState('Hello I am from context and I work');
    
    return (
        <UserContext.Provider value={bContext}>
            {children}
        </UserContext.Provider>
    )
}
   

