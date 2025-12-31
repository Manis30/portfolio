import { Header } from "./components/header";
import Home from "./components/home";
import Skills from "./components/skills";
import Projects from "./components/projects";
import Education from "./components/education";
import Contact from "./components/contact";
import Footer from "./components/footer";
import LiquidEther from "./components/LiquidEther";
import "./App.css";

function App() {
  return (
    <>
      <div className="liquid-bg bg-black">
        <LiquidEther
          colors={["#5227FF", "#FF9FFC", "#B19EEF"]}
          mouseForce={20}
          cursorSize={100}
          isViscous={false}
          viscous={30}
          iterationsViscous={32}
          iterationsPoisson={32}
          resolution={0.5}
          isBounce={false}
          autoDemo={true}
          autoSpeed={0.5}
          autoIntensity={2.2}
          takeoverDuration={0.25}
          autoResumeDelay={3000}
          autoRampDuration={0.6}
        />
      </div>
      <div className="site-content ">
        <Header />
        <Home/>
        <Skills/>
        <Projects/>
        <Education/>
        <Contact/>
        <Footer/>
      </div>
    </>
  );
}

export default App;
