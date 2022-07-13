import {Component} from 'react';
import Image from 'react-bootstrap/Image';


class BeastList extends Component {

    render() {
        return (
        <div>
           {this.props.list.map(function(beast){
            
            return <div> <Image width="200px" title = {beast.title} src={beast.image_url} onClick={() => this.props.selectBeast(beast)} /> 
            <p>{beast.description}</p> 
            </div>

            })

           } 

        </div>
        )
    }
}

export default BeastList;