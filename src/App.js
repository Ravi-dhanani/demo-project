import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./component/landingpage/HomePage";
import ShopPage from "./component/shop/ShopPage";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<ShopPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
