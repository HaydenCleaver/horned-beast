import {Component} from 'react';
import HornedBeast from './HornedBeast';
import list from '../data.json';
import Favorite from './Favorite';
import BeastList from './BeastList';

class Main extends Component {
    constructor() {
        console.log(list);
        super();
        this.state = {
            currentBeast: null,
            beastList: list,
            
        }
    }
    
    selectFavorite = (beast) => {
        this.setState({currentBeast : beast});
    }

    render(){
        console.log(this.state.currentBeast);
        return(
            <div>
                <Favorite currentBeast={this.state.currentBeast} />
                <BeastList list={this.state.beastList} selectBeast={this.selectFavorite} />
            </div>
        )
    }
}

export default Main;