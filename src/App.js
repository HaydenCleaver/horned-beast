import logo from './logo.svg';
import {Component} from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import list from './data.json';
import SelectedBeast from './components/SelectedBeast';


class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      currentBeast : null,
      beastDescription: null,
      beastTitle : null,
      showModal : false,
    }
  }

  handleBeast = (beast) => {
    this.setState({currentBeast: beast.props.image_url, beastDescription: beast.props.description, beastTitle: beast.props.title, showModal: true})
  }

  closeModal = () => {
    this.setState({showModal : false});
  }

  render(){

  return (
      <div className="App">
        <Header />
        <Main 
          beastList ={list} 
          handleBeast={this.handleBeast}/>
        <SelectedBeast 
          beastName = {this.state.beastTitle}
          beastPic = {this.state.currentBeast} 
          beastInfo = {this.state.beastDescription}
          closeModal = {this.closeModal} 
          showStatus = {this.state.showModal}/>
        <Footer />
      </div>
  );

}
}

export default App;
