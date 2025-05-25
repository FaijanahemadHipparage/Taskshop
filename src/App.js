import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./pages/Login";
import Formhook from "./pages/Formhook";

import Productshop from "./pages/Productshop";
import Services from "./pages/Services";
import Aboutus from "./pages/Aboutus";
import Contactus from "./pages/Contactus";
import Layouts from "./Component/Layouts";
import Home from "./pages/Home";
import Cart from "./pages/Cart";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layouts />,
      children: [
        {
          path: "/",
          element: <Login />,
        },
        { path: "/home", element: <Home /> },
        { path: "/register", element: <Formhook /> },
        { path: "/product", element: <Productshop /> },
        { path: "/services", element: <Services /> },
        { path: "/aboutus", element: <Aboutus /> },
        { path: "/contactus", element: <Contactus /> },
        { path: "/cart", element: <Cart /> },
      ],
    },
  ]);
  return (
    <RouterProvider router={router}>
      <div>
        sdf
      </div>
    </RouterProvider>
  );
}

export default App;
