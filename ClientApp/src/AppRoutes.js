import Home from "./routes/home/Home";
import Counter from "./components/Counter";
import FetchData from "./components/FetchData";
import Friends from "./routes/friends/Friends";

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
    path: "/counter",
    element: <Counter />,
  },
  {
    path: "/fetch-data",
    element: <FetchData />,
  },
];

export default AppRoutes;
