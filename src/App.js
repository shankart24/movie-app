import React, {Component} from 'react';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';
import Card from './Card';
import Home from './Home';
import Nowplaying from './Nowplaying';
import Popular from './Popular';
import Upcoming from './Upcoming';


class App extends Component{

  constructor(){

    super();
    this.state = {
    movieList: []
    }

}

componentDidMount(){

    const apiKey = '1db9f1b82770bd212401300881714d61';
    const searchUrl = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&page=1&include_adult=false&query=`;

    axios.get(searchUrl).then(response =>{
      const movieData = response.data.results;
      this.setState({
        movieList : movieData
      })
    });

}

searchMovie = e =>{

    e.preventDefault();
    const apiKey = '1db9f1b82770bd212401300881714d61';
    const searchName = document.getElementById('search').value;
    const searchUrl = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&page=1&include_adult=false&query=${searchName}`;

    axios.get(searchUrl).then(response =>{
      const movieData = response.data.results;
      console.log(response.data.results);
      this.setState({
        movieList : movieData
      })
    });
}


  render(){

    const imageUrl = "http://image.tmdb.org/t/p/w300";
    const allMoviesdata = this.state.movieList.slice(0,8).map((val,index) => {
      return(

        <div className='col-xs-12 col-sm-6 col-md-4 col-lg-3' key={index}>
            <Card image={`${imageUrl}${val.poster_path}`} />
        </div>
      )
    });

    return(
        <div className='App'>

          <Router>

          <div className='container mynav'>
            <nav className="navbar navbar-expand-lg navbar-dark">
              <Link to='/' className="navbar-brand">Movie Db</Link>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>

              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto ">
                  
                  <li className="nav-item">
                    <Link to='/nowplaying' className="nav-link">now playing</Link>
                  </li>
                  <li className="nav-item">
                    <Link to='/popular' className="nav-link">popular</Link>
                  </li>
                  <li className="nav-item">
                    <Link to='/upcoming' className="nav-link">upcoming</Link>
                  </li>
                </ul>
                <form className="form-inline my-2 my-lg-0" onSubmit={this.searchMovie}>
                  <input className="form-control mr-sm-2" type="search" id='search' placeholder="Search" aria-label="Search" />
                  <button className="btn btn-outline-light my-2 my-sm-0" style={{color:'rgba(57, 176, 17, 0.9)',margin:'0 auto'}} type="submit">Search</button>
                </form>
              </div>
            </nav>
          </div>

          <div className='mycontent'>
              <Route exact path='/'><Home searchData={allMoviesdata}/></Route>
              <Route exact path='/nowplaying'><Nowplaying /></Route>
              <Route exact path='/popular'><Popular /></Route>
              <Route exact path='/upcoming'><Upcoming /></Route>
          </div>
          </Router>            
            
        </div>
    )
  }
}


export default App;
