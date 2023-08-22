import { BrowserRouter, Routes, Route } from "react-router-dom";

import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";
import { ServicePage , NavB , ExperienceP} from "./components/pages";

const App = () => {
  return (
    <BrowserRouter>

      <Routes>
        <Route path="/" element={
          <div className='relative z-0 bg-primary'>
            <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
              <Navbar />
              <Hero />
            </div>
            <About />
            <Experience />
            <Tech />
            <Works />
            <Feedbacks />
            <div className='relative z-0'>
              <Contact />
              <StarsCanvas />
            </div>
          </div>
        } />
        //serv page
        <Route path="/servise" element={
          <div className='relative z-0 bg-primary'>
            <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
              <ServicePage />
              <NavB/>
            </div>
          </div>
        } />
        // exp page
        <Route path="/experiencePage" element={
          <div className='relative z-0 bg-primary'>
            <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
              <ExperienceP />
              <NavB/>
            </div>
          </div>
        } />

      </Routes>

    </BrowserRouter>
  );
}

export default App;
