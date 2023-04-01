import logo from "./img/logo1.png";
import { AiOutlineArrowDown } from "react-icons/ai";
import {
  BsRocket,
  BsFillCarFrontFill,
  BsAirplaneEngines,
} from "react-icons/bs";
import { useRef } from "react";

function App() {
  const table = useRef();

  const tableTop = () => {
    setTimeout(() => {
      table.current.scrollIntoView({ behavior: "smooth" });
    }, 200);
  };

  return (
    <>
      <div className="main">
        <div className="main-overlay"></div>
        <div className="header">
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>

          <input type="checkbox" id="menu-checkbox" />
          <label
            for="menu-checkbox"
            className="toggle-button"
            data-open="MENU"
            data-close="CLOSE"
            onclick
          ></label>
          <nav className="menu">
            <ul>
              <li>
                <a href="#" className="menu-link">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="menu-link">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="menu-link">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="menu-link">
                  Articles
                </a>
              </li>
              <li>
                <a href="#" className="menu-link">
                  Pricing
                </a>
              </li>
            </ul>
          </nav>
          <div>
            <a href="#" className="get-started-btn menu-link">
              get started
            </a>
          </div>
        </div>
        <div className="main-text">
          <span>lorem ipsum dolor</span>
          <h1>Pricing Table</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate,
            necessitatibus.
          </p>
        </div>
        <div onClick={tableTop} className="main-arrow">
          <div className="arrow-down">
            <AiOutlineArrowDown className="arrow" />
          </div>
        </div>
      </div>
      <div className="table" ref={table}>
        <div className="table-header">
          <span className="table-subtitle">Misocial</span>
          <h2>Select a Plan</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore,
            nesciunt.
          </p>
        </div>
        <div className="price-tags">
          <div className="price-tag">
            <BsFillCarFrontFill />
            <span>personal</span>
            <h4>
              <sup>$</sup>0<sub>/month</sub>
            </h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
              facilis, sunt, dolor repellat doloribus quod voluptatem ut,
              ratione esse odio ea blanditiis est ullam velit incidunt corporis
              exercitationem numquam. Hic.
            </p>
            <button className="price-btn">select plan</button>
          </div>
          <div className="price-tag">
            <BsAirplaneEngines />
            <span>personal</span>
            <h4>
              <sup>$</sup>19<sub>/month</sub>
            </h4>
            <p>
              Tempora delectus perferendis excepturi ullam quia nesciunt
              incidunt. Nesciunt laboriosam odit quaerat neque autem quis veniam
              quam, quisquam provident error nisi quidem sit modi tenetur
              voluptatem animi dicta expedita corporis.
            </p>
            <button className="price-btn">select plan</button>
          </div>
          <div className="price-tag">
            <BsRocket />
            <span>personal</span>
            <h4>
              <sup>$</sup>30<sub>/month</sub>
            </h4>
            <p>
              Iste maxime dolore eveniet? Ad iste veniam rerum nisi nesciunt
              totam temporibus libero maiores harum non. Quo consectetur, ut
              magni modi soluta quisquam hic ea vel pariatur praesentium sint
              autem!
            </p>
            <button className="price-btn">select plan</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
