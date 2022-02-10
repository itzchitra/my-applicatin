import logo from "./Logo.png";
import "./App.css";
import slideone from "./asset/BYV1.png";
import slidetwo from "./asset/BYV2.jpg";
import slidethree from "./asset/BYV3.jpg";
import slidefour from "./asset/BYV4.jpg";
import slidefive from "./asset/BYV5.jpg";
import slidesix from "./asset/BYV6.jpg";
import slideseven from "./asset/BYV7.jpg";
import { Carousel } from "react-responsive-carousel";
import styles from "react-responsive-carousel/lib/styles/carousel.min.css";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="site-identity">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="site-name">Bhartiya Yoga Vidya kendra</h1>
        </div>
      </header>
      <div className="App-container">
        <div className="App-slideShow">
         
          <div className="">
          <Carousel showThumbs={false} infiniteLoop={true}>
        <div style={{ height: "200px", color: "#fff" }}><img src={slideone}  alt="Bhartiya Yoga Kendra" /></div>
        <div style={{ height: "200px", color: "#fff" }}><img src={slidetwo}  alt="Bhartiya Yoga Kendra" /></div>
        <div style={{ height: "200px", color: "#fff" }}><img src={slidethree}  alt="Bhartiya Yoga Kendra" /></div>
        <div style={{ height: "200px", color: "#fff" }}><img src={slidefour}  alt="Bhartiya Yoga Kendra" /></div>
        <div style={{ height: "200px", color: "#fff" }}><img src={slidefive}  alt="Bhartiya Yoga Kendra" /></div>
        <div style={{ height: "200px", color: "#fff" }}><img src={slidesix}  alt="Bhartiya Yoga Kendra" /></div>
        <div style={{ height: "200px", color: "#fff" }}><img src={slideseven}  alt="Bhartiya Yoga Kendra" /></div>
     
      </Carousel>
          </div>
        </div>
        <div className="App-loginScreen">
          <div className="form">
            <form className="register-form">
              <input type="text" placeholder="name" />
              <input type="password" placeholder="password" />
              <input type="text" placeholder="email address" />
              <button>create</button>
              <p className="message">
                Already registered? <a href="#">Sign In</a>
              </p>
            </form>
            <form className="login-form">
              <input type="text" placeholder="username" />
              <input type="password" placeholder="password" />
              <button>login</button>
              <p className="message">
                Not registered? <a href="#">Create an account</a>
              </p>
            </form>
          </div>
        </div>
      </div>
      <footer className="app-footer">Footer text goes here</footer>
    </div>
  );
}

export default App;
