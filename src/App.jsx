import { Routes, Route } from "react-router-dom";
import Container from "./components/Container";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./Pages/Home";
import Create from "./Pages/Create";
import Post from "./Pages/BlogPost";
import "./index.css";

function App() {
  return (
    <>
      <Header />
      <Container>
        <Routes>
          <Route index element={<Home />}></Route>
          <Route path="/create" element={<Create />}></Route>
          <Route path="/posts/:id" element={<Post />}></Route>
        </Routes>
      </Container>
      <Footer />
    </>
  );
}
export default App;
