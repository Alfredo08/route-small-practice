import React from 'react';

function Profile( props ){
    console.log( props );
    const currentUser = props.profiles.find( (profile) => {
        return (profile.id === Number(props.match.params.identifier))
    });

    return(
        <div>
            <h2> Welcome back {currentUser.username} </h2>
            <p> Age: {currentUser.age}</p>
        </div>
    );
}

export default Profile;