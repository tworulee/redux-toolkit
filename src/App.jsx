import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NavBar from "./components/navbar/NavBar";
import PageContainer from "./container/PageContainer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Detail from "./pages/Detail";
import Cart from "./pages/Cart";

function App() {
  return (
    <div>
      <PageContainer>
        <Router>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products/:id" element={<Detail />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </Router>
      </PageContainer>
    </div>
  );
}

export default App;
