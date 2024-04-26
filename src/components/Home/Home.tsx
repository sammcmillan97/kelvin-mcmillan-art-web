import React, { useEffect, useState } from "react";
import './Home.css';
import axios from "axios";
import { original } from "../../types/original";
import { NavLink } from "react-router-dom";

const Home: React.FC = () => {

  const [orginals, setOrginals] = React.useState<original[]>([]);
  const [slide, setSlide] = useState(2);

  useEffect(() => {
    axios.get('http://localhost:8000/paintings/originals').then((response) => {
      setOrginals(response.data);
    })
    .catch((error) => {
      console.error(`Error fetching data: ${error}`);
    });
  }, []);

    return (
      <div className="home-div">
          <div className="originals-div">
            <h1>Latest artwork</h1>
            <div className="originals-carousel">
            {orginals.map((orginal: original, index: number) => (
                  <NavLink className="originals-image-link" to={`/Originals/${orginal.id}`}>
                    <img className={slide === index ? "slide" : "slide slide-hidden"} src={"./src/mocks/images/" + orginal.title + ".jpg"} alt={orginal.title} key={index} />
                  </NavLink>
             ))}
            </div>
          </div>

        <div className="expression-div">
          <img className="quote-image" src={"/src/assets/quote.jpg"} alt='quote' />
          <div className="quote-div">
            <h3 className="quote-text">"The most important element in a painting is light, especially the light from either end of the day, 
            which can bring a painting to life. The interplay of colors, shadows, and contrasts illuminated by this type of light can transform even the most mundane subject into something truly captivating."</h3>
          </div>
        </div>

        <div className="prints-div">
          <h1>Fine Art Prints</h1>
        </div>

      </div>
    );
  }
  
  export default Home;