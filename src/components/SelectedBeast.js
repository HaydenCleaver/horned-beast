import {Component} from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

class SelectedBeast extends Component {

    render(){
        return(
            <Modal 
                show={this.props.showStatus} 
                onHide={this.props.closeModal}
                size="lg">
                <Modal.Header>
                    <Modal.Title>Selected Beast: {this.props.beastName}</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <img src={this.props.beastPic} alt="" style={{maxWidth: "400px"}}/>
                    <p>{this.props.beastInfo}</p>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={this.props.closeModal}>Close</Button>
                </Modal.Footer>
            </Modal>
        )

    }
}

export default SelectedBeast;