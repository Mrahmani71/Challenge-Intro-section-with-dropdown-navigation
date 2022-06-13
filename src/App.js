import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./layouts/Layout";
import styles from "./app.module.css"
import cb from "classnames"
import heroImageDesktop from "./assets/images/image-hero-desktop.png";
import heroImageMobile from "./assets/images/image-hero-mobile.png";
import audiophile from "./assets/images/client-audiophile.svg";
import databiz from "./assets/images/client-databiz.svg"
import marker from "./assets/images/client-maker.svg"
import meet from "./assets/images/client-meet.svg"
import { useEffect, useState } from "react";

function MainRoutes() {
  const [desktop, setDesktop] = useState(false)

  useEffect(() => {

    const updateWindowDimensions = () => {
      const newHeight = window.innerWidth;

      if(newHeight >= 768) {
        setDesktop(false)
      } else {
        setDesktop(true)
      }
    };

    window.addEventListener("resize", updateWindowDimensions);
    return () => window.removeEventListener("resize", updateWindowDimensions) 
    
  }, [])


  return (
    <Layout>
      <section className={cb(styles.hero)}>
        <div className={cb(styles.content)}>
          <h1>Make remote work</h1>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo laborum odio architecto tempore omnis officia natus vel exercitationem repellat dignissimos delectus saepe.</p>

          <button>Learn more</button>
          <div className={cb(styles.colleagues)}>
            <div>
              <img src={databiz} alt="colleagues" />
            </div>

            <div>
              <img src={audiophile} alt="colleagues" />
            </div>

            <div>
              <img src={meet} alt="colleagues" />
            </div>

            <div>
              <img src={marker} alt="colleagues" />
            </div>
          </div>
        </div>

        <div className={cb(styles.image)}>
          <img src={desktop ? heroImageMobile : heroImageDesktop} alt="hero images" />
        </div>
      </section>
    </Layout>
  )
}

function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainRoutes />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
