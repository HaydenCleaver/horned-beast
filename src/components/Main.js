import {Component} from 'react';
import HornedBeast from './HornedBeast';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

class Main extends Component {
    constructor(props) {
        super(props);

        this.state = {
            
        }
    }

    render(){
        console.log(this.state.currentBeast);
        return(
            <Container>
                <Form.Select style={{marginBottom: "5px"}}>
                    {/* <Form.Label>Search for: </Form.Label>
                    <Form.Control></Form.Control>
                     */}
                    <option>Sort by:</option>
                    <option>Horn Number</option>
                </Form.Select>
                <Row xs={1} sm={2} md={3} lg={4} xl={5}>
                    {this.props.beastList.map(beast =>
                        <Col>
                            <HornedBeast
                            horns = {beast.horns} 
                            keyword = {beast.keyword}
                            title={beast.title} 
                            image_url={beast.image_url}
                            description={beast.description}
                            handleBeast={this.props.handleBeast} 
                            />
                        </Col>
                    )}
                </Row>
            </Container>
        )
    }
}

export default Main;