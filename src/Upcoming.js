import React, {Component} from 'react';
import axios from 'axios';
import Card from './Card';

class Upcoming extends Component{ 

    constructor(){
        super();
        this.state = {
            movieList: []
        }
    }

    componentDidMount(){

        const apiKey = '1db9f1b82770bd212401300881714d61';
        const popularUrl = `https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}&language=en-US&page=3`;

        axios.get(popularUrl).then(response => {
            const movieData = response.data.results;
            this.setState({
                movieList : movieData
            })
        })
    }

    render(){

        const imageUrl = "http://image.tmdb.org/t/p/w300";
        const allMoviesdata = this.state.movieList.map((val,index)=>{
            return(
                <div className='col-xs-12 col-sm-6 col-md-4 col-lg-3' key={index}>
                    <Card image={`${imageUrl}${val.poster_path}`} />
                </div>
            )
        })
        
        return(
            <div className='compstyle'>
                <div className='container comptxt'>
                    <h1>Upcoming</h1>
                </div>
                <div className='container-fluid compmovies'>
                    <div className='row'>
                        {allMoviesdata}
                    </div>
                </div>
            </div>
        )
    }
}

export default Upcoming;