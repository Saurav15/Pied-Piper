import "./App.css";
import SignIn from "./components/signin";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PrivateRoute from "./routes/PrivateRoute";
import AddEployee from "./components/addEmployee";
import ProjectDetailsPage from "./components/project-details";
import Dashboard from "./components/dashboard";
import AddEmployee from "./components/addEmployee";
function App() {
  return (
    // <div>
    //   <Header />
    //   <SignIn />
    // </div>
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<SignIn />} />
          {/* <Route path=":name" element={<ErrorPage />} /> */}
          {/* <Route
          path="/"
          element={<SignUp INITIAL_VALUES={INITIAL_VALUES} />}
        /> */}
          <Route element={<PrivateRoute />}></Route>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/project-details" element={<ProjectDetailsPage />} />
          <Route path="/addEmployee" element={<AddEmployee />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
