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
            beastList : this.props.beastList,
            filterStatus: false
        }
    }

    hornFilter = (e) => {
        let hornVal = parseInt(e.target.value);
        if (!hornVal || hornVal === 0){
            this.setState({beastList : this.props.beastList});
        } else {
            this.setState({beastList: this.props.beastList.filter(el => el.horns === hornVal)});
        }
    }

    render(){
        return(
            <Container>
                <Form.Select style={{marginBottom: "5px"}} onChange ={this.hornFilter}>

                    <option value = "0">Sort by:</option>
                    <option value = "0">All Beasts</option>
                    <option value = "1">One Horned Beasts</option>
                    <option value = "2">Two Horned Beasts</option>
                    <option value = "3">Three Horned Beasts</option>
                    <option value = "100">100 Horned Beasts</option>

                </Form.Select>
                <Row xs={1} sm={2} md={3} lg={4} xl={5}>
                    {this.state.beastList.map(beast =>
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