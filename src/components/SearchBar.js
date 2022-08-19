import React from 'react';

export default
class SearchBar extends React.Component{

  constructor(props){
    super(props);
    this.state = {term: ''};
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  render(){
    return(
      <div className='ui segment search-bar'>
          <form onSubmit = {this.onFormSubmit} className='ui form'>
            <div className='field'>
              <label name='search-bar' >Video Search</label>
              <input 
                type='text' 
                name='search-bar' 
                id='search-bar'
                value={this.state.term}
                onChange={e=>this.setState({term: e.target.value})}
                ref={this.inputRef}
              />
            </div>
          </form>
        </div>
    );
  }

  onFormSubmit(e){
    e.preventDefault();
    this.props.apiCreateList(this.state.term);
  }
}