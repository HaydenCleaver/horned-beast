import {Component} from 'react';
import Button from 'react-bootstrap/Button';
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
            <Container>
                <Col lg={true}>
                    <h2>{this.props.keyword}</h2>
                    <img src={this.props.image_url} alt={this.props.title} title={this.props.title} width="200px"/>
                    <p>{this.props.description}</p>
                    <p>Favorited: {this.state.votes} &hearts;</p>
                    <Button variant="primary" onClick={this.handleClick}>Vote for your favorite Horned Beast</Button>
                </Col>
            </Container>
        )
    }
}

export default HornedBeast;