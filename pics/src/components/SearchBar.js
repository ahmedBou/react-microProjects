import React from 'react';


// const SearchBar = () => {
//   var [car, setCar] = useState('');
//   return (
//     <form>
//       <label htmlFor='location'>
//         Location
//         <input id='location' value={car} placeholder='Car'
//                onChange={(e) => {
//                  return setCar(e.target.value);
//                }}
//         />
//       </label>
//       {car}
//     </form>
//   );
// };


class SearchBar extends React.Component {
  state = {"term": ""}

  onFormSubmit= e => {
    e.preventDefault();

    this.props.onSubmit(this.state.term);
  }

  render() {
    return (
      <div className="ui segment">


      <form className="ui form"  onSubmit={this.onFormSubmit}>
        <div className="field">
          <label htmlFor='car'>
            Search
            <input id='location' placeholder='Car' type = "text" value={this.state.term}
                   onChange={e => this.setState({term : e.target.value})}
            />
          </label>
        </div>
      </form>
      </div>
    );
  }
}

export default SearchBar;