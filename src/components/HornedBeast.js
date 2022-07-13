import {Component} from 'react';

class HornedBeast extends Component{
    constructor(props){

        super(props);

    }

    render(){
        return(
            <div>
                <h2>{this.props.keyword}</h2>
                <img src={this.props.image_url} alt={this.props.title} title={this.props.title}/>
                <p>{this.props.description}</p>
            </div>
        )
    }
}

export default HornedBeast;