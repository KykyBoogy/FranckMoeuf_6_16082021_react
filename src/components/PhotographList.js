import React from 'react';


const PhotographList = () => {

    const FisheyeDataFR = require('../data/FisheyeDataFR.json');
    const DataPhotographes = FisheyeDataFR.photographes;
    
    console.log(FisheyeDataFR);
    return (
        <div>
            <main className="container__main">
                { DataPhotographes.map((data) => {
                    //console.log("../assets/img/photographers_id_photos/" + data.portrait);
                   return (
                       <div className="photographer" key={data.id}>  
                            <div className="photographer__img">
                                <a href="todo.html" className="photographer__img--link">
                                    <img src={require(`../assets/img/photographers_id_photos/${data.portrait}`).default} alt="" />
                                    <h2>{data.nom}</h2>
                                </a>                           
                            </div>
                            <div className="photographer__text">
                                <p className="photographer__text--localisation">{data.ville},{data.country || data.pays}</p>
                                <p className="photographer__text--desc">{data.tagline}</p>
                                <p className="photographer__text--price">{data.prix}€/jour</p>
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