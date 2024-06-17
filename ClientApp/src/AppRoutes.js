import Home from "./routes/home/Home";
import Counter from "./components/Counter";
import FetchData from "./components/FetchData";
import Friends from "./routes/friends/Friends";
import Profile from "./routes/profile/Profile";

const AppRoutes = [
  {
    path: "/",
    element: <Home />,
    exact: true,
  },
  {
    path: "/friends",
    element: <Friends />,
  },
  {
    path: "/profile/:id",
    element: <Profile />,
  },
  {
    path: "/counter",
    element: <Counter />,
  },
  {
    path: "/fetch-data",
    element: <FetchData />,
  },
];

export default AppRoutes;
