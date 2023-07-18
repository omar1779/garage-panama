import { createContext, useContext, useState, useEffect } from "react";
import { db } from "../firebase/firebase.config";
import { collection, getDocs} from "firebase/firestore";

/* Creating a context object. */
export const CarContext = createContext();
/**
 * UseAuth() is a function that returns the context object that was created by the useContext() hook.
 */
export const useCar = () => {
  const context = useContext(CarContext);
  if (!context) {
    console.log("error creating service context");
  }
  return context;
};

export function CarProvider({ children }) {
  const [cars, setCars] = useState([]);
  useEffect(() => {
    const getCar = async () => {
      const rutaDeBaseDeDatos = await getDocs(collection(db, "autos"));
      const carsArray = [];
      rutaDeBaseDeDatos.forEach((doc) => {
        carsArray.push(doc.data());
      });
      setCars(carsArray); // Actualiza el estado con el array de autos
    };
    getCar();
  }, []);
  return (
    <CarContext.Provider
      value={{
        cars,
      }}
    >
      {children}
    </CarContext.Provider>
  );
}
