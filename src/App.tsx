import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { MainPage } from "./pages/MainPage/MainPage";
import { RegistrationPage } from "./pages/RegistrationPage/RegistrationPage";
import { LoginPage } from "./pages/LoginPage/LoginPage";
import { ProfilePage } from "./pages/ProfilePage/ProfilePage";
import { CartPage } from "./pages/CartPage/CartPage";
import { ThemeProvider } from "./contexts/themeProvider";
import { CountriesPage } from "./pages/CountriesPage/Countries";
import { SaveProvider } from "./components/Match/SaveContext";

const routerConfig = createBrowserRouter([
  {
    path: "/main",
    element: <MainPage />,
  },
  {
    path: "/",
    element: <LoginPage />,
  },
  {
    path: "/profile",
    element: <ProfilePage />,
  },

  {
    path: "/register",
    element: <RegistrationPage />,
  },
  {
    path: "/cart",
    element: <CartPage />,
  },
  {
    path: "/countries",
    element: <CountriesPage />,
  },
]);

const App: React.FC = () => {
  return (
    <div className="App">
      <SaveProvider>
        <ThemeProvider>
          <RouterProvider router={routerConfig} />
        </ThemeProvider>
      </SaveProvider>
    </div>
  );
};

export default App;
