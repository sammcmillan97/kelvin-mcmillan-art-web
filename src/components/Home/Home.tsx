import React, { useEffect, useState } from "react";
import './Home.css';
import axios from "axios";
import { original } from "../../types/original";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons/faArrowRight';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons/faArrowLeft';



const Home: React.FC = () => {

  const [orginals, setOrginals] = React.useState<original[]>([]);
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    axios.get('http://localhost:8000/paintings/originals').then((response) => {
      setOrginals(response.data);
    })
    .catch((error) => {
      console.error(`Error fetching data: ${error}`);
    });
  }, []);

  function showPrevImage() {
    setSlide(index => {
      if (index === 0) return orginals.length - 1
      return index - 1
    })
  }

  function showNextImage() {
    setSlide(index => {
      if (index === orginals.length - 1) return 0
      return index + 1
    })
  }

    return (
      <div className="home-div">

        <div className="expression-div">
          <img className="quote-image" src={"/src/assets/quote.jpg"} alt='quote' />
          <div className="quote-div">
            <h3 className="quote-text">"The most important element in a painting is light, especially the light from either end of the day, 
            which can bring a painting to life. The interplay of colors, shadows, and contrasts illuminated by this type of light can transform even the most mundane subject into something truly captivating."</h3>
          </div>
        </div>

        <hr></hr>

        <div className="originals-div">
          <NavLink className="originals-link" to={'/Originals'}>
            <h1>Latest Originals</h1>
          </NavLink>

          
          <div className="originals-carousel">

            <button  onClick={showPrevImage} className="img-slider-btn" style={{left : 0}}>
            <div className="test-button">
              <FontAwesomeIcon icon={faArrowLeft} size="2x"/>
              </div>
            </button>

            {orginals.map((orginal: original, index: number) => (
                  <NavLink className="originals-image-link" to={`/Originals/${orginal.id}`}>
                    <img className={slide === index ? "slide" : "slide slide-hidden"} src={"./src/mocks/images/" + orginal.title + ".jpg"} alt={orginal.title} key={index} />
                  </NavLink>
              ))}
              <button onClick={showNextImage} className="img-slider-btn" style={{right : 0}}>
                <div className="test-button">
                <FontAwesomeIcon icon={faArrowRight} size="2x" />
                </div>
              </button>
          </div>



        </div>

        <hr></hr>

        <div className="prints-div">
          <h1>Fine Art Prints</h1>
        </div>

      </div>
    );
  }
  
  export default Home;