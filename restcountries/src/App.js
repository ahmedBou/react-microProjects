import React, { useEffect, useState } from 'react';

const url = 'https://restcountries.com/v3.1/all';

function App() {

  const [countries, setCountries] = useState([]);

  const [filteredData, setFilteredData] = useState([]);

  const [search, setSearch] = useState('');

  const [showCountry, setShowCountry] = useState(false);

  console.log(countries);

  useEffect(() => {
    const fetchCountries = async () => {
      const response = await fetch(url);
      const countries = await response.json();
      // countries.forEach((item)=>{ item = {...item, show: false, id: Math.random()}})
      setCountries(countries);
    };
    fetchCountries();
  }, []);


  const handleSearch = e => {
    const word = e.target.value;
    setSearch(word);
    const newFilter = countries.filter(country =>
      country.name.common.toLowerCase().includes(search.toLowerCase()));
    if (word === '') {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  const manyMatch = () => {

    if (filteredData.length > 10) {
      console.log(' first filtered data', filteredData.length);
      return (
        <div>To many matches, specify another filter</div>
      );
    }

    if (filteredData.length > 1 && filteredData.length <= 10) {
      console.log(' second filtered data', filteredData.length);
      return (
        <div>
          {
            filteredData.map((country) => {
              return (
                <div key={country.name.common}>
                  {country.name.common}

                  <button onClick={()=>{setShowCountry(!showCountry)}}>show</button>
                  {showCountry &&
                    <div>
                      {
                        filteredData.map((country, index) => {

                          return (

                            <div key={index}>
                              <h1>{country.name.common}</h1>
                              <p>capital {country.capital}</p>
                              <p>area {country.area}</p>

                              <h3>languages</h3>
                              <ul>
                                {Object.values(country.languages).map(lang => <li>{lang}</li>)}
                              </ul>

                              <img src={country.flags.png} alt='' />
                            </div>
                          )
                        })
                      }
                    </div>
                  }
                </div>
              );
            })
          }
        </div>
      );
    }


    if (filteredData.length > 0 && filteredData.length <= 1) {
      console.log(' third filtered data', filteredData.length);
      return(
        <div>
          {
            filteredData.map((country) => {
              return (
                <div key={country.name.common}>
                  <h1>{country.name.common}</h1>
                  <p>capital {country.capital}</p>
                  <p>area {country.area}</p>

                  <h3>languages</h3>
                  <ul>
                    {Object.values(country.languages).map(lang => <li>{lang}</li>)}
                  </ul>

                  <img src={country.flags.png} alt='' />
                </div>
              )
            })
          }
        </div>
      )
    }

  }

  return (
  <div>
    find countries <input value={search} onChange={handleSearch} />
    <br />

    {manyMatch()}
  </div>
  )
}

export default App;
