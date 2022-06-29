import { Routes, Route } from "react-router-dom";
import Navigator from "./routes/navigation/navigation.component";
import Home from "./routes/home/home.component";
  

const Shop = () => {
    return(
        <h1>This is the Shop Page</h1>
    )
}

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigator />}>
        <Route index element={<Home />} />
        <Route path="/Shop" element={<Shop />} />
      </Route>
    </Routes>
  );
};

export default App;
