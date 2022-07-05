import React from 'react';
import SearchBar from './SearchBar';

import unsplash from '../api/unsplash';



class App extends React.Component {

  state = {images : []};

   onSearchSubmit = async (term) =>{
    console.log(term);
    const response = await unsplash
      .get('search/photos', {
        params: { query: term }
      });

    console.log(response.data.results);
    this.setState({ images: response.data.results });
  }


  render() {
    return (
      <div>
        <SearchBar onSubmit={this.onSearchSubmit} />
      </div>
    );
  }
}


export default App;