import { createContext, useContext, useState, ReactNode } from 'react';

interface AuthContextType {
    user: any | null;
    login: (credentials: any) => void;
    logout: () => void;
    isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};

interface AuthProviderProps {
    children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
    const [user, setUser] = useState<any | null>(null);

    const login = (credentials: any) => {
        // Implementation for login
        setUser(credentials);
    };

    const logout = () => {
        setUser(null);
    };

    const isAuthenticated = !!user;

    const value = {
        user,
        login,
        logout,
        isAuthenticated,
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};