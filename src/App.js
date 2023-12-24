import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "./layout/Layout";
import Home from "./homePage/Home";
import About from "./aboutPage/About";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="about/:section" element={<About />} />
          <Route path="typography" element={<div>Typography</div>} />
          <Route path="contacts" element={<div>Contacts</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
