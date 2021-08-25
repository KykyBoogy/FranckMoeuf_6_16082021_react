import React from 'react';

const  selectedTags = ['test', '2'];

const Tags = () => {
    const tagsArray = ['Portrait', 
                        'Art', 
                        'Fashion', 
                        'Architecture',
                        'Travel',
                        'Sport',
                        'Animals',
                        'Events']
    return (
            <div className="navbar">
                {tagsArray.map((tag) => {
                    return (
                        <button className={`navbar__buttons ${/* si le tag est contenu dans l'array */true ? 'navbar__buttons__selected' : ''}`}
                                type="button" 
                                key={tag}
                                // onClick={() => {
                                //     if (/* pas sélectionné */) {
                                //         //ajoute
                                //     } else {
                                //         //on retire le tag de la liste
                                //     }
                                // }}
                                >
                            <span>#{tag}</span>
                        </button>
                    )
                })}
                
            </div>
        
    );
};

export default Tags;