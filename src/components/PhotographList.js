import React from 'react';
import { Link } from 'react-router-dom';


const PhotographList = ({selectedTags}) => {

    const FishEyeData = require('../data/FishEyeData.json');
    const DataPhotographers = FishEyeData.photographers;
    
    // console.log(FisheyeDataFR);
    console.log(selectedTags);
    return (
        <div>
            <main className="container__main">
                { DataPhotographers.filter((photograph) => 
                    selectedTags.every((tag) => photograph.tags.includes(tag))).map((data) => {
                    // console.log("../assets/img/photographers_id_photos/" + data.portrait);
                   return (
                       <div className="photographer" key={data.id}>  
                            <div className="photographer__img">
                                <Link to={`/photograph/${data.id}`} className="photographer__img--link">
                                    <img src={require(`../assets/img/photographers_id_photos/${data.portrait}`).default} alt="" />
                                    <h2>{data.nom}</h2>
                                </Link>                           
                            </div>
                            <div className="photographer__text">
                                <p className="photographer__text--localisation">{data.city}, {data.country}</p>
                                <p className="photographer__text--desc">{data.tagline}</p>
                                <p className="photographer__text--price">{data.price}€/jour</p>
                            </div>
                            <ul className="photographer__tag">
                            {data.tags.map((tag) => {  
                                return (
                                <li className="buttonGroup"
                                        type="button" 
                                        key={tag}>
                                    <span>#{tag}</span>
                                </li>
                                )
                            })}
                            </ul>
                        </div>
                   )
                }) }
            </main>
        </div>
    );
};

export default PhotographList;