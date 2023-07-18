import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import NavbarComponent from "./components/navbar";
import LandingPage from "./page/ladingPage";
import { ServicesProvider } from "./context/servicesProvider";
import ServicePage from "./page/servicesPage";
import { CarProvider } from "./context/carProvider";
import ShopPage from "./page/shopPage";
import DescriptionPage from "./page/descriptionPage";
import LoginPage from "./page/loginPage";
import { AuthProvider } from "./context/authProvider";
import { ProtectedRouter } from "./utils/protectedRoute";
function App() {
  return (
    <ServicesProvider>
      <CarProvider>
        <AuthProvider>
          <div className="App min-vh-100 d-flex flex-column justify-content-between">
            <NavbarComponent />
            <Routes>
              <Route path="/" element={<LoginPage />} />
              <Route
                path="/home"
                element={
                  <ProtectedRouter>
                    <LandingPage />
                  </ProtectedRouter>
                }
              />
              <Route
                path="/service"
                element={
                  <ProtectedRouter>
                    <ServicePage />
                  </ProtectedRouter>
                }
              />
              <Route
                path="/shop"
                element={
                  <ProtectedRouter>
                    <ShopPage />
                  </ProtectedRouter>
                }
              />
              <Route
                path="/shop/:id"
                element={
                  <ProtectedRouter>
                    <DescriptionPage />
                  </ProtectedRouter>
                }
              />
            </Routes>
            <Footer />
          </div>
        </AuthProvider>
      </CarProvider>
    </ServicesProvider>
  );
}

export default App;
