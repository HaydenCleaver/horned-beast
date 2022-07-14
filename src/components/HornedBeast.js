import {Component} from 'react';
import './HornedBeast.css';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import Figure from 'react-bootstrap/Figure';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

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

    render(){
        return(
                <Col>
                    <h2>{this.props.keyword}</h2>
                    <Figure class="beast">
                        <img src={this.props.image_url} alt={this.props.title} title={this.props.title} width={200} className="img"/>
                        <Figure.Caption>{this.props.description}</Figure.Caption>
                        <Figure.Caption>Favorited: {this.state.votes} &hearts;</Figure.Caption>
                        <Button variant="primary" onClick={this.handleClick}>Vote for your favorite Horned Beast</Button>
                    </Figure>
                </Col>
        )
    }
}

export default HornedBeast;