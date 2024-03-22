import React, { useEffect } from "react";
import { Orginals } from "../../types/orginals";
import orginalsData from '../../mocks/originals.json';
import "./Originals.css";
import { NavLink } from "react-router-dom";

const Originals: React.FC = () => {
    const [orginals, setOrginals] = React.useState<Orginals[]>([]);

    useEffect(() => {
      //simulate api call
      setTimeout(() => {
        setOrginals(orginalsData);
      }, 500);
    }, []);

    return (
      <div>
        <ul className="orginals-list">
            {orginals.map((orginal: Orginals) => (
              <li key={orginal.id}>
                <div className="originals-list-item">
                  <NavLink className="originals-image-link" to={`/Originals/${orginal.id}`}>
                    <img className="orginals-image" src={"./src/mocks/images/" + orginal.imageUrl} alt={orginal.title} />
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