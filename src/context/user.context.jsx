import { createContext, useState } from "react";

//this is the value that needed to be access
export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

/*this provider component will house the app.js so as all the component in app.js can 
have access to the data*/
export const UserProvider = ({ children }) => {
  //setting the default value of current user to null
  const [currentUser, setCurrentUser] = useState(null);

  const value = { currentUser, setCurrentUser };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
