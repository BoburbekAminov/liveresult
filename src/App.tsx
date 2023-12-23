import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { MainPage } from "./pages/MainPage/MainPage";
import { ReagistrationPage } from "./pages/ReagistrationPage/ReagistrationPage";
import { LoginPage } from "./pages/LoginPage/LoginPage";

const routerConfig = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },

  {
    path: "/reagister",
    element: <ReagistrationPage />,
  },
]);

const App: React.FC = () => {
  return (
    <div className="App">
      <RouterProvider router={routerConfig} />
    </div>
  );
};

export default App;
