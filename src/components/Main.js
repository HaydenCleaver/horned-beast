import {Component} from 'react';
import HornedBeast from './HornedBeast';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class Main extends Component {
    constructor(props) {
        super(props);

        this.state = {
            
        }
    }

    selectFavorite = (beast) => {
        console.log(beast);
        this.props.beastList.forEach(function(element){
            if(beast === element.image_url) {
                this.setState({currentBeast : element});
            }
        })
        console.log(this.state.currentBeast);
    }

    render(){
        console.log(this.state.currentBeast);
        return(
            <Container>
                <Row>
                    {this.props.beastList.map(beast =>
                        <Col>
                            <HornedBeast 
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