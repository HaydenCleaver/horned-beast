import {Component} from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

class SelectedBeast extends Component {

    render(){
        if (this.props.currentBeast)
        return(
            <Modal.Dialog>
                <Modal.Header closeButton>
                    <Modal.Title>Selected Beast: {this.props.currentBeast.keyword}</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <img src={this.props.currentBeast.image_url} alt=""/>
                    <p>{this.props.currentBeast.description}</p>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary">Close</Button>
                </Modal.Footer>
            </Modal.Dialog>
        )

    }
}

export default SelectedBeast;