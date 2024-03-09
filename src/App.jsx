import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NavBar from "./components/navbar/NavBar";
import PageContainer from "./container/PageContainer";
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

function App() {
  return (
    <div>
    <PageContainer>
      <Router>
      <NavBar/>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
      </PageContainer>
    </div>
  );
}

export default App;
