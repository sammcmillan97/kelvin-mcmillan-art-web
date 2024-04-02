import React, { useEffect } from "react";
import { originals } from "../../types/originals";
import orginalsData from '../../mocks/originals.json';
import "./Originals.css";
import { NavLink } from "react-router-dom";

const Originals: React.FC = () => {
    const [orginals, setOrginals] = React.useState<originals[]>([]);

    useEffect(() => {
      //simulate api call
      setTimeout(() => {
        setOrginals(orginalsData);
      }, 500);
    }, []);

    return (
      <div className="originals-cotent">
        <h3 className="oringals-title">All works below are currently available for purchase.</h3>
        <ul className="orginals-list">
            {orginals.map((orginal: originals) => (
              <li key={orginal.id}>
                <div className="originals-list-item">
                  <NavLink className="originals-image-link" to={`/Originals/${orginal.id}`}>
                    <img className="orginals-image" src={"./src/mocks/images/" + orginal.id + ".jpg"} alt={orginal.title} />
                    </NavLink>
                    <div><p>{orginal.title}</p></div>
                </div>
              </li> 
             ))}
        </ul>    
      </div>
    );
  }
  
  export default Originals;