import { createContext, useState, useEffect } from "react";

import { getCollectionsAndDocuments } from "../utilities/firebase/firebase.utilities.js";

export const CategoriesContext = createContext({
  CategoriesMap: {},
});

export const CategoriesProvider = ({ children }) => {
  const [CategoriesMap, setCategoriesMap] = useState({});

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCollectionsAndDocuments();
      console.log(categoryMap);
      setCategoriesMap(categoryMap);
    };
    getCategoriesMap();
  }, []);
  const value = { CategoriesMap, setCategoriesMap };
  return (
    <CategoriesContext.Provider value={value}>
      {" "}
      {children}{" "}
    </CategoriesContext.Provider>
  );
};
