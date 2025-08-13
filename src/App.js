import React, { useContext } from "react";
import Header from "./components/Header/Header";
import "./App.css";
import { ThemeContext } from "./contexts/theme";
import { Box } from "@mui/material";
import About from "./components/About/About";
import HeroPage from "./components/HeroPage/HeroPage";
import Experience from "./components/Experience/Experience";
import Projects from "./components/Projects/Projects";
import Education from "./components/Education/Education";
import Rewards from "./components/Rewards/Rewards";

const App = () => {
  const [{ themeName }] = useContext(ThemeContext);
  return (
    <Box id="top" className={`${themeName} app`}>
      <Header />
      <main>
        <HeroPage />
        <About />
        <Experience />
        <Projects />
        <Education />
        <Rewards />
        <Box style={{ height: "30px" }}></Box>
      </main>
      <footer></footer>
    </Box>
  );
};

export default App;

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<AppLayout />);
