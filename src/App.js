import "./App.css";
import Login from "./Components/Login";
import Dashboard from "./Components/Dashboard";
import { useGetLoginDataQuery } from "./Services/loginApi";
import {
  BrowserRouter as Router7,
  Switch,
  Route,
  Routes,
} from "react-router-dom";
function App() {
  const { data: userData, isLoading } = useGetLoginDataQuery();

  return (
    <div className="App">
      <Router7>
        <Routes>
          <Route
            path="/"
            element={
              <div>
                {userData == undefined ? <Login /> : <Dashboard />}
                {/* <Login/> */}
              </div>
            }
          />
          <Route
            path="/dashboard"
            element={
              <>
                {isLoading ? (
                  <h1 style={{ textAlign: "center" }}>Loading...</h1>
                ) : (
                  <>{userData == undefined ? <Login /> : <Dashboard />}</>
                )}
                {/* <Dashboard/> */}
              </>
            }
          />
        </Routes>
      </Router7>
      {/* <Login/> */}
    </div>
  );
}

export default App;
