import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Myaccount from "./pages/Myaccount";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
import Announcement from "./components/Announcement";
import Product from "./pages/Product";

function App() {
  const Layout = () => {
    return (
      <div>
        <Announcement />
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    );
  };
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children:[
        {
          path:"/",
          element:<Home />
        },
        {
          path:"/cart",
          element:<Cart />
        },
        {
          path:"/myaccount",
          element:<Myaccount />
        },
        {
          path:"/product/:productId",
          element:<Product />
        },
      ]
    },
    // {
    //   path: "/cart",
    //   element: <Cart />,
    // },
    // {
    //   path: "/myaccount",
    //   element: <Myaccount />,
    // },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;