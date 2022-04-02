import "./App.css";
import SignIn from "./components/signin";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PrivateRoute from "./routes/PrivateRoute";
import Index from "./components/dashboard";
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
          <Route path="/dashboard" element={<Index />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
