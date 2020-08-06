import HomePage from "../views/HomePage";
import SignupPage from "../views/SignupPage";
import LoginPage from "../views/LoginPage";
import Dashboard from "../views/Dashboard";
import LogsPage from "../views/LogsPage";

export default {
  default: [
    {
      exact: true,
      path: "/",
      component: HomePage,
    },
    {
      exact: true,
      path: "/signup",
      component: SignupPage,
    },
    {
      exact: true,
      path: "/login",
      component: LoginPage,
    },
  ],
  secured: [
    {
      exact: true,
      path: "/dashboard",
      component: Dashboard,
    },
    {
      exact: true,
      path: "/logs",
      component: LogsPage,
    },
  ],
};
