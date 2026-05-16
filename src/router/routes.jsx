import HomePage from "../pages/HomePage";
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
        path: "*",
        element: <div>404 Not Found</div>,
      },
    ],
  },
];
