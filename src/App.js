import { Routes, Route } from "react-router-dom";

import Navigator from "./routes/navigation/navigation.component";

import Home from "./routes/home/home.component";

import Shop from "./routes/shop/shop.component";

import Authentication from "./routes/authentication/authentication.component";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigator />}>
        <Route index element={<Home />} />
        <Route path="/Shop" element={<Shop />} />
        <Route path="/auth" element={<Authentication />} />
      </Route>
    </Routes>
  );
};

export default App;