import React, { useEffect } from "react";
import { originals } from "../../types/originals";
import './Portfolio.css';
import orginalsData from '../../mocks/originals.json';
import { NavLink } from "react-router-dom";

const Originals: React.FC = () => {
    const [orginals, setOrginals] = React.useState<originals[]>([]);
    const [category, setCategory] = React.useState<String>("");

    useEffect(() => {
        console.log("Page is currently: " + category)
        setTimeout(() => {
            console.log("Getting oringals for page: " + category);
            setOrginals(orginalsData);
        }, 100);
    }, [category]);

    const handleCategoryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setCategory(event.target.value);
    };

    return (
        <div>
            <div className="category-selector">
                <label htmlFor="Category">Category</label>
                <select className="category-dropdown" id="catergory" onChange={handleCategoryChange}>
                    <option value="">All</option>
                    <option value="Marine">Marine</option>
                    <option value="Rural">Rural</option>
                    <option value="Landscape">Landscape</option>
                    <option value="Architectural">Architectural</option>
                    <option value="Portrait">Portrait</option>
                    <option value="Sport">Sport</option>
                </select>
            </div>
            <ul className="portfolio-list">
                {orginals.map((orginal: originals) => (
                    <li key={orginal.id}>
                        <div className="portfolio-list-item">
                            <img className="portfolio-image" src={"./src/mocks/images/" + orginal.id + ".jpg"} alt={orginal.title} />
                            <div><p>{orginal.title}</p></div>
                        </div>
                    </li> 
                ))}
            </ul>    
        </div>
    );
}

export default Originals;
