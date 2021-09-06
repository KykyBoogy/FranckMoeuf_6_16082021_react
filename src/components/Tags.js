import React from 'react';


const Tags = ({selectedTags, setSelectedTags}) => {
    
    const tagsArray = ['portrait', 
                        'art', 
                        'fashion', 
                        'architecture',
                        'travel',
                        'sports',
                        'animals',
                        'events']
    
// const FisheyeDataFR = require('../data/FisheyeDataFR.json');
// const DataPhotographes = FisheyeDataFR.photographes;

// console.log(tagsArray);
// console.log(selectedTags);
    return (
            <div className="navbar">
                {tagsArray.map((tag, index) => {
                    // console.log(selectedTags, selectedTags.includes(tag));
                    return (
                        <button className={`navbar__buttons ${selectedTags.includes(tag) ? 'button-is-checked' : ''}`}
                                type="button" 
                                key={index}
                                onClick={() => {
                                    if (!selectedTags.includes(tag) /* pas sélectionné */) {
                                        //ajoute
                                        setSelectedTags([...selectedTags, tag])
                                         // console.log(tag);
                                        
                                    } else {
                                        //on retire le tag de la liste
                                        setSelectedTags(selectedTags.filter((selectedTag) => 
                                            selectedTag !== tag
                                        ))
            
                                    }
                                    
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