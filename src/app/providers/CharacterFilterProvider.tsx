import { createContext, useState, ReactNode } from "react";

interface CharacterFilterProviderProps {
  children: ReactNode;
}

interface CharacterFilterContextType {
  name: string;
  gender: string;
  status: string;
  setName: (name: string) => void;
  setGender: (gender: string) => void;
  setStatus: (status: string) => void;
  resetFilters: () => void;
}

export const CharacterFilterContext = createContext<CharacterFilterContextType>(
  {
    name: "",
    gender: "",
    status: "",
    setName: () => {},
    setGender: () => {},
    setStatus: () => {},
    resetFilters: () => {},
  }
);

export const CharacterFilterProvider: React.FC<
  CharacterFilterProviderProps
> = ({ children }) => {
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [status, setStatus] = useState("");

  const resetFilters = () => {
    setName("");
    setGender("");
    setStatus("");
  };

  const value: CharacterFilterContextType = {
    name,
    gender,
    status,
    setName,
    setGender,
    setStatus,
    resetFilters,
  };

  return (
    <CharacterFilterContext.Provider value={value}>
      {children}
    </CharacterFilterContext.Provider>
  );
};
