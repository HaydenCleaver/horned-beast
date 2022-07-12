import {Component} from 'react';
import HornedBeast from './HornedBeast';

class Main extends Component {

    render(){
        return(
            <div>
                <HornedBeast />
                <HornedBeast />
            </div>
        )
    }
}

export default Main;