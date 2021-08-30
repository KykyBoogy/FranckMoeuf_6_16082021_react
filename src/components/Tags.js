import React from 'react';

let  selectedTags = [];

const Tags = () => {
    
    const tagsArray = ['portrait', 
                        'art', 
                        'mode', 
                        'architecture',
                        'voyage',
                        'sports',
                        'animaux',
                        'événements']
    let checkedTag = false;
// const FisheyeDataFR = require('../data/FisheyeDataFR.json');
// const DataPhotographes = FisheyeDataFR.photographes;

// console.log(tagsArray);
    return (
            <div className="navbar">
                {tagsArray.map((tag) => {
                    return (
                        <button className={`navbar__buttons ${checkedTag === true ? 'navbar__buttons__is-checked' : ''}`}
                                type="button" 
                                key={tag}
                                onClick={() => {
                                    if (!selectedTags.includes(tag) /* pas sélectionné */) {
                                        //ajoute
                                        selectedTags.push(tag);
                                        checkedTag = true;
                                        
                                    } else {
                                        //on retire le tag de la liste
                                        selectedTags.splice(tag);
            
                                    }
                                    console.log(selectedTags);
                                }}
                                >
                            <span>#{tag}</span>
                        </button>
                    )
                })}
                
            </div>
        
    );
};

export default Tags;