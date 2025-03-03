import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import AvailableStudios from "../pages/AvailableStudios";
import BookingHistory from "../pages/BookingHistory";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <h2>Error Page</h2>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "available_studios",
        element: <AvailableStudios></AvailableStudios>,
      },
      {
        path: "booking_history",
        element: <BookingHistory></BookingHistory>,
      },
    ],
  },
]);

export default router;
