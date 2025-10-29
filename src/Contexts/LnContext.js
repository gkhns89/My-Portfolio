import { createContext } from "react";
import useLocalStorage from "../lsLanguage";

export const LanguageContext = createContext();

const LanguagePreferenceProvider = ({ children }) => {
  const [languagePreference, setLanguagePreference] =
    useLocalStorage("language");

  return (
    <LanguageContext.Provider
      value={{ languagePreference, setLanguagePreference }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguagePreferenceProvider;
