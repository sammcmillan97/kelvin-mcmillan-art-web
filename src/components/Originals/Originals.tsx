import React, { useEffect } from "react";
import { Orginals } from "../../types/orginals";
import orginalsData from '../../mocks/originals.json';
import "./Originals.css";

const Home: React.FC = () => {
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
              <li className="originals-list-item" key={orginal.id}>
                <img className="orginals-image" src={"./src/mocks/images/" + orginal.imageUrl} alt={orginal.title} />
                <div><p>{orginal.title}</p> <p>{orginal.dimensions}</p></div>
              </li>     
             ))}
        </ul>    
      </div>
    );
  }
  
  export default Home;