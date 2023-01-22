import { createBrowserRouter } from "react-router-dom";

import Main from "./Main";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
  },
  {
    path: "/signin",
    element: <SignIn />,
  },
  {
    path: "/signUp",
    element: <SignUp />,
  },
]);

export default router;
