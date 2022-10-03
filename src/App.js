// import Navbar from "./components/Navbar/Navbar";
import { CardSection1, Navbar } from "./components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ProfilePage, Slider, Course } from "./Pages";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<ProfilePage />}>
          <Route index element={<CardSection1 />} />
          <Route path="slider" element={<Slider />} />
        </Route>
        <Route path="Course" element={<Course />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
