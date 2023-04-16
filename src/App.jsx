import { Routes, Route } from "react-router-dom";
import Container from "./components/container";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./Pages/Home";
import Create from "./Pages/Create";
import './index.css';

function App() {
  return (
    <>
      <Header />
      <Container>
        <Routes>
          <Route index element={<Home />}></Route>
          <Route path="/create" element={<Create />}></Route>
        </Routes>
      </Container>
      <Footer />
    </>
  );
}
export default App;
