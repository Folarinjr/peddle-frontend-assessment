import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LandingPage from "./components/layout/LandingPage";
import NavBar from "./components/layout/NavBar";
import About from "./components/layout/About";
import Home from "./components/layout/Home";


import GitHub from "./components/user/GitHub";
import { GitHubProvider } from "./context/GitHubContext";

const App = () => {
  return (
    <GitHubProvider>
      <>
        <Router>
          <NavBar/>
            <Routes>
              <Route path="/github" element={<GitHub/>}/>
              <Route path="/comingsoon" element={<LandingPage/>}/>
              <Route path="/about" element={<About/>}/>
              <Route path="/" element={<Home/>}/>
            </Routes>
        </Router>
      </>
    </GitHubProvider>
  );
}

export default App;
