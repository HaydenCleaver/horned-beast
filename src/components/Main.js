import {Component} from 'react';
import HornedBeast from './HornedBeast';
import list from '../data.json';
import SelectedBeast from './SelectedBeast';

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
        console.log(beast);
        list.forEach(function(element){
            if(beast === element.image_url) {
                this.setState({currentBeast : element});
            }
        })
        console.log(this.state.currentBeast);
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
                <SelectedBeast 
                currentBeast={this.state.currentBeast} />
                
            </div>
        )
    }
}

export default Main;