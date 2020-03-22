import React, {Component} from 'react';
import './App.css';
import './hover.css';

class Card extends Component{
  render(){
    return(
      
      <div className="card">
        <img src={this.props.image} style={{height:'350px'}} className="card-img-top" alt="Poster" />
      </div>
          
    )
  }
}

export default Card;
