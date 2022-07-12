import {Component} from 'react';

class HornedBeast extends Component{
    constructor(name, img, text, title){

        super(name, img, text);
        this.name = name;
        this.img = img;
        this.text = text;
        this.title = title;

    }

    render(){
        return(
            <div>
                <h2>{HornedBeast.name}</h2>
                <img src={this.img} alt={this.title} title={this.title}/>
                <p>{this.text}</p>
            </div>
        )
    }
}

export default HornedBeast;