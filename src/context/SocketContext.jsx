import { createContext, useState, useContext, useEffect } from "react";
import io from "socket.io-client";

export const SocketContext = createContext();

export const useSocketContext = () => {
  return useContext(SocketContext);
};

export const SocketContextProvider = ({ children }) => {
  const [socket, setSocket] = useState("");
  return (
    <SocketContext.Provider value={{ setSocket }}>
      {children}
    </SocketContext.Provider>
  );
};
