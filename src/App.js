// import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./containers/Header";
import ProductList from "./containers/ProductList";
import ProductDetails from "./containers/ProductDetails";
// import ProductComponent from "./containers/ProductComponent";

function App() {
  return (
    <div className="App">
      <Router>
        {/* <div>
          <Header />
        </div> */}
        <div>
          <Routes>
            <Route path="/" exact element={<ProductList />} />
            <Route
              path="/product/:productId"
              exact
              element={<ProductDetails />}
            />
            {/* <Route
              path="/details/:detailsid"
              exact
              element={<ProductDetails />}
            /> */}
            <Route>404 Not Found</Route>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
