import { createContext, useContext, useState } from "react";
import { serviciosAutomotrices } from "../utils/data";
/* Creating a context object. */
export const ServiceContext = createContext();
/**
 * UseAuth() is a function that returns the context object that was created by the useContext() hook.
 */
export const useService = () => {
  const context = useContext(ServiceContext);
  if (!context) {
    console.log("error creating service context");
  }
  return context;
};

export function ServicesProvider({ children }) {
  const [serviceFilter, setServiceFilter] = useState(null);
  const filter = (service) => {
    try {
      const data = serviciosAutomotrices.filter((e) => e.titulo === service);
      setServiceFilter(data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <ServiceContext.Provider value={{
			serviceFilter, filter
		}}>{children}</ServiceContext.Provider>
  );
}
