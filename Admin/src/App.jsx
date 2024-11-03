import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Menu from "./components/Menu";
import Home from "./pages/Home";
import Users from "./pages/Users";
import Products from "./pages/Products";

function App() {
  const Layout = () => {
    return (
      <div className="flex ">
        <div>
          <Menu />
        </div>
        <div>
          <Outlet />
        </div>
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/users",
          element: <Users />,
        },
        {
          path: "/products",
          element: <Products />,
        },
      ],
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
