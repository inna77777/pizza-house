import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "./layout/Layout";
import Home from "./homePage/Home";
import About from "./aboutPage/About";
import ContactMain from "./ContactPage/ContactMain";
import Login from "./LoginPage/Login";
import SignUp from "./LoginPage/SignUp";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="about/:section" element={<About />} />
          <Route path="login" element={<Login/>} />
          <Route path="signUp" element={<SignUp/>} />
          <Route path="contacts" element={<ContactMain/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
