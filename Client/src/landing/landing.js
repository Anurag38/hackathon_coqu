import css from './assets/css/styles.css';
// import 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.5.1/gsap.min.js';
import main from './assets/js/main.js';
import img1 from './assets/img/img1.png';
import img2 from './assets/img/img2.png';
import img3 from './assets/img/img3.png';
import img4 from './assets/img/img4.png';
import img5 from './assets/img/img5.png';
// import { useEffect } from 'react';
import logo from "./logo.png"
const Landing = () => {
    // useEffect(() => {
    //     main.init();
    //   }, []);
  return (
    <html lang="en">
    <head>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="stylesheet" href={css}/>
      <link href='https://cdn.jsdelivr.net/npm/boxicons@2.0.5/css/boxicons.min.css' rel='stylesheet'/>
      <title>Responsive landing page coffee 3D</title>
    </head>
    <body>
      <header className="l-header">
        <nav className="nav bd-grid">
          <div>
            <a href="#" className="nav__logo">
              <img src={logo} alt="Passion" />
            </a>
          </div>

          <div className="nav__toggle" id="nav-toggle">
            <i className="bx bx-menu"></i>
          </div>

          <div className="nav__menu" id="nav-menu">
            <div className="nav__close" id="nav-close">
              <i className="bx bx-x"></i>
            </div>
          </div>
        </nav>
      </header>

      <main className="l-main">
        <section className="home" id="home">
          <div className="home__container bd-grid">
            <div className="home__img">
              <img
                src={img1}
                alt=""
                data-speed="-1.5"
                className="move"
              />
              <img
                src={img4}
                alt=""
                data-speed="1.75"
                className="move"
              />
              <img
                src={img3}
                alt=""
                data-speed="3"
                className="move"
              />
              <img
                src={img2}
                alt=""
                data-speed="0.25"
                className="move"
              />
              <img
                src={img5}
                alt=""
                data-speed="-1.5"
                className="move"
              />
            </div>

            <div className="home__data">
              <h1 className="home__title">
                FIND
                <br />
                <span>YO PASSION</span>
              </h1>
              <p className="home__description">
                Discover your calling and unlock your true potential{" "}
                <br />
                with our virtual career counsellor.
              </p>

              <a href="/home" className="home__button">
                Get Started
              </a>
            </div>
          </div>
        </section>
      </main>
    </body>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.5.1/gsap.min.js"></script>

        {/* <script src="./assets/js/main.js"></script> */}
  </html>
  )}
  export default Landing;