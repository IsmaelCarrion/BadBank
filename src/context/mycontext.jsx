import React, { useContext, createContext, useState } from 'react';

export const UserContext = createContext();

export const BankContext = ({ children }) => {

    const [bContext, setbContext] = useState({"users":[{"name":"Ismael Carrion","email":"iecarrion@enalsa.net","password":"password@sec","balance":0},{"name":"Claud Pellas","email":"cpellas@gmail.com","password":"elPerroflaco","balance":0},{"name":"Viryin Castrillo","email":"vmariacas@gmail.com","password":"elCadejo","balance":0}]});
    
    return (
        <UserContext.Provider value={bContext}>
            {children}
        </UserContext.Provider>
    )
}




   