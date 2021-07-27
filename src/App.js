import React from 'react';
import Nav from './componets/Nav';
import SearchBox from './componets/SearchBox';
import ListFilmes from './componets/ListFilmes';
import Pagination from './componets/Pagination';


class App extends React.Component {
  constructor() {
    super()
    this.state = {
      movies: [],
      searchTerm: '',
      totalResults: 0,
      currentPage: 1
    }
    this.apiKey=process.env.REACT_APP_API
  }

  handleSubmit = (event) => {
    event.preventDefault();
    
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${this.apiKey}&query=${this.state.searchTerm}`)
    .then(data => data.json())
    .then(data => {
      console.log(data);
      this.setState({ movies: [...data.results], totalResults: data.total_results})
    })
  }

  handleChange= (event) => {
    this.setState({ searchTerm: event.target.value})
    
  }

  nextPage = (pageNumber) => {
      fetch(`https://api.themoviedb.org/3/search/movie?api_key=${this.apiKey}&query=${this.state.searchTerm}&page=${pageNumber}`)
      .then(data => data.json())
      .then(data => {
        
        this.setState({ movies: [...data.results], currentPage: pageNumber})
      })
    
  }

  
  render(){
    const numberPages = Math.floor(this.state.totalResults / 20);
    return (
      <div className="App">
        <Nav/>
        <SearchBox handleSubmit={this.handleSubmit} handleChange={this.handleChange} />
        <ListFilmes  movies={this.state.movies}/>
        { this.state.totalResults > 20  ? <Pagination pages={numberPages} nextPage={this.nextPage} currentPage={this.state.currentPage} /> : ''}
      </div>
    );
  }
}

export default App;
