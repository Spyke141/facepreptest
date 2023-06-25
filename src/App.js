// import logo from './logo.svg';
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./Components/Login";
import Home from "./Components/Home";
import ErrorPage from "./Error/ErrorPage";
import { useState } from "react";

function App() {
  const [authenticated, setAuthenticated] = useState(false);

  const handleLogin = () => {
    setAuthenticated(true);
  };

  const handleLogout = () => {
    setAuthenticated(false);
  };

  const RouterValid = createBrowserRouter([
    { path: "/", element: <Login onLogin={handleLogin} /> },
    {
      path: "/Home",
      element: !authenticated ? (
        <Login onLogin={handleLogin} />
      ) : (
        <Home onLogout={handleLogout} />
      ),
    },
    { path: "*", element: <ErrorPage /> },
  ]);

  return (
    <>
      <RouterProvider router={RouterValid} />
    </>
  );
}

export default App;
