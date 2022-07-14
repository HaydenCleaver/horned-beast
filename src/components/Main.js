import {Component} from 'react';
import HornedBeast from './HornedBeast';
import list from '../data.json';
import Favorite from './Favorite';

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
                {this.state.beastList.map(beast =>
                    <HornedBeast 
                    title={beast.title} 
                    image_url={beast.image_url}
                    description={beast.description}
                    selectBeast={this.selectFavorite} 
                    />

                    )}
                <Favorite currentBeast={this.state.currentBeast} />
                
            </div>
        )
    }
}

export default Main;