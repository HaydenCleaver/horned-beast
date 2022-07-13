import {Component} from 'react';
import Button from 'react-bootstrap/Button';

class HornedBeast extends Component{
    constructor(){
        super();
        
        this.state = {
         
        }
    }


    render(){
        return(
            <div>
                <h2>{this.props.keyword}</h2>
                <img src={this.props.image_url} alt={this.props.title} title={this.props.title} width="200px"/>
                <p>{this.props.description}</p>
                <p>Favorited: {this.props.votes} &hearts;</p>
                <Button variant="primary" onClick={this.props.click}>Vote for your favorite Horned Beast</Button>
            </div>
        )
    }
}

export default HornedBeast;