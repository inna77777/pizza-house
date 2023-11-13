import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "./layout/Layout";
import Home from "./homePage/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<Home />} />
        <Route path="about" element={<div>About</div>}/>
        <Route path="typography" element={<div>Typography</div>}/>
        <Route path="contacts" element={<div>Contacts</div>}/>
      </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
