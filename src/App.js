import { createContext, useEffect, useState ,lazy,Suspense} from "react";
import {
	BrowserRouter as Router, Route, Switch
} from "react-router-dom";
import './App.css';
import Home from "./pages/Home";
import LoadingIntro from "./components/Preloader/LoadingIntro";
import PrivateRoute from "./components/LogIn/PrivateRoute/PrivateRoute";
import Loading from "./components/Preloader/Loading";
// import PlacesReview from "./components/Home/PlacesReview/PlacesReview";
const LogIn = lazy(() => import("./components/LogIn/Login/LogIn.js"));
const Guided = lazy(() => import("./pages/Guided"));
const SelectGuided = lazy(() => import("./components/Guided/SelectGuided/SelectGuided"));
const PlacesReview = lazy(() => import("./components/Home/PlacesReview/PlacesReview")
);
const UserBooking = lazy(() => import("./components/UserBooking/UserBooking/UserBooking"));
const Shipment = lazy(() => import("./components/AddPayment/Shipment/Shipment"));
const AddPlaces = lazy(() => import("./components/DashBoard/AdminPanel/AddPlaces/AddPlaces"));
const DashBoard = lazy(() => import("./pages/DashBoard"));
const AboutUs = lazy(() => import("./components/AboutUs/AboutUs"));


export const userContext = createContext();

function App() {

	const [loggedInUser, setLoggedInUser] = useState([]);
	const [addBookIng, setAddBookIng] = useState([]);
	const [guided, setGuided] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	
	useEffect(() => {
		getIntro();
	}, []);

	const getIntro = () => {
		setTimeout(() => {
			setIsLoading(false)
		},3000);
	}

	return (
    <userContext.Provider
      value={[
        loggedInUser,
        setLoggedInUser,
        addBookIng,
        setAddBookIng,
        guided,
        setGuided,
      ]}
    >
      <Router>
        {isLoading ? (
          <LoadingIntro />
        ) : (
            <Switch>
              <Route path="/home">
                <Home />
              </Route>
              <Suspense fallback={<Loading />}>
                <Route path="/login">
                  <LogIn />
                </Route>
                <PrivateRoute path="/add">
                  <AddPlaces />
                </PrivateRoute>
                <Route path="/guided">
                  <Guided />
                </Route>
                <Route path="/selectGuided/:id">
                  <SelectGuided />
                </Route>
                <Route path="/placeReview/:key">
                  <PlacesReview />
                </Route>
                <PrivateRoute path="/addPayment">
                  <Shipment />
                </PrivateRoute>
                <PrivateRoute path="/bookableplaces">
                  <UserBooking />
                </PrivateRoute>
                <PrivateRoute path="/dashboard">
                  <DashBoard />
                </PrivateRoute>
                <Route path="/aboutUs">
                  <AboutUs />
                </Route>
                <Route exact path="/">
                  <Home />
                </Route>
                <Route path="*"></Route>
              </Suspense>
            </Switch>
        )}
        {/* </Suspense> */}
      </Router>
    </userContext.Provider>
  );
}

export default App;
