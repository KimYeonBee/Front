import { createBrowserRouter } from "react-router-dom";

// layouts
import DefaultLayout from "@layouts/DefaultLayout";
// import PrivateRoute from "@layouts/PrivateLayout";

// pages
import Login from "@pages/auth/Login";
import Home from "@pages/home/Home";
import Mypage from "@pages/mypage/MyPage";
import Btn from "@pages/test/Btn";
import Intro from "@pages/auth/Intro";
import Signup from "@pages/auth/Signup";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      { path: "intro", element: <Intro /> },
      {
        path: "login",
        element: <Login />,
      },
      { path: "signup", element: <Signup /> },
      {
        // element: <PrivateRoute />,
        children: [
          { index: true, element: <Home /> },
          { path: "mypage", element: <Mypage /> },
          { path: "button", element: <Btn /> },
        ],
      },
    ],
  },
]);

export default router;
