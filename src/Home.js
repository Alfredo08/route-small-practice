import React from 'react';

class Home extends React.Component{

    componentDidMount(){
        console.log( "Run the component did mount inside home!" );
    }

    render(){
        return(
            <div>
                This is the Home page
            </div>
        );
    }
}

export default Home;