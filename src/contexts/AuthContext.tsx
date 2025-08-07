import React, { createContext, useContext, useState, ReactNode } from 'react';

interface User {
  id: string;
  email: string;
  name: string;
  userType: 'government' | 'public';
  department?: string;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string, userType: 'government' | 'public') => Promise<boolean>;
  logout: () => void;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Mock user data for prototype
const mockUsers = {
  government: [
    { id: '1', email: 'admin@ghmc.gov.in', password: 'admin123', name: 'GHMC Admin', userType: 'government' as const, department: 'GHMC' },
    { id: '2', email: 'official@ghmc.gov.in', password: 'official123', name: 'GHMC Official', userType: 'government' as const, department: 'Electricity Board' },
  ],
  public: [
    { id: '3', email: 'citizen@example.com', password: 'citizen123', name: 'John Citizen', userType: 'public' as const },
    { id: '4', email: 'resident@example.com', password: 'resident123', name: 'Jane Resident', userType: 'public' as const },
  ]
};

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const login = async (email: string, password: string, userType: 'government' | 'public'): Promise<boolean> => {
    setIsLoading(true);
    
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const users = mockUsers[userType];
    const foundUser = users.find(u => u.email === email && u.password === password);
    
    if (foundUser) {
      const { password: _, ...userWithoutPassword } = foundUser;
      setUser(userWithoutPassword);
      setIsLoading(false);
      return true;
    } else {
      setIsLoading(false);
      return false;
    }
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}; 