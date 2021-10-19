import React, { createContext } from 'react';
import useFirebase from '../Hooks/useFirebase';
import useServices from '../Hooks/useServices';
export const AuthContext=createContext()

const AuthProvider = ({ children }) => {
    const allContext = useFirebase()
    const { services } = useServices([]);
    const alldata={allContext,services}
    return (
        <AuthContext.Provider value={alldata}>
            {children}
       </AuthContext.Provider>
    );
};

export default AuthProvider;