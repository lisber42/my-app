import React from 'react';
import Nav from './componets/Nav';
import SearchBox from './componets/SearchBox';
import ListFilmes from './componets/ListFilmes';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      movies: [],
      searchTerm: ''
    }
    this.apiKey=process.env.REACT_APP_API
  }

  handleSubmit = (event) => {
    event.preventDefault();
    
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${this.apiKey}&query=${this.state.searchTerm}`)
    .then(data => data.json())
    .then(data => {
      console.log(data);
      this.setState({ movies: [...data.results]})
    })
  }

  handleChange= (event) => {
    this.setState({ searchTerm: event.target.value})
    
  }

  render(){
    return (
      <div className="App">
        <Nav/>
        <SearchBox handleSubmit={this.handleSubmit} handleChange={this.handleChange} />
        <ListFilmes movies={this.state.movies}/>
      </div>
    );
  }
}

export default App;
