import React from 'react';


const PhotographList = () => {

    const FisheyeDataFR = require('../data/FisheyeDataFR.json');
    const DataPhotographes = FisheyeDataFR.photographes;
    const portraitPath = "./public/img/Photographers ID Photos/";
    
    console.log(FisheyeDataFR);
    return (
        <div className="photograph-list">
            <div className="data-test">
                { DataPhotographes.map((data) => {
                    console.log(portraitPath + data.portrait);
                   return (
                       <div key={ data.id }>  
                            <header>
                                <img src={portraitPath + data.portrait } alt="" />                           
                            </header>
                            <h4>{ data.nom }</h4>
                            <h5>{ data.ville },{ data.country }</h5>
                            <p>{ data.tagline }</p>
                        <footer>
                        {data.tags.map((tag) => {
                            return (
                            <button className="buttonGroup"
                                    type="button" 
                                    key={ tag }>
                                <span>#{ tag }</span>
                            </button>
                            )
                        })}
                        </footer>
                       </div>
                   )
                }) }
            </div>
        </div>
    );
};

export default PhotographList;