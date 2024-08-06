import React, { createContext, useState, useEffect, ReactNode } from 'react';
import { User } from '../types';
import { useSession, signIn, signOut } from 'next-auth/client';

interface UserContextType {
  user: User | null;
  fetchUser: () => void;
  updateUser: (updatedUser: User) => void;
}

export const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [session, loading] = useSession();
  const [user, setUser] = useState<User | null>(null);

  const fetchUser = async () => {
    if (session) {
      try {
        const response = await fetch('/api/profile');
        const data: User = await response.json();
        setUser(data);
      } catch (error) {
        console.error('Failed to fetch user data', error);
      }
    }
  };

  const updateUser = async (updatedUser: User) => {
    try {
      const response = await fetch('/api/profile', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedUser),
      });
      const data: User = await response.json();
      setUser(data);
    } catch (error) {
      console.error('Failed to update user data', error);
    }
  };

  useEffect(() => {
    fetchUser();
  }, [session]);

  return (
    <UserContext.Provider value={{ user, fetchUser, updateUser }}>
      {loading ? <div>Loading...</div> : children}
    </UserContext.Provider>
  );
};
