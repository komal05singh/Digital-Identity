import { createContext, useContext, useState } from "react";
import React from "react";
export const AppContext = createContext();

const temp_data = {
  "Doc 3": [
    {
      _id: "627cd4f30d8e9aaa07c60705",
      documentData: {
        Attr1: "Val 1",
        Attr2: "Val 2",
      },
      documentName: "Doc 3",
      timestamp: {
        $date: "2022-05-03T08:06:25.759Z",
      },
      userName: "nickghule",
    },
  ],
  "doc 2": [
    {
      _id: "627cc332c35ad85d4a9c80a7",
      documentData: {
        hiii: "55555",
        no: "121212",
      },
      documentName: "doc 2",
      timestamp: {
        $date: "2022-05-13T08:06:25.759Z",
      },
      userName: "nickghule",
    },
  ],
  test: [
    {
      _id: "62709529f3b89ef4bfca24bb",
      documentData: {
        hiii: "55555",
        no: "121212",
      },
      documentName: "test",
      timestamp: {
        $date: "2022-05-03T08:06:25.759Z",
      },
      userName: "nickghule",
    },
    {
      _id: "627cc31dc35ad85d4a9c80a6",
      documentData: {
        hiii: "55555",
        no: "121212",
      },
      documentName: "test",
      timestamp: {
        $date: "2022-05-13T08:06:25.759Z",
      },
      userName: "nickghule",
    },
  ],
};

export const AppContextProvider = ({ children }) => {
  const [data, setData] = useState(temp_data);
  const [selectedDoc, setSelectedDoc] = useState(temp_data["test"]);
  const [selectedHistoryIndex, setSelectedHistoryIndex] = useState(0);
  const [loading, setLoading] = useState(false);
  // const [user, setUser] = useState({
  //   userType: 1,
  //   userName: "chaitanya360",
  // });
  const [user, setUser] = useState(false);

  return (
    <AppContext.Provider
      value={{
        setData,
        data,
        selectedDoc,
        setSelectedDoc,
        selectedHistoryIndex,
        setSelectedHistoryIndex,
        loading,
        setLoading,
        user,
        setUser,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useData = () => {
  const {
    setData,
    data,
    selectedDoc,
    setSelectedDoc,
    selectedHistoryIndex,
    setSelectedHistoryIndex,
    loading,
    setLoading,
    user,
    setUser,
  } = useContext(AppContext);

  return {
    setData,
    data,
    selectedDoc,
    setSelectedDoc,
    selectedHistoryIndex,
    setSelectedHistoryIndex,
    loading,
    setLoading,
    user,
    setUser,
  };
};
