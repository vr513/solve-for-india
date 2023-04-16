import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import ProjectDetails from "./screens/ProjectDetails";
import Team from "./screens/Team";
import Implementation from "./screens/Implementation";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Banner />} />
        <Route path="/project-details" element={<ProjectDetails />} />
        <Route path="/team" element={<Team />} />
        <Route path="/implementation" element={<Implementation />} />
      </Routes>
    </>
  );
};

export default App;
