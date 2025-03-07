import React from "react";
import {
  App,
  ZMPRouter,
  AnimationRoutes,
  SnackbarProvider,
  Route,
} from "zmp-ui";
import HomePage from "../pages";
import About from "../pages/about";
import Form from "../pages/form";
import User from "../pages/user";

const MyApp = () => {
  return (
    <App>
      <SnackbarProvider>
        <ZMPRouter>
          <AnimationRoutes>
            <Route path="/" element={<HomePage></HomePage>}></Route>
            <Route path="/about" element={<About></About>}></Route>
            <Route path="/form" element={<Form></Form>}></Route>
            <Route path="/user" element={<User></User>}></Route>
          </AnimationRoutes>
        </ZMPRouter>
      </SnackbarProvider>
    </App>
  );
};
export default MyApp;
