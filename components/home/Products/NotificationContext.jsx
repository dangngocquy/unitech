import React, { useState, createContext } from 'react';

export const NotificationContext = createContext();

export const NotificationProvider = ({ children }) => {
  const [notify, setNotify] = useState("");

  return (
    <NotificationContext.Provider value={{ notify, setNotify }}>
      <span>{children}</span>
    </NotificationContext.Provider>
  );
};
