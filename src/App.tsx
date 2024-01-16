import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { MainPage } from "./pages/MainPage/MainPage";
import { RegistrationPage } from "./pages/RegistrationPage/RegistrationPage";
import { LoginPage } from "./pages/LoginPage/LoginPage";
import { ProfilePage } from "./pages/ProfilePage/ProfilePage";
import { CartPage } from "./pages/CartPage/CartPage";
import { ThemeProvider } from "./contexts/themeProvider";
import { CountriesPage } from "./pages/CountriesPage/Countries";

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
    path: "/card/:id",
    element: <CartPage />,
  },
  {
    path: "/cointries",
    element: <CountriesPage />,
  },
]);

const App: React.FC = () => {
  return (
    <div className="App">
      <ThemeProvider>
        <RouterProvider router={routerConfig} />
      </ThemeProvider>
    </div>
  );
};

export default App;
