import React from 'react';

const Tag = () => {
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
                        <button className="navbar__buttons"
                                type="button" 
                                key={tag}>
                            <span>#{tag}</span>
                        </button>
                    )
                })}
                
            </div>
        
    );
};

export default Tag;