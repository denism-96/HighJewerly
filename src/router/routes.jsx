import HomePage from "../pages/HomePage";
import About from "../pages/About";
import MainLayout from "../layouts/MainLayout";

export const routes = [
  {
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "*",
        element: <div>404 Not Found</div>,
      },
    ],
  },
];
