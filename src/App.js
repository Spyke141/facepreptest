// import logo from './logo.svg';
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./Components/Login";
import Home from "./Components/Home";
import ErrorPage from "./Error/ErrorPage";
import { useState } from "react";

function App() {
  // Creating a state variable to hold the authentication status of user whill user is loggig in or loggin out.
  const [authenticated, setAuthenticated] = useState(false);

  // Set autorized status to true if the user validates credentials at login page.
  const handleLogin = () => {
    setAuthenticated(true);
  };

  // Set autorized status to false once the user logs out from home page.
  const handleLogout = () => {
    setAuthenticated(false);
  };

// Routing user based to current page and activity.
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
