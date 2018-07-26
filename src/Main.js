import React, { Component } from 'react';
import axios from 'axios';

class Main extends Component {
  constructor() {
    super()
    this.state = {
      title: '',
      year: '',
      director: '',
      plot: ''
    }
    this.onSubmit = this.onSubmit.bind(this)
  }

  onSubmit(e) {
    e.preventDefault()
    let title = e.target.elements.title.value
    axios({
      method:'get',
      url:'http://www.omdbapi.com/?apikey=47e9ee21&t='+title,
      responseType:'json'
    })
    .then((response) => {
      console.log(response.data.title)
      this.setState({
        title: response.data.Title,
        year: response.data.Year,
        director: response.data.Director,
        plot: response.data.Plot
      })
      console.log(this.state)
    });
  }

  render() {
    return(
      <div>
      <h1>Search for Movie Data!</h1>
        <form onSubmit = {this.onSubmit}>
          <input type = 'text' placeholder = 'Movie Title' name = 'title'/>
          <input type = 'submit' placeholder = 'Search'/>
        </form>

        <div>
          <strong>Title: </strong>{this.state.title}<br/>
          <strong>Year: </strong>{this.state.year}<br/>
          <strong>Director: </strong>{this.state.director}<br/>
          <strong>Plot: </strong>{this.state.plot}<br/>
        </div>
      </div>
    )

  }
}

export default Main
