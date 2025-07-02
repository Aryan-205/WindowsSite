import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import store from './store/store'

import HomeScreen from "./pages/HomeScreen";
import LockScreen from "./pages/LockScreen";

export default function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<LockScreen />} />
        <Route path="/home" element={<HomeScreen />} />
      </>
    )
  );

  return  <RouterProvider router={router} />;
}