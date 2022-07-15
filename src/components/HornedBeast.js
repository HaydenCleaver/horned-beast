import {Component} from 'react';
import './HornedBeast.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

class HornedBeast extends Component{
    constructor(){
        super();
        
        this.state = {
         votes:0,
        }
    }

    handleClick = (event) => {
        this.setState({votes: this.state.votes+1});
    }

    handleBeast = (event) => {
        console.log(this)
        this.props.handleBeast(this);
    }

    render(){
        return(
            <Card className="beast" >
                <img src={this.props.image_url} alt={this.props.title} title={this.props.title} width={200} className="img" onClick={this.handleBeast}/>
                <Card.Body>
                    <Card.Title>{this.props.keyword}</Card.Title>
                        
                        <Card.Text>{this.props.description}</Card.Text>
                        <Card.Text>Favorited: {this.state.votes} &hearts;</Card.Text>
                        <Button variant="primary" onClick={this.handleClick}>Vote for your favorite Horned Beast</Button>
                </Card.Body>
            </Card>
        )
    }
}

export default HornedBeast;