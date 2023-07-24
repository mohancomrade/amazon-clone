import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Components/Home";
import CheckOut from "./Components/CheckOut";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/checkout"
            element={
              <h1>
                <Header /> <CheckOut />
              </h1>
            }
          ></Route>
          <Route path="/login" element={<h1>Login Page</h1>}></Route>
          <Route
            path="/"
            element={
              <h1>
                {" "}
                <Header /> <Home />
              </h1>
            }
          ></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
