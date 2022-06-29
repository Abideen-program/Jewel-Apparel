import { Routes, Route, Outlet } from "react-router-dom";
import Home from "./routes/home/home.component";

const Navigator = () => {
  return (
    <div>
      <div>
        <h1>This is the Navigation Bar</h1>
      </div>
      <Outlet />
      <Footer />
    </div>
  );
};

const Footer = () => {
    return (
      <div>
        <div>
          <h1>This is the Footer Bar</h1>
        </div>
      </div>
    );
  };
  

const Shop = () => {
    return(
        <h1>This is the Shop Page</h1>
    )
}

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigator />}>
        <Route path="/Home" element={<Home />} />
        <Route path="/Shop" element={<Shop />} />
      </Route>
    </Routes>
  );
};

export default App;
