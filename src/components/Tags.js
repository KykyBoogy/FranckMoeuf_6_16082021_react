import React, { useState } from 'react';

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
    const [list, updateList] = useState(tagsArray);

    const handleRemoveItem = (e) => {
        const name = e.target.getAttribute("name")
         updateList(list.filter(item => item.name !== name));
       };
// const FisheyeDataFR = require('../data/FisheyeDataFR.json');
// const DataPhotographes = FisheyeDataFR.photographes;

// console.log(tagsArray);
    return (
            <div className="navbar">
                {list.map((tag, index) => {
                    return (
                        <button className={`navbar__buttons ${checkedTag === true ? 'navbar__buttons__is-checked' : ''}`}
                                type="button" 
                                key={index}
                                onClick={() => {
                                    if (!selectedTags.includes(tag) /* pas sélectionné */) {
                                        //ajoute
                                        selectedTags.push(tag);
                                        checkedTag = true;
                                         // console.log(tag);
                                        
                                    } else {
                                        //on retire le tag de la liste
                                        // handleRemoveItem;
                                        // console.log(removedTag);
            
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