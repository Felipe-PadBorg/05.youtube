import './vide-panel.css'
import React from 'react';
import youtube from '../api/youtube';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';


export default
class App extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      list: [],
      selectedItem: {}
    }
    this.apiCreateList = this.apiCreateList.bind(this);
    this.populateSelectedItem = this.populateSelectedItem.bind(this);
  }

  render(){
    return(
      <div className='ui container'>
        < SearchBar apiCreateList = {this.apiCreateList} />
        <div className='ui grid'>
          <div className='ui row'>
            <div className='eleven wide column'>
              < VideoDetail selectedVideo = {this.state.selectedItem} />
            </div>
            <div className='five wide column'>
              < VideoList 
                videoList = {this.state.list} 
                populateSelectedItem = {this.populateSelectedItem}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }

  async apiCreateList(term){

    const response = await youtube.get(`?q=${term}`);
    const list = response.data.items;
    
    this.setState({
      list: [],
      selectedItem: list[0]
    });
    
    for(let item of list){
      this.setState(state=>{
        const list = state.list.concat(item);
        return {
          list
        }
      });
    }
  }

  populateSelectedItem(item){
    this.setState({selectedItem: item})
  }

  componentDidMount(){
    this.apiCreateList('welcome')
  }

}
