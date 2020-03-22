import React, {Component} from 'react';
import axios from 'axios';
// import App from './App';

class Home extends Component{ 

    render(){
        
        return(

            <div className='homestyle'>
                <div className='hometxt'>
                    <h1>Find your favourite movie!</h1>
                    <p>
                        With our Movie Db, easily scan through a wide collection of movies
                        at just a single click!
                    </p> 
                    <div className='container-fluid compmovies'>
                        <div className='row'>
                            {this.props.searchData}
                        </div>
                    </div>
                </div>
            </div>
            
        )
    }
}

export default Home;