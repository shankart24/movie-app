import React, {Component} from 'react';
import './App.css';

class Gridrow extends Component{
    render(){
        return(
                <div className="col-sm-6 col-md-3 col-lg-3 column" style={{backgroundColor:'cyan'}}>
                    {this.props.data}
                </div>
        )
    }
}

export default Gridrow;
