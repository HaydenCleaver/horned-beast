import {Component} from 'react';

class HornedBeast extends Component{
    constructor(title, img, text){

        super();
        this.title = title;
        this.img = img;
        this.text = text;

    }

    render(){
        return(
            <div>
                <h2>HornedBeast.title</h2>
                {}
                <img src="" alt="" title=""/>
                <p></p>
            </div>
        )
    }
}

export default HornedBeast;