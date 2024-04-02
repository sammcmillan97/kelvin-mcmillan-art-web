import React, { useEffect } from "react";
import { original} from "../../types/original";
import "./Original.css";
import originalData  from '../../mocks/original.json';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";

const Original: React.FC = () => {
  const [orginal, setOrginal] = React.useState<original>();

    useEffect(() => {
      //simulate api call
      setTimeout(() => {
        setOrginal(originalData);
      }, 500);
    }, []);
    return (
      <div className="orignal-content">   
        {/* <button className="back-button" onClick={() => history.back()}> <FontAwesomeIcon icon={faArrowLeftLong} /></button> */}
        <div className="original-container">
            <img className="orginal-image" src={"/src/mocks/images/" + originalData.id + ".jpg"} alt={originalData.title} />
            <h2>{originalData.title}, {originalData.location}</h2>
            <p>{originalData.description}</p>
            <span> </span>
            <p>{originalData.type} - {originalData.price} - {originalData.dimensions}</p> 
            <p>Avaliable at <a href={originalData.galleryLink}>{originalData.galleryName}</a></p>
        </div>
      </div>
    );
  }
  
  export default Original;