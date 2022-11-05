import { createContext, useContext } from "react";
import { useJsApiLoader } from "@react-google-maps/api";
const GoogleContext = createContext();

export function GoogleWrapper({ children }) {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyCot3xKKpMGiCnTx01eSyPSpT6rzGaXgio",
    libraries: ["places"],
  });

  const value = isLoaded;

  return (
    <GoogleContext.Provider value={value}>
      {isLoaded && children}
    </GoogleContext.Provider>
  );
}

export function useGoogleContext() {
  return useContext(GoogleContext);
}
