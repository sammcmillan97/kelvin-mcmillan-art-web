import React, { useEffect } from "react";
import { useParams, Link } from 'react-router-dom';
import { original} from "../../types/original";
import "./Original.css";
import axios from "axios";

const Original: React.FC = () => {

  let { id } = useParams<{ id: string }>();
  const [original, setOrginal] = React.useState<original>({} as original);

    useEffect(() => {
      axios.get('http://localhost:8000/paintings/originals/' + id).then((response) => {
        setOrginal(response.data);
        console.log(response.data)
      })
      .catch((error) => {
        console.error(`Error fetching data: ${error}`);
      });
    }, []);

    return (
      <div className="orignal-content">   
        <div className="original-container">
          <div className="original-image-container">
            <img className="orginal-image" src={"/src/mocks/images/" + original.title + ".jpg"} alt={original.title} />
          </div>
          <h2>{original.title}</h2>
          <p>{original.info}</p>

          <p>{original.type} - ${original.price} - {original.dimensions}</p>
          {original.galleryLink ? (
            <p>Available at <Link to={`http://${original.galleryLink}`} target="_blank" rel="noopener noreferrer">{original.galleryName}</Link></p>
          ) : (
            <br/>
          )}
        </div>
      </div>
    );
  }
  
  export default Original;