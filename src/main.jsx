import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { RecoilRoot } from "recoil";

import "./index.css";

import pages from "./pages";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RecoilRoot>
      <RouterProvider router={pages} />
    </RecoilRoot>
  </React.StrictMode>
);
