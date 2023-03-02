
import React from 'react';

function PostSections({name, description, message, photoUrl}) {
    return <div className="post">

        <div className="post-header">

        
        <div className="post-info">
            <h2>{name}</h2>
            <p>{description}</p>
        </div>
        </div>
        <div className="post-body">
        <p>Messaggio Post</p>
        </div>
        </div>
    
}


export default PostSections;