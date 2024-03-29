import "./App.css";
import { Provider } from "react-redux";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Suspense, lazy } from "react";
import Body from "./Components/Body";
import store from "./Utils/store";
import Login from "./Components/Authentication/Login";
import Browse from "./Components/Browse";
import MovieSearch from "./Components/GPT/MovieSearch";
import Error from "./Components/Error";
import WatchMovie from "./Components/Movies/WatchMovie";
import MovieInfo from "./Components/Movies/MovieInfo";
import WatchList from "./Components/Watchlist/WatchList";
import Admin from "./Components/Admin/Admin";
import IsAdminUser from "./Components/Admin/IsAdminUser";
import Loader from "./Components/Shimmer/Loader";

import ErrorBoundaryCustom from "./Components/ErrorBoundary/ErrorBoundaryCustom";
import ErrorBoundaryLibrary from "./Components/ErrorBoundary/ErrorBoundaryLibrary";

// import Profile from "./Components/Profile";
const Profile = lazy(() => import("./Components/Profile"));
const Contact = lazy(() => import("./Components/Contact"));

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: (
      <ErrorBoundaryLibrary>
        <Body />
      </ErrorBoundaryLibrary>
    ),
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Login />,
      },
      {
        path: "/browse",
        element: <Browse />,
      },
      {
        path: "/search",
        element: <MovieSearch />,
      },
      {
        path: "/watch/:id",
        element: <WatchMovie />,
      },
      {
        path: "/movieInfo/:id",
        element: <MovieInfo />,
      },
      {
        path: "/watchlist",
        element: <WatchList />,
      },
      {
        path: "/profile",
        element: (
          <Suspense fallback={<Loader />}>
            <Profile />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: (
          <Suspense fallback={<Loader />}>
            <Contact />
          </Suspense>
        ),
      },
      {
        path: "/admin",
        element: (
          <IsAdminUser>
            <Admin />
          </IsAdminUser>
        ),
      },
    ],
  },
]);

const App = () => {
  return (
    <Provider store={store}>
      <RouterProvider router={appRouter} />
    </Provider>
  );
};

export default App;
