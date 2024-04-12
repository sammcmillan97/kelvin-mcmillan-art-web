import React, { useEffect } from "react";
import { original } from "../../types/original";
import orginalsData from '../../mocks/originals.json';
import axios from 'axios';
import "./Originals.css";
import { NavLink } from "react-router-dom";

const Originals: React.FC = () => {
    const [orginals, setOrginals] = React.useState<original[]>([]);

    useEffect(() => {
      axios.get('http://localhost:8000/paintings/originals').then((response) => {
        setOrginals(response.data);
      })
      .catch((error) => {
        console.error(`Error fetching data: ${error}`);
      });
    }, []);

    return (
      <div className="originals-cotent">
        <h3 className="oringals-title">All works below are currently available for purchase.</h3>
        <ul className="orginals-list">
            {orginals.map((orginal: original) => (
              <li key={orginal.id}>
                <div className="originals-list-item">
                  <NavLink className="originals-image-link" to={`/Originals/${orginal.id}`}>
                    <img className="orginals-image" src={"./src/mocks/images/" + orginal.title + ".jpg"} alt={orginal.title} />
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