import "./utils/App.css";
import { Row } from "reactstrap";
import Navi from "./components/Navi";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Movies from "./pages/Movies";
import Serias from "./pages/Serias";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Row>
        <Navi />
      </Row>
      <Row>
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/serias" element={<Serias />} />
        </Routes>
      </Row>
      <Row> 
        <Footer />
      </Row>
    </div>
  );
};

export default App;
