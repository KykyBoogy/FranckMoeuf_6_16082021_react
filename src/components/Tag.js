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
        <nav>
            <div className="headerNavList">
                {tagsArray.map((tag) => {
                    return (
                        <button className="buttonGroup"
                                type="button" 
                                key={tag}>
                            <span>#{tag}</span>
                        </button>
                    )
                })}
                
            </div>
        </nav>
    );
};

export default Tag;