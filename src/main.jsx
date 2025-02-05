import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home";
import DetailMovie from "./pages/detailMovie";
import LoginPages from "./pages/login";
import RegisterPages from "./pages/register";
import { Provider } from "react-redux";
import store from "./Redux/store.js";

const router = createBrowserRouter([
  {
    path: "/home",
    element: <Home></Home>,
  },
  {
    path: "/detail/:id",
    element: <DetailMovie></DetailMovie>,
  },
  {
    path: "/login",
    element: <LoginPages></LoginPages>,
  },
  {
    path: "/register",
    element: <RegisterPages></RegisterPages>,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}></RouterProvider>
    </Provider>
  </StrictMode>
);
